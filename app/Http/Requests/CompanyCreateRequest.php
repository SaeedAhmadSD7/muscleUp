<?php
namespace App\Http\Requests;
use Illuminate\Foundation\Http\FormRequest;
class CompanyCreateRequest extends FormRequest
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
            'company_name' => 'required | max:60',
            'branch_name' => 'required | max:60',
            'admin_name' => 'required | max:60',
            'admin_email' => 'required | max:60 | unique:users,email',

        ];
    }
    /**
     * @return mixed
     */
    public function messages()
    {
        return [
            'company_name.required' => 'Please enter "Company Name"',
            'branch_name.required' => 'Please enter "Branch Name"',
            'admin_name.required' => 'Please enter "Admin Name"',
            'admin_email.required' => 'Please enter Admin "Email" to login',
        ];
    }
}