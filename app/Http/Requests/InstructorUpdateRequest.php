<?php
namespace App\Http\Requests;
use Illuminate\Foundation\Http\FormRequest;
class InstructorUpdateRequest extends FormRequest
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
            'first_name' => 'required | string | max:60',
            'last_name' => 'required | string  | max:60',
            'dob' => 'required ',
            'country' => 'required | max:60',
            'city' => 'required | max:60',
            'joining_date' => 'required',
            'previous_salary' => 'required | numeric',
            'address' => ' string | max:160',
            'exp_description' => ' string',
            'exp_years' => ' numeric ',
            'phone_number' => ' numeric ',
        ];
    }
    /**
     * @return mixed
     */
    public function messages()
    {
        return [
            'first_name.required' => 'First Name is Required',
            'first_name.string' => 'Please enter a Valid First Name',
            'dob.required' => 'Date of birth is Required.Please enter a date-of-birth',
            'country.required' => 'Country is Required.Please select a Country',
            'city.required' => 'City is Required.Please select a City',
            'joining_date.required' => 'Joining Date is Required.Please select a Joining Date',
            'previous_salary.required' => 'Previous Salary is Required.Please select a Previous Salary',
            'previous_salary.numeric' => 'Entered Previous salary is not numeric value.Please enter a Numeric Amount',
            'address.string' => 'Entered address is not in right format.Please enter an address with right type of data',
            'exp_description.string' => 'Entered Experience description is not in right format.Please enter a description with right type of data',
            'exp_years.numeric' => 'Entered Experience year value is not numeric value.Please enter a Numeric value',
            'phone_number.numeric' => 'Entered Phone Number is not valid Phone Number.Please enter a Correct Phone Number',
        ];
    }
}