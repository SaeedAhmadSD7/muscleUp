<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'email' => 'admin@example.com',
            'password' => bcrypt('badeo520'),
            'user-type'=>'admin',
            'remember_token'=>'0',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);

        DB::table('users')->insert([
            'email' => 'gym@example.com',
            'password' => bcrypt('asdf123'),
            'user-type'=>'gym',
            'remember_token'=>'0',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);

        DB::table('users')->insert([
            'email' => 'trainee@example.com',
            'password' => bcrypt('asdf123'),
            'user-type'=>'trainee',
            'remember_token'=>'0',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);

        DB::table('users')->insert([
            'email' => 'instructor@example.com',
            'password' => bcrypt('asdf123'),
            'user-type'=>'instructor',
            'remember_token'=>'0',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);
    }
}
