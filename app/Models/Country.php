<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    protected $countries;

    /**
     * Get the countries from the JSON file, if it hasn't already been loaded.
     *
     * @return array
     */
    protected function getCountries()
    {

        //Get the countries from the JSON file
        if (sizeof($this->countries) == 0) {
            $this->countries = json_decode(file_get_contents('./Public/assets/packages/countries/countries.json'), true);

        }

        //Return the countries
        return $this->countries;
    }

    public function getList()
    {
        //Get the countries list
        $countries = $this->getCountries();

        //Return the countries
        return $countries;
    }
}