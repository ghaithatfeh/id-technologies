<?php

namespace App\Http\Requests\v1\Project;

use App\Rules\ValidTranslatableJson;
use App\Serializers\SerializedMedia;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreUpdateProjectRequest extends FormRequest
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
            'title' => ['json', new ValidTranslatableJson, 'required'],
            'description' => ['json', new ValidTranslatableJson, 'required'],
            'cover' => [
                'nullable',
                Rule::when(is_array($this->input('cover')), [
                    SerializedMedia::validator()
                ]),
                Rule::when($this->hasFile('cover'), [
                    'image:allow_svg', 'max:10000', 'mimes:jpeg,png,jpg,gif,svg,webp'
                ])
            ],
            'images' => ['nullable', 'array'],
            'images.*' => [
                Rule::when(
                    is_array($this->input('images.*')),
                    [SerializedMedia::validator()],
                    ['image:allow_svg', 'max:10000', 'mimes:jpeg,png,jpg,gif,svg,webp']
                ),
            ],
            'videos' => ['nullable', 'array'],
            'videos.*' => [
                Rule::when(
                    is_array($this->input('videos.*')),
                    [SerializedMedia::validator(['file', 'max:50000', 'mimes:mp4,avi,mov,webm',])],
                    ['file', 'max:50000', 'mimes:mp4,avi,mov,webm',]
                ),
            ]
        ];
    }
}
