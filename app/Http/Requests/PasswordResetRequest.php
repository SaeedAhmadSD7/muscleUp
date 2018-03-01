<?php
namespace App\Http\Requests;
use Illuminate\Foundation\Http\FormRequest;
class PasswordResetRequest extends FormRequest
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
//            'password' => 'required |min:6| max:60',
            'password' => 'required|confirmed|min:6 | max:60',
        ];
    }
    /**
     * @return mixed
     */
    public function messages()
    {
        return [
            'password.required' => 'Please enter "Password"',
            'password.confirmed' => 'Re-Enter Password does not match with the field Password',
            'password.min' => 'Minimum Length of Password Should be 6',
            'password.max' => 'Maximum Length of Password Should be 60',

        ];
    }
}