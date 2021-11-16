<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Image;

class UserProfileController extends Controller
{	

	public function __construct(){
		return $this->middleware('auth:api');
	}


	public function updatePassword(Request $request, $user_id){

		// $userId = $request->user_id;
		$oldPassword = $request->old_password;
		$newPassword = $request->password;
		$confPassword = $request->confirm_password;

		$getUser = User::where('id', $user_id)->first();
		$OldHashPass = $getUser->password;

		if (Hash::check($oldPassword, $OldHashPass)) {



			if (!Hash::check($newPassword, $OldHashPass)) {
				if ($newPassword === $confPassword) {

					$getUser->password = Hash::make($newPassword);
					$getUser->save();

				
					return Response::json([
					'success' => 'Password updated successfully'
					],200);

				}else{

					return Response::json([
					'message' => 'Confirm password not matched!'
					],401);

				}

			}else{

				return Response::json([
				'message' => 'Old Password & New Password would be not same!'
				],401);

			}
			

		}else{

			return Response::json([
				'message' => 'Old password is invalid!'
			],401);
		}

	}


	public function updateProfile(Request $request, $user_id){

		$getUser = User::where('id', $user_id)->first();

		if ($request->newimage) {
			
			$position = strpos($request->newimage, ';');
			$sub = substr($request->newimage, 0, $position);
			$extension = explode('/', $sub)[1];

			$imageName = time().'.'.$extension;
			$location = 'frontend/profile/';
			$image = $location.$imageName;

			Image::make($request->newimage)->resize('280', 300)->save(public_path($image));

			$oldImage = $getUser->image;

			if (file_exists($oldImage)) {

				unlink(public_path($oldImage));

				$getUser->name = $request->name;
				$getUser->email = $request->email;
				$getUser->image = $image;
				$save = $getUser->save();

				if ($save) {
					$user = User::where('id', $user_id)->first();
					return Response::json([
					'success' => 'Profile updated successfully',
					'user' => $user
					],200);
				}
				

			}else{

				$getUser->name = $request->name;
				$getUser->email = $request->email;
				$getUser->image = $image;
				$save = $getUser->save();
				
				if ($save) {
					$user = User::where('id', $user_id)->first();
					return Response::json([
					'success' => 'Profile updated successfully',
					'user' => $user
					],200);
				}

			}

		}else{

				$oldImage = $getUser->image;
				$getUser->name = $request->name;
				$getUser->email = $request->email;
				$getUser->image = $oldImage;

				$save = $getUser->save();
				if ($save) {
					$user = User::where('id', $user_id)->first();
					return Response::json([
					'success' => 'Profile updated successfully',
					'user' => $user
					],200);
				}


		}

	}

}
