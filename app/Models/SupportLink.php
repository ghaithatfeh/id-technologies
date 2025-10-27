<?php

namespace App\Models;

use App\Casts\Translatable;
use App\Serializers\Translatable as TranslatableSerializer;
use Carbon\Carbon;
use Database\Factories\SupportLinkFactory;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/*** @property int $id
 * @property TranslatableSerializer $product_name
 * @property TranslatableSerializer $type
 * @property string $link
 * @property Carbon $created_at
 * @property Carbon $updated_at
 *
 * @mixin Builder<SupportLink>
 * @use  HasFactory<SupportLinkFactory>
*/
class SupportLink extends Model
{
    use HasFactory;

    protected $fillable = [
        'product_name',
        'type',
        'link',

    ];

    protected function casts(): array
    {
        return [
            'product_name' => Translatable::class,
            'type' => Translatable::class,
        ];
    }

    public function exportable(): array
    {
        return [
            'product_name',
            'type',
            'link',

        ];
    }

    public static function searchableArray(): array
    {
        return [
            'product_name',
            'type',
            'link',

        ];
    }

    public static function relationsSearchableArray(): array
    {
        return [

        ];
    }
}
