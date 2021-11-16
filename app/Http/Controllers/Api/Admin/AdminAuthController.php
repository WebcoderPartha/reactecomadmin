<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Response;

class AdminAuthController extends Controller
{

    public function __construct()
    {
        return $this->middleware('auth:admin-api')->except(['adminLogin', 'adminRegister']);
    }

    public function adminRegister(Request $request){

        // Input fills ['name', 'email', 'password', 'confirm_password']

        if (!Admin::where('email', $request->email)->first()){

            if ($request->password === $request->confirm_password){

                $admin = Admin::create([
                   'name' => $request->name,
                   'email' => $request->email,
                   'password' => Hash::make($request->password)
                ]);

                $token = $admin->createToken('admin')->accessToken;
                return Response::json([
                    'success' => 'Registered successfully',
                    'token' => $token,
                    'user' => $admin
                ],200);


            }else{
                return Response::json([
                    'message' => 'Confirm password not matched!'
                ],401);
            }

        }else{
            return Response::json([
                'message' => 'Already have an account!'
            ],401);
        }


    }

    public function adminLogin(Request $request){


        $AuthEmail = Admin::where('email', $request->email)->first();

        if ($AuthEmail){

            $getPassword = Admin::where('email', $request->email)->first();
            $oldPassword = $getPassword->password;

            if (Hash::check($request->password, $oldPassword)){

                $credentials = $request->only(['email', 'password']);
                if (Auth::attempt($credentials)){

                    $user = Auth::user();
                    $token = $user->createToken('admin')->accessToken;
                    return Response::json([
                        'success' => 'Logged in successfully',
                        'token' => $token,
                        'user' => $user
                    ],200);

                }

            }else{
                return Response::json([
                    'message' => 'Password is invalid!'
                ],401);
            }

        }else{
            return Response::json([
                'message' => 'Email is invalid!'
            ],401);
        }

    }

    public function authAdmin(){
        $auth = Auth::user();
        return Response::json([
            'user' => $auth
        ],200);
    }

}
