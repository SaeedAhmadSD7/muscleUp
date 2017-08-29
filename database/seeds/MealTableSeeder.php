<?php

use Illuminate\Database\Seeder;
use App\Models\Meal;
class MealTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Meal::truncate();
        Meal::insert([
            ['name' => 'BreakFast','created_at'=>date('Y-m-d'),'updated_at'=>date('Y-m-d')],
            ['name' => 'Lunch','created_at'=>date('Y-m-d'),'updated_at'=>date('Y-m-d')],
            ['name' => 'Dinner','created_at'=>date('Y-m-d'),'updated_at'=>date('Y-m-d')],
            ['name' => 'Snacks','created_at'=>date('Y-m-d'),'updated_at'=>date('Y-m-d')],
            ['name' => 'Hi-Tea','created_at'=>date('Y-m-d'),'updated_at'=>date('Y-m-d')],
            ['name' => 'Supper','created_at'=>date('Y-m-d'),'updated_at'=>date('Y-m-d')],
        ]);
    }
}
