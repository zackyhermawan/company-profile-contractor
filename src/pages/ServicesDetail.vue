<script setup>
import Footer from '../components/Footer.vue';
import HeaderAbout from '../components/HeaderAbout.vue';
import { useRoute, useRouter } from 'vue-router'
import { listLayanan } from '../data/services';

const route = useRoute()

const id = parseInt(route.params.id);
const layanan = listLayanan.find(item => item.id === id);

</script>

<template>
    <div class="">
        <HeaderAbout image="/assets/services/hero_layanan.jpg" title="Layanan" link="layanan" breadcrumb="Detail Layanan"/>
        
        <div class="py-20 px-6 md:px-16 lg:px-24 xl:px-32">
            <div v-if="layanan" class="flex flex-col-reverse md:flex-col-reverse lg:flex-row items-center gap-10">
                <div class="flex flex-col w-full">
                    <h1 class="text-2xl md:text-4xl font-bold mb-4 text-slate-800">{{ layanan.title }}</h1>
                    <p v-for="(des, d) in layanan.description" :key="d" class="mb-3 text-gray-600 pl-3 md:pl-5">{{ des }}</p>
                   
                    <h1 class=" text-slate-800 font-semibold mb-2">Keunggulan Layanan</h1>
                    <ul class="list-disc pl-8 text-slate-700">
                        <li v-for="(adv, i) in layanan.advantages" :key="i">{{ adv }}</li>
                    </ul>

                </div>
                <div class="w-full h-[300px] md:h-[400px] rounded">
                    <img :src="layanan.image" alt="" class="w-full h-full object-cover rounded">
                </div>
            </div>
        </div>
        <Footer/>
    </div>

</template>