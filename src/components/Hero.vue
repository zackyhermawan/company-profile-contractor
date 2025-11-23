<script setup>
import { RouterLink } from 'vue-router'; // Hanya perlu di komponen yang berisi RouterLink
// Komponen ini bisa jadi adalah Home.vue atau komponen Hero Section saja.
</script>

<template>
    <div class="relative w-full min-h-screen">
        <img 
            src="https://images.unsplash.com/photo-1599707254554-027aeb4deacd?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0"
            alt="Construction Site Background"
            class="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div class="absolute inset-0 bg-black/60"></div>

        <div class="relative flex items-center min-h-screen px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
            <div class="max-w-3xl">
                <h1 class="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Kontraktor Profesional untuk Proyek 
                    <span class="text-orange-500 font-normal">Konstruksi Berkualitas</span>
                </h1>

                <p class="text-gray-300 mt-4 sm:mt-5 text-base sm:text-lg max-w-xl">
                    Kami menghadirkan solusi pembangunan dan renovasi dengan standar terbaik,
                    tepat waktu, dan sesuai anggaran.
                </p>

                <div class="flex flex-col sm:flex-row gap-3 mt-6 sm:mt-8 w-full">
                    <RouterLink to="/kontak" class="px-6 py-3 lg:py-2 rounded bg-orange-600 hover:bg-orange-700 text-white transition cursor-pointer lg:text-base font-medium w-full sm:w-auto">
                        Hubungi Kami
                    </RouterLink>

                    <RouterLink to="/about" class="px-6 py-3 lg:py-2 rounded border-2 border-gray-300 hover:bg-white hover:text-slate-900 transition text-white cursor-pointer lg:text-base font-medium w-full sm:w-auto">
                        Tentang Kami
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>


</template>