<?php

namespace App\Http\Requests\v1\Brand;

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
            'background_image' => [SerializedMedia::mixedValidator(), 'required'],
            'icon' => [SerializedMedia::mixedValidator(), 'required'],
            'logo' => [SerializedMedia::mixedValidator(), 'required'],
            'background_image_alt' => 'string|nullable|min:0|max:255',
            'background_image_description' => 'string|nullable|min:0|max:1000',

            'icon_alt' => 'string|nullable|min:0|max:255',
            'icon_description' => 'string|nullable|min:0|max:1000',

            'logo_alt' => 'string|nullable|min:0|max:255',
            'logo_description' => 'string|nullable|min:0|max:1000',
        ];
    }
}
