<?php

use App\Support\StoredMediaWebpMigrator;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    public function up(): void
    {
        StoredMediaWebpMigrator::migrateTable('products', [
            'image',
        ]);
    }

    public function down(): void
    {
        //
    }
};
