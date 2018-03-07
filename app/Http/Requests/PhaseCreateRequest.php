<?php
namespace App\Http\Requests;
use Illuminate\Foundation\Http\FormRequest;
class PhaseCreateRequest extends FormRequest
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
            'title' => 'required  |unique:phases| max:60',
            'description' => 'required | max:300',

        ];
    }
    /**
     * @return mixed
     */
    public function messages()
    {
        return [
            'title.unique'=> 'This title is already taken.Select another one',
            'title.required' => 'Please enter "Program Name"',
            'description.required' => 'Please enter "Description"'

        ];
    }

}