<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\VisitorController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\SiteInfoController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\SliderController;
use App\Http\Controllers\Api\NotificationController;
use App\Http\Controllers\Api\SearchController;
use App\Http\Controllers\Api\UserAuthController;
use App\Http\Controllers\Api\ReviewController;
use App\Http\Controllers\Api\CartController;
use App\Http\Controllers\Api\FavoriteController;
use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\Api\UserProfileController;


//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});


// Frontend APIs
Route::get('/getvisitor', [VisitorController::class, 'getVisitorInfo']);
Route::post('/sendmessage', [ContactController::class, 'storeContact']);
Route::get('/getsiteinfo', [SiteInfoController::class, 'getSiteInfo']);

Route::get('/getallcategory', [CategoryController::class, 'getallCategory']);

Route::get('/getremarkproduct/{remark}', [ProductController::class, 'getRemarkProudcts']);

Route::get('/getcategorybyproduct/{category_slug}', [ProductController::class, 'getCategoryByAllProduct']);

Route::get('/getproduct/{category_slug}/{subcategory_slug}', [ProductController::class, 'getSubCategoryByAllProduct']);


Route::get('/getsingleproduct/{product_slug}', [ProductController::class, 'singleProductPage']);



Route::get('/getslider', [SliderController::class, 'getSlider']);

Route::get('/getnotice', [NotificationController::class, 'getAllNotification']);

Route::get('/search', [SearchController::class,'getProductSearch']);


// Ecommerce Users
Route::post('/register', [UserAuthController::class, 'userRegister']);
Route::post('/login', [UserAuthController::class, 'userLogin']);
Route::post('/forget', [UserAuthController::class, 'forgetPassword']);
Route::post('/reset', [UserAuthController::class, 'resetPassword']);
Route::get('/getuser', [UserAuthController::class, 'authUser']);


Route::post('/updatepassword/{user_id}', [UserProfileController::class, 'updatePassword']);
Route::post('/updateprofile/{user_id}', [UserProfileController::class, 'updateProfile']);


Route::get('/suggestproduct/{suggest}', [ProductController::class, 'suggestProduct']);

Route::get('/getreviews/{productID}', [ReviewController::class, 'getReviewByProduct']);
Route::post('/reviewstore', [ReviewController::class, 'reviewStore']);

// Add To Cart
Route::post('/addtocart', [CartController::class, 'addToCart']);
// Cart Item Count
Route::get('/getcartcount/{user_id}', [CartController::class, 'getCartItemCount']);
// Get Cart Item For Cart Page
Route::get('/getcartitem/{userid}', [CartController::class, 'getCartItems']);
// Cart Remove
Route::delete('/removecart/{userid}/{productid}', [CartController::class, 'removeCartItem']);
Route::get('/increment/{userid}/{cartid}', [CartController::class, 'increment']);
Route::get('/decrement/{userid}/{cartid}', [CartController::class, 'decrement']);
Route::get('/checkout/{userid}/', [CartController::class, 'checkOut']);

// Favourite
Route::post('addfavourite', [FavoriteController::class, 'FavouriteAdd']);
Route::get('getfavorite/{user_id}', [FavoriteController::class, 'getFavouriteList']);
Route::get('removefavourte/{user_id}/{product_id}', [FavoriteController::class, 'removeFavourite']);
Route::get('favouritecount/{user_id}', [FavoriteController::class, 'countFavourite']);

Route::post('/placeorder', [OrderController::class,'ConfirmOrder']);
Route::get('/getorders/{customer_email}', [OrderController::class,'getOrderList']);
Route::get('/getinvorders/{invoice_no}', [OrderController::class,'getInvoiceByOrderList']);
