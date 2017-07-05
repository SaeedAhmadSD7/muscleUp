<?php
/**
 * Created by PhpStorm.
 * User: soft
 * Date: 4/25/2017
 * Time: 3:31 PM
 */

namespace App\Utils\Globals;


class AppGlobal
{
   

    const RECORD_OFFSET = 0;
    const RECORD_LIMIT = 100;



    public static function gymPackages(){
        $gym_package     = \App\Models\Package::all();
        return $gym_package;
    }


}