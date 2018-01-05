<?php
/**
 * Created by PhpStorm.
 * User: soft
 * Date: 4/25/2017
 * Time: 3:33 PM
 */

namespace App\Utils;

use App\Utils\Globals\AppConstant;

class AppUtil
{
    /**
     * getProfileUploadPath
     * @return string
     */
    public static function getProfileUploadPath()
    {
        return resource_path('assets/uploads/'. AppConstant::PROFILE_PHOTO_DIR.'/');
    }
}