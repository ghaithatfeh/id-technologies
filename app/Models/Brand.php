<?php

namespace App\Models;

use App\Casts\MediaCast;
use App\Casts\Translatable;
use App\Serializers\Translatable as TranslatableSerializer;
use App\Traits\HasMedia;
use Carbon\Carbon;
use Database\Factories\BrandFactory;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int                                                             $id
 * @property TranslatableSerializer                                          $brand_title
 * @property array{url:string,size:string,extension:string,mime_type:string} $background_image
 * @property array{url:string,size:string,extension:string,mime_type:string} $icon
 * @property array{url:string,size:string,extension:string,mime_type:string} $logo
 * @property Carbon                                                          $created_at
 * @property Carbon                                                          $updated_at
 * @mixin Builder<Brand>
 * @use  HasFactory<BrandFactory>
 */
class Brand extends Model
{
    use HasFactory;
    use HasMedia;

    protected $fillable = [
        'brand_title',
        'background_image',
        'icon',
        'logo',

    ];

    protected function casts(): array
    {
        return [
            'brand_title' => Translatable::class,
            'background_image' => MediaCast::class,
            'icon' => MediaCast::class,
            'logo' => MediaCast::class,
        ];
    }

    public function exportable(): array
    {
        return [
            'brand_title',
            'background_image',
            'icon',
            'logo',
            'product_ids',

        ];
    }

    public static function searchableArray(): array
    {
        return [
            'brand_title',

        ];
    }

    public static function relationsSearchableArray(): array
    {
        return [

        ];
    }
}
