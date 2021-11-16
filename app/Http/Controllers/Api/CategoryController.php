<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    
    public function getallCategory(){
    	$category = Category::with('subcategory')->get();

    	return response()->json($category);
    }

}
