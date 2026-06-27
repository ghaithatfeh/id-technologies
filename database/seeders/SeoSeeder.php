<?php

namespace Database\Seeders;

use App\Models\Seo;
use Illuminate\Database\Seeder;

class SeoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $records = [
            [
                'page' => 'Home-Page',
                'meta_title' => [
                    'en' => 'ID Technologies',
                    'ar' => 'آي دي تكنولوجيز',
                ],
                'meta_description' => [
                    'en' => 'ID Technologies - Partners in development, providing security services, plastic cards, barcode systems, and gaming solutions.',
                    'ar' => 'آي دي تكنولوجيز - شركاء في التنمية، نقدم خدمات الأمن، البطاقات البلاستيكية، أنظمة الباركود، وحلول الألعاب.',
                ],
            ],
            [
                'page' => 'Customer-Service-Page',
                'meta_title' => [
                    'en' => 'Customer Service - ID Technologies',
                    'ar' => 'خدمة العملاء - آي دي تكنولوجيز',
                ],
                'meta_description' => [
                    'en' => 'Get in touch with ID Technologies customer service for support and inquiries.',
                    'ar' => 'تواصل مع خدمة عملاء آي دي تكنولوجيز للدعم والاستفسارات.',
                ],
            ],
            [
                'page' => 'Projects-Page',
                'meta_title' => [
                    'en' => 'Our Projects - ID Technologies',
                    'ar' => 'مشاريعنا - آي دي تكنولوجيز',
                ],
                'meta_description' => [
                    'en' => 'Explore the latest projects by ID Technologies.',
                    'ar' => 'استكشف أحدث مشاريع آي دي تكنولوجيز.',
                ],
            ],
            [
                'page' => 'Single-Project-Page',
                'meta_title' => [
                    'en' => 'Project Details - ID Technologies',
                    'ar' => 'تفاصيل المشروع - آي دي تكنولوجيز',
                ],
                'meta_description' => [
                    'en' => 'View project details and achievements by ID Technologies.',
                    'ar' => 'عرض تفاصيل المشروع وإنجازات آي دي تكنولوجيز.',
                ],
            ],
            [
                'page' => 'Exhibitions-Page',
                'meta_title' => [
                    'en' => 'Exhibitions - ID Technologies',
                    'ar' => 'المعارض - آي دي تكنولوجيز',
                ],
                'meta_description' => [
                    'en' => 'Discover ID Technologies exhibitions and events.',
                    'ar' => 'اكتشف معارض وفعاليات آي دي تكنولوجيز.',
                ],
            ],
        ];

        foreach ($records as $record) {
            Seo::firstOrCreate(
                ['page' => $record['page']],
                [
                    'meta_title' => json_encode($record['meta_title'], JSON_UNESCAPED_UNICODE),
                    'meta_description' => json_encode($record['meta_description'], JSON_UNESCAPED_UNICODE),
                ]
            );
        }
    }
}
