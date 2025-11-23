<script setup>
import { RouterLink } from 'vue-router';
import Footer from '../components/Footer.vue';
import HeaderAbout from '../components/HeaderAbout.vue';
import { ref } from 'vue';
import { ChevronDownIcon } from '@heroicons/vue/16/solid';

const activeTab = ref('kode_etik')
const dropdownOpen = ref(false)

const tabs = [
    {id: 'kode_etik', label: 'Kode Etik'},
    {id: 'anti_korupsi', label: 'Anti Korupsi'},
    {id: 'mekanisme_pengaduan', label: 'Mekanisme Pengaduan'},
]

function selectTab(id){
    activeTab.value = id
    dropdownOpen.value = false;
}

</script>

<template>
    <div class="">
        <HeaderAbout image="/assets/about/hero_profile_perusahaan.jpg" title="Perusahaan" breadcrumb="Tata Kelola"/>

        <div class="px-6 md:px-16 lg:px-24 xl:px-32 py-20">
            <div class="flex flex-col">
                <h1 class="text-2xl md:text-4xl font-semibold text-slate-800 text-center mb-5">Tata Kelola Kami</h1>
                <p class="text-gray-600 text-center text-sm md:text-base mb-4 tracking-wide">PT ZR-BUILDERS Indonesia menerapkan prinsip tata kelola perusahaan yang baik (Good Corporate Governance) sebagai dasar dalam menjalankan setiap kegiatan operasional. Kami menjunjung tinggi prinsip transparansi, akuntabilitas, tanggung jawab, independensi, dan kewajaran dalam setiap pengambilan keputusan dan hubungan dengan seluruh pemangku kepentingan. Sistem tata kelola ini dirancang untuk memastikan perusahaan dikelola secara efektif, efisien, dan selalu mematuhi peraturan perundang-undangan yang berlaku di Indonesia.</p>
                <p class="text-gray-600 text-center text-sm md:text-base mb-4 tracking-wide">Sebagai bagian dari komitmen tersebut, perusahaan menerapkan sistem pengawasan berlapis melalui peran aktif Direksi, Dewan Komisaris, serta unit pengawasan internal untuk menjaga kualitas manajemen risiko, integritas keuangan, dan profesionalisme kerja. Kami percaya bahwa penerapan GCG yang konsisten adalah fondasi penting dalam menciptakan kepercayaan, menjaga keberlanjutan bisnis, serta memberikan nilai terbaik bagi klien, mitra bisnis, investor, dan masyarakat.</p>
            </div>
        </div>

        <div class="px-6 md:px-16 lg:px-24 xl:px-32 py-20 bg-gray-50">
            <div class="flex flex-col">
                <h1 class="text-2xl md:text-4xl font-semibold text-slate-800 text-center">Standar Kami</h1>

                <div class="hidden lg:flex justify-center gap-1 my-12 bg-orange-100 w-fit mx-auto rounded-full">
                    <button
                        @click="activeTab = 'kode_etik'"
                        :class="activeTab === 'kode_etik'
                        ? 'cursor-pointer font-semibold bg-orange-500 text-white px-12 py-2 rounded-full transition-all duration-200'
                        : 'cursor-pointer font-semibold text-orange-600 px-12 py-2 transition-all duration-200'"
                    >
                        Kode Etik
                    </button>

                    <button
                        @click="activeTab = 'anti_korupsi'"
                        :class="activeTab === 'anti_korupsi'
                        ? 'cursor-pointer font-semibold bg-orange-500 text-white px-12 py-2 rounded-full transition-all duration-200'
                        : 'cursor-pointer font-semibold text-orange-600 px-12 py-2 transition-all duration-200'"
                    >
                        Anti Korupsi
                    </button>

                    <button
                        @click="activeTab = 'mekanisme_pengaduan'"
                        :class="activeTab === 'mekanisme_pengaduan'
                        ? 'cursor-pointer font-semibold bg-orange-500 text-white px-12 py-2 rounded-full transition-all duration-200'
                        : 'cursor-pointer font-semibold text-orange-600 px-12 py-2 transition-all duration-200'"
                    >
                        Mekanisme Pengaduan
                    </button>
                </div>

                <div class="flex lg:hidden my-12 justify-center w-full px-4">
                    <div class="w-full max-w-sm">
                        <div
                            @click="dropdownOpen = !dropdownOpen"
                            class="bg-orange-500 text-white font-semibold px-6 py-3 rounded-xl flex items-center justify-between cursor-pointer"
                        >
                            <span>{{ tabs.find(t => t.id === activeTab)?.label }}</span>
                            <span class="text-xl transition-transform" :class="dropdownOpen ? 'rotate-180' : ''"><ChevronDownIcon class="w-5 h-5"/></span>
                        </div>

                        <div
                            v-if="dropdownOpen"
                            class="bg-orange-400/90 rounded-xl mt-1 overflow-hidden transition-all"
                        >
                            <div
                                v-for="tab in tabs"
                                :key="tab.id"
                                @click="selectTab(tab.id)"
                                class="px-6 py-3 text-white border-b border-white/30 cursor-pointer hover:bg-orange-600"
                                >
                                {{ tab.label }}
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="activeTab === 'kode_etik'" class="flex flex-col">
                    <div class="w-full h-[300px] lg:h-[400px] rounded-3xl ">
                        <img src="/assets/about/kode_etik.png" alt="" class="w-full h-full object-cover rounded-3xl">
                    </div>

                    <h1 class="text-xl md:text-3xl pt-8 pb-4 text-center font-semibold text-slate-800">Kode Etik</h1>
                    <p class="mb-3 text-sm md:text-base text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, modi blanditiis, dolore ipsam explicabo cum consequatur mollitia et magnam, distinctio illo maiores? Excepturi minima deleniti minus laudantium autem quia odio!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis velit cum natus iste id explicabo quas necessitatibus, quod maiores nesciunt possimus aliquam sint accusantium molestias doloremque expedita delectus voluptas commodi?. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, neque voluptates modi dignissimos fugit officia hic corrupti eos sunt consequuntur quasi at? Aliquam, dicta quaerat. Optio eum ratione magni autem.</p>
                    <p class="mb-3 text-sm md:text-base text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius, aspernatur consectetur cumque debitis, libero sint quo ipsum earum, nostrum sapiente provident vitae illo odit eos reprehenderit saepe aliquam dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quo quia distinctio dolorum sapiente magnam fugiat ullam fugit blanditiis aspernatur amet ex veniam totam illo temporibus possimus, dolorem, ut deleniti:
                    </p>
                    <ul class="list-disc text-sm md:text-base pl-10 text-slate-700">
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quisquam.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet consectetur.</li>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci.</li>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci.</li>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci.</li>
                    </ul>

                </div>
                <div v-if="activeTab === 'anti_korupsi'" class="flex flex-col">
                    <div class="w-full h-[300px] lg:h-[400px] rounded-3xl ">
                        <img src="/assets/about/anti_korupsi.png" alt="" class="w-full h-full object-cover rounded-3xl">
                    </div>

                    <h1 class="text-xl md:text-3xl pt-8 pb-4 text-center font-semibold text-slate-800">Anti Korupsi</h1>
                    <p class="mb-3 text-sm md:text-base text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, modi blanditiis, dolore ipsam explicabo cum consequatur mollitia et magnam, distinctio illo maiores? Excepturi minima deleniti minus laudantium autem quia odio!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis velit cum natus iste id explicabo quas necessitatibus, quod maiores nesciunt possimus aliquam sint accusantium molestias doloremque expedita delectus voluptas commodi?. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, neque voluptates modi dignissimos fugit officia hic corrupti eos sunt consequuntur quasi at? Aliquam, dicta quaerat. Optio eum ratione magni autem.</p>
                    <p class="mb-3 text-sm md:text-base text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius, aspernatur consectetur cumque debitis, libero sint quo ipsum earum, nostrum sapiente provident vitae illo odit eos reprehenderit saepe aliquam dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quo quia distinctio dolorum sapiente magnam fugiat ullam fugit blanditiis aspernatur amet ex veniam totam illo temporibus possimus, dolorem, ut deleniti:
                    </p>
                    <ul class="list-disc text-sm md:text-base pl-10 text-slate-700">
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quisquam.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet consectetur.</li>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci.</li>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci.</li>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci.</li>
                    </ul>

                </div>
                <div v-if="activeTab === 'mekanisme_pengaduan'" class="flex flex-col">
                    <div class="w-full h-[300px] lg:h-[400px] rounded-3xl ">
                        <img src="/assets/about/mekanisme_pengaduan.png" alt="" class="w-full h-full object-cover rounded-3xl">
                    </div>

                    <h1 class="text-xl md:text-3xl pt-8 pb-4 text-center font-semibold text-slate-800">Mekanisme Tata Kelola</h1>
                    <p class="mb-3 text-sm md:text-base text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, modi blanditiis, dolore ipsam explicabo cum consequatur mollitia et magnam, distinctio illo maiores? Excepturi minima deleniti minus laudantium autem quia odio!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis velit cum natus iste id explicabo quas necessitatibus, quod maiores nesciunt possimus aliquam sint accusantium molestias doloremque expedita delectus voluptas commodi?. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, neque voluptates modi dignissimos fugit officia hic corrupti eos sunt consequuntur quasi at? Aliquam, dicta quaerat. Optio eum ratione magni autem.</p>
                    <p class="mb-3 text-sm md:text-base text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius, aspernatur consectetur cumque debitis, libero sint quo ipsum earum, nostrum sapiente provident vitae illo odit eos reprehenderit saepe aliquam dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quo quia distinctio dolorum sapiente magnam fugiat ullam fugit blanditiis aspernatur amet ex veniam totam illo temporibus possimus, dolorem, ut deleniti:
                    </p>
                    <ul class="list-disc text-sm md:text-base pl-10 text-slate-700">
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quisquam.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet consectetur.</li>
                        <li>Lorem ipsum dolor sit.</li>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci.</li>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci.</li>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci.</li>
                    </ul>

                </div>
            </div>
        </div>

        <Footer/>
    </div>

</template>