<?php

namespace App\Support;

use App\Serializers\SerializedMedia;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\DB;

class StoredMediaWebpMigrator
{
    public static function migrateTable(string $table, array $columns, bool $private = false): void
    {
        DB::table($table)
            ->orderBy('id')
            ->lazyById()
            ->each(function (object $record) use ($table, $columns, $private): void {
                $updates = [];

                foreach ($columns as $column) {
                    $currentValue = $record->{$column} ?? null;

                    if ($currentValue === null) {
                        continue;
                    }

                    $migratedValue = self::migrateColumnValue($currentValue, $table, $private);

                    if ($migratedValue !== $currentValue) {
                        $updates[$column] = $migratedValue;
                    }
                }

                if ($updates !== []) {
                    DB::table($table)
                        ->where('id', $record->id)
                        ->update($updates);
                }
            });
    }

    private static function migrateColumnValue(mixed $value, string $directory, bool $private): mixed
    {
        $decoded = is_string($value) ? json_decode($value, true) : $value;

        if (! is_array($decoded)) {
            return $value;
        }

        if (SerializedMedia::isMediaArray($decoded)) {
            $migratedItem = self::migrateMediaItem($decoded, $directory, $private);

            return $migratedItem === null
                ? $value
                : json_encode($migratedItem, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
        }

        $itemsChanged = false;
        $migratedItems = [];

        foreach ($decoded as $item) {
            if (! SerializedMedia::isMediaArray($item)) {
                $migratedItems[] = $item;

                continue;
            }

            $migratedItem = self::migrateMediaItem($item, $directory, $private);

            if ($migratedItem !== null && $migratedItem !== $item) {
                $itemsChanged = true;
            }

            $migratedItems[] = $migratedItem ?? $item;
        }

        if (! $itemsChanged) {
            return $value;
        }

        return json_encode($migratedItems, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    }

    private static function migrateMediaItem(array $media, string $directory, bool $private): ?array
    {
        $mimeType = (string) ($media['mime_type'] ?? '');

        if (
            ! str_starts_with($mimeType, 'image/')
            || in_array($mimeType, ['image/svg+xml', 'image/webp'], true)
        ) {
            return $media;
        }

        $path = $media['path'] ?? null;

        if (! is_string($path) || ! is_file($path)) {
            return null;
        }

        $uploadedFile = new UploadedFile(
            $path,
            basename($path),
            $mimeType,
            null,
            true
        );

        $normalizedFile = SerializedMedia::normalizeUploadedFile($uploadedFile);

        if ($normalizedFile->getPathname() === $uploadedFile->getPathname()) {
            return $media;
        }

        $storedMedia = new SerializedMedia($normalizedFile, $directory, $private);

        if (! $storedMedia->exists()) {
            return null;
        }

        @unlink($path);

        return $storedMedia->toArray();
    }
}
