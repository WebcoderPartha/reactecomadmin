<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Mail\AdminForgetPassword;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Response;

class AdminForgetController extends Controller
{

    public function forgetPassword(Request $request){

        $email = $request->email;
        $existEmail = Admin::where('email', $email)->first();

        if ($existEmail){

            $validEmail = $existEmail->email;
            $token = random_int(100000, 999999);
            $storeData = DB::table('password_resets')->insert([
                'email' => $validEmail,
                'token' => $token
            ]);


              if ($storeData){
                  Mail::to($validEmail)->send(new AdminForgetPassword($token));
                  return Response::json([
                      'success' => 'Forget link sent to your email. Please check your email'
                  ], 200);
              }


        }else{
            return Response::json([
                'message' => 'Email is invalid!'
            ], 401);
        }

    }

    public function resetPassword(Request $request){

        $email = $request->email;
        $token = $request->token;
        $password = $request->password;
        $confirm_password = $request->confirm_password;
        $validToken = DB::table('password_resets')->where('token', $token)->first();
        $validEmail = DB::table('password_resets')->where('email', $email)->first();
        if ($validToken){

            if ($validEmail){

                if ($password === $confirm_password){

                        $user = Admin::where('email', $request->email)->first();
                        $user->password = Hash::make($password);
                        $save = $user->save();

                        if ($save){
                            DB::table('password_resets')->where('email', $email)->where('token', $token)->delete();
                            return Response::json([
                                'success' => 'Password has been changed'
                            ], 200);
                        }

                }else{
                    return Response::json([
                        'message' => 'Confirm Password Not Matched!'
                    ], 401);
                }

            }else{
                return Response::json([
                    'message' => 'Email is invalid!'
                ], 401);
            }

        }else{
            return Response::json([
                'message' => 'Token is invalid!'
            ], 401);
        }

    }


}
