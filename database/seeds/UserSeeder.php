<?php

use Illuminate\Database\Seeder;
use App\Models\User;
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
        User::truncate();

        /***
         * Admin
         */

        DB::table('users')->insert([
            'first_name' => 'Admin',
            'last_name' => 'Admin',
            'dob'=>'2017-09-02',
            'dial_code'=>'+92',
            'phone_number'=>'1234567',
            'email' => 'admin@example.com',
            'password' => bcrypt('asdf1234'),
            'type'=>'admin',
            'address'=>'addressed',
            'remember_token'=>'0',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);

        /***
         * Gym
         */
        DB::table('users')->insert([
            'first_name' => 'Gym',
            'last_name' => 'Gym',
            'dob'=>'2017-09-02',
            'dial_code'=>'+92',
            'phone_number'=>'1234567',
            'email' => 'gym@example.com',
            'password' => bcrypt('asdf1234'),
            'type'=>'gym',
            'address'=>'addressed',
            'remember_token'=>'0',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);
        DB::table('gyms')->insert([
            'user_id' => '2',
            'title' => 'Crossfit',
            'email' => 'crossfit@example.com',
            'country'=>'pakistan',
            'city'=>'lahore',
            'dial_code'=>'+92',
            'phone_number'=>'1234567',
            'open_time'=> 2017-01-01,
            'close_time'=> 2017-01-01,
            'latitude'=>'1.00',
            'longitude'=>'1.00',
            'address'=>'addressed',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);


        /***
         * Employee
         */
        DB::table('users')->insert([
            'first_name' => 'Employee',
            'last_name' => 'Employee',
            'dob'=>'2017-09-02',
            'dial_code'=>'+92',
            'phone_number'=>'1234567',
            'email' => 'employee@example.com',
            'password' => bcrypt('asdf1234'),
            'type'=>'employee',
            'address'=>'addressed',
            'remember_token'=>'0',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);
        DB::table('employees')->insert([
            'user_id' => '3',
            'joining_date' => '2017:09:02',
            'quit_date' => '2017:09:03',
            'previous_salary' => '2000',
            'joining_salary' => '255000',
            'exp_years' => 3,
            'exp_description' => 'work ',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);


        /***
         * Trainee
         */
        DB::table('users')->insert([
            'first_name' => 'Trainee',
            'last_name' => 'Trainee',
            'dob'=>'2017-09-02',
            'dial_code'=>'+92',
            'phone_number'=>'1234567',
            'email' => 'trainee@example.com',
            'password' => bcrypt('asdf1234'),
            'type'=>'trainee',
            'address'=>'addressed',
            'remember_token'=>'0',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);
        DB::table('trainees')->insert([
            'user_id' => '4',
            'weight' => '50.0',
            'height' => '5.7',
            'bmi' => '5',
            'bfp' => '5.00',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);
    }
}
