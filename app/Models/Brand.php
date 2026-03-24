<?php

namespace App\Models;

use Carbon\Carbon;
use App\Casts\MediaCast;
use App\Traits\HasMedia;
use App\Traits\Sluggable;
use App\Casts\Translatable;
use Database\Factories\BrandFactory;
use App\Serializers\SerializedMedia;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Serializers\Translatable as TranslatableSerializer;
use Illuminate\Database\Eloquent\Collection as EloquentCollection;

/**
 * @property int                               $id
 * @property TranslatableSerializer            $brand_title
 * @property SerializedMedia|null              $background_image
 * @property SerializedMedia|null              $icon
 * @property SerializedMedia|null              $logo
 * @property Carbon                            $created_at
 * @property Carbon                            $updated_at
 * @property EloquentCollection<Category>|null $categories
 * @property string|null                       $background_image_alt
 * @property string|null                       $background_image_description
 * @property string|null                       $icon_alt
 * @property string|null                       $icon_description
 * @property string|null                       $logo_alt
 * @property string|null                       $logo_description
 * @property string                            $slug
 * @mixin Builder<Brand>
 * @use  HasFactory<BrandFactory>
 */
class Brand extends Model
{
    use HasFactory;
    use HasMedia;
    use Sluggable;

    protected $fillable = [
        'brand_title',
        'background_image',
        'icon',
        'logo',
        'background_image_alt',
        'background_image_description',
        'icon_alt',
        'icon_description',
        'logo_alt',
        'logo_description',
        'slug',
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

    public function sluggable(): array
    {
        return [
            [
                'col' => 'brand_title',
                'slug_col' => 'slug',
                'separator' => '-',
            ],
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
            'categories' => [
                'name',
            ],
        ];
    }

    /**
     * @return  HasMany<Category, static>
     */
    public function categories(): HasMany
    {
        return $this->hasMany(Category::class);
    }
}
