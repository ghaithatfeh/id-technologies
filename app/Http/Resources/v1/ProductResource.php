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
            'support_link' => $this->support_link,
            'is_featured' => $this->is_featured,
            'video' => $this->video,
        ];
    }
}
