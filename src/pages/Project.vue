<script setup>
import { RouterLink } from 'vue-router';
import Footer from '../components/Footer.vue';
import HeaderAbout from '../components/HeaderAbout.vue';
import { BuildingOffice2Icon, MapPinIcon, WrenchScrewdriverIcon } from '@heroicons/vue/16/solid';

const listCard = [
    {
        id: 1,
        title: 'Renovasi Rumah - Bandung',
        location: 'Indonesia',
        sector: 'Power & Industrial',
        expertise: 'Engineering, Procurement, and Contruction',
        image: 'https://images.unsplash.com/photo-1640416198776-e24939eb9fdc?w=600&auto=format&fit=crop&q=60'
    },
    {
        id: 2,
        title: 'Pembuatan Jembatan - Bandung',
        location: 'Indonesia',
        sector: 'Power & Industrial',
        expertise: 'Engineering, Procurement, and Contruction',
        image: 'https://images.unsplash.com/photo-1640416198776-e24939eb9fdc?w=600&auto=format&fit=crop&q=60'
    },
    {
        id: 3,
        title: 'Pembangunan Ruko - Batang',
        location: 'Indonesia',
        sector: 'Power & Industrial',
        expertise: 'Engineering, Procurement, and Contruction',
        image: 'https://images.unsplash.com/photo-1640416198776-e24939eb9fdc?w=600&auto=format&fit=crop&q=60'
    },
    {
        id: 4,
        title: 'Pembangunan Ruko - Batang',
        location: 'Indonesia',
        sector: 'Power & Industrial',
        expertise: 'Engineering, Procurement, and Contruction',
        image: 'https://images.unsplash.com/photo-1640416198776-e24939eb9fdc?w=600&auto=format&fit=crop&q=60'
    },
    {
        id: 5,
        title: 'Pembangunan Ruko - Batang',
        location: 'Indonesia',
        sector: 'Power & Industrial',
        expertise: 'Engineering, Procurement, and Contruction',
        image: 'https://images.unsplash.com/photo-1640416198776-e24939eb9fdc?w=600&auto=format&fit=crop&q=60'
    },
    {
        id: 6,
        title: 'Pembangunan Ruko - Batang',
        location: 'Indonesia',
        sector: 'Power & Industrial',
        expertise: 'Engineering, Procurement, and Contruction',
        image: 'https://images.unsplash.com/photo-1640416198776-e24939eb9fdc?w=600&auto=format&fit=crop&q=60'
    },
]

</script>

<template>
    <div class="">
        <HeaderAbout image="/assets/project/hero_project.jpg" title="Proyek" breadcrumb="Proyek"/>

        <div class="py-20 px-6 md:px-16 lg:px-24 xl:px-32">
            <div class="flex flex-col">
                <h1 class="text-2xl md:text-4xl mb-3 text-slate-800 font-semibold text-center">
                    Peta Lokasi Proyek
                </h1>
                <div class="w-full h-[500px]">
                    <img src="https://plus.unsplash.com/premium_photo-1712638009472-a3948f271e81?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kb25lc2lhJTIwbWFwfGVufDB8MHwwfHx8MA%3D%3D" alt="" class="w-full h-full object-contain">
                </div>
            </div>
        </div>

        <div class="flex py-20 px-6 md:px-16 lg:px-24 xl:px-32 flex-col bg-gray-100">
             <div class=" bg-gray-100">
                <div class="flex flex-col">

                    <h1 class="text-2xl text-center sm:text-4xl font-semibold mb-10 text-slate-800">
                    Proyek Kami
                    </h1>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                        <div v-for="item in listCard" :key="item.id" class="flex flex-col bg-white shadow-xl border border-gray-300 rounded-2xl overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                            <div class="w-full h-48 sm:h-56 md:h-60">
                                <img :src="item.image"
                                    class="w-full h-full object-cover" />
                            </div>

                            <div class="flex flex-col justify-between h-full p-5">
                                <h1 class="text-xl font-semibold text-slate-800">
                                    {{ item.title }}
                                </h1>

                                <div class="flex flex-wrap gap-3 mt-4">
                                    <p class="flex items-center text-xs sm:text-sm gap-2 border border-gray-400 px-2 py-1 rounded-full text-gray-600">
                                        <MapPinIcon class="w-5 h-5" /> {{ item.location }}
                                    </p>
                                    <p class="flex items-center text-xs sm:text-sm gap-2 border border-gray-400 px-2 py-1 rounded-full text-gray-600">
                                        <BuildingOffice2Icon class="w-5 h-5" /> {{ item.sector }}
                                    </p>
                                    <p class="flex items-center text-xs sm:text-sm gap-2 border border-gray-400 px-2 py-1 rounded-full text-gray-600">
                                        <WrenchScrewdriverIcon class="w-5 h-5" /> {{ item.expertise }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <RouterLink  class="mt-12 px-5 py-2 flex items-center gap-2 cursor-pointer bg-orange-500 hover:bg-orange-600 text-white w-fit rounded-lg mx-auto">
                        Load More
                    </RouterLink>

                </div>
            </div>
        </div>
        <Footer/>
    </div>

</template>