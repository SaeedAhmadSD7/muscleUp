<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RequestGymRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'=>'required|max:128|unique:gym_requests|unique:gym',
            'email'=>'required|email|unique:gym_requests|unique:users',
            'num_branches'=>'integer|max:100',
            'country'=>'required',
            'city'=>'required|max:50',
            'dial_code'=>'integer',
            'phone_number'=>'required|numeric|digits_between:1,15',
            'address'=>'required|max:255'
        ];
    }
    public function messages()
    {
        return [
//            'name.unqiue' => 'Gym name already in use, Please use a different one.',
//            'num_branches.required' => 'Number of branches should be at least 1.',
//            'email.unqiue' => 'Email address already in use. Please use a different one.',
//            'country.required' => "Country is required.",
//            'city.max'=> 'City must not exceed 50 characters.',
//            'dial_code.required'=> 'Cannot get your Country Dialing Code.',
//            'phone_number.required'=> 'Phone number is requierd.',
//            'address.max'=> 'Address must not exceed 255 characters.',
        ];
    }
}
