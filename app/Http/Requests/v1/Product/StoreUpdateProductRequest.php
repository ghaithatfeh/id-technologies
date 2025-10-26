<?php

namespace App\Http\Requests\v1\Product;

use App\Rules\ValidTranslatableJson;
use App\Serializers\SerializedMedia;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

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
            'image' => [
                'nullable',
                Rule::when(is_array($this->input('image')), [
                    SerializedMedia::validator()
                ]),
                Rule::when($this->hasFile('image'), [
                    'image:allow_svg', 'max:10000', 'mimes:jpeg,png,jpg,gif,svg,webp'
                ])
            ],
            'pdf' => [
                'nullable',
                Rule::when(is_array($this->input('pdf')), [
                    SerializedMedia::validator([
                        'max:10000', 'mimes:pdf,docx,txt'
                    ])
                ]),
                Rule::when($this->hasFile('pdf'), [
                    'max:10000', 'mimes:pdf,docx,txt'
                ])
            ],
            'video' => [
                'nullable',
                Rule::when(is_array($this->input('video')), [
                    SerializedMedia::validator([
                        'max:512000', 'mimes:mp4,mov,ogg,webm'
                    ])
                ]),
                Rule::when($this->hasFile('video'), [
                    'max:512000', 'mimes:mp4,mov,ogg,webm'
                ])
            ],
            'support_link' => 'string|url|nullable',
            'is_featured' => 'boolean|nullable',
        ];
    }
}
