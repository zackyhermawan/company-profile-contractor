<script setup>
import { RouterLink } from 'vue-router';
import Footer from '../components/Footer.vue';
import HeaderAbout from '../components/HeaderAbout.vue';
import { ref } from 'vue';
import { XMarkIcon } from '@heroicons/vue/16/solid';

const activeTab = ref('komisaris')
const showModal = ref(false)
const selectedPerson = ref({})

const listKomisaris = [
    {
        id: 1,
        name: 'Joko Haryanto',
        jabatan: 'Komisaris Utama',
        image: 'https://i.pinimg.com/1200x/ab/51/27/ab512756caf4217944240a59aaacd0a0.jpg',
        deskripsi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, laboriosam doloremque facilis quae vero consequatur odio nam necessitatibus est, assumenda aspernatur ad ipsa natus possimus quos porro doloribus, in sapiente',
    },
    {
        id: 2,
        name: 'Michael',
        jabatan: 'Wakil Komisaris Utama',
        image: 'https://i.pinimg.com/1200x/39/6c/74/396c741c3d37ad0199ac220d16169e3e.jpg',
        deskripsi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, laboriosam doloremque facilis quae vero consequatur odio nam necessitatibus est, assumenda aspernatur ad ipsa natus possimus quos porro doloribus, in sapiente',
    },
    {
        id: 3,
        name: 'Jefri',
        jabatan: 'Komisaris',
        image: 'https://i.pinimg.com/1200x/df/0a/20/df0a2049a88366c1e84ee71e565143cb.jpg',
        deskripsi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, laboriosam doloremque facilis quae vero consequatur odio nam necessitatibus est, assumenda aspernatur ad ipsa natus possimus quos porro doloribus, in sapiente',
    },
    {
        id: 4,
        name: 'Suprianto',
        jabatan: 'Komisaris',
        image: 'https://i.pinimg.com/1200x/7a/78/68/7a7868d0a50534f9759244b98d3f6535.jpg',
        deskripsi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, laboriosam doloremque facilis quae vero consequatur odio nam necessitatibus est, assumenda aspernatur ad ipsa natus possimus quos porro doloribus, in sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, laboriosam doloremque facilis quae vero consequatur odio nam necessitatibus est, assumenda aspernatur ad ipsa natus possimus quos porro doloribus, in sapiente',
    },
    {
        id: 5,
        name: 'Ahmad',
        jabatan: 'Komisaris',
        image: 'https://i.pinimg.com/736x/99/8e/5c/998e5c14d82488f249103493507bbcf8.jpg',
        deskripsi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, laboriosam doloremque facilis quae vero consequatur odio nam necessitatibus est, assumenda aspernatur ad ipsa natus possimus quos porro doloribus, in sapiente',
    },
]

const ListDirektur = [
    {
        id: 1,
        name: 'Joko Haryanto',
        jabatan: 'President Director & CEO',
        image: 'https://i.pinimg.com/1200x/ab/51/27/ab512756caf4217944240a59aaacd0a0.jpg',
        deskripsi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, laboriosam doloremque facilis quae vero consequatur odio nam necessitatibus est, assumenda aspernatur ad ipsa natus possimus quos porro doloribus, in sapiente',
    },
    {
        id: 2,
        name: 'Michael',
        jabatan: 'Finance Commercial Director',
        image: 'https://i.pinimg.com/1200x/39/6c/74/396c741c3d37ad0199ac220d16169e3e.jpg',
        deskripsi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, laboriosam doloremque facilis quae vero consequatur odio nam necessitatibus est, assumenda aspernatur ad ipsa natus possimus quos porro doloribus, in sapiente',
    },
    {
        id: 3,
        name: 'Jefri',
        jabatan: 'People, Culture, & Sustainability Director',
        image: 'https://i.pinimg.com/1200x/df/0a/20/df0a2049a88366c1e84ee71e565143cb.jpg',
        deskripsi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, laboriosam doloremque facilis quae vero consequatur odio nam necessitatibus est, assumenda aspernatur ad ipsa natus possimus quos porro doloribus, in sapiente',
    },
    {
        id: 4,
        name: 'Suprianto',
        jabatan: 'COO Buisness Unit Asset Solutions',
        image: 'https://i.pinimg.com/1200x/7a/78/68/7a7868d0a50534f9759244b98d3f6535.jpg',
        deskripsi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, laboriosam doloremque facilis quae vero consequatur odio nam necessitatibus est, assumenda aspernatur ad ipsa natus possimus quos porro doloribus, in sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, laboriosam doloremque facilis quae vero consequatur odio nam necessitatibus est, assumenda aspernatur ad ipsa natus possimus quos porro doloribus, in sapiente',
    },
    {
        id: 5,
        name: 'Ahmad',
        jabatan: 'COO Buisness Unit Green Energy Development',
        image: 'https://i.pinimg.com/736x/99/8e/5c/998e5c14d82488f249103493507bbcf8.jpg',
        deskripsi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, laboriosam doloremque facilis quae vero consequatur odio nam necessitatibus est, assumenda aspernatur ad ipsa natus possimus quos porro doloribus, in sapiente',
    },
    {
        id: 6,
        name: 'John',
        jabatan: 'COO Buisness Unis Engineering & Construction',
        image: 'https://i.pinimg.com/736x/99/8e/5c/998e5c14d82488f249103493507bbcf8.jpg',
        deskripsi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, laboriosam doloremque facilis quae vero consequatur odio nam necessitatibus est, assumenda aspernatur ad ipsa natus possimus quos porro doloribus, in sapiente',
    },
]



