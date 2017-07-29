<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(CountriesSeeder::class);
        $this->command->info('ExerciseSeeded!');
        $this->call(UserSeeder::class);
        $this->command->info('ExerciseSeeded!');
        $this->call(ExerciseSeeder::class);
        $this->command->info('ExerciseSeeded!');

    }
}
