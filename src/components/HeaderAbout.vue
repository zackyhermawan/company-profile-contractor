<script setup>

defineProps({
    title: {
        type: String,
        required: true
    },
    breadcrumb: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: false
    }
})


</script>

<template>
    <div class="relative w-full h-[300px]">
        <img 
            :src="image"
            alt="Construction Site Background"
            class="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div class="absolute inset-0 bg-black/40"></div>

        <div class="absolute bottom-0 left-0 w-full text-center">
            <h1 class="text-2xl md:text-3xl text-white font-semibold mb-3 tracking-widest text-shadow-2xs">{{ title }}</h1>

            <div class="max-w-xs md:max-w-lg mx-auto bg-orange-500 py-3 rounded-tl-full rounded-tr-full">
                <div class="flex items-center justify-center">

                    <RouterLink to="/" class="text-white underline mr-1 text-sm md:text-base">Home</RouterLink>
                    <span class="text-white mx-1">/</span>
    
                    <template v-if="link">
                        <RouterLink :to="`/${link}`" class="text-white underline mr-1 text-sm md:text-base">{{ link }}</RouterLink>
                        <span class="text-white mx-1">/</span>
                    </template>
    
                    <p class="text-slate-100 text-sm md:text-base">{{ breadcrumb }}</p>
                </div>
            </div>
        </div>
    </div>
</template>