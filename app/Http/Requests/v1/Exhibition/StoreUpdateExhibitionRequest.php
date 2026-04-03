<?php

namespace App\Http\Requests\v1\Exhibition;

use Illuminate\Validation\Rule;
use App\Rules\ValidTranslatableJson;
use App\Serializers\SerializedMedia;
use Illuminate\Foundation\Http\FormRequest;

class StoreUpdateExhibitionRequest extends FormRequest
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
            'name' => ['json', new ValidTranslatableJson, 'required'],
            'date' => ['required', 'date', 'date_format:Y-m-d'],
            'description' => ['json', new ValidTranslatableJson, 'required'],
            'images' => ['nullable', 'array'],
            'images.*' => [
                Rule::when(
                    is_array($this->input('images.*')),
                    [SerializedMedia::validator()],
                    ['image:allow_svg', 'max:10000', 'mimes:jpeg,png,jpg,gif,svg,webp'],
                ),
            ],];
    }
}
