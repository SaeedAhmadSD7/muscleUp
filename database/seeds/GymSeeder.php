<?php

/**
 * Created by PhpStorm.
 * User: mrashid
 * Date: 12/20/2017
 * Time: 12:47 AM
 */
class GymSeeder
{
    public function run()
    {
        \App\Models\Gym::truncate();

        \Illuminate\Support\Facades\DB::table('gyms')->insert(
            array(
                array(
                'title' => 'FT Fitness Club',
                'logo' => 'gym_logo_default.jpg',
                'website' => 'www.http://example.com',
                'country'=> 'Pakistan',
                'city'=> 'Lahore',
                'address'=> 'E-2 Block, H. No. 2, Johar Town',
                'phone_number'=> '+924235157203',
                'opening_time'=> '8:00',
                'closing_time'=> '23:00',
                'latitude'=> '‎31.582045',
                'longitude'=> '74.329376',),
                array(
                    'title' => 'Waqas Fitness Club',
                    'logo' => 'gym_logo_default.jpg',
                    'website' => 'www.http://example.com',
                    'country'=> 'Pakistan',
                    'city'=> 'Karachi',
                    'phone_number'=> '+924235157203',
                    'opening_time'=> '8:00',
                    'closing_time'=> '23:00',
                    'latitude'=> '‎25.582045',
                    'longitude'=> '72.329376',),
        ));

    }
}