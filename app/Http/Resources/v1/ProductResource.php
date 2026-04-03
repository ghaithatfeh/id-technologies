<?php

namespace App\Http\Resources\v1;

use App\Http\Resources\BaseResource\BaseResource;
use App\Models\Product;
use Illuminate\Http\Request;

/** @mixin Product */
class ProductResource extends BaseResource
{
    /**
     * Transform the resource into an array.
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'category' => CategoryResource::make($this->whenLoaded('category')),
            'name' => $this->name,
            'is_active' => $this->is_active,
            'category_id' => $this->category_id,
            'image' => $this->image,
            'pdf' => $this->pdf,
            'is_featured' => $this->is_featured,
            'video' => $this->video,
            'image_description' => $this->image_description,
            'image_alt' => $this->image_alt,
            'description' => $this->description,
        ];
    }
}
