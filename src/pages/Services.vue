<script setup>
import { RouterLink } from 'vue-router';
import Footer from '../components/Footer.vue';
import HeaderAbout from '../components/HeaderAbout.vue';
import { listLayanan } from '../data/services';

</script>

<template>
    <div class="">
        <HeaderAbout image="/assets/services/hero_layanan.jpg" title="Layanan" breadcrumb="Layanan"/>

        <div class="flex flex-col pt-20 px-6 md:px-16 lg:px-24 xl:px-32">
            <h1 class="text-2xl md:text-4xl font-semibold text-center mb-3 text-slate-800">Layanan Konstruksi</h1>
            <p class="text-gray-500 text-center max-w-2xl mx-auto">Kami menyediakan berbagai layanan konstruksi yang dikerjakan oleh tim profesional dengan standar kualitas tinggi, aman, dan tepat waktu.</p>
        </div>

        <!-- DAFTAR LAYANAN -->
         <div class="flex flex-col">
            <div v-for="(layanan, index) in listLayanan" :key="layanan.id"
                :class="`py-20 px-6 md:px-16 lg:px-24 xl:px-32 ${index % 2 === 1 ? 'bg-gray-100' : ''}`">

                <div :class="`flex flex-col md:flex-col lg:flex-row gap-10
                    ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`">

                    <!-- IMAGE -->
                    <div class="w-full h-[300px] md:h-[400px] rounded">
                        <img :src="layanan.image" alt="" class="w-full h-full object-cover rounded" />
                    </div>

                    <!-- TEXT -->
                    <div class="flex flex-col">
                        <h1 class="text-2xl md:text-3xl font-semibold text-slate-800 mb-3">{{ layanan.title }}</h1>
                        <p class="text-gray-600">{{ layanan.short_description }}</p>

                        <div class="flex flex-col">
                            <div class="flex flex-row my-10 gap-8">
                                <div v-for="(icon, i) in layanan.icons" :key="i" class="w-14 h-14">
                                    <img :src="icon" alt="" class="w-full h-full" />
                                </div>
                            </div>

                            <RouterLink :to="`/layanan/${layanan.id}`"
                                class="bg-orange-500 text-white w-fit px-4 rounded py-2 text-sm">
                                Baca Selengkapnya
                            </RouterLink>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <Footer/>
    </div>

</template>