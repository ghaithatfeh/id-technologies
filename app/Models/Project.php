<?php

namespace App\Models;

use Carbon\Carbon;
use App\Traits\HasMedia;
use App\Casts\MediaCast;
use App\Traits\Sluggable;
use App\Casts\Translatable;
use App\Serializers\SerializedMedia;
use Database\Factories\ProjectFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Serializers\Translatable as TranslatableSerializer;

/**
 * @property int                    $id
 * @property TranslatableSerializer $title
 * @property TranslatableSerializer $description
 * @property SerializedMedia        $cover
 * @property SerializedMedia|null   $images
 * @property SerializedMedia|null   $videos
 * @property string                 $slug
 * @property Carbon                 $created_at
 * @property Carbon                 $updated_at
 * @mixin Builder<Project>
 * @use  HasFactory<ProjectFactory>
 */
class Project extends Model
{
    use HasFactory;
    use HasMedia;
    use Sluggable;

    protected $fillable = [
        'title',
        'description',
        'cover',
        'images',
        'videos',
        'slug',
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

    public function sluggable(): array
    {
        return [
            [
                'col' => 'title',
                'slug_col' => 'slug',
                'separator' => '-',
            ],
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
