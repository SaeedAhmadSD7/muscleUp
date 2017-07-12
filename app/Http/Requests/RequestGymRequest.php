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
            'num_branches'=>'integer',
            'country'=>'required',
            'city'=>'required|max:50',
            'dial_code'=>'integer',
            'phone_number'=>'integer',
            'address'=>'required|max:255'
        ];
    }
    public function messages()
    {
        return [
            'name.unqiue' => 'Gym name already in use, Please use a different one.',
            'name.required' => 'Gym name is required',
            'num_branches.required' => 'Number of branches should be at least 1.',
            'num_branches.max' => 'Number of branches must not exceed 100.',
            'email.unqiue' => 'Email address already in use. Please use a different one.',
            'country.required' => "Country is required.",
            'city.required' => 'City is required.',
            'city.max'=> 'City must not exceed 50 characters.',
            'dial_code.required'=> 'Cannot get your Country Dialing Code.',
            'phone_number.required'=> 'Phone number is requierd.',
            'phone_number.max'=> 'Phone number should not exceed 15 digits.',
            'address.required'=> 'Address is requried.',
            'address.max'=> 'Address must not exceed 255 characters.',
        ];
    }
}
