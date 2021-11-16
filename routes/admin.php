<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\Admin\AdminAuthController;

Route::prefix('admin')->group(function (){

    Route::post('/register', [AdminAuthController::class, 'adminRegister']);
    Route::post('/login', [AdminAuthController::class, 'adminLogin']);
    Route::get('/authadmin', [AdminAuthController::class, 'authAdmin']);

});
