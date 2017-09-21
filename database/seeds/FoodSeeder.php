<?php

use Illuminate\Database\Seeder;
use App\Models\Food;

class FoodSeeder extends Seeder
{
    public function run()
    {
        Food::truncate();

        DB::table('foods')->insert(
            array(
                array(
                    'title' => 'Egg',
                    'unit' => 'Qty',
                    'unit_value' => '1',
                    'calories' => '121',
                    'deleted_at'=>date('Y-m-d'),
                    'created_at'=>date('Y-m-d'),
                    'updated_at'=>date('Y-m-d')),
                array(
                    'title' => 'Juice',
                    'unit' => 'Oz',
                    'unit_value' => '300',
                    'calories' => '532',
                    'deleted_at'=>date('Y-m-d'),
                    'created_at'=>date('Y-m-d'),
                    'updated_at'=>date('Y-m-d')),
                array(
                    'title' => 'Pizza',
                    'unit' => 'Qty',
                    'unit_value' => '1',
                    'calories' => '455',
                    'deleted_at'=>date('Y-m-d'),
                    'created_at'=>date('Y-m-d'),
                    'updated_at'=>date('Y-m-d')),
                array(
                    'title' => 'Shawarma',
                    'unit' => 'Qty',
                    'unit_value' => '1',
                    'calories' => '124',
                    'deleted_at'=>date('Y-m-d'),
                    'created_at'=>date('Y-m-d'),
                    'updated_at'=>date('Y-m-d'))
            )
        );

    }
}
