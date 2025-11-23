<script setup>
import { RouterLink } from 'vue-router';
import Footer from '../components/Footer.vue';
import HeaderAbout from '../components/HeaderAbout.vue';
import { EnvelopeIcon, GlobeAltIcon, HomeIcon, PhoneIcon } from '@heroicons/vue/16/solid';

</script>

<template>
    <div class="">
        <HeaderAbout image="/assets/contact/hero_contact.jpg" title="Kontak" breadcrumb="Kontak"/>

        <div class="py-20 px-6 md:px-16 lg:px-24 xl:px-32">
            <div class="grid grid-cols-2 gap-10">
                <div class="flex flex-col w-full">
                    <h1 class="text-2xl font-semibold text-slate-800 mb-3">Kantor Kami</h1>
                    <div class="flex items-center gap-2 mb-2">
                        <HomeIcon class="w-4 h-4 text-slate-800"/>
                        <p class="text-gray-600 text-sm tracking-wider">Jl. Ring Road Utara, Sleman, DIY 55285</p>
                    </div>
                    <div class="flex items-center gap-2 mb-2">
                        <PhoneIcon class="w-4 h-4 text-slate-800"/>
                        <p class="text-gray-600 text-sm tracking-wider">+62 81-2345-678</p>
                    </div>
                    <div class="flex items-center gap-2 mb-2">
                        <EnvelopeIcon class="w-4 h-4 text-slate-800"/>
                        <p class="text-gray-600 text-sm tracking-wider">buisness@zrbuilders.com</p>
                    </div>
                    <div class="flex items-center gap-2 mb-2">
                        <GlobeAltIcon class="w-4 h-4 text-slate-800"/>
                        <p class="text-gray-600 text-sm tracking-wider">www.zrbuilders.com</p>
                    </div>

                    <div class="mt-5 w-full h-full">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1385.815566753346!2d110.3530068846709!3d-7.750486566488316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5ee1c5671249%3A0x3027a76e352bc20!2sKabupaten%20Sleman%2C%20Daerah%20Istimewa%20Yogyakarta!5e1!3m2!1sid!2sid!4v1763872850804!5m2!1sid!2sid" width="100%" height="100%" style="border:0;" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

                <form action="" class="w-full">
                    <div class="flex flex-col mb-4">
                        <label for="" class="text-gray-600 font-semibold mb-1">Nama Lengkap</label>
                        <input type="text" class="px-4 py-2 rounded border border-gray-300 outline-none">
                    </div>
                    <div class="flex flex-col mb-4">
                        <label for="" class="text-gray-600 font-semibold mb-1">Email</label>
                        <input type="email" class="px-4 py-2 rounded border border-gray-300 outline-none">
                    </div>
                    <div class="flex flex-col mb-4">
                        <label for="" class="text-gray-600 font-semibold mb-1">Subjek</label>
                        <input type="text" class="px-4 py-2 rounded border border-gray-300 outline-none">
                    </div>
                    <div class="flex flex-col mb-4">
                        <label for="" class="text-gray-600 font-semibold mb-1">Pesan Anda</label>
                        <textarea rows="5" class="px-4 py-2 rounded border border-gray-300 outline-none"></textarea>
                    </div>
                    <button type="submit" class="bg-orange-500 text-white px-4 py-2 rounded cursor-pointer">Kirim</button>
                </form>

            </div>
        </div>

        <Footer/>
    </div>

</template>