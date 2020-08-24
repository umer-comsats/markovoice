<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('page-login');
});

Route::get('/dashboard', function () {
    return view('dashboard');
});

Route::get('/add-question', function () {
    return view('add-question');
});

Route::get('/question-list', function () {
    return view('question-list');
});

Route::get('/edit-question', function () {
    return view('edit-question');
});

Route::get('/interaction-list', function () {
    return view('interaction-list');
});

Route::get('/page-user', function () {
    return view('page-user');
});

Route::get('/unanswered-list', function () {
    return view('unanswered-list');
});

Route::get('/visitor-list', function () {
    return view('visitor-list');
});
