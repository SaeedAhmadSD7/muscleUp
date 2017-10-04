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
        DB::table('users')->truncate();
        DB::table('users')->insert([
            'first_name' => 'Admin',
            'last_name' => 'Admin',
            'dob'=>'2017-09-02',
            'dial_code'=>'+92',
            'phone_number'=>'1234567',
            'email' => 'admin@example.com',
            'password' => bcrypt('badeo520'),
            'type'=>'admin',
            'remember_token'=>'0',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);

        DB::table('users')->insert([
            'first_name' => 'Gym',
            'last_name' => 'Gym',
            'dob'=>'2017-09-02',
            'dial_code'=>'+92',
            'phone_number'=>'1234567',
            'email' => 'gym@example.com',
            'password' => bcrypt('asdf1234'),
            'type'=>'gym',
            'remember_token'=>'0',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);

        DB::table('users')->insert([
            'first_name' => 'Trainee',
            'last_name' => 'Trainee',
            'dob'=>'2017-09-02',
            'dial_code'=>'+92',
            'phone_number'=>'1234567',
            'email' => 'trainee@example.com',
            'password' => bcrypt('asdf1234'),
            'type'=>'trainee',
            'remember_token'=>'0',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);

        DB::table('users')->insert([
            'first_name' => 'Employee',
            'last_name' => 'Employee',
            'dob'=>'2017-09-02',
            'dial_code'=>'+92',
            'phone_number'=>'1234567',
            'email' => 'employee@example.com',
            'password' => bcrypt('asdf1234'),
            'type'=>'employee',
            'remember_token'=>'0',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);
    }
}
