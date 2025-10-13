<?php

namespace Database\Factories;

use App\Models\Brand;
use App\Serializers\Translatable;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Http\UploadedFile;

/**
 * @extends Factory<Brand>
 */
class BrandFactory extends Factory
{
    public function definition(): array
    {
        return [
            'brand_title' => Translatable::fake('word')->toJson(),
            'background_image' => UploadedFile::fake()->image('image.png'),
            'icon' => UploadedFile::fake()->image('image.png'),
            'logo' => UploadedFile::fake()->image('image.png'),
        ];
    }
}
