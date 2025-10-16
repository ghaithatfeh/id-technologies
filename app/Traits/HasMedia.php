<?php

namespace App\Traits;

use App\Casts\MediaCast;
use Illuminate\Database\Eloquent\Model;

/**
 * @mixin Model
 */
trait HasMedia
{
    protected static function boot(): void
    {
        parent::boot();
        self::deleted(function (Model $model) {
            $mediaKeys = $model->getCasts();
            foreach ($mediaKeys as $attribute => $mediaKey) {
                if ($mediaKey == MediaCast::class) {
                    $media = $model->{$attribute};
                    if ($media !== null) {
                        // Convert SerializedMedia object to array format for deleteFiles
                        if (is_array($media)) {
                            MediaCast::deleteFiles($media);
                        } else {
                            // Single SerializedMedia object - convert to array format
                            MediaCast::deleteFiles([$media->toArray()]);
                        }
                    }
                }
            }
        });
    }
}
