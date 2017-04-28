<?php

use Illuminate\Database\Seeder;
use App\Models\User;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('Trainee')->delete();
        User ::create([
            'name'=>'wajahat',
            'email'=>'w@gmail.com',
            'password'=> bcrypt('wajahat')
        ]);
    }
}
