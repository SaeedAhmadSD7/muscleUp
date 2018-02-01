<?php
namespace App\Http\Requests;
use Illuminate\Foundation\Http\FormRequest;
class BranchUpdateRequest extends FormRequest
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
            'branch_name' => 'required | string | max:60',
            'country' => 'required | max:60',
            'city' => 'required | max:60',
            'branch_phone' => ' numeric ',
            'latitude' => ' numeric ',
            'longitude' => ' numeric ',
            'branch_address' => ' required | string | max:160',
            'exp_description' => ' string',
            'exp_years' => ' numeric ',
        ];
    }
    /**
     * @return mixed
     */
    public function messages()
    {
        return [
            'branch_name.required' => 'Please enter "branch Name"',
            'branch_name.string' => 'Please enter a Valid Branch Name',
            'country.required' => 'Country is Required.Please select a Country',
            'city.required' => 'City is Required.Please select a City',
            'branch_phone.numeric' => 'Entered Phone Number is not valid Phone Number.Please enter a Correct Phone Number',
            'latitude.numeric' => 'Entered Latitude is not valid.',
            'longitude.numeric' => 'Entered Longitude is not valid.',
            'branch_address.required' => 'Please enter "Branch Address"',
            'branch_address.string' => 'Entered address is not in right format.Please enter an address with right type of data',
            'exp_description.string' => 'Entered Description is not in right format.Please enter a Description with right type of data',
            'exp_years.numeric' => 'Entered Experience Year is not numeric value.Please enter a Numeric Amount',
        ];
    }
}