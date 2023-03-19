<?php

use App\Mail\ContactMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/contact', function () {
    try {
        Mail::to(request()->email)
            ->bcc(config('mail.from.address'))
            ->send(new ContactMail);

        return response()->json([
            'message' => 'mail sending successed.'
        ], 200);
    } catch (\Exception $e) {
        dump($e->getMessage());
        return response()->json([
            'message' => 'mail sending failed.'
        ], 500);
    }
});
