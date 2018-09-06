<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
 */

//  for testing
$factory->defineAs(App\User::class, 'admin', function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => 'admin@coursesplatform.com',
        'password' => Hash::make('pass'), // secret
        'isPremium' => true,
        'isAdmin' => true,
        'remember_token' => str_random(10),
    ];
});

$factory->defineAs(App\User::class, 'user', function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => Hash::make('pass'), // secret
        'remember_token' => str_random(10),
    ];
});
