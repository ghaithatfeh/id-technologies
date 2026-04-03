<?php

namespace App\Models;

use Carbon\Carbon;
use App\Traits\HasMedia;
use App\Casts\MediaCast;
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
 * @property Carbon                 $created_at
 * @property Carbon                 $updated_at
 * @mixin Builder<Exhibition>
 * @use  HasFactory<ExhibitionFactory>
 */
class Exhibition extends Model
{
    use HasFactory;
    use HasMedia;

    protected $fillable = [
        'name',
        'date',
        'description',
        'images',
    ];

    protected function casts(): array
    {
        return [
            'name' => Translatable::class,
            'date' => 'datetime',
            'description' => Translatable::class,
            'images' => MediaCast::class,
        ];
    }

    public function exportable(): array
    {
        return [
            'name',
            'date',
            'description',
            'images',

        ];
    }

    public static function searchableArray(): array
    {
        return [
            'name',
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
