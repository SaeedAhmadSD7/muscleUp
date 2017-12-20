<?php

/**
 * Created by PhpStorm.
 * User: mrashid
 * Date: 12/20/2017
 * Time: 12:47 AM
 */
use Illuminate\Database\Seeder;
use Carbon\Carbon;

class GymSeeder extends Seeder
{
    public function run()
    {
        \App\Models\Gym::truncate();

        DB::table('gyms')->insert(

                [
                [
                    'title' => 'FT Fitness Club',
                    'logo' => 'gym_logo_default.jpg',
                    'website' => 'www.http://example.com',
                    'country'=> 'Pakistan',
                    'city'=> 'Lahore',
                    'address'=> 'E-2 Block, H. No. 2, Johar Town',
                    'phone_number'=> '+924235157203',
                    'opening_time'=> '8:00',
                    'closing_time'=> '23:00',
                    'latitude'=>21.5698,
                    'longitude'=>74666.5698,
                    'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                    'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
                ],
                [
                    'title' => 'Waqas Fitness Club',
                    'logo' => 'gym_logo_default.jpg',
                    'website' => 'www.http://example.com',
                    'country'=> 'Pakistan',
                    'city'=> 'Karachi',
                    'phone_number'=> '+924235157203',
                    'address'=> 'E-2 Block, H. No. 2, Johar Town',
                    'opening_time'=> '8:00',
                    'closing_time'=> '23:00',
                    'latitude'=>21.5698,
                    'longitude'=>74666.5698,
                    'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                    'updated_at' => Carbon::now()->format('Y-m-d H:i:s'),
                ]
        ]);

    }
}