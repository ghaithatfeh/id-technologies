<?php

namespace App\Http\Requests\v1\Brand;

use Illuminate\Validation\Rule;
use App\Serializers\SerializedMedia;
use App\Rules\ValidTranslatableJson;
use Illuminate\Foundation\Http\FormRequest;

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
                    SerializedMedia::validator(),
                ]),
                Rule::when($this->hasFile('background_image'), [
                    'image:allow_svg', 'max:10000', 'mimes:jpeg,png,jpg,gif,svg,webp',
                ]),
            ],
            'icon' => [
                'nullable',
                Rule::when(is_array($this->input('icon')), [
                    SerializedMedia::validator(),
                ]),
                Rule::when($this->hasFile('icon'), [
                    'image:allow_svg', 'max:10000', 'mimes:jpeg,png,jpg,gif,svg,webp',
                ]),
            ],
            'logo' => [
                'nullable',
                Rule::when(is_array($this->input('logo')), [
                    SerializedMedia::validator(),
                ]),
                Rule::when($this->hasFile('logo'), [
                    'image:allow_svg', 'max:10000', 'mimes:jpeg,png,jpg,gif,svg,webp',
                ]),
            ],
            'background_image_alt' => 'string|nullable|min:0|max:255',
            'background_image_description' => 'string|nullable|min:0|max:1000',

            'icon_alt' => 'string|nullable|min:0|max:255',
            'icon_description' => 'string|nullable|min:0|max:1000',

            'logo_alt' => 'string|nullable|min:0|max:255',
            'logo_description' => 'string|nullable|min:0|max:1000',
        ];
    }
}
