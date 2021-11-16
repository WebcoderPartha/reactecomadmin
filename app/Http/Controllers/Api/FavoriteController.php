<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Favorite;
use App\Models\Product;
use Illuminate\Support\Facades\Response;
use Illuminate\Http\Request;

class FavoriteController extends Controller
{

    public function FavouriteAdd(Request $request){

        $user_id = $request->user_id;
        $product_id = $request->product_id;

        $product = Product::find($product_id);

        $exist_favourite = Favorite::where('user_id', $user_id)->where('product_id', $product_id)->first();

        if (!$exist_favourite){

            $product_name =$product->product_name;
            $regular_price =$product->regular_price;
            $discount_price =$product->discount_price;
            $slug =$product->slug;

            $favourite = new Favorite();
            $favourite->user_id = $user_id;
            $favourite->product_id = $product_id;
            $favourite->product_name = $product_name;
            $favourite->regular_price = $regular_price;
            $favourite->discount_price = $discount_price;
            $favourite->slug = $slug;
            $favourite->save();

            return Response::json([
                'success' => 'Product added to your Favourite List'
            ],200);

        }else{

            return Response::json([
                'success' => 'Product already added Favourite List'
            ],200);

        }


    }

    public function getFavouriteList($user_id){

        $favourite = Favorite::where('user_id', $user_id)->orderByDesc('id')->get();
        return Response::json($favourite,200);

    }

    public function removeFavourite($user_id, $product_id){

        $favourite = Favorite::where('user_id', $user_id)->where('product_id', $product_id)->delete();

        return Response::json([
            'success' => 'Favourite item removed successfully'
        ],200);

    }

    public function countFavourite($user_id){
        $count = Favorite::where('user_id', $user_id)->count();
        return Response::json($count, 200);
    }



}
