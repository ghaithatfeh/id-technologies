<?php

namespace App\Http\Resources\v1;

use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Resources\BaseResource\BaseResource;

/** @mixin Category */
class CategoryResource extends BaseResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'brand' => BrandResource::make($this->whenLoaded('brand')),
            'name' => $this->name,
            'brand_id' => $this->brand_id,
            'parent_id' => $this->parent_id,
            'products' => ProductResource::collection($this->whenLoaded('products')),
            'children' => CategoryResource::collection($this->whenLoaded('children')),
            'parent' => CategoryResource::make($this->whenLoaded('parent')),
        ];
    }
}
