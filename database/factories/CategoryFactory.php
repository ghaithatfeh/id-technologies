<?php

namespace Database\Factories;

use App\Models\Brand;
use App\Models\Category;
use App\Serializers\Translatable;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Category>
 */
class CategoryFactory extends Factory
{
    public function definition(): array
    {
        return [
            'name' => Translatable::fake('firstName')->toJson(),
            'brand_id' => Brand::inRandomOrder()->first()->id,
        ];
    }
}
