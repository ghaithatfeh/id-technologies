<?php

namespace App\Console\Commands;

use Error;
use Throwable;
use Exception;
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
        try {
            $this->info("Deleting Old Sitemap Files");
            foreach (File::files(public_path()) as $file) {
                if ($file->getExtension() == "xml" && str_contains($file->getPathname(), "sitemap")) {
                    $this->info("Deleted : {$file->getPath()}");
                    File::delete($file->getPathname());
                }
            }
            $this->info("Deletion Completed");

            $locales = config('cubeta-starter.available_locales');

            $this->info("Scanning : " . config('app.url') . '/' . "en" . " to generate the sitemap files");
            SitemapGenerator::create(config('app.url') . '/' . "en")
                ->hasCrawled(function (Url $url) use ($locales) {
                    $this->info("Scanned : [$url->url] successfully");
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
            $this->info("Generating Sitemap Files Done Successfully");
            $this->info("Sitemap Path : [" . public_path("sitemap.xml") . "]");
        } catch (Exception|Throwable|Error $error) {
            $this->error("Sitemap generation failed with the following error");
            $this->info($error->getMessage());
            $this->info($error->getTraceAsString());
        }
    }
}
