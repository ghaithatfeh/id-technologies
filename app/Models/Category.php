<?php

namespace App\Models;

use App\Casts\Translatable;
use App\Serializers\Translatable as TranslatableSerializer;
use Carbon\Carbon;
use Database\Factories\CategoryFactory;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection as EloquentCollection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @property int                              $id
 * @property TranslatableSerializer           $name
 * @property int                              $brand_id
 * @property Brand|null                       $brand
 * @property Carbon                           $created_at
 * @property Carbon                           $updated_at
 * @mixin Builder<Category>
 * @use  HasFactory<CategoryFactory>
 * @property EloquentCollection<Product>|null $products
 */
class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'brand_id',

    ];

    protected function casts(): array
    {
        return [
            'name' => Translatable::class,
        ];
    }

    public function exportable(): array
    {
        return [
            'name',
            'brand.brand_title',
            'product_ids',

        ];
    }

    public static function searchableArray(): array
    {
        return [
            'name',

        ];
    }

    public static function relationsSearchableArray(): array
    {
        return [
            'brand' => ['brand_title'],
            'products' => [
                'name',
            ],
        ];
    }

    /**
     * @return  BelongsTo<Brand, static>
     */
    public function brand(): BelongsTo
    {
        return $this->belongsTo(Brand::class);
    }

    /**
     * @return  HasMany<Product, static>
     */
    public function products(): HasMany
    {
        return $this->hasMany(Product::class);
    }
}
