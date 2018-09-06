<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use \App\User;

class AuthController extends Controller
{
    //  public function __construct()
    //  {}

    public function register()
    {
        // NOTE: do validation here

        $newUser = new User([
            'name' => request()->name,
            'email' => request()->email,
            'password' => Hash::make(request()->password),
        ]);

        // NOTE:  if successfull send success
        $newUser->save();

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
