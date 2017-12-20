<?php

use Illuminate\Database\Seeder;
use App\Models\User;
use Carbon\Carbon;
use \App\Utils\Globals\UserType;

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
         * User- Super Admin
         */

        DB::table('users')->insert([
            'type' => UserType::SUPER_ADMIN,
            'first_name' => 'Fabulous',
            'last_name' => 'Technologies',
            'dob'=>'2017-09-02',
            'phone_number'=>'+924236655487',
            'email' => 'sadmin@example.com',
            'password' => bcrypt('asdf1234'),
            'country'=>'Pakistan',
            'city'=>'Lahore',
            'address'=>'Shalimar Town',
            'remember_token'=>'0',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);

        /***
         * User-Admin
         */

        DB::table('users')->insert([
            'gym_id' => 1,
            'branch_id' => 1,
            'type' => UserType::ADMIN,
            'first_name' => 'Ali',
            'last_name' => 'Khan',
            'dob'=>'2017-09-02',
            'phone_number'=>'+924236655487',
            'email' => 'admin@example.com',
            'password' => bcrypt('asdf1234'),
            'country'=>'Pakistan',
            'city'=>'Lahore',
            'address'=>'Shalimar Town',
            'remember_token'=>'0',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);

        /***
         * User-Trainee
         */
        DB::table('users')->insert([
            'gym_id' => 1,
            'branch_id' => 1,
            'type' => UserType::TRAINEE,
            'first_name' => 'Kashif',
            'last_name' => 'Khan',
            'dob'=>'2017-09-02',
            'phone_number'=>'+924237755487',
            'email' => 'trainee1@example.com',
            'password' => bcrypt('asdf1234'),
            'country'=>'Pakistan',
            'city'=>'Lahore',
            'address'=>'Kaji Town',
            'remember_token'=>'0',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);

        /***
         * User-Trainee
         */
        DB::table('users')->insert([
            'gym_id' => 1,
            'branch_id' => 1,
            'type' => UserType::TRAINEE,
            'first_name' => 'Rizwan',
            'last_name' => 'Khan',
            'dob'=>'2017-09-02',
            'phone_number'=>'+924237759487',
            'email' => 'trainee1@example.com',
            'password' => bcrypt('asdf1234'),
            'country'=>'Pakistan',
            'city'=>'Lahore',
            'address'=>'Rola Town',
            'remember_token'=>'0',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);

        /***
         * User-Employee
         */
        DB::table('users')->insert([
            'gym_id' => 1,
            'branch_id' => 1,
            'type' => UserType::EMPLOYEE,
            'first_name' => 'Temoor',
            'last_name' => 'Khan',
            'dob'=>'2017-09-02',
            'phone_number'=>'+924238759487',
            'email' => 'employee@example.com',
            'password' => bcrypt('asdf1234'),
            'country'=>'Pakistan',
            'city'=>'Lahore',
            'address'=>'Teja Town',
            'remember_token'=>'0',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);

        $this->addDummyEmployees();
        $this->addDummyTrainees();
    }

    private function addDummyEmployees(){
        DB::table('employees')->insert([
            'branch_id' => 1,
            'user_id' => 5,
            'joining_date' => '2016-09-02',
            'previous_salary'=>'15000',
            'joining_salary'=>'20000',
            'exp_years' => '5 years',
            'exp_description' => 'khskd lsdsldk bimpasds hksjksdj jksdsd. shdsdhsjdh sdsd sdsd sd sd ',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);
    }

    private function addDummyTrainees(){
        DB::table('trainees')->insert([
            'branch_id' => 1,
            'user_id' => 3,
            'code' => 123,
            'height' => 182.88,//cm
            'joining_date' => '2016-09-02',
            'admission_fee'=>'15000',
            'initial_fee'=>'4000',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);

        DB::table('trainees')->insert([
            'branch_id' => 1,
            'user_id' => 4,
            'code' => 123,
            'height' => 158.88,//cm
            'joining_date' => '2016-09-02',
            'admission_fee'=>'1000',
            'initial_fee'=>'3000',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);
    }
}
