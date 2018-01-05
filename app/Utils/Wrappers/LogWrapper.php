<?php
/**
 * Created by PhpStorm.
 * User: mrashid
 * Date: 12/23/2017
 * Time: 7:17 PM
 */

namespace App\Utils\Wrappers;


class LogWrapper
{
    /**
     * @param $msg
     * @return bool
     */
    public function logInfo($msg){
        return \log::info();
    }
}