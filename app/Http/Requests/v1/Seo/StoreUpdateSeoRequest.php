<?php

namespace App\Http\Requests\v1\Seo;

use App\Rules\ValidTranslatableJson;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreUpdateSeoRequest extends FormRequest
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
            'meta_title' => ['nullable', 'json', new ValidTranslatableJson],
            'meta_description' => ['nullable', 'json', new ValidTranslatableJson],
        ];
    }
}
