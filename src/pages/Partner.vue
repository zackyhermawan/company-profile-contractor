<script setup>
import { RouterLink } from 'vue-router';
import Footer from '../components/Footer.vue';
import HeaderAbout from '../components/HeaderAbout.vue';
import { ref } from 'vue';

const activeTab = ref('komisaris')

</script>

<template>
    <div class="">
        <HeaderAbout image="/assets/about/hero_profile_perusahaan.jpg" title="Perusahaan" breadcrumb="Partner"/>

        <div class="py-20 px-6 md:px-16 lg:px-24 xl:px-32">
            <div class="flex flex-col">
                <h1 class="text-2xl md:text-4xl font-semibold mb-4 text-slate-800">Partners</h1>
                <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <div class="w-full">
                        <img src="https://images.seeklogo.com/logo-png/63/2/summarecon-bekasi-logo-png_seeklogo-630301.png" alt="" class="h-44 object-contain w-full">
                    </div>
                    <div class="w-full">
                        <img src="https://images.seeklogo.com/logo-png/48/2/agung-podomoro-land-logo-png_seeklogo-481979.png" alt="" class="h-44 object-contain w-full">
                    </div>
                    <div class="w-full">
                        <img src="https://images.seeklogo.com/logo-png/39/2/alam-sutera-logo-png_seeklogo-391138.png" alt="" class="h-44 object-contain w-full">
                    </div>
                    <div class="w-full">
                        <img src="https://images.seeklogo.com/logo-png/35/2/ciputra-world-surabaya-logo-png_seeklogo-350959.png" alt="" class="h-44 object-contain w-full">
                    </div>
                    <div class="w-full">
                        <img src="https://images.seeklogo.com/logo-png/29/2/indofood-logo-png_seeklogo-298884.png" alt="" class="h-44 object-contain w-full">
                    </div>
                    <div class="w-full">
                        <img src="https://images.seeklogo.com/logo-png/31/2/astra-international-logo-png_seeklogo-319240.png" alt="" class="h-44 object-contain w-full">
                    </div>
                    <div class="w-full">
                        <img src="https://images.seeklogo.com/logo-png/35/2/pln-logo-png_seeklogo-355620.png" alt="" class="h-44 object-contain w-full">
                    </div>
                    <div class="w-full">
                        <img src="https://images.seeklogo.com/logo-png/1/2/bank-mandiri-logo-png_seeklogo-16290.png" alt="" class="h-44 object-contain w-full">
                    </div>
                    <div class="w-full">
                        <img src="https://images.seeklogo.com/logo-png/45/2/bank-bri-logo-png_seeklogo-459990.png" alt="" class="h-44 object-contain w-full">
                    </div>
                    <div class="w-full">
                        <img src="https://images.seeklogo.com/logo-png/36/2/transmart-carrefour-logo-png_seeklogo-369811.png" alt="" class="h-44 object-contain w-full">
                    </div>
                    <div class="w-full">
                        <img src="https://images.seeklogo.com/logo-png/31/2/telkom-indonesia-logo-png_seeklogo-310028.png" alt="" class="h-44 object-contain w-full">
                    </div>
                    <div class="w-full">
                        <img src="https://seeklogo.com/images/P/pt-samudera-adi-perkasa-logo-D1E6CA3198-seeklogo.com.png" alt="" class="h-44 object-contain w-full">
                    </div>
                    <div class="w-full">
                        <img src="https://images.seeklogo.com/logo-png/19/2/departemen-pekerjaan-umum-bina-marga-logo-png_seeklogo-197840.png" alt="" class="h-44 object-contain w-full">
                    </div>
                    <div class="w-full">
                        <img src="https://images.seeklogo.com/logo-png/13/2/starbucks-coffee-logo-png_seeklogo-131766.png" alt="" class="h-44 object-contain w-full">
                    </div>
                    <div class="w-full">
                        <img src="https://images.seeklogo.com/logo-png/40/2/j-co-logo-png_seeklogo-402242.png" alt="" class="h-44 object-contain w-full">
                    </div>
                    <div class="w-full">
                        <img src="https://images.seeklogo.com/logo-png/50/2/lotte-logo-png_seeklogo-504046.png" alt="" class="h-44 object-contain w-full">
                    </div>
                </div>
            </div>
        </div>

        <Footer/>
    </div>

</template>