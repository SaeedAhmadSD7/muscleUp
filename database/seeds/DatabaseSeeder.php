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
        $this->command->info('CountriesSeeded!');
//        $this->call(UserSeeder::class);
//        $this->command->info('UserSeeded!');
        $this->call(ExerciseSeeder::class);
        $this->command->info('ExerciseSeeded!');
        $this->call(FoodTableSeeder::class);
        $this->command->info('ExerciseSeeded!');
        $this->call(MealTableSeeder::class);
        $this->command->info('ExerciseSeeded!');
//        $this->call(DaySeeder::class);
//        $this->command->info('DaySeeder!');

    }
}
