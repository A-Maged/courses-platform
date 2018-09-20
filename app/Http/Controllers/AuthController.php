<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;
use \App\User;

class AuthController extends Controller
{
    //  public function __construct()
    //  {}

    public function isAuthenticated()
    {
        if (Auth::check()) {
            //   NOTE: remove this , it's just for testing
            // sleep(3);

            return response()->json([
                'status' => 'success',
                'msg' => 'logged in',
                'data' => Auth::user()->only(['id', 'name', 'email']),
            ]);
        }

        return response()->json([
            'status' => 'failed',
            'msg' => 'you are not logged in',
        ], Response::HTTP_UNAUTHORIZED);
    }

    public function register()
    {
        // NOTE: do validation here

        if (Auth::check()) {
            return response()->json([
                'status' => 'failed',
                'msg' => 'already registered',
            ]);
        }

        $newUser = new User([
            'name' => request()->name,
            'email' => request()->email,
            'password' => Hash::make(request()->password),
        ]);

        $newUser->save();

        Auth::login($newUser);

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
        ], Response::HTTP_UNAUTHORIZED);
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
