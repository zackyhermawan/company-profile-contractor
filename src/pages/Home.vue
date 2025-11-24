<script setup>
import { RouterLink } from 'vue-router';
import Hero from '../components/Hero.vue';
import { ArrowRightIcon, BanknotesIcon, BuildingOffice2Icon, CheckBadgeIcon, CheckCircleIcon, ClockIcon, MapPinIcon, UserGroupIcon, WrenchScrewdriverIcon } from '@heroicons/vue/16/solid';
import Footer from '../components/Footer.vue';

import { ref } from "vue";

const testimonials = ref([
  {
    name: "John Doe",
    position: "Direktur Operasional – PT Maju Sejahtera",
    quote: "ZR-Builders benar-benar memberikan pengalaman pembangunan yang profesional. Prosesnya rapi, komunikasi jelas, dan hasil akhirnya melebihi ekspektasi kami.",
    photo: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=200"
  },
  {
    name: "Maya Lestari",
    position: "Owner – Lestari Interior",
    quote: "Pelayanan cepat, responsif, dan hasil sangat memuaskan. Sangat direkomendasikan!",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200"
  },
  {
    name: "Bima Rahadian",
    position: "Project Manager – Artha Konstruksi",
    quote: "Tim profesional dan kerja sesuai timeline. Hasil sangat kokoh dan rapi.",
    photo: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=200"
  }
]);

</script>

