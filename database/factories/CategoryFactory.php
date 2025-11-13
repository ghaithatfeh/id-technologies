<?php

namespace Database\Factories;

use App\Models\Brand;
use App\Models\Product;
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

    public function withProducts(int $count = 1): static
    {
        return $this->has(Product::factory($count));
    }

    public function withChildren(): CategoryFactory
    {
        return $this->afterCreating(function (Category $category) {
            Category::factory(5)->create([
                'parent_id' => $category->id,
                'sort_index' => null,
            ]);
        });
    }
}
