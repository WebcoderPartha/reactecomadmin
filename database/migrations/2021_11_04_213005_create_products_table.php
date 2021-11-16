<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->integer('category_id');
            $table->integer('subcategory_id')->nullable();
            $table->string('product_name');
            $table->string('short_desc')->nullable();
            $table->string('long_desc')->nullable();
            $table->string('regular_price');
            $table->string('discount_price')->nullable();
            $table->string('brand')->nullable();
            $table->string('product_code')->nullable();
            $table->string('remark')->nullable();
            $table->string('product_image')->nullable();
            $table->string('star')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
