<?php

namespace Database\Factories;

use App\Models\Project;
use App\Serializers\Translatable;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Http\UploadedFile;

/**
 * @extends Factory<Project>
 */
class ProjectFactory extends Factory
{
    public function definition(): array
    {
        $imageNum = fake()->numberBetween(1, 9);
        return [
            'title' => Translatable::fake('sentence')->toJson(),
            'description' => Translatable::fake('text')->toJson(),
            'cover' => new UploadedFile(storage_path("app/private/required/products/Product0$imageNum.png"), "$imageNum.png"),
            'images' => [new UploadedFile(storage_path("app/private/required/products/Product0$imageNum.png"), "$imageNum.png")],
            'videos' => [new UploadedFile(storage_path("app/private/required/video.mp4"), "video.mp4")],
        ];
    }
}
