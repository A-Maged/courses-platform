<?php

//   NOTE: remove this , it's just for testing
// sleep(1);

// test
Route::get('/test', 'testController');

// auth
Route::get('/is_authenticated', 'AuthController@isAuthenticated')->name('auth.is_authenticated');
Route::post('/login', 'AuthController@login')->name('auth.login');
Route::post('/logout', 'AuthController@logout')->name('auth.logout');
Route::post('/register', 'AuthController@register')->name('auth.register');

// courses
Route::resource('/courses', 'CoursesController')->except(['create', 'edit']);

// videos
Route::resource('/videos', 'VideosController')->except(['index', 'create', 'edit']);
Route::get('/videos/stream/{id}', 'VideosController@streamVideo')->name('video.getStream');

// serve react index.html
Route::fallback(function () {return view('SPA');});
