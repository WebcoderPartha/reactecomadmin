<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Visitor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class VisitorController extends Controller
{

    public function getVisitorInfo(){


        $ip_address = $_SERVER['REMOTE_ADDR'];
        $time = date('h:i:sa');
        $date = date('d-m-Y');

        if (!Visitor::where('ip_address', $ip_address)->first()) {

            $visitor = new Visitor();
            $visitor->ip_address = $ip_address;
            $visitor->visit_time = $time;
            $visitor->visit_date = $date;
            $visitor->save();

            return Response::json([
                'success' => 'Visitor Inserted success'
            ]);

        }else{
            return Response::json([
                'success' => 'Already Visited'
            ]);
        }

        

    }



}
