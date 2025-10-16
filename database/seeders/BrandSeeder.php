<?php

namespace Database\Seeders;

use App\Models\Brand;
use App\Serializers\Translatable;
use Illuminate\Database\Seeder;
use Illuminate\Http\UploadedFile;

class BrandSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Brand::factory()->create([
            'brand_title' => Translatable::create([
                'en' => 'Security and Protection Systems “HIKVISION Co”',
                'ar' => 'أنظمة الحامية والأمان'
            ]),
            'background_image' => new UploadedFile(storage_path('/app/private/required/Security.png'), 'Security.png'),
            'logo' => new UploadedFile(storage_path('/app/private/required/03-Brand01.png'), '03-Brand01.png'),
            'icon' => new UploadedFile(storage_path('/app/private/required/Icon01.svg'), 'Icon01.svg'),
        ]);

        Brand::factory()->create([
            'brand_title' => Translatable::create([
                'en' => 'Plastic Card Printers and its accessories “evolis co”',
                'ar' => 'طابعات بطاقات بلاستيكية'
            ]),
            'background_image' => new UploadedFile(storage_path('/app/private/required/PlasticCards.png'), 'PlasticCards.png'),
            'logo' => new UploadedFile(storage_path('/app/private/required/04-Brand02.png'), '04-Brand02.png'),
            'icon' => new UploadedFile(storage_path('/app/private/required/Icon02.svg'), 'Icon02.svg'),
        ]);

        Brand::factory()->create([
            'brand_title' => Translatable::create([
                'en' => 'Technologies/Prepaid Entertainment Systems “intercards co”',
                'ar' => 'أنظمة الألعاب الدفع المسبق'
            ]),
            'background_image' => new UploadedFile(storage_path('/app/private/required/Technologies.png'), 'Technologies.png'),
            'logo' => new UploadedFile(storage_path('/app/private/required/05-Brand03.png'), '05-Brand03.png'),
            'icon' => new UploadedFile(storage_path('/app/private/required/Icon03.svg'), 'Icon03.svg'),
        ]);

        Brand::factory()->create([
            'brand_title' => Translatable::create([
                'en' => 'Barcode Systems “Unitech co”',
                'ar' => 'أنطمة الباركود'
            ]),
            'background_image' => new UploadedFile(storage_path('/app/private/required/BarcodeSystems.png'), 'BarcodeSystems.png'),
            'logo' => new UploadedFile(storage_path('/app/private/required/06-Brand04.png'), '06-Brand04.png'),
            'icon' => new UploadedFile(storage_path('/app/private/required/Icon04.svg'), 'Icon04.svg'),
        ]);
    }
}
