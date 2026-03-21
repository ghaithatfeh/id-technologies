<?php

namespace App\Console\Commands;

use Spatie\Sitemap\Tags\Url;
use Illuminate\Console\Command;
use Spatie\Sitemap\SitemapGenerator;
use Illuminate\Support\Facades\File;

class GenerateSitemap extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:generate-sitemap';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle(): void
    {
        foreach (File::files(public_path()) as $file) {
            if ($file->getExtension() == "xml" && str_contains($file->getPathname(), "sitemap")) {
                File::delete($file->getPathname());
            }
        }

        $locales = config('cubeta-starter.available_locales');

        SitemapGenerator::create(config('app.url') . '/' . "en")
            ->hasCrawled(function (Url $url) use ($locales) {
                if (str_contains($url->url, "storage")) {
                    return $url;
                }

                $currentUrl = $url->url;

                foreach ($locales as $locale) {

                    // Replace ONLY the locale segment safely
                    $alternate = preg_replace(
                        '#^' . preg_quote(url('en'), '#') . '#',
                        url($locale),
                        $currentUrl,
                    );

                    $url->addAlternate($alternate, $locale);
                }

                // ✅ x-default (fallback)
                $url->addAlternate(
                    preg_replace('#^' . preg_quote(url('en'), '#') . '#', url('en'), $currentUrl),
                    'x-default',
                );

                return $url;
            })
            ->maxTagsPerSitemap(100)
            ->writeToFile(public_path("sitemap.xml"));
    }
}
