<?php

namespace Database\Factories;

use App\Http\Middleware\TrackLandingVisit;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\PageVisit>
 */
class PageVisitFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'url' => fake()->url(),
            'page' => fake()->randomElement(array_keys(TrackLandingVisit::PAGE_LABELS)),
            'ip_address' => fake()->ipv4(),
            'user_agent' => fake()->userAgent(),
            'created_at' => fake()->dateTimeBetween(now()->firstOfMonth(), now()->endOfMonth()),
        ];
    }
}
