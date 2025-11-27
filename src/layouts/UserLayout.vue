<script setup>
import { Bars2Icon, Bars3Icon } from '@heroicons/vue/16/solid';
import { ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

const route = useRoute()
const mobileOpen = ref(false);
const aboutOpen = ref(false);

const closeAbout = ()=> {
    aboutOpen.value = !aboutOpen
}

const closeMenu = ()=>{
    mobileOpen.value = !mobileOpen
}

const isActiveRoute = (path)=> {
    return route.path === path ? 'text-orange-500 border-border-transparent lg:border-b-4' : 'text-slate-600'
}

const isParentActive = (paths) => {
    return paths.includes(route.path) ? 'text-orange-500 font-semibold lg:border-b-4 pb-1' : 'text-slate-600 hover:text-orange-500 font-semibold'
}

</script>

<template>
    <div class="w-full">
        <!-- NAVBAR DESKTOP -->
        <div class="fixed right-0 top-0 left-0 bg-white flex items-center justify-between py-4 px-6 md:px-16 lg:px-24 xl:px-32 shadow-xl z-50">
            <RouterLink to="/" class="font-bold text-2xl">ZR-<span class="text-orange-500 uppercase">Builders</span> </RouterLink>
            <ul class="hidden lg:flex items-center gap-5 relative">
                <li>
                <RouterLink to="/" :class="isActiveRoute('/')" @click="closeAbout" class="font-semibold rounded pb-1">Beranda</RouterLink>
                </li>

                <li class="relative group">
                    <button @click="aboutOpen = !aboutOpen" :class="isParentActive(['/about', '/tata-kelola', '/sertifikat', '/partner'])" class=" cursor-pointer rounded ">
                        Perusahaan
                        <span class="">▼</span>
                    </button>

                    <div v-if="aboutOpen" class="absolute left-0 mt-2 bg-white shadow-lg border rounded w-44 transition-all">
                        <RouterLink to="/about" @click="closeAbout" class="block px-4 py-2 hover:bg-orange-100">Profil Perusahaan</RouterLink>
                        <RouterLink to="/sertifikat" @click="closeAbout" class="block px-4 py-2 hover:bg-orange-100">Sertifikat</RouterLink>
                        <RouterLink to="/tata-kelola" @click="closeAbout" class="block px-4 py-2 hover:bg-orange-100">Tata Kelola</RouterLink>
                        <RouterLink to="/partner" @click="closeAbout" class="block px-4 py-2 hover:bg-orange-100">Partner</RouterLink>
                    </div>
                </li>

                <li><RouterLink to="/layanan" :class="isActiveRoute('/layanan')" @click="closeAbout" class="font-semibold rounded pb-1">Layanan</RouterLink></li>
                <li><RouterLink to="/proyek" :class="isActiveRoute('/proyek')" @click="closeAbout" class="font-semibold rounded pb-1">Proyek</RouterLink></li>
                <li><RouterLink to="/kontak" :class="isActiveRoute('/kontak')" @click="closeAbout" class="font-semibold rounded pb-1">Kontak</RouterLink></li>
            </ul>
            <button @click="mobileOpen = !mobileOpen" class="lg:hidden text-3xl">
                <Bars3Icon class="w-7 h-7"/>
            </button>
        </div>

        <!-- NAVBAR MOBILE -->
        <div v-if="mobileOpen" class="lg:hidden bg-white shadow-lg px-6 py-4 fixed top-[60px] left-0 right-0 z-40">

            <RouterLink to="/" :class="isActiveRoute('/')" @click="closeMenu" class="block py-2 font-semibold">Beranda</RouterLink>

            <div>
                <button 
                :class="isParentActive(['/about', '/tata-kelola', '/sertifikat', '/partner'])"
                @click="aboutOpen = !aboutOpen" 
                class="block w-full text-left py-2 font-semibold flex justify-between"
                >
                Perusahaan
                <span>▼</span>
                </button>

                <div v-if="aboutOpen" class="pl-4 border-l mt-2">
                    <RouterLink to="/about" @click="closeMenu" class="block py-2 text-slate-700">Profil Perusahaan</RouterLink>
                    <RouterLink to="/sertifikat" @click="closeMenu" class="block py-2 text-slate-700">Sertifikat</RouterLink>
                    <RouterLink to="/tata-kelola" @click="closeMenu" class="block py-2 text-slate-700">Tata Kelola</RouterLink>
                    <RouterLink to="/partner" @click="closeMenu" class="block py-2 text-slate-700">Partner</RouterLink>
                </div>
            </div>

            <RouterLink to="/layanan" :class="isActiveRoute('/layanan')" @click="closeMenu" class="block py-2 font-semibold text-slate-700">Layanan</RouterLink>
            <RouterLink to="/proyek" :class="isActiveRoute('/proyek')" @click="closeMenu" class="block py-2 font-semibold text-slate-700">Proyek</RouterLink>
            <RouterLink to="/kontak" :class="isActiveRoute('/kontak')" @click="closeMenu" class="block py-2 font-semibold text-slate-700">Kontak</RouterLink>
        </div>
    </div>
    <!-- Close Outside Navbar -->
    <div v-if="mobileOpen" @click.self="closeMenu" class="fixed inset-0"></div>

    <!-- Close Outside Dropdown -->
    <div v-if="aboutOpen" @click.self="closeAbout" class="fixed inset-0"></div>
    <router-view/>
</template>