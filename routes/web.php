<?php

// test
Route::get('/test', 'testController');

// auth
Route::post('/register', 'AuthController@register')->name('auth.register');
Route::post('/login', 'AuthController@login')->name('auth.login');
Route::post('/logout', 'AuthController@logout')->name('auth.logout');
Route::get('/is_authenticated', 'AuthController@isAuthenticated')->name('auth.is_authenticated');

// courses
Route::resource('/courses', 'CoursesController')->except(['create', 'edit']);

// videos
Route::resource('/videos', 'VideosController')->except(['index', 'create', 'edit']);

// serve react index.html
Route::fallback(function () {return view('SPA');});
