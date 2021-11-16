<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Category;
use App\Models\Subcategory;
use Illuminate\Support\Facades\Response;

class ProductController extends Controller
{
    
	public function getRemarkProudcts($remark){

		$featured = Product::where('remark', $remark)->orderByDesc('id')->limit(6)->get();

		return response()->json($featured, 200);

	}


	public function getCategoryByAllProduct($category_slug){

		$category = Category::with('products')->where('slug', $category_slug)->orderByDesc('id')->get();
		return response()->json($category, 200);

	}


	public function getSubCategoryByAllProduct($category_slug, $subcategory_slug){

		$category = Category::where('slug', $category_slug)->first();
		$category_id = $category->id;

		$subcatProduct = Subcategory::with('products')->where('category_id', $category_id)->where('slug', $subcategory_slug)->orderByDesc('id')->get();
		return response()->json($subcatProduct, 200);

	}

	public function singleProductPage($product_slug){

		$product = Product::with(['subcategory', 'category'])->where('slug', $product_slug)->first();
		return response()->json($product, 200);
		
	}

	public function suggestProduct($suggest){

		$suggestProuduct = Subcategory::with('products')->where('subcategory_name', $suggest)->orderByDesc('id')->limit(6)->get();
		return Response::json($suggestProuduct, 200);

	}




	

}
