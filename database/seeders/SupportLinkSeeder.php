<?php

namespace Database\Seeders;

use App\Models\SupportLink;
use Illuminate\Database\Seeder;

class SupportLinkSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        SupportLink::factory(10)->create();
    }
}
