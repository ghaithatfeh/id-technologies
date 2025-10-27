<?php

namespace App\Http\Requests\v1\SupportLink;

use App\Rules\ValidTranslatableJson;
use Illuminate\Foundation\Http\FormRequest;

class StoreUpdateSupportLinkRequest extends FormRequest
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
            'product_name' => ['json', new ValidTranslatableJson, 'required'],
            'type' => ['json', new ValidTranslatableJson, 'required'],
            'link' => ['required', 'string', 'max:255', 'min:3'],
        ];
    }
}
