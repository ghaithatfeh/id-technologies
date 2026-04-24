<?php

namespace App\Http\Requests\v1\Exhibition;

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
            'images.*' => [SerializedMedia::mixedValidator()],
            'videos' => ['nullable', 'array'],
            'videos.*' => [SerializedMedia::mixedValidator(['file', 'max:50000', 'mimes:mp4,avi,mov,webm',])],
        ];
    }
}
