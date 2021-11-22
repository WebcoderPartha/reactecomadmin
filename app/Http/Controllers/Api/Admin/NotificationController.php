<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\Notification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class NotificationController extends Controller
{

    public function __construct(){
        $this->middleware('auth:admin-api');
    }

    public function getAllNotification(){
        $noti = Notification::orderByDesc('id')->get();
        return Response::json($noti);
    }

    public function createNotification(Request $request){

        $notification = new Notification();
        $notification->title = $request->title;
        $notification->description = $request->description;
        $notification->date = date('d-m-Y');
        $notification->save();

        return Response::json([
            'success' => 'Notification created successfully'
        ], 200);
    }

    public function editNotification($id){

        $noti = Notification::find($id);
        return Response::json($noti, 200);

    }

    public function updateNotification(Request $request, $id){

        $noti = Notification::where('id', $id)->first();
        $noti->title = $request->title;
        $noti->description = $request->description;
        $noti->date = date('d-m-Y');
        $noti->save();

        return Response::json([
            'success' => 'Notification updated successfully'
        ], 200);

    }

    public function destroyNotification($id){
        $noti = Notification::where('id', $id)->first();
        $noti->delete();
        return Response::json([
            'success' => 'Notification deleted successfully'
        ], 200);
    }


}
