<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\Admin\AdminAuthController;
use App\Http\Controllers\Api\Admin\AdminForgetController;
use App\Http\Controllers\Api\Admin\CategoryController;

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

});
