<?php

namespace Database\Factories;

use App\Models\SupportLink;
use App\Serializers\Translatable;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<SupportLink>
 */
class SupportLinkFactory extends Factory
{
    public function definition(): array
    {
        return [
            'product_name' => Translatable::fake()->toJson(),
            'type' => Translatable::fake()->toJson(),
            'link' => fake()->url(),
        ];
    }
}
