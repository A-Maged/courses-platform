<?php

// test
Route::get('/test', 'testController');

// auth
Route::post('/register', 'AuthController@register');
Route::post('/login', 'AuthController@login');
Route::post('/logout', 'AuthController@logout');

// courses
Route::resource('/courses', 'CoursesController')->except(['create', 'edit']);

// serve react index.html
Route::fallback(function () {return view('SPA');});
