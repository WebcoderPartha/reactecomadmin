<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Mail\ForgetPassword;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Response;

class UserAuthController extends Controller

{
    public function __construct(){
        return $this->middleware('auth:api')->except(['userRegister', 'userLogin', 'forgetPassword', 'resetPassword']);
    }

    public function userRegister(Request $request){

        // $validateData = $request->validate([
        //     'name' => 'required|string',
        //     'email' => 'required|string|unique:users',
        //     'password' => 'required|min:5|max:12',
        //     'password_confirmation' => 'required'

        // ]);

        $email = $request->email;
        $password = $request->password;
        $confirmPass = $request->password_confirmation;

        if (!User::where('email', $email)->first()){

            if ($password === $confirmPass){
                $user = User::create([
                   'name' => $request->name,
                   'email' => $request->email,
                   'password' => Hash::make($request->password)
                ]);

                $token = $user->createToken('app')->accessToken;

                return Response::json([
                    'token' => $token,
                    'user' => $user,
                    'success' => 'Register Successfully'
                ],200);

            }else{
                return Response::json(['message' => 'Confirm password not matched!'], 401);
            }

        }else{
            return Response::json(['message' => 'Email address already registered!'], 401);
        }
    }

    public function userLogin(Request $request){

        if (User::where('email', $request->email)->first()){

            $user = User::where('email', $request->email)->first();
            $matchPass = $user->password;

            if (Hash::check($request->password, $matchPass)){


                if (Auth::attempt($request->only(['email', 'password']))){

                    $authUser = Auth::user();
                    $token = $authUser->createToken('app')->accessToken;
                    return Response::json([
                        'success' => 'Login Successfully',
                        'token' => $token,
                        'user' => $authUser
                    ], 200);
                }

            }else{
                return Response::json(['message' => 'Invalid Password!'], 401);
            }
        }else{
            return Response::json(['message' => 'Invalid Email!'], 401);
        }

    }

    public function forgetPassword(Request $request){

        $validateData = $request->validate([
            'email' => 'required'
        ]);

        $email = User::where('email', $request->email)->first();

        if ($email){
            $hasTokenEmail = DB::table('password_resets')->where('email', $request->email)->first();


            if (!$hasTokenEmail){
                $token = random_int(100000, 999999);
                $email = $request->email;
                $save = DB::table('password_resets')->insert([
                    'token' => $token,
                    'email' => $email
                ]);

                Mail::to($email)->send(new ForgetPassword($token));
                return Response::json(['success' => 'Forget password link sent to your email'], 200);


            }else{

                return Response::json(['message' => 'Already sent forget request!'], 401);

            }


        }else{
            return Response::json(['message' => 'Invalid Email!'], 401);
        }

    }

    public function resetPassword(Request $request){

        // $validateData = $request->validate([
        //     'email' => 'required',
        //     'token' => 'required',
        //     'password' => 'required'
        // ]);

        $tokenEmail = DB::table('password_resets')->where('email', $request->email)->first();
        $token = DB::table('password_resets')->where('token', $request->token)->first();

        if ($token){

            if ($tokenEmail){
                $password = $request->password;
                $conPass = $request->password_confirmation;

                if ($password === $conPass){

                    $user = User::where('email', $request->email)->first();
                    $user->password = Hash::make($request->password);

                    $reset = $user->save();

                    if ($reset) {

                        DB::table('password_resets')->where('email', $request->email)->delete();
                        $token= $user->createToken('app')->accessToken;
                        return Response::json([
                            'success' => 'Password has been reset successfully',
                            'token' => $token,
                            'user' => $user
                        ], 200);

                    }

                    

                }else{
                    return Response::json(['message' => 'Confirm password not matched!'], 401);
                }
            }else{
                return Response::json(['message' => 'Invalid Email!'], 401);
            }

        }else{

            return Response::json(['message' => 'Invalid Token!'], 401);

        }


    }

    public function authUser(){

        $user = Auth::user();
        return Response::json($user, 200);

    }

}
