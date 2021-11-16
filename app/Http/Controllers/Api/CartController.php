<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class CartController extends Controller
{
    public function addToCart(Request $request){

        $productId = $request->product_id;
        $user_id = $request->user_id;
        $qty = $request->qty;
        $color = $request->color;
        $size = $request->size;

        $getProduct = Product::where('id', $productId)->first();

        $product_name = $getProduct->product_name;
        $product_image = $getProduct->product_image;
        $price = $getProduct->regular_price;
        $discount_price = $getProduct->discount_price;

        // Exist Cart Product
//        $cartProduct = Cart::where('product_id', $productId)->get();

//        if($cartProduct && $color === $cartProduct->color && $size === $cartProduct->size){
        $ColorSize = Cart::where('user_id', $user_id)->where('product_id', $productId)->where('color', $color)->where('size', $size)->first();
        $Color = Cart::where('user_id', $user_id)->where('product_id', $productId)->where('color', $color)->where('size', NULL)->first();

        $Size = Cart::where('user_id', $user_id)->where('product_id', $productId)->where('color', NULL)->where('size', $size)->first();

        if($ColorSize){
            if ($discount_price === NULL) {

                $unit_price = $price;
                $sub_total = $unit_price * $qty;

                $newQty = $ColorSize->qty + $qty;
                $newSubtotal = $ColorSize->sub_total + $sub_total;

                $ColorSize->color = $color;
                $ColorSize->size = $size;
                $ColorSize->qty = $newQty;
                $ColorSize->unit_price = $unit_price;
                $ColorSize->sub_total = $newSubtotal;
                $ColorSize->save();

                return Response::json([
                    'success' => 'Product added to cart'
                ]);


            }else{

                $unit_price = $discount_price;
                $sub_total = $unit_price * $qty;

                $newQty = $ColorSize->qty + $qty;
                $newSubtotal = $ColorSize->sub_total + $sub_total;

                $ColorSize->color = $color;
                $ColorSize->size = $size;
                $ColorSize->qty = $newQty;
                $ColorSize->unit_price = $unit_price;
                $ColorSize->sub_total = $newSubtotal;
                $ColorSize->save();

                return Response::json([
                    'success' => 'Product added to cart'
                ]);


            }
//        }elseif($cartProduct && $color === $cartProduct->color && $cartProduct->size === NULL){
        }elseif($Color){

            if ($discount_price === NULL) {

                $unit_price = $price;
                $sub_total = $unit_price * $qty;

                $newQty =$Color->qty + $qty;
                $newSubtotal = $Color->sub_total + $sub_total;

                $Color->color = $color;
                $Color->size = $size;
                $Color->qty = $newQty;
                $Color->unit_price = $unit_price;
                $Color->sub_total = $newSubtotal;
                $Color->save();

                return Response::json([
                    'success' => 'Product added to cart'
                ]);


            }else{

                $unit_price = $discount_price;
                $sub_total = $unit_price * $qty;

                $newQty =$Color->qty + $qty;
                $newSubtotal = $Color->sub_total + $sub_total;

                $Color->color = $color;
                $Color->size = $size;
                $Color->qty = $newQty;
                $Color->unit_price = $unit_price;
                $Color->sub_total = $newSubtotal;
                $Color->save();

                return Response::json([
                    'success' => 'Product added to cart'
                ]);


            }

        }elseif($Size){

            if ($discount_price === NULL) {

                $unit_price = $price;
                $sub_total = $unit_price * $qty;

                $newQty =$Size->qty + $qty;
                $newSubtotal = $Size->sub_total + $sub_total;

                $Size->color = $color;
                $Size->size = $size;
                $Size->qty = $newQty;
                $Size->unit_price = $unit_price;
                $Size->sub_total = $newSubtotal;
                $Size->save();

                return Response::json([
                    'success' => 'Product added to cart'
                ]);


            }else{

                $unit_price = $discount_price;
                $sub_total = $unit_price * $qty;

                $newQty =$Size->qty + $qty;
                $newSubtotal = $Size->sub_total + $sub_total;

                $Size->color = $color;
                $Size->size = $size;
                $Size->qty = $newQty;
                $Size->unit_price = $unit_price;
                $Size->sub_total = $newSubtotal;
                $Size->save();

                return Response::json([
                    'success' => 'Product added to cart'
                ]);


            }

        }else{

            if ($discount_price === NULL) {

                $unit_price = $price;
                $sub_total = $unit_price * $qty;

                $cart = new Cart();
                $cart->product_id = $productId;
                $cart->user_id = $user_id;
                $cart->product_name = $product_name;
                $cart->product_image = $product_image;
                $cart->color = $color;
                $cart->size = $size;
                $cart->qty = $qty;
                $cart->unit_price = $unit_price;
                $cart->sub_total = $sub_total;
                $cart->save();

                return Response::json([
                    'success' => 'Product added to cart'
                ]);


            }else{

                $unit_price = $discount_price;
                $sub_total = $unit_price * $qty;

                $cart = new Cart();
                $cart->product_id = $productId;
                $cart->user_id = $user_id;
                $cart->product_name = $product_name;
                $cart->product_image = $product_image;
                $cart->color = $color;
                $cart->size = $size;
                $cart->qty = $qty;
                $cart->unit_price = $unit_price;
                $cart->sub_total = $sub_total;
                $cart->save();

                return Response::json([
                    'success' => 'Product added to cart'
                ]);


            }
        }


    }

    public function getCartItemCount($user_id){

        $cart = Cart::where('user_id', $user_id)->count();
        return Response::json($cart, 200);

    }

    public function getCartItems($userid){
        $cart = Cart::where('user_id', $userid)->get();
        return Response::json($cart, 200);
    }

    public function removeCartItem($userid, $productid){
        $cart = Cart::where('user_id', $userid)->where('product_id', $productid)->first();
        $cart->delete();
        return Response::json([
            'success' => 'Cart item has been removed successfully'
        ]);
    }

    public function increment($userid, $cartid){

        $cart = Cart::where('user_id', $userid)->where('id', $cartid)->first();

        $newQty = $cart->qty + 1;
        $newSubtotal = $cart->unit_price * $newQty;

        $cart->qty = $newQty;
        $cart->sub_total = $newSubtotal;
        $cart->save();
    
        return Response::json([
            'success' => 'Quantity increment successfully'
        ]);

    
    }

    public function decrement($userid, $cartid){

        $cart = Cart::where('user_id', $userid)->where('id', $cartid)->first();

        $newQty = $cart->qty - 1;
        $newSubtotal = $cart->unit_price * $newQty;

        $cart->qty = $newQty;
        $cart->sub_total = $newSubtotal;
        $cart->save();
    
        return Response::json([
            'success' => 'Quantity decrement successfully'
        ]);

    
    }

    public function checkOut($userid){

        $quntity = Cart::where('user_id', $userid)->sum('qty');
        $total_price = Cart::where('user_id', $userid)->sum('sub_total');

        return Response::json([
            'total_qty' => $quntity,
            'total_price' => $total_price
        ]);

    }


}
