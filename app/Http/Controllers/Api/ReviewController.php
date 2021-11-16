<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Reviews;
use Illuminate\Support\Facades\Response;

class ReviewController extends Controller
{
   
	public function getReviewByProduct($productID){

		$review = Reviews::with('user')->where('product_id', $productID)->orderByDesc('id')->get();
		return Response::json($review, 200);

	}

	public function reviewStore(Request $request){

		$review = new Reviews();
		$review->user_id = $request->user_id;
		$review->product_id = $request->product_id;
		$review->star = $request->star;
		$review->comment = $request->comment;
		$review->save();

		return Response::json([
			'success' => 'Product review done'
		]);

	}

}
