<?php
/**
 * Created by PhpStorm.
 * User: soft
 * Date: 4/25/2017
 * Time: 3:46 PM
 */

namespace App\Utils\Globals;


class EmployeeType
{
    const ADMIN = 'Admin';
    const EMPLOYEE = 'Employee';

    public static $types = [
      self::ADMIN => self::ADMIN,
      self::EMPLOYEE => self::EMPLOYEE
    ];
}