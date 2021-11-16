<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Notification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class NotificationController extends Controller
{

    public function getAllNotification(){
        $notification = Notification::orderByDesc('id')->get();
        return Response::json($notification, 200);
    }

}
