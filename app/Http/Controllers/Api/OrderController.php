<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\Order;
use App\Models\OrderDetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class OrderController extends Controller
{

    public function ConfirmOrder(Request $request){

        $invoice_no         =  random_int(100000, 999999);
        $customer_name      = $request->customer_name;
        $customer_email     = $request->customer_email;
        $customer_city      = $request->customer_city;
        $customer_address   = $request->customer_address;
        $payment_method     = $request->payment_method;
        $total_qty          = $request->total_qty;
        $total_price        = $request->total_price;
        $date               = date('d-m-Y');
        $month              = date('F');
        $year               = date('Y');

        $user_id = $request->user_id;

        $getOrderID = Order::insertGetId([
            'invoice_no'        => "EVL".$invoice_no,
            'customer_name'     => $customer_name,
            'customer_email'    => $customer_email,
            'customer_city'     => $customer_city,
            'customer_address'  => $customer_address,
            'payment_method'    => $payment_method,
            'total_qty'         => $total_qty,
            'total_price'       => $total_price,
            'date'              => $date,
            'month'             => $month,
            'year'              => $year,
            'status'            => 0
        ]);



 
        $getCartProducts = Cart::where('user_id', $user_id)->get();
        if ($getOrderID){
    
            foreach ($getCartProducts as $product){

                $orderDetails = OrderDetail::insert([
                    'order_id' => $getOrderID,
                    'product_id' => $product->product_id,
                    'invoice_no' => "EVL".$invoice_no,
                    'product_name' => $product->product_name,
                    'product_image' => $product->product_image,
                    'color' => $product->color,
                    'size' => $product->size,
                    'qty' => $product->qty,
                    'unit_price' => $product->unit_price,
                    'sub_total' => $product->sub_total
                ]);

                if ($orderDetails) {
                    
                    $delete = Cart::where('id', $product->id)->delete();
                    
                }
                
            }
        }

        return Response::json([
                    'success' => 'Congrats! Your order has been placed'
                ]);
        
        

    }


    public function getOrderList($customer_email){
        $order = Order::with("orderDetail")->where('customer_email', $customer_email)->orderByDesc('id')->get();
        return Response::json($order, 200);
    }

    public function getInvoiceByOrderList($invoice_no){
        $order = Order::with("orderDetail")->where('invoice_no', $invoice_no)->get();
        return Response::json($order, 200);
    }


}
