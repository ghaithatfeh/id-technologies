<?php

namespace App\Http\Requests\v1\Category;

use Illuminate\Validation\Rule;
use App\Rules\ValidTranslatableJson;
use App\Repositories\CategoryRepository;
use Illuminate\Foundation\Http\FormRequest;

class StoreUpdateCategoryRequest extends FormRequest
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
            'brand_id' => ['numeric', 'required', Rule::exists('brands', 'id')],
            'parent_id' => [
                'nullable',
                Rule::excludeIf(fn() => $this->isPut() && CategoryRepository::make()->find($this->route('category'), ['children'])?->children->count()),
                Rule::exists('categories', 'id')
                    ->where('brand_id', $this->integer('brand_id')),
            ],
            'sort_index' => [
                'integer',
                Rule::unique('categories', 'sort_index')
                    ->where('parent_id', $this->integer('parent_id'))
                    ->where('brand_id', $this->integer('brand_id'))
                    ->whereNotNull('sort_index')
                    ->ignore($this->route('category')),
            ],
        ];
    }
}
