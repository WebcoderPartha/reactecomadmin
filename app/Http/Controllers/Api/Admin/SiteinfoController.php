<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\SiteInfo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class SiteinfoController extends Controller
{
    public function __construct(){
        return $this->middleware('auth:admin-api');
    }

    public function getSiteInfo(){

        $siteInfo = SiteInfo::find(1);
        return Response::json($siteInfo, 200);

    }

    public function updateSiteInfo(Request $request){

        $siteInfo = SiteInfo::where('id', 1)->first();
        $siteInfo->facebook_link = $request->facebook_link;
        $siteInfo->twitter_link = $request->twitter_link;
        $siteInfo->linkedin_link = $request->linkedin_link;
        $siteInfo->address = $request->address;
        $siteInfo->ios_app_link = $request->ios_app_link;
        $siteInfo->adnroid_app_link = $request->adnroid_app_link;
        $siteInfo->copyright_text = $request->copyright_text;
        $siteInfo->about_page = $request->about_page;
        $siteInfo->company_page = $request->company_page;
        $siteInfo->purchase_page = $request->purchase_page;
        $siteInfo->privacy_page = $request->privacy_page;
        $siteInfo->refund_page = $request->refund_page;
        $siteInfo->save();
        return Response::json([
            'success' => 'Site Info Updated successfully'
        ], 200);

    }


}
