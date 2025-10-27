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
        $imageNum = fake()->numberBetween(1, 9);
        return [
            'name' => Translatable::fake('firstName')->toJson(),
            'is_active' => fake()->boolean(),
            'category_id' => Category::factory(),
            'image' => new UploadedFile(storage_path("app/private/required/products/Product0$imageNum.png"), "$imageNum.png"),
            'pdf' => new UploadedFile(storage_path("app/private/required/products/sample.pdf"), "sample.pdf"),
            'video' => null,
        ];
    }
}
