<?php
/**
 * Created by PhpStorm.
 * User: mrashid
 * Date: 12/20/2017
 * Time: 5:42 AM
 */

namespace App\Utils\Globals;


class UserType
{
    const SUPER_ADMIN = 'SuperAdmin';
    const ADMIN = 'Admin';
    const EMPLOYEE = 'Employee';
    const TRAINEE = 'Trainee';
    const INSTRUCTOR = 'Instructor';

    public static $userTypes = [
        self::SUPER_ADMIN=>self::SUPER_ADMIN,
        self::ADMIN=>self::ADMIN,
        self::EMPLOYEE=>self::EMPLOYEE,
        self::INSTRUCTOR=>self::INSTRUCTOR,
        self::TRAINEE=>self::TRAINEE,
    ];


}