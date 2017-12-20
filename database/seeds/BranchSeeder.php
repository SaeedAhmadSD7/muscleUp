<?php

/**
 * Created by PhpStorm.
 * User: mrashid
 * Date: 12/20/2017
 * Time: 1:10 AM
 */
class BranchSeeder
{
    public function run()
    {
        \App\Models\Branch::truncate();

        \Illuminate\Support\Facades\DB::table('branches')->insert(
            array(
                array(
                    'gym_id' => 1,
                    'title' => 'FT Fitness Club Lahore',
                    'country'=> 'Pakistan',
                    'city'=> 'Lahore',
                    'address'=> 'E-2 Block, H. No. 2, Johar Town',
                    'phone_number'=> '+924235157203',
                    'opening_time'=> '8:00',
                    'closing_time'=> '23:00',
                    'latitude'=> '‎31.582045',
                    'longitude'=> '74.329376',
                    'is_main'=> 'Yes',
                    ),
                array(
                    'gym_id' => 1,
                    'title' => 'FT Fitness Club Faisalabad',
                    'country'=> 'Pakistan',
                    'city'=> 'Faisalabad',
                    'address'=> 'C Block, H. No. 222, Modal Town',
                    'phone_number'=> '+924235154303',
                    'opening_time'=> '8:00',
                    'closing_time'=> '23:00',
                    'latitude'=> '‎21.582045',
                    'longitude'=> '64.329376',
                    'is_main'=> 'No',
                    ),
                array(
                    'gym_id' => 1,
                    'title' => 'FT Fitness Club Kashmir',
                    'country'=> 'Pakistan',
                    'city'=> 'Kashmir',
                    'address'=> 'C Block, H. No. 222, Modal Town',
                    'phone_number'=> '+924235154303',
                    'opening_time'=> '8:00',
                    'closing_time'=> '23:00',
                    'latitude'=> '‎21.582045',
                    'longitude'=> '64.329376',
                    'is_main'=> 'No',
                    ),
            )
        );

    }
}