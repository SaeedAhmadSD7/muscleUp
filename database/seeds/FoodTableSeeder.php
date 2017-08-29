<?php

use Illuminate\Database\Seeder;
use App\Models\Food;

class FoodTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Food::truncate();
        Food::insert([
            ['name' => 'Egg','unit' => 'Qty','unit_value' => '1','calories' => '121','deleted_at'=>date('Y-m-d'),'created_at'=>date('Y-m-d'),'updated_at'=>date('Y-m-d')],
            ['name' => 'Juice','unit' => 'Oz','unit_value' => '300','calories' => '532','deleted_at'=>date('Y-m-d'),'created_at'=>date('Y-m-d'),'updated_at'=>date('Y-m-d')],
            ['name' => 'Pizza','unit' => 'Qty','unit_value' => '2','calories' => '455','deleted_at'=>date('Y-m-d'),'created_at'=>date('Y-m-d'),'updated_at'=>date('Y-m-d')],
            ['name' => 'Shawarma','unit' => 'Grams','unit_value' => '500','calories' => '124','deleted_at'=>date('Y-m-d'),'created_at'=>date('Y-m-d'),'updated_at'=>date('Y-m-d')],
        ]);

    }
}
