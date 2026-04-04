<?php

use App\Support\StoredMediaWebpMigrator;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    public function up(): void
    {
        StoredMediaWebpMigrator::migrateTable('projects', [
            'cover',
            'images',
        ]);
    }

    public function down(): void
    {
        //
    }
};
