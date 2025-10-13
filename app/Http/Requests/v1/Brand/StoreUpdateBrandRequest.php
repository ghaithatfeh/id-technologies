<?php

namespace App\Http\Requests\v1\Brand;

use App\Rules\ValidTranslatableJson;
use App\Serializers\SerializedMedia;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreUpdateBrandRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     */
    public function rules(): array
    {
        return [
            'brand_title' => ['json', new ValidTranslatableJson, 'required'],
            'background_image' => [
                'nullable',
                Rule::when(is_array($this->input('background_image')), [
                    SerializedMedia::validator()
                ]),
                Rule::when($this->hasFile('background_image'), [
                    'image', 'max:10000', 'mimes:jpeg,png,jpg,gif,svg,webp'
                ])
            ],
            'icon' => [
                'nullable',
                Rule::when(is_array($this->input('icon')), [
                    SerializedMedia::validator()
                ]),
                Rule::when($this->hasFile('icon'), [
                    'image', 'max:10000', 'mimes:jpeg,png,jpg,gif,svg,webp'
                ])
            ],
            'logo' => [
                'nullable',
                Rule::when(is_array($this->input('logo')), [
                    SerializedMedia::validator()
                ]),
                Rule::when($this->hasFile('logo'), [
                    'image', 'max:10000', 'mimes:jpeg,png,jpg,gif,svg,webp'
                ])
            ],
        ];
    }
}
