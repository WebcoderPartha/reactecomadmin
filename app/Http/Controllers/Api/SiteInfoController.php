<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\SiteInfo;

class SiteInfoController extends Controller
{
    
	public function getSiteInfo(){
		
		$siteInfo = SiteInfo::find(1);
		return response()->json($siteInfo);

	}

}
