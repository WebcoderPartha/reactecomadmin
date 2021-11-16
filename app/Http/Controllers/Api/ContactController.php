<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{
    
	public function storeContact(Request $request){

		$ValidateData = $request->validate([
			'name' => 'required',
			'email' => 'required',
			'message' => 'required'
		]);

		$contact = new Contact();
		$contact->name = $request->name;
		$contact->email = $request->email;
		$contact->message = $request->message;
		$contact->save();

		return response()->json(['success' => 'Contact inserted successfully']);

	}

}


