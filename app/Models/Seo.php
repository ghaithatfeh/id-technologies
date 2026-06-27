<?php

namespace App\Models;

use App\Casts\Translatable;
use App\Serializers\Translatable as TranslatableSerializer;
use Carbon\Carbon;
use Database\Factories\SeoFactory;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $page
 * @property TranslatableSerializer|null $meta_title
 * @property TranslatableSerializer|null $meta_description
 * @property Carbon $created_at
 * @property Carbon $updated_at
 *
 * @mixin Builder<Seo>
 * @use HasFactory<SeoFactory>
 */
class Seo extends Model
{
    use HasFactory;

    protected $fillable = [
        'page',
        'meta_title',
        'meta_description',
    ];

    protected function casts(): array
    {
        return [
            'meta_title' => Translatable::class,
            'meta_description' => Translatable::class,
        ];
    }

    public function exportable(): array
    {
        return [
            'page',
            'meta_title',
            'meta_description',
        ];
    }

    public static function searchableArray(): array
    {
        return [
            'page',
        ];
    }

    public static function relationsSearchableArray(): array
    {
        return [

        ];
    }

    public static function forPage(string $page): ?self
    {
        return self::firstWhere('page', $page);
    }
}
