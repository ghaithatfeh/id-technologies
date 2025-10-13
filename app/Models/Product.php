<?php

namespace App\Models;

use App\Casts\MediaCast;
use App\Casts\Translatable;
use App\Models\Category;
use App\Serializers\Translatable as TranslatableSerializer;
use App\Traits\HasMedia;
use Carbon\Carbon;
use Database\Factories\ProductFactory;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int                                                             $id
 * @property TranslatableSerializer                                          $name
 * @property bool                                                            $is_active
 * @property int                                                             $category_id
 * @property array{url:string,size:string,extension:string,mime_type:string} $image
 * @property array{url:string,size:string,extension:string,mime_type:string} $pdf
 * @property Category|null                                                   $category
 * @property Carbon                                                          $created_at
 * @property Carbon                                                          $updated_at
 * @method Builder isActive()
 * @mixin Builder<Product>
 * @use  HasFactory<ProductFactory>
 */
class Product extends Model
{
    use HasFactory;
    use HasMedia;

    protected $fillable = [
        'name',
        'is_active',
        'category_id',
        'image',
        'pdf',

    ];

    protected function casts(): array
    {
        return [
            'name' => Translatable::class,
            'is_active' => 'boolean',
            'image' => MediaCast::class,
            'pdf' => MediaCast::class,
        ];
    }

    public function exportable(): array
    {
        return [
            'name',
            'is_active',
            'image',
            'pdf',
            'category.name',

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
            'category' => ['name'],

        ];
    }

    public function scopeIsActive(Builder $query): Builder
    {
        return $query->where('is_active', true);
    }

    /**
     * @return  BelongsTo<Category, static>
     */
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }
}
