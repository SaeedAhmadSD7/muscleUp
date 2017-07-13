<?php

use Illuminate\Database\Seeder;
use App\Models\Country;

class CountriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('countries')->delete();
        $Country_Instance = new Country();
        $countries = $Country_Instance->getList();

        foreach ($countries as $country)    {
            DB::table('countries')->insert(array(
                'code'=> $country['code'],
                'name'=>$country['name'],
                'dial_code'=>$country['dial_code'],
            ));
        }

    }
}
