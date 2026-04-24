<?php

namespace App\Http\Requests\v1\Project;

use App\Serializers\SerializedMedia;
use App\Rules\ValidTranslatableJson;
use Illuminate\Foundation\Http\FormRequest;

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
            'cover' => [SerializedMedia::mixedValidator(), 'required'],
            'images' => ['nullable', 'array'],
            'images.*' => [SerializedMedia::mixedValidator()],
            'videos' => ['nullable', 'array'],
            'videos.*' => [SerializedMedia::mixedValidator(['file', 'max:50000', 'mimes:mp4,avi,mov,webm',])],
        ];
    }
}
