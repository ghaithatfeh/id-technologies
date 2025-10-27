<?php

namespace App\Http\Resources\v1;

use App\Http\Resources\BaseResource\BaseResource;
use App\Models\SupportLink;
use Illuminate\Http\Request;

/** @mixin SupportLink */
class SupportLinkResource extends BaseResource
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
            'product_name' => $this->product_name,
            'type' => $this->type,
            'link' => $this->link,
        ];
    }
}
