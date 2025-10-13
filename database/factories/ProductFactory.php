<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\Product;
use App\Serializers\Translatable;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Http\UploadedFile;

/**
 * @extends Factory<Product>
 */
class ProductFactory extends Factory
{
    public function definition(): array
    {
        return [
            'name' => Translatable::fake('firstName')->toJson(),
            'is_active' => fake()->boolean(),
            'category_id' => Category::factory(),
            'image' => UploadedFile::fake()->image('image.png'),
            'pdf' => UploadedFile::fake()->image('image.png'),
        ];
    }
}