const openModal = (person)=> {
    selectedPerson.value = person
    showModal.value = true
}

const closeModal = ()=> {
    showModal.value = false
}

</script>

<template>
    <div class="">
        <HeaderAbout image="/assets/about/hero_profile_perusahaan.jpg" title="Perusahaan" breadcrumb="Profil Perusahaan"/>
        <div class="px-6 md:px-16 lg:px-24 xl:px-32 py-20">
            <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
                <div class="flex flex-col">
                    <h1 class="text-2xl md:text-4xl font-semibold text-slate-800 mb-5">Profile Perusahaan</h1>
                    <p class="text-gray-600 tracking-wider text-sm leading-normal mb-4">ZR-Builders adalah perusahaan konstruksi yang berfokus pada penyediaan layanan pembangunan berkualitas tinggi untuk sektor perumahan, komersial, dan industri. Sejak berdiri, kami berkomitmen memberikan hasil yang kuat, aman, dan berstandar tinggi melalui perencanaan matang serta penggunaan teknologi konstruksi modern.</p>

                    <p class="text-gray-600 tracking-wider text-sm leading-normal mb-4">Dengan tim yang terdiri dari tenaga ahli berpengalaman, kami selalu mengutamakan ketelitian dalam setiap tahap pekerjaan, mulai dari perencanaan, pengawasan, hingga penyelesaian proyek. Pendekatan ini menjadikan setiap proyek yang kami tangani memiliki kualitas yang konsisten dan dapat diandalkan.</p>

                    <p class="text-gray-600 tracking-wider text-sm leading-normal mb-4">ZR-Builders juga menjunjung tinggi nilai integritas dan transparansi. Kami percaya bahwa hubungan baik dengan klien dibangun melalui komunikasi yang jelas, proses yang jujur, dan penyelesaian pekerjaan tepat waktu. Oleh karena itu, kami selalu memastikan setiap klien mendapatkan informasi lengkap terkait perkembangan proyek mereka.</p>

                    <p class="text-gray-600 tracking-wider text-sm leading-normal mb-4">Ke depan, kami berambisi menjadi mitra konstruksi yang semakin dipercaya dan berkembang, dengan terus melakukan inovasi serta meningkatkan standar layanan. Dengan pengalaman, keahlian, dan komitmen yang kuat, ZR-Builders siap mewujudkan berbagai kebutuhan konstruksi secara profesional dan berkelanjutan.</p>
                </div>
                <div class="w-full h-full rounded-2xl">
                    <img src="/assets/about/img_profile_perusahaan.jpg" alt="" class="w-full h-full object-cover rounded-2xl">
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-5 py-20">
                <div class="flex items-center flex-col bg-gray-100 py-14 px-10">
                    <div class="w-20 h-20 mb-3">
                        <img src="https://cdn-icons-png.flaticon.com/128/2421/2421304.png" alt="" class="w-full h-full">
                    </div>
                    <h1 class="text-2xl font-semibold mb-4 text-slate-800">Visi</h1>
                    <p class="text-slate-800 text-center">Menjadi perusahaan konstruksi yang dipercaya dan diakui karena kualitas, profesionalisme, serta kemampuan menghadirkan hasil pembangunan yang berkelanjutan dan bernilai tinggi bagi masyarakat.</p>
                </div>
                <div class="flex items-center flex-col bg-gray-100 py-14 px-10">
                    <div class="w-20 h-20 mb-3">
                        <img src="https://cdn-icons-png.flaticon.com/128/3721/3721184.png" alt="" class="w-full h-full">
                    </div>
                    <h1 class="text-2xl font-semibold mb-4 text-slate-800">Misi</h1>
                    <p class="text-slate-800 text-center">Misi kami adalah memberikan layanan konstruksi yang tepat waktu, aman, dan berkualitas melalui tenaga ahli yang kompeten. Kami berkomitmen menjaga kepercayaan klien dengan bekerja secara transparan, terus berinovasi, dan menyediakan solusi pembangunan yang efisien serta bertanggung jawab.</p>
                </div>
            </div>
        </div>

        <div class="flex flex-col px-6 md:px-16 lg:px-24 xl:px-32 py-20 bg-gray-100">
            <h1 class="text-slate-800 font-semibold text-2xl md:text-4xl text-center mb-5">Legalitas Perusahaan</h1>

            <div class="w-full h-full">
                <img src="/assets/about/company_legality_profile_perusahaan.png" alt="" class="w-full h-full">
            </div>
        </div>

        <div class="px-6 md:px-16 lg:px-24 xl:px-32 py-20 bg-white">
            <div class="flex flex-col">
                <h1 class="text-slate-800 text-2xl md:text-4xl font-semibold text-center">Our Leadership</h1>
                
                <div class="flex justify-center gap-1 mt-10 bg-orange-100 w-fit mx-auto rounded-full">
                    <button
                        @click="activeTab = 'komisaris'"
                        :class="activeTab === 'komisaris'
                        ? 'cursor-pointer font-semibold bg-orange-500 text-white px-12 py-2 rounded-full transition-all duration-200'
                        : 'cursor-pointer font-semibold text-orange-600 px-12 py-2 transition-all duration-200'"
                    >
                        Komisaris
                    </button>

                    <button
                        @click="activeTab = 'direktur'"
                        :class="activeTab === 'direktur'
                        ? 'cursor-pointer font-semibold bg-orange-500 text-white px-12 py-2 rounded-full transition-all duration-200'
                        : 'cursor-pointer font-semibold text-orange-600 px-12 py-2 transition-all duration-200'"
                    >
                        Direktur
                    </button>
                </div>
                
                <div class="mt-10">
                    <!-- Komisaris -->
                    <div v-if="activeTab === 'komisaris'">
                        <div class="flex gap-5 overflow-x-auto pb-4 lg:grid lg:grid-cols-5 lg:gap-5 lg:overflow-visible">
                            <div v-for="item in listKomisaris" :key="item.id" @click="openModal(item)" class="flex flex-col min-w-[280px] lg:min-w-full group transition-all duration-300 cursor-pointer hover:bg-orange-400/85 rounded-2xl">
                                <div class="w-full h-[280px] mb-2 rounded-2xl overflow-hidden">
                                    <img :src="item.image" alt="" class="w-full h-full object-cover hover:scale-125 transition-all duration-300 object-top rounded-2xl">
                                </div>
                                <div class="pt-2 pb-7 px-4">
                                    <h1 class="text-xl text-center font-semibold text-slate-800 group-hover:text-white transition-all duration-300">{{ item.name }}</h1>
                                    <p class="text-gray-600 text-center group-hover:text-gray-100 transition-all duration-300">{{ item.jabatan }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Direktur -->
                    <div v-if="activeTab === 'direktur'">
                        <div class="flex gap-5 overflow-x-auto pb-4 lg:grid lg:grid-cols-6 lg:gap-5 lg:overflow-visible">
                            <div v-for="item in ListDirektur" :key="item.id" @click="openModal(item)" class="flex flex-col min-w-[280px] lg:min-w-full group transition-all duration-300 cursor-pointer hover:bg-orange-400/85 rounded-2xl">
                                <div class="w-full h-[280px] mb-2 rounded-2xl overflow-hidden">
                                    <img :src="item.image" alt="" class="w-full h-full object-cover hover:scale-125 transition-all duration-300 object-top rounded-2xl">
                                </div>
                                <div class="pt-2 pb-7 px-4">
                                    <h1 class="text-xl text-center font-semibold text-slate-800 group-hover:text-white transition-all duration-300">{{ item.name }}</h1>
                                    <p class="text-gray-600 text-center group-hover:text-gray-100 transition-all duration-300">{{ item.jabatan }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="px-6 md:px-16 lg:px-24 xl:px-32 py-20 bg-gray-100">
            <div class="relative">
                <div class="w-full h-[350px] rounded-3xl ">
                    <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="w-full h-full object-cover object-bottom rounded-3xl ">
                </div>
                <div class="absolute inset-0 bg-black/50 rounded-3xl flex items-center justify-start pl-10 md:pl-20">
                    <div class="flex flex-col">
                        <h1 class="text-3xl font-semibold max-w-xs leading-normal tracking-wider mb-3 text-white">Lihat Tata Kelola Kami</h1>
                        <RouterLink to="/tata-kelola" class="px-10 py-2 rounded-full text-white bg-orange-600 hover:bg-orange-700 transition w-fit">Selengkapnya</RouterLink>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal Komisaris -->
         <div
            v-if="showModal"
            class="fixed inset-0 bg-black/50 flex items-center justify-center z-[999] p-4"
        >
            <div class="bg-white max-w-4xl w-full rounded-3xl overflow-hidden relative p-6 md:p-10">
                <button @click="closeModal" class="absolute top-0 right-2 p-2 cursor-pointer">
                    <XMarkIcon class="w-7 h-7"/>
                </button>

                <div class="grid md:grid-cols-2 gap-6 items-center">
                    <div class="w-full h-[350px] overflow-hidden rounded-2xl">
                        <img :src="selectedPerson.image" class="w-full h-full object-cover object-top" />
                    </div>

                    <div class="bg-orange-700 p-6 rounded-2xl h-[350px] overflow-y-auto">
                        <h1 class="text-white text-2xl font-bold mb-1">{{ selectedPerson.name }}</h1>
                        <p class="text-blue-200 font-semibold mb-4">{{ selectedPerson.jabatan }}</p>
                        <p class="text-blue-100 text-sm leading-relaxed whitespace-pre-line">
                            {{ selectedPerson.deskripsi }}
                        </p>
                    </div>
                </div>
            </div>
        </div>


        <Footer/>
    </div>

</template>