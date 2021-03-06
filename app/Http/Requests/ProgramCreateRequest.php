<?php
namespace App\Http\Requests;
use Illuminate\Foundation\Http\FormRequest;
class ProgramCreateRequest extends FormRequest
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
            'title' => 'required  |unique:programs| max:80',
            'description' => 'required | max:100',

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
            'description.required' => 'Please enter "Description"',

        ];
    }

}