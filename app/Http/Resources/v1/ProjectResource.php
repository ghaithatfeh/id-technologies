<?php

namespace App\Http\Resources\v1;

use App\Models\Project;
use Illuminate\Http\Request;
use App\Http\Resources\BaseResource\BaseResource;

/** @mixin Project */
class ProjectResource extends BaseResource
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
            'title' => $this->title,
            'description' => $this->description,
            'cover' => $this->cover,
            'images' => $this->images,
            'videos' => $this->videos,
            'slug' => $this->slug,
        ];
    }
}
