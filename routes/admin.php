<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\Admin\AdminAuthController;
use App\Http\Controllers\Api\Admin\AdminForgetController;
use App\Http\Controllers\Api\Admin\CategoryController;
use App\Http\Controllers\Api\Admin\SliderController;
use App\Http\Controllers\Api\Admin\SiteinfoController;
use App\Http\Controllers\Api\Admin\NotificationController;

Route::prefix('admin')->group(function (){

    Route::post('/register', [AdminAuthController::class, 'adminRegister']);
    Route::post('/login', [AdminAuthController::class, 'adminLogin']);
    Route::get('/authadmin', [AdminAuthController::class, 'authAdmin']);


    Route::post('/forget', [AdminForgetController::class, 'forgetPassword']);
    Route::post('/reset', [AdminForgetController::class, 'resetPassword']);

    Route::get('/getallcat', [CategoryController::class, 'getAllCategory']);
    Route::post('/storecat', [CategoryController::class, 'storeCategory']);
    Route::get('/catedit/{id}', [CategoryController::class, 'editCategory']);
    Route::post('/catupdate/{id}', [CategoryController::class, 'updateCategory']);
    Route::get('/delcat/{id}', [CategoryController::class, 'destroyCategory']);

    Route::get('/getallslider', [SliderController::class, 'getAllSlider']);
    Route::post('/createslider', [SliderController::class, 'createSlider']);
    Route::get('/slider/{id}', [SliderController::class, 'editSlider']);
    Route::post('/sliderupdate/{id}', [SliderController::class, 'updateSlider']);
    Route::get('/delslider/{id}', [SliderController::class, 'destroySlider']);


    Route::get('/getsiteinfo', [SiteinfoController::class, 'getSiteInfo']);
    Route::post('/updatesiteinfo', [SiteinfoController::class, 'updateSiteInfo']);

    Route::get('/getnotification', [NotificationController::class, 'getAllNotification']);
    Route::post('/storenoti', [NotificationController::class, 'createNotification']);
    Route::get('/notiedit/{id}', [NotificationController::class, 'editNotification']);
    Route::post('/notiupdate/{id}', [NotificationController::class, 'updateNotification']);
    Route::delete('/notidelete/{id}', [NotificationController::class, 'destroyNotification']);

});
