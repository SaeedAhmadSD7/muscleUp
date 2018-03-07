<?php
namespace App\Http\Requests;
use Illuminate\Foundation\Http\FormRequest;
class WbsDetailsRequest extends FormRequest
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
            'set' => 'required |numeric',
            'rep' =>  'required |numeric',
            'rest' =>  'required | numeric',

        ];
    }
    /**
     * @return mixed
     */
    public function messages()
    {
        return [
            'set.required' => 'Please enter "Number  of Sets"',
            'set.numeric' => 'Entered "Sets" value is not numeric value.Please enter a Numeric value',
            'rep.required' => 'Please enter "Number of Reps"',
            'rep.numeric' => 'Entered "Reps" value is not numeric value.Please enter a Numeric value',
            'rest.required' => 'Please enter "Rest per Set"',
            'rest.numeric' => 'Entered "Rest" value is not numeric value.Please enter a Numeric value',


        ];
    }

}