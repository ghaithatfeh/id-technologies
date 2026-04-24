<?php

namespace App\Http\Requests\v1\Product;

use Illuminate\Validation\Rule;
use App\Serializers\SerializedMedia;
use App\Rules\ValidTranslatableJson;
use Illuminate\Foundation\Http\FormRequest;

class StoreUpdateProductRequest extends FormRequest
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
            'is_active' => ['required', 'boolean'],
            'category_id' => ['numeric', 'required', Rule::exists('categories', 'id')],
            'image' => [SerializedMedia::mixedValidator(), 'required'],
            'pdf' => [
                'required',
                SerializedMedia::mixedValidator([
                    'max:10000', 'mimes:pdf,docx,txt',
                ]),
            ],
            'video' => [
                'nullable',
                SerializedMedia::mixedValidator([
                    'max:512000', 'mimes:mp4,mov,ogg,webm',
                ]),
            ],
            'is_featured' => 'boolean|nullable',

            'image_alt' => 'string|nullable|min:0|max:255',
            'image_description' => 'string|nullable|min:0|max:1000',
            'description' => 'string|nullable|max:1000',
        ];
    }
}
