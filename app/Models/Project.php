<?php

namespace App\Models;

use App\Casts\MediaCast;
use App\Casts\Translatable;
use App\Serializers\Translatable as TranslatableSerializer;
use App\Traits\HasMedia;
use Carbon\Carbon;
use Database\Factories\ProjectFactory;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int                                                                  $id
 * @property TranslatableSerializer                                               $title
 * @property TranslatableSerializer                                               $description
 * @property array{url:string,size:string,extension:string,mime_type:string}      $cover
 * @property array{url:string,size:string,extension:string,mime_type:string}|null $images
 * @property array{url:string,size:string,extension:string,mime_type:string}|null $videos
 * @property Carbon                                                               $created_at
 * @property Carbon                                                               $updated_at
 * @mixin Builder<Project>
 * @use  HasFactory<ProjectFactory>
 */
class Project extends Model
{
    use HasFactory;
    use HasMedia;

    protected $fillable = [
        'title',
        'description',
        'cover',
        'images',
        'videos',

    ];

    protected function casts(): array
    {
        return [
            'title' => Translatable::class,
            'description' => Translatable::class,
            'cover' => MediaCast::class,
            'images' => MediaCast::class,
            'videos' => MediaCast::class,
        ];
    }

    public function exportable(): array
    {
        return [
            'title',
            'description',
            'cover',
            'images',
            'videos',

        ];
    }

    public static function searchableArray(): array
    {
        return [
            'title',
            'description',

        ];
    }

    public static function relationsSearchableArray(): array
    {
        return [

        ];
    }
}
