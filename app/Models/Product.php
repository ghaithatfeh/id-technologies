<?php

namespace App\Models;

use Carbon\Carbon;
use App\Casts\MediaCast;
use App\Traits\HasMedia;
use App\Casts\Translatable;
use App\Serializers\SerializedMedia;
use Database\Factories\ProductFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Serializers\Translatable as TranslatableSerializer;

/**
 * @property int                    $id
 * @property TranslatableSerializer $name
 * @property bool                   $is_active
 * @property int                    $category_id
 * @property SerializedMedia        $image
 * @property SerializedMedia        $pdf
 * @property Category|null          $category
 * @property Carbon                 $created_at
 * @property Carbon                 $updated_at
 * @property bool                   $is_featured
 * @property SerializedMedia|null   $video
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
        'is_featured',
        'video',
    ];

    protected function casts(): array
    {
        return [
            'name' => Translatable::class,
            'is_active' => 'boolean',
            'image' => MediaCast::class,
            'pdf' => MediaCast::class,
            'is_featured' => 'boolean',
            'video' => MediaCast::class,
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
            'is_featured',
            'video_url',
        ];
    }

    public static function searchableArray(): array
    {
        return [
            'name',
            'is_featured',
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
