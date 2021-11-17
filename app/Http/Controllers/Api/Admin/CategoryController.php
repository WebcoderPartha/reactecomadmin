<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;

class CategoryController extends Controller
{

    public function __construct(){
        return $this->middleware('auth:admin-api');
    }

    public function getAllCategory(){

        $category = Category::orderByDesc('id')->get();
        return Response::json($category, 200);

    }

    public function storeCategory(Request $request){

        if ($request->category_image){

            $position = strpos($request->category_image, ';');
            $sub = substr($request->category_image, 0, $position);
            $extension = explode('/', $sub)[1];
            $imageName = time().'.'.$extension;
            $location = 'backend/category/';
            $category_image = $location.$imageName;
            Image::make($request->category_image)->resize(80,60)->save(public_path($category_image));

            $category = new Category();
            $category->category_name = $request->category_name;
            $category->slug = Str::of(Str::lower($request->category_name))->slug('-');
            $category->category_image = $category_image;
            $category->save();
            return Response::json([
                'success' => 'Category created successfully'
            ]);

        }else{

            $category = new Category();
            $category->category_name = $request->category_name;
            $category->slug = Str::of(Str::lower($request->category_name))->slug('-');
            $category->save();
            return Response::json([
                'success' => 'Category created successfully'
            ]);

        }

    }

    public function editCategory($id){
        $category = Category::where('id', $id)->first();
        return Response::json($category,200);
    }

    public function updateCategory(Request $request, $id){

        if ($request->newImage){

            $position = strpos($request->newImage, ';');
            $sub = substr($request->newImage, 0, $position);
            $extension = explode('/', $sub)[1];
            $imageName = time().'.'.$extension;
            $location = 'backend/category/';
            $category_image = $location.$imageName;
            Image::make($request->newImage)->resize(80,60)->save(public_path($category_image));

            $getCategory = Category::where('id', $id)->first();
            $oldImage = $getCategory->category_image;

            if (file_exists($oldImage)){
                unlink(public_path($oldImage));
                $getCategory->category_name = $request->category_name;
                $getCategory->slug = Str::of(Str::lower($request->category_name))->slug('-');
                $getCategory->category_image = $category_image;
                $getCategory->save();
                return Response::json([
                    'success' => 'Category updated successfully'
                ]);
            }else{

                $getCategory->category_name = $request->category_name;
                $getCategory->slug = Str::of(Str::lower($request->category_name))->slug('-');
                $getCategory->category_image = $category_image;
                $getCategory->save();
                return Response::json([
                    'success' => 'Category updated successfully'
                ]);
            }


        }else{

            $getCategory = Category::where('id', $id)->first();
            $oldImage = $getCategory->category_name;
            $getCategory->category_name = $request->category_name;
            $getCategory->slug = Str::of(Str::lower($request->category_name))->slug('-');
            $getCategory->category_image = $oldImage;
            $getCategory->save();
            return Response::json([
                'success' => 'Category updated successfully'
            ]);

        }

    }

    public function destroyCategory($id){
        $category = Category::where('id', $id)->first();
        $oldImage = $category->category_image;
        if (file_exists($oldImage)){

            unlink(public_path($oldImage));
            $category = Category::where('id', $id)->first();
            $category->delete();
            return Response::json([
                'success' => 'Category removed successfully'
            ]);

        }else{

            $category = Category::where('id', $id)->first();
            $category->delete();
            return Response::json([
                'success' => 'Category removed successfully'
            ]);

        }
    }

}
