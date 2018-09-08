<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use \App\User;

class AuthController extends Controller
{
    //  public function __construct()
    //  {}

    public function isAuthenticated()
    {
        $status = Auth::check() ? 'success' : 'failed';

        return response()->json([
            'status' => $status,
        ]);
    }

    public function register()
    {
        // NOTE: do validation here

        $newUser = new User([
            'name' => request()->name,
            'email' => request()->email,
            'password' => Hash::make(request()->password),
        ]);

        $newUser->save();

        return response()->json([
            'status' => 'success',
            'msg' => 'user is registered',
            'data' => $newUser->only(['id', 'name', 'email']),
        ]);
    }

    public function login()
    {
        $credentials = request()->only('email', 'password');

        if (Auth::attempt($credentials)) {
            return response()->json([
                'status' => 'success',
                'msg' => 'logged in',
                'data' => Auth::user()->only(['id', 'name', 'email']),
            ]);
        }

        return response()->json([
            'status' => 'failed',
            'msg' => 'wrong credentials',
        ]);
    }

    public function logout()
    {
        Auth::logout();

        return response()->json([
            'status' => 'success',
            'msg' => 'logged out',
        ]);
    }

    //  NOTE: implement reset password

}
