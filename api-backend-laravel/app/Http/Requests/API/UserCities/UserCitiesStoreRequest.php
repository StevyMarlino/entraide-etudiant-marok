<?php


namespace App\Http\Requests\API\UserCities;


use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UserCitiesStoreRequest extends FormRequest
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
            'note' => [
                'required',
            ],
            'message' => [
                'required',
            ],
            'city_id' => [
                'required',
            ],
            'new_city' => [
                'nullable'
            ]
        ];
    }
}
