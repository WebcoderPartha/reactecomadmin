<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\Slider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Intervention\Image\Facades\Image;

class SliderController extends Controller
{
    public function __construct(){
        return $this->middleware('auth:admin-api');
    }

    public function getAllSlider(){

        $slider = Slider::orderByDesc('id')->get();
        return Response::json($slider, 200);

    }

    public function createSlider(Request $request){

        if ($request->slider_image){

            $position = strpos($request->slider_image, ';');
            $sub = substr($request->slider_image, 0, $position);
            $extension = explode('/', $sub)[1];
            $sliderName = time().'.'.$extension;
            $location = 'backend/slider/';
            $slider_image = $location.$sliderName;
            Image::make($request->slider_image)->resize(1580,560)->save(public_path($slider_image));

            $slider = new Slider();
            $slider->slider_image = $slider_image;
            $slider->save();

            return Response::json([
                'success' => 'Slider created successfully'
            ]);

        }

    }

    public function editSlider($id){
        $slider = Slider::where('id', $id)->first();
        return Response::json($slider,200);
    }

    public function updateSlider(Request $request, $id){

        if ($request->newImage){
            $position = strpos($request->newImage, ';');
            $sub = substr($request->newImage, 0, $position);
            $extension = explode('/', $sub)[1];
            $imageName = time().'.'.$extension;
            $location = 'backend/slider/';
            $slider_image = $location.$imageName;
            Image::make($request->newImage)->resize(1580,560)->save(public_path($slider_image));

            $slider = Slider::where('id', $id)->first();
            $oldImage = $slider->slider_image;

            if (file_exists($oldImage)){
                unlink(public_path($oldImage));
                $slider->slider_image = $slider_image;
                $slider->save();
                return Response::json([
                    'success' => 'Slider updated successfully'
                ]);
            }else{

                $slider->slider_image = $slider_image;
                $slider->save();
                return Response::json([
                    'success' => 'Slider updated successfully'
                ]);
            }
        }else{

            $slider = Slider::where('id', $id)->first();
            $oldImage = $slider->slider_image;
            $slider->slider_image = $oldImage;
            $slider->save();
            return Response::json([
                'success' => 'Slider updated successfully'
            ]);

        }

    }

    public function destroySlider($id){

        $slider = Slider::where('id', $id)->first();
        $oldImage = $slider->slider_image;
        if (!empty($oldImage)){

            unlink(public_path($oldImage));
            $slider = $slider::where('id', $id)->first();
            $slider->delete();
            return Response::json([
                'success' => 'Slider removed successfully'
            ]);

        }else{

            $slider = $slider::where('id', $id)->first();
            $slider->delete();
            return Response::json([
                'success' => 'Slider removed successfully'
            ]);

        }

    }

}
