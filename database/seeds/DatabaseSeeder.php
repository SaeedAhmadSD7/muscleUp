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
        $this->call(GymSeeder::class);
        $this->command->info('Gym Seeded!');
        $this->call(BranchSeeder::class);
        $this->command->info('Branch Seeded!');
        $this->call(CountriesSeeder::class);
        $this->command->info('Countries Seeded!');
        $this->call(UserSeeder::class);
        $this->command->info('UserSeeded!');
        $this->call(EmployeeSeeder::class);
        $this->command->info('UserSeeded!');
        $this->call(ExerciseSeeder::class);
        $this->command->info('ExerciseSeeded!');
        $this->call(FoodSeeder::class);
        $this->command->info('ExerciseSeeded!');
        $this->call(MealSeeder::class);
        $this->command->info('ExerciseSeeded!');
        $this->call(DaySeeder::class);
        $this->command->info('DaySeeder!');

    }
}
