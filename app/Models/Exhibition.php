<?php

namespace App\Models;

use Carbon\Carbon;
use App\Traits\HasMedia;
use App\Casts\MediaCast;
use App\Traits\Sluggable;
use App\Casts\Translatable;
use App\Serializers\SerializedMedia;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Database\Factories\ExhibitionFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Serializers\Translatable as TranslatableSerializer;

/**
 * @property int                    $id
 * @property TranslatableSerializer $name
 * @property Carbon                 $date
 * @property TranslatableSerializer $description
 * @property SerializedMedia[]      $images
 * @property SerializedMedia[]|null $videos
 * @property string                 $slug
 * @property Carbon                 $created_at
 * @property Carbon                 $updated_at
 * @mixin Builder<Exhibition>
 * @use  HasFactory<ExhibitionFactory>
 */
class Exhibition extends Model
{
    use HasFactory;
    use HasMedia;
    use Sluggable;

    protected $fillable = [
        'name',
        'date',
        'description',
        'images',
        'slug',
        'videos',
    ];

    protected function casts(): array
    {
        return [
            'name' => Translatable::class,
            'date' => 'datetime',
            'description' => Translatable::class,
            'images' => MediaCast::class,
            'videos' => MediaCast::class,
        ];
    }

    public function sluggable(): array
    {
        return [
            [
                'col' => 'name',
                'slug_col' => 'slug',
                'separator' => '-',
            ],
        ];
    }

    public function exportable(): array
    {
        return [
            'name',
            'slug',
            'date',
            'description',
            'images',

        ];
    }

    public static function searchableArray(): array
    {
        return [
            'name',
            'slug',
            'description',
            'date',
        ];
    }

    public static function relationsSearchableArray(): array
    {
        return [

        ];
    }
}
