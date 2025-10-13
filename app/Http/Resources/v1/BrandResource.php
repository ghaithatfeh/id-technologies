<?php

namespace App\Http\Resources\v1;

use App\Http\Resources\BaseResource\BaseResource;
use App\Http\Resources\v1\CategoryResource;
use App\Models\Brand;
use Illuminate\Http\Request;

/** @mixin Brand */
class BrandResource extends BaseResource
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
            'brand_title' => $this->brand_title,
            'background_image' => $this->background_image,
            'icon' => $this->icon,
            'logo' => $this->logo,
            'categories' => CategoryResource::collection($this->whenLoaded('categories')),
        ];
    }
}
