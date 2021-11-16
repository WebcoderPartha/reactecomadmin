<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class SearchController extends Controller
{

    public function getProductSearch(){
        $key = \Request::get('s');
        $product = Product::with('category', 'subcategory')->where('product_name', 'LIKE', "%{$key}%")->orWhere('brand', 'LIKE', "%{$key}%")->get();

        return Response::json($product, 200);

    }

}
