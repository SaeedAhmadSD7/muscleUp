<?php

use Illuminate\Database\Seeder;
use App\Models\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('trainees')->delete();
        trainee ::create(array(
            'name'=>'wajahat',
            'email'=>'w@gmail.com',
            'password'=> bcrypt('wajahat')
        ));
    }
}
