<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSiteInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('site_infos', function (Blueprint $table) {
            $table->id();
            $table->string('facebook_link')->nullable();
            $table->string('twitter_link')->nullable();
            $table->string('linkedin_link')->nullable();
            $table->text('address')->nullable();
            $table->string('ios_app_link')->nullable();
            $table->string('adnroid_app_link')->nullable();
            $table->string('copyright_text')->nullable();
            $table->text('about_page', 50000);
            $table->text('company_page', 50000);
            $table->text('purchase_page', 50000);
            $table->text('privacy_page', 50000);
            $table->text('refund_page', 50000);
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
        Schema::dropIfExists('site_infos');
    }
}
