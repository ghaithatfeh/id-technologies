<?php

use App\Support\StoredMediaWebpMigrator;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    public function up(): void
    {
        StoredMediaWebpMigrator::migrateTable('brands', [
            'background_image',
            'icon',
            'logo',
        ]);
    }

    public function down(): void
    {
        //
    }
};
