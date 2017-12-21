<?php
/**
 * Created by PhpStorm.
 * User: mrashid
 * Date: 12/19/2017
 * Time: 4:56 PM
 */

namespace App\Http\Requests;
use Illuminate\Foundation\Http\FormRequest;
class PicUploadRequest extends FormRequest
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
            'fileData' => 'required|max:10000|mimes:jpeg,png,gif,jpg',
        ];
    }
}