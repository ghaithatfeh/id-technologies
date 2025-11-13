<?php

namespace App\Models;

use Carbon\Carbon;
use App\Casts\Translatable;
use Database\Factories\CategoryFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Serializers\Translatable as TranslatableSerializer;
use Illuminate\Database\Eloquent\Collection as EloquentCollection;

/**
 * @property int                              $id
 * @property TranslatableSerializer           $name
 * @property int                              $brand_id
 * @property Brand|null                       $brand
 * @property Carbon                           $created_at
 * @property Carbon                           $updated_at
 * @property integer                          $sort_index
 * @property int|null                         $parent_id
 * @property Category|null                    $parent
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
        'parent_id',
        'sort_index',
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

    /**
     * @return HasMany<Category, static>
     */
    public function children(): HasMany
    {
        return $this->hasMany(Category::class, 'parent_id', 'id');
    }

    /**
     * @return BelongsTo<Category, static>
     */
    public function parent(): BelongsTo
    {
        return $this->belongsTo(Category::class, 'parent_id', 'id');
    }
}
