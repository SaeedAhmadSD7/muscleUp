<?php
/**
 * Created by PhpStorm.
 * User: soft
 * Date: 9/19/2017
 * Time: 9:20 PM
 */

namespace App\Http\Requests;
use Illuminate\Foundation\Http\FormRequest;


class WorkOutAllocation extends FormRequest
{

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
            'trainee_id'=>'required|unique:allocation',
        ];
    }
    public function messages()
    {
        return [
        ];
    }
}