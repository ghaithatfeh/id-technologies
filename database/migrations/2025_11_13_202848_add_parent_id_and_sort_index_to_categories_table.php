<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('categories', function (Blueprint $table) {
            $table->foreignId('parent_id')->nullable()->references('id')->on('categories');
            $table->integer('sort_index')->nullable();
            $table->unique(['sort_index', 'brand_id', 'parent_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('categories', function (Blueprint $table) {
            $table->dropUnique(['sort_index', 'brand_id', 'parent_id']);
            $table->dropColumn('sort_index');
            $table->dropConstrainedForeignId('parent_id');
        });
    }
};
