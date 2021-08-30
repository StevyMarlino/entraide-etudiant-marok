<?php

namespace App\Http\Requests\API\Users;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UsersStoreRequest extends FormRequest
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
            'name' => [
                'required',
                Rule::unique('users')
            ],
            'email' => [
                'required',
                'email',
                Rule::unique('users')
            ],
            'password' => [
                'nullable',
                'confirmed'
            ],
            'last_name' => [
                'required'
            ],
            'family_name' => [
                'required'
            ],
            'facebook_url' => [
                'nullable'
            ],
            'tweeter_url' => [
                'nullable'
            ],
            'cover' => [
                'nullable',
                'image:jpg,jpeg,png,bmp,gif,svg,webp',
                'max:409600'
            ],
            'avatar' => [
                'nullable',
                'image:jpg,jpeg,png,bmp,gif,svg,webp',
                'max:409600'
            ],
            'born_at' => [
                'required',
                'date'
            ],
            'gender' => [
                Rule::in(['masculin','feminin'])
            ],
            'phone' => [
                'required'
            ],
        ];
    }
}
