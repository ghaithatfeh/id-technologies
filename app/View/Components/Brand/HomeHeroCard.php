<?php

namespace App\View\Components\Brand;

use Closure;
use App\Models\Brand;
use Illuminate\View\Component;
use Illuminate\Contracts\View\View;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\Support\Htmlable;
use Illuminate\View\View as IlluminateView;

class HomeHeroCard extends Component
{
    public function __construct(public Brand $brand)
    {
    }

    public function highlightBrandNames($text): array|string|null
    {
        $brandNames = ["HIKVISION Co", "evolis co", "intercard co", "Unitech co"];

        foreach ($brandNames as $str) {
            $pattern = '/' . preg_quote($str, '/') . '/i';
            $replacement = '<span class="text-red-500 block">$0</span>';
            $text = preg_replace($pattern, $replacement, $text);
        }

        return $text;
    }

    public function render(): Factory|View|Htmlable|string|Closure|IlluminateView
    {
        return view('components.brand.home-hero-card');
    }
}
