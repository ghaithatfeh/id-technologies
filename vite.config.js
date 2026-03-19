import {defineConfig} from 'vite';
import laravel from 'laravel-vite-plugin';
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/js/cubeta-starter.tsx',
                'resources/css/cubeta-starter.css',
                'resources/js/app.js'
            ],
            refresh: true,
        }),
        viteReact(),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            '@': '/resources/js',
        },
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    // React core libraries
                    if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
                        return 'react-core';
                    }

                    // Inertia
                    if (id.includes('@inertiajs')) {
                        return 'inertia';
                    }

                    // Lucide icons (large library)
                    if (id.includes('lucide')) {
                        return 'lucide';
                    }

                    // i18n and translation libraries
                    if (id.includes('i18next') || id.includes('react-i18next')) {
                        return 'i18n';
                    }

                    // Other UI libraries
                    if (id.includes('infinite-scroll')) {
                        return 'ui-libs';
                    }

                    // Dashboard auth pages
                    if (id.includes('Pages/dashboard/login') ||
                        id.includes('Pages/dashboard/forget-password') ||
                        id.includes('Pages/dashboard/reset-password')) {
                        return 'pages-auth';
                    }

                    // Dashboard entity pages (brands, categories, products, projects)
                    if (id.includes('Pages/dashboard/brands') ||
                        id.includes('Pages/dashboard/categories') ||
                        id.includes('Pages/dashboard/products') ||
                        id.includes('Pages/dashboard/projects') ||
                        id.includes('Pages/dashboard/support-links')) {
                        return 'pages-entities';
                    }

                    // Dashboard main pages
                    if (id.includes('Pages/dashboard/')) {
                        return 'pages-dashboard';
                    }

                    // Layout components
                    if (id.includes('Components/layouts/')) {
                        return 'layouts';
                    }

                    // Shared components
                    if (id.includes('Components/')) {
                        return 'components';
                    }

                    // Other node_modules
                    if (id.includes('node_modules')) {
                        return 'vendor';
                    }
                },

                // Separate CSS files for better caching
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name?.endsWith('.css')) {
                        return 'assets/css/[name]-[hash][extname]';
                    }
                    return 'assets/[name]-[hash][extname]';
                }
            }
        },

        // Optimize chunk size
        chunkSizeWarningLimit: 500
    }
});
