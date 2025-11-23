<script setup>
import { AtSymbolIcon, MapPinIcon, PhoneIcon } from '@heroicons/vue/16/solid';

</script>

<template>
    <div class="w-full bg-orange-50">
        <div class="py-20 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 bg-orange-50">

            <!-- TOP GRID -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                <div class="flex flex-col">
                    <h1 class="text-3xl font-semibold mb-4 text-slate-800">
                        ZR-<span class="text-orange-500">BUILDERS</span>
                    </h1>
                    <p class="text-gray-500">
                        Solusi konstruksi terpercaya untuk pembangunan rumah, renovasi, hingga proyek komersial. Mengutamakan kualitas, ketepatan waktu, dan kepuasan pelanggan.
                    </p>
                </div>

                <div class="flex flex-col">
                    <h1 class="text-xl font-semibold mb-4 text-slate-800">Menu Navigasi Cepat</h1>
                    <ul class="flex flex-col gap-2">
                        <li class="text-gray-500 hover:text-orange-500 cursor-pointer transition-all duration-300">Tentang Kami</li>
                        <li class="text-gray-500 hover:text-orange-500 cursor-pointer transition-all duration-300">Layanan</li>
                        <li class="text-gray-500 hover:text-orange-500 cursor-pointer transition-all duration-300">Proyek</li>
                        <li class="text-gray-500 hover:text-orange-500 cursor-pointer transition-all duration-300">Kontak</li>
                    </ul>
                </div>

                <div class="flex flex-col">
                    <h1 class="text-xl font-semibold mb-4 text-slate-800">Layanan Kami</h1>
                    <ul class="flex flex-col gap-2">
                        <li class="text-gray-500 hover:text-orange-500 transition-all duration-300">- Pembangunan Rumah</li>
                        <li class="text-gray-500 hover:text-orange-500 transition-all duration-300">- Renovasi Bangunan</li>
                        <li class="text-gray-500 hover:text-orange-500 transition-all duration-300">- Desain Arsitektur</li>
                        <li class="text-gray-500 hover:text-orange-500 transition-all duration-300">- Manajemen Proyek</li>
                        <li class="text-gray-500 hover:text-orange-500 transition-all duration-300">- Kontraktor Interior</li>
                    </ul>
                </div>

                <div class="flex flex-col">
                    <h1 class="text-xl font-semibold mb-4 text-slate-800">Sosial Media</h1>
                    <p class="text-gray-500">Tetap terhubung dengan kami melalui platform berikut.</p>

                    <div class="flex items-center gap-4 mt-4">
                        <a class="w-7 h-7 sm:w-8 sm:h-8">
                            <img src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" class="w-full h-full">
                        </a>
                        <a class="w-7 h-7 sm:w-8 sm:h-8">
                            <img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" class="w-full h-full">
                        </a>
                        <a class="w-7 h-7 sm:w-8 sm:h-8">
                            <img src="https://cdn-icons-png.flaticon.com/128/733/733579.png" class="w-full h-full">
                        </a>
                        <a class="w-7 h-7 sm:w-8 sm:h-8">
                            <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" class="w-full h-full">
                        </a>
                    </div>
                </div>
            </div>

            <!-- BOTTOM CONTACT CARDS -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                <div class="group flex items-center gap-3 border hover:bg-orange-500 hover:border-transparent transition-all duration-300 border-gray-400 rounded-2xl p-5">
                    <div class="p-3 bg-orange-500 group-hover:bg-orange-200 rounded-full transition-all duration-300">
                        <AtSymbolIcon class="w-8 h-8 text-orange-100 group-hover:text-orange-500 transition-all duration-300"/>
                    </div>

                    <div class="flex flex-col">
                        <h1 class="font-semibold text-slate-800 group-hover:text-white transition-all duration-300">example.gmail.com</h1>
                        <p class="text-gray-600 text-sm group-hover:text-gray-100 transition-all duration-300">Hubungi Kami</p>
                    </div>
                </div>

                <div class="group flex items-center gap-3 border hover:bg-orange-500 hover:border-transparent transition-all duration-300 border-gray-400 rounded-2xl p-5">
                    <div class="p-3 bg-orange-500 group-hover:bg-orange-200 rounded-full transition-all duration-300">
                        <PhoneIcon class="w-8 h-8 text-orange-100 group-hover:text-orange-500 transition-all duration-300"/>
                    </div>

                    <div class="flex flex-col">
                        <h1 class="font-semibold text-slate-800 group-hover:text-white transition-all duration-300">(+62) 812345678</h1>
                        <p class="text-gray-600 text-sm group-hover:text-gray-100 transition-all duration-300">Konsultasi Gratis</p>
                    </div>
                </div>

                <div class="group flex items-center gap-3 border hover:bg-orange-500 hover:border-transparent transition-all duration-300 border-gray-400 rounded-2xl p-5">
                    <div class="p-3 bg-orange-500 group-hover:bg-orange-200 rounded-full transition-all duration-300">
                        <MapPinIcon class="w-8 h-8 text-orange-100 group-hover:text-orange-500 transition-all duration-300"/>
                    </div>

                    <div class="flex flex-col">
                        <h1 class="font-semibold text-slate-800 group-hover:text-white transition-all duration-300">Jl. Ring Road Utara Jombor</h1>
                        <p class="text-gray-600 text-sm group-hover:text-gray-100 transition-all duration-300">Lokasi Kantor</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- COPYRIGHT -->
        <div class="bg-orange-500 rounded-tl-full rounded-tr-full text-center py-4 text-gray-200 text-sm">
            &copy; Copyright ZR-Builders. All rights reserved.
        </div>
    </div>

</template>