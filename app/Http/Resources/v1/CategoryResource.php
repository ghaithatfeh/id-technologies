<?php

namespace App\Http\Resources\v1;

use App\Http\Resources\BaseResource\BaseResource;
use App\Models\Category;
use Illuminate\Http\Request;

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
        ];
    }
}