<template>
    <div class="">
        <Hero/>

        <!-- TENTANG KAMI -->
        <div class="py-20 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 bg-white">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                
                <div class="rounded-2xl">
                    <img 
                        src="https://plus.unsplash.com/premium_photo-1663126869308-79fe29abf8c5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        alt="" 
                        class="w-full h-64 md:h-full object-cover rounded-2xl"
                    >
                </div>

                <div class="flex flex-col justify-center">
                    <h1 class="text-3xl sm:text-4xl font-semibold mb-4 text-slate-800">Tentang Kami</h1>
                    
                    <p class="text-gray-500 leading-relaxed">
                        PT/ CV <span class="text-orange-500">ZR-BUILDERS</span> adalah perusahaan kontraktor yang bergerak di bidang jasa konstruksi dan renovasi. Berpengalaman dalam menangani berbagai proyek rumah tinggal, ruko, kantor, hingga bangunan komersial. Kami berkomitmen menghadirkan hasil yang kuat, rapi, dan sesuai standar keselamatan kerja.
                    </p>

                    <RouterLink to="/about"
                        class="flex items-center gap-2 px-5 py-2 rounded bg-orange-500 hover:bg-orange-600 transition text-white w-fit mt-6 "
                    >
                        Selengkapnya 
                        <ArrowRightIcon class="w-5 h-5 text-white"/>
                    </RouterLink>
                </div>

            </div>
        </div>

        <!-- LAYANAN -->
        <div class="py-20 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 bg-gray-100">
            <div class="flex flex-col">

                <p class="text-sm text-orange-500 uppercase tracking-wide">AR-BUILDERS</p>

                <h1 class="text-3xl sm:text-4xl font-semibold mb-10 text-slate-800">
                    Layanan Konstruksi Terbaik untuk Anda
                </h1>

                <div class="grid md:grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">

                    <!-- CARD 1 -->
                    <div class="flex flex-col h-full justify-between bg-white border border-gray-300 rounded-xl overflow-hidden hover:bg-orange-100 transition-all duration-300"
                        style="clip-path: polygon(0 0, 100% 0, 100% 75%, 80% 100%, 0 100%);">

                        <div class="p-6">
                            <div class="w-14 h-14 mb-3">
                                <img src="https://cdn-icons-png.flaticon.com/128/2942/2942499.png" alt="" class="w-full">
                            </div>

                            <h1 class="text-xl sm:text-2xl font-semibold mb-2 text-slate-800">Desain Arsitektur</h1>
                            <p class="text-gray-500 text-sm sm:text-base leading-relaxed">
                                Penyusunan desain, gambar kerja, serta perhitungan anggaran biaya.
                            </p>
                        </div>

                        <div class="w-full h-32 sm:h-36 md:h-40">
                            <img src="https://plus.unsplash.com/premium_photo-1682693240729-8f46e509c73e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0"
                                alt=""
                                class="w-full h-full object-cover object-top rounded-br-xl">
                        </div>
                    </div>

                    <!-- CARD 2 -->
                    <div class="flex flex-col h-full justify-between bg-white border border-gray-300 rounded-xl overflow-hidden hover:bg-orange-100 transition-all duration-300"
                        style="clip-path: polygon(0 0, 100% 0, 100% 75%, 80% 100%, 0 100%);">

                        <div class="p-6">
                            <div class="w-14 h-14 mb-3">
                                <img src="https://cdn-icons-png.flaticon.com/128/2942/2942587.png" alt="" class="w-full">
                            </div>

                            <h1 class="text-xl sm:text-2xl font-semibold mb-2 text-slate-800">
                                Renovasi & Perbaikan
                            </h1>
                            <p class="text-gray-500 text-sm sm:text-base leading-relaxed">
                                Renovasi interior, eksterior, penambahan ruangan, dan perbaikan bangunan.
                            </p>
                        </div>

                        <div class="w-full h-32 sm:h-36 md:h-40">
                            <img src="https://plus.unsplash.com/premium_photo-1681691423422-bcaa3eaad7e8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0"
                                alt="" 
                                class="w-full h-full object-cover object-top rounded-br-xl">
                        </div>
                    </div>

                    <!-- CARD 3 -->
                    <div class="flex flex-col h-full justify-between bg-white border border-gray-300 rounded-xl overflow-hidden hover:bg-orange-100 transition-all duration-300 "
                        style="clip-path: polygon(0 0, 100% 0, 100% 75%, 80% 100%, 0 100%);">

                        <div class="p-6">
                            <div class="w-14 h-14 mb-3">
                                <img src="https://cdn-icons-png.flaticon.com/128/258/258169.png" alt="" class="w-full">
                            </div>

                            <h1 class="text-xl sm:text-2xl font-semibold mb-2 text-slate-800">
                                Pembangunan Rumah & Bangunan
                            </h1>
                            <p class="text-gray-500 text-sm sm:text-base leading-relaxed">
                                Penyusunan desain, gambar kerja, serta perhitungan anggaran biaya.
                            </p>
                        </div>

                        <div class="w-full h-32 sm:h-36 md:h-40">
                            <img src="https://images.unsplash.com/photo-1722971334403-4f02388455a1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0"
                                alt="" 
                                class="w-full h-full object-cover object-top rounded-br-xl">
                        </div>
                    </div>

                </div>

                <RouterLink to="/layanan"
                    class="mt-14 px-5 py-2 flex items-center gap-2 bg-orange-500 hover:bg-orange-600 transition text-white w-fit rounded-lg mx-auto"
                >
                    Lihat Semua Layanan 
                    <ArrowRightIcon class="w-5 h-5"/>
                </RouterLink>

            </div>
        </div>

        <!--  -->
        <div class="w-full bg-orange-100">
            <div class="py-20 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 flex items-center justify-center">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-20 lg:gap-30">
                    <div class="flex flex-col w-fit">
                        <h1 class="text-5xl font-bold text-orange-500">1.000+</h1>
                        <p class="text-gray-600 font-semibold">Pakar Teknis</p>
                    </div>
                    <div class="flex flex-col">
                        <h1 class="text-5xl font-bold text-orange-500">400+</h1>
                        <p class="text-gray-600 font-semibold">Proyek Selesai</p>
                    </div>
                    <div class="flex flex-col">
                        <h1 class="text-5xl font-bold text-orange-500">12+</h1>
                        <p class="text-gray-600 font-semibold">Tahun Pengalaman</p>
                    </div>
                    <div class="flex flex-col">
                        <h1 class="text-5xl font-bold text-orange-500">12+</h1>
                        <p class="text-gray-600 font-semibold">Tahun Pengalaman</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="relative">
            <div class="w-full h-screen md:h-[600px] lg:h-[550px]">
                <img 
                    src="https://images.unsplash.com/photo-1567954970774-58d6aa6c50dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvcmtlcnxlbnwwfDB8MHx8fDA%3D"
                    alt=""
                    class="h-full w-full object-cover object-center"
                >
            </div>

            <div class="absolute inset-0 bg-black/60 flex items-center justify-center px-6 md:px-20 lg:px-32">
                <div class="flex flex-col items-center text-center gap-6 max-w-3xl">

                    <h2 class="text-xl md:text-4xl font-bold text-white">Apa Kata Mereka?</h2>

                    <p class="text-gray-200 text-base md:text-lg">
                        Suara pelanggan kami adalah bukti kualitas layanan yang selalu kami jaga.
                    </p>

                    <div class="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-lg transition-all duration-300"
                        v-if="testimonials.length">

                        <p class="text-white text-lg italic leading-relaxed opacity-70">
                        “{{ testimonials[currentIndex].quote }}”
                        </p>

                        <div class="flex flex-col items-center mt-6 text-white">
                        <div class="w-14 h-14 rounded-full border-2 border-orange-500 mb-3 overflow-hidden">
                            <img :src="testimonials[currentIndex].photo"
                                class="w-full h-full object-cover">
                        </div>

                        <p class="font-semibold text-orange-500">
                            {{ testimonials[currentIndex].name }}
                        </p>

                        <p class="text-sm opacity-80">
                            {{ testimonials[currentIndex].position }}
                        </p>
                        </div>
                    </div>

                    <div class="flex gap-4 mt-6">
                        <button @click="prev"
                                class="p-3 bg-orange-500 hover:bg-orange-600 text-white rounded shadow">
                        &lt;
                        </button>
                        <button @click="next"
                                class="p-3 bg-orange-500 hover:bg-orange-600 text-white rounded shadow">
                        &gt;
                        </button>
                    </div>
                </div>

            </div>
        </div> -->

        <!-- PROYEK -->
        <div class="py-20 px-6 md:px-16 lg:px-24 xl:px-32 bg-white">
            <div class="flex flex-col">

                <p class="text-sm text-orange-500 uppercase">AR-BUILDERS</p>
                <h1 class="text-3xl sm:text-4xl font-semibold mb-10 text-slate-800">
                Jelajahi Proyek Kami
                </h1>

                <div class="grid md:grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">

                    <!-- CARD 1 -->
                    <div class="flex flex-col bg-white shadow-xl border border-gray-300 rounded-2xl overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                        <div class="w-full h-48 sm:h-56 md:h-60">
                            <img src="https://images.unsplash.com/photo-1640416198776-e24939eb9fdc?w=600&auto=format&fit=crop&q=60"
                                class="w-full h-full object-cover" />
                        </div>

                        <div class="flex flex-col justify-between h-full p-5">
                            <h1 class="text-xl font-semibold text-slate-800">
                                Renovasi Rumah – Bandung
                            </h1>

                            <div class="flex flex-wrap gap-3 mt-4">
                                <p class="flex items-center text-xs sm:text-sm gap-2 border border-gray-400 px-2 py-1 rounded-full text-gray-600">
                                    <MapPinIcon class="w-5 h-5" /> Indonesia
                                </p>
                                <p class="flex items-center text-xs sm:text-sm gap-2 border border-gray-400 px-2 py-1 rounded-full text-gray-600">
                                    <BuildingOffice2Icon class="w-5 h-5" /> Power & Industrial
                                </p>
                                <p class="flex items-center text-xs sm:text-sm gap-2 border border-gray-400 px-2 py-1 rounded-full text-gray-600">
                                    <WrenchScrewdriverIcon class="w-5 h-5" /> Power & Industrial
                                </p>
                            </div>

                            
                        </div>
                    </div>

                    <!-- CARD 2 -->
                    <div class="flex flex-col bg-white shadow-xl border border-gray-300 rounded-2xl overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                        <div class="w-full h-48 sm:h-56 md:h-60">
                            <img src="https://images.unsplash.com/photo-1640416198776-e24939eb9fdc?w=600&auto=format&fit=crop&q=60"
                                class="w-full h-full object-cover" />
                        </div>

                        <div class="flex flex-col justify-between h-full p-5">
                            <h1 class="text-xl font-semibold text-slate-800">
                                Renovasi Rumah – Bandung
                            </h1>

                            <div class="flex flex-wrap gap-3 mt-4">
                                <p class="flex items-center text-xs sm:text-sm gap-2 border border-gray-400 px-2 py-1 rounded-full text-gray-600">
                                    <MapPinIcon class="w-5 h-5" /> Indonesia
                                </p>
                                <p class="flex items-center text-xs sm:text-sm gap-2 border border-gray-400 px-2 py-1 rounded-full text-gray-600">
                                    <BuildingOffice2Icon class="w-5 h-5" /> Power & Industrial
                                </p>
                                <p class="flex items-center text-xs sm:text-sm gap-2 border border-gray-400 px-2 py-1 rounded-full text-gray-600">
                                    <WrenchScrewdriverIcon class="w-5 h-5" /> Power & Industrial
                                </p>
                            </div>

                            
                        </div>
                    </div>

                    <!-- CARD 3 -->
                    <div class="flex flex-col bg-white shadow-xl border border-gray-300 rounded-2xl overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                        <div class="w-full h-48 sm:h-56 md:h-60">
                            <img src="https://images.unsplash.com/photo-1640416198776-e24939eb9fdc?w=600&auto=format&fit=crop&q=60"
                                class="w-full h-full object-cover" />
                        </div>

                        <div class="flex flex-col justify-between h-full p-5">
                            <h1 class="text-xl font-semibold text-slate-800">
                                Renovasi Rumah – Bandung
                            </h1>

                            <div class="flex flex-wrap gap-3 mt-4">
                                <p class="flex items-center text-xs sm:text-sm gap-2 border border-gray-400 px-2 py-1 rounded-full text-gray-600">
                                    <MapPinIcon class="w-5 h-5" /> Indonesia
                                </p>
                                <p class="flex items-center text-xs sm:text-sm gap-2 border border-gray-400 px-2 py-1 rounded-full text-gray-600">
                                    <BuildingOffice2Icon class="w-5 h-5" /> Power & Industrial
                                </p>
                                <p class="flex items-center text-xs sm:text-sm gap-2 border border-gray-400 px-2 py-1 rounded-full text-gray-600">
                                    <WrenchScrewdriverIcon class="w-5 h-5" /> Power & Industrial
                                </p>
                            </div>

                            
                        </div>
                    </div>
                </div>

                <RouterLink to="/proyek" class="mt-12 px-5 py-2 flex items-center gap-2 cursor-pointer bg-orange-500 hover:bg-orange-600 text-white w-fit rounded-lg mx-auto">
                    Lihat Semua Proyek
                    <ArrowRightIcon class="w-5 h-5" />
                </RouterLink>

            </div>
        </div>

        <!--  -->
        <div class="py-20 px-6 md:px-16 lg:px-24 xl:px-32 bg-gray-100">
            <div class="flex flex-col md:flex-row items-center gap-8 bg-orange-100 p-6 md:p-10 rounded-2xl">

                <div class="w-full md:h-[400px]">
                    <img src="https://images.unsplash.com/photo-1694521787193-9293daeddbaa?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        class="w-full h-full object-cover rounded-2xl">
                </div>

                <div class="w-full p-2 md:p-5">
                    <h1 class="text-2xl sm:text-3xl md:text-4xl mb-4 font-semibold text-slate-800">
                        Kami Ahli dalam Membangun Mimpi
                    </h1>

                    <p class="text-gray-600 mb-5 text-sm sm:text-base">
                        Kami menghadirkan layanan konstruksi yang mengutamakan kualitas, ketepatan waktu, dan keamanan. Dengan pengalaman bertahun-tahun di bidang pembangunan rumah, gedung, hingga proyek komersial, kami siap mewujudkan ide Anda menjadi hasil nyata yang bernilai dan berkelanjutan.
                    </p>

                    <RouterLink to="/kontak" class="text-white rounded-lg bg-orange-500 hover:bg-orange-600 transition px-5 py-2 text-sm sm:text-base">
                        Hubungi Kami
                    </RouterLink>
                </div>

            </div>
        </div>

        <!-- KOMITMEN -->
        <div class="py-20 px-6 md:px-16 lg:px-24 xl:px-32">
            <div class="flex flex-col md:flex-row justify-between gap-10">

                <div class="w-full md:w-1/3 flex flex-col">
                    <h1 class="text-3xl font-semibold text-slate-800 mb-3">Komitmen Kami</h1>
                    <p class="text-gray-500 text-lg md:text-xl">
                        Kami mengutamakan tempat kerja yang aman dan berkelanjutan, menghargai karyawan kami, dan melindungi lingkungan.
                    </p>
                </div>

                <div class="w-full md:w-2/3">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">

                        <!-- CARD 1 -->
                        <div class="flex flex-col justify-between h-full bg-white shadow-xl transition-all duration-300 border border-gray-300 rounded-2xl overflow-hidden">
                            <div class="w-full h-[250px]">
                                <img src="https://plus.unsplash.com/premium_photo-1664301191471-0dc137e504bc?w=600&auto=format&fit=crop&q=60"
                                    class="w-full h-full object-cover">
                            </div>
                            <div class="flex flex-col h-full p-5">
                                <h1 class="text-2xl font-semibold text-slate-800 mb-4">Keselamatan</h1>
                                <p class="text-gray-600">
                                    Sistem manajemen keselamatan kami mengedepankan budaya keselamatan proaktif yang berfokus pada kesejahteraan pekerja, praktik kerja yang aman, dan perlindungan lingkungan.
                                </p>
                                <RouterLink class="flex items-center w-fit gap-2 mt-4 font-semibold text-orange-500">
                                    Selengkapnya <ArrowRightIcon class="w-5 h-5"/>
                                </RouterLink>
                            </div>
                        </div>

                        <!-- CARD 2 -->
                        <div class="flex flex-col justify-between h-full bg-white shadow-xl transition-all duration-300 border border-gray-300 rounded-2xl overflow-hidden">
                            <div class="w-full h-[250px]">
                                <img src="https://images.unsplash.com/photo-1759922378222-47ad736a174d?w=600&auto=format&fit=crop&q=60"
                                    class="w-full h-full object-cover">
                            </div>
                            <div class="flex flex-col h-full p-5">
                                <h1 class="text-2xl font-semibold text-slate-800 mb-4">Keberlanjutan</h1>
                                <p class="text-gray-600">
                                    Pembangunan berkelanjutan merupakan bagian integral dari pertumbuhan operasional perusahaan kami, dan kami berkomitmen untuk memberikan kontribusi yang berharga dalam mencapai tujuan pembangunan berkelanjutan.
                                </p>
                                <RouterLink class="flex items-center w-fit gap-2 mt-4 font-semibold text-orange-500">
                                    Selengkapnya <ArrowRightIcon class="w-5 h-5"/>
                                </RouterLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


         <!-- KEUNGGULAN -->
        <div class="py-20 px-6 md:px-16 lg:px-24 xl:px-32 bg-gray-100">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                <div class="flex justify-center md:justify-start">
                    <img src="/assets/keunggulan.png" 
                        class="w-full max-w-sm md:max-w-md object-contain" 
                        alt="">
                </div>

                <div class="flex flex-col max-w-xl">
                    <h1 class="text-3xl font-semibold text-slate-800 mb-3">Kenapa Memilih Kami?</h1>
                    <p class="text-gray-500">
                        Di ZR-BUILDERS, kami berkomitmen menghadirkan hasil terbaik melalui proses kerja yang terencana, 
                        terukur, dan penuh dedikasi. Setiap proyek kami bangun dengan standar kualitas tinggi serta 
                        tim berpengalaman di bidang konstruksi.
                    </p>

                    <div class="flex flex-col gap-6 mt-8">

                        <div class="flex items-start gap-4">
                            <div class="p-3 bg-orange-100 rounded-xl">
                                <CheckBadgeIcon class="w-8 h-8 text-orange-500"/>
                            </div>
                            <div>
                                <h1 class="font-semibold text-slate-800">Kualitas Terbaik</h1>
                                <p class="text-gray-500 text-sm">
                                    Material pilihan dengan standar pengerjaan tinggi untuk hasil yang kokoh dan aman.
                                </p>
                            </div>
                        </div>

                        <div class="flex items-start gap-4">
                            <div class="p-3 bg-orange-100 rounded-xl">
                                <UserGroupIcon class="w-8 h-8 text-orange-500"/>
                            </div>
                            <div>
                                <h1 class="font-semibold text-slate-800">Tim Profesional & Berpengalaman</h1>
                                <p class="text-gray-500 text-sm">
                                    Ditangani tenaga ahli di bidang konstruksi, arsitektur, dan manajemen proyek.
                                </p>
                            </div>
                        </div>

                        <div class="flex items-start gap-4">
                            <div class="p-3 bg-orange-100 rounded-xl">
                                <ClockIcon class="w-8 h-8 text-orange-500"/>
                            </div>
                            <div>
                                <h1 class="font-semibold text-slate-800">Tepat Waktu</h1>
                                <p class="text-gray-500 text-sm">
                                    Timeline jelas dan komitmen penyelesaian sesuai jadwal.
                                </p>
                            </div>
                        </div>

                        <div class="flex items-start gap-4">
                            <div class="p-3 bg-orange-100 rounded-xl">
                                <BanknotesIcon class="w-8 h-8 text-orange-500"/>
                            </div>
                            <div>
                                <h1 class="font-semibold text-slate-800">Harga Transparan & Kompetitif</h1>
                                <p class="text-gray-500 text-sm">
                                    Rincian biaya jelas tanpa hidden cost — nyaman dalam mengatur anggaran.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <!-- CTA -->
        <div class="relative">
            <div class="w-full h-[450px] md:h-[450px] lg:h-[550px]">
                <img 
                    src="https://images.unsplash.com/photo-1567954970774-58d6aa6c50dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvcmtlcnxlbnwwfDB8MHx8fDA%3D"
                    alt=""
                    class="h-full w-full object-cover object-center"
                >
            </div>

            <div class="absolute inset-0 bg-black/60 flex items-center justify-center px-6 md:px-20 lg:px-32">
                <div class="flex flex-col items-center text-center gap-6 max-w-3xl">

                    <p class="text-white text-lg md:text-xl tracking-wide italic">
                        PT ZR-Builders
                    </p>

                    <h1 class="text-3xl md:text-5xl lg:text-6xl text-white font-bold leading-tight">
                        Siap Membangun atau Renovasi<br class="hidden md:block"> Bangunan Anda
                    </h1>

                    <p class="text-white text-base md:text-xl">
                        Hubungi kami untuk konsultasi dan estimasi biaya.
                    </p>

                    <div class="flex flex-col md:flex-row items-center gap-4 mt-4">
                        <RouterLink to="/kontak"
                            class="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition"
                        >
                            Konsultasi Sekarang
                        </RouterLink>

                        <RouterLink to="/layanan"
                            class="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-slate-900 transition"
                        >
                            Lihat Layanan
                        </RouterLink>
                    </div>

                </div>
            </div>
        </div>

        <!-- FOOTER -->
        <Footer/>
    </div>
</template>