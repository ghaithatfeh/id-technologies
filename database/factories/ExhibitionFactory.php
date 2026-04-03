<?php

namespace Database\Factories;

use App\Models\Exhibition;
use App\Serializers\Translatable;
use Illuminate\Http\UploadedFile;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Exhibition>
 */
class ExhibitionFactory extends Factory
{
    public function definition(): array
    {
        return [
            'name' => Translatable::fake('firstName')->toJson(),
            'date' => fake()->date(),
            'description' => Translatable::fake('text')->toJson(),
            'images' => [
                new UploadedFile(
                    storage_path("app/private/required/products/Product0" . fake()->numberBetween(1, 9) . ".png"),
                    fake()->numberBetween(1, 9) . ".png",
                ),
                new UploadedFile(
                    storage_path("app/private/required/products/Product0" . fake()->numberBetween(1, 9) . ".png"),
                    fake()->numberBetween(1, 9) . ".png",
                ),
                new UploadedFile(
                    storage_path("app/private/required/products/Product0" . fake()->numberBetween(1, 9) . ".png"),
                    fake()->numberBetween(1, 9) . ".png",
                ),
            ],
        ];
    }
}
