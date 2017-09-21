<?php

use Illuminate\Database\Seeder;
use App\Models\Meal;
class MealSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Meal::truncate();
        DB::table('meals')->insert(
            array(
                array(
                    'title' => 'BreakFast',
                    'created_at'=>date('Y-m-d'),
                    'updated_at'=>date('Y-m-d')),
                array(
                    'title' => 'Lunch',
                    'created_at'=>date('Y-m-d'),
                    'updated_at'=>date('Y-m-d')),
                array(
                    'title' => 'Dinner',
                    'created_at'=>date('Y-m-d'),
                    'updated_at'=>date('Y-m-d')),
                array(
                    'title' => 'Snacks',
                    'created_at'=>date('Y-m-d'),
                    'updated_at'=>date('Y-m-d')),
                array(
                    'title' => 'Hi-Tea',
                    'created_at'=>date('Y-m-d'),
                    'updated_at'=>date('Y-m-d')),
                array(
                    'title' => 'Supper',
                    'created_at'=>date('Y-m-d'),
                    'updated_at'=>date('Y-m-d'))
            )
        );
    }
}
