<template>
  

  
  
<div
  ref="titleRef"
  :class="[ 
    'transition-all duration-700',
    titleVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-24'
  ]"
>
  <h1 class="text-5xl font-bold text-white text-center my-15">Projects Done by Me</h1>
  <p class="text-white text-2xl font-semibold leading-relaxed mb-10 text-center">
    A brief overview of my creative and technical projects.
  </p>
</div>

<!-- Projects List -->
<div class="text-white min-h-screen flex flex-col justify-center items-center px-6 py-12">
  <div
    v-for="(project, index) in projects"
    :key="project.title"
    :class="[
      'max-w-4xl w-full transition-all duration-700',
      projectVisible[index] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-24'
    ]"
  ><div class="py-10">
    <div class="mb-12 bg-[#1e4463] p-6 rounded-md shadow-lg flex flex-col items-center text-center">
      <!-- Centered Title -->
      <h2 class="text-4xl font-semibold mb-4">{{ project.title }}</h2>

      <!-- Description -->
      <p class="text-2xl font-semibold leading-relaxed mt-4">
        {{ project.description }}
      </p>

      <!-- Image -->
      <div class="rounded overflow-hidden w-full flex justify-center">
        <img :src="project.image" alt="Project image" class="mx-auto">
      </div>

      
    </div>
  </div>
  </div>
</div>






<section class="px-10">
<div>
  <h4 class="text-white text-6xl py-20 ">Contact info</h4>
</div>

<!-- Contact Info -->
<div class="min-h-screen bg-[#1e4463] flex items-center justify-center">
  <div class="w-full max-w-2xl p-6">
    <!-- Wrapper Container with #fffecb background -->
    <div class="bg-[#fffecb] p-10 rounded-lg shadow-lg space-y-10">
      <!-- Header -->
      <div class="py-6 text-center text-2xl font-light text-black w-full">
        How to contact me
      </div>

      <!-- Email -->
      <div>
        <label class="block mb-3 text-lg text-black">Email</label>
        <div class="bg-white p-4 text-gray-600 text-lg w-full rounded">
          alex.terziiski2@gmail.com
        </div>
      </div>

      <!-- Phone Number -->
      <div>
        <label class="block mb-3 text-lg text-black">Phone number</label>
        <div class="bg-white p-4 text-gray-600 text-lg w-full rounded">
          +45 71 45 03 75
        </div>
      </div>

      <!-- Backup Email -->
      <div>
        <label class="block mb-3 text-lg text-black">Back-up email</label>
        <div class="bg-white p-4 text-gray-600 text-lg w-full rounded">
          alex_terziiski@abv.bg
        </div>
      </div>

      <!-- LinkedIn -->
      <div>
        <label class="block mb-3 text-lg text-black">LinkedIn</label>
        <div class="bg-white p-4 text-gray-600 text-lg w-full rounded">
          https://www.linkedin.com/in/aleksandar-terziyski-a0bab2361/
        </div>
      </div>

    </div>
  </div>
</div>
</section>




</template>



  <script setup>
import { ref, onMounted } from 'vue';
import picturesAssets from '../assets/pictures/image.png';
import picturesAssets2 from '../assets/pictures/image2.png';
import picturesAssets3 from '../assets/pictures/image3.png';
import picturesAssets4 from '../assets/pictures/image4.png';
import picturesAssets5 from '../assets/pictures/image5.png';
const projects = [
  {
    title: "Coding Projects",
    link: "/projects/coding",
    image: picturesAssets,
    description: "Websites built using HTML, CSS, and JavaScript during my classes."
  },
  {
    title: "Coding Projects",
    link: "/projects/coding",
    image: picturesAssets2,
    description: "Websites built using HTML, CSS, and JavaScript during my classes."
  },
  {
    title: "Video Editing",
    link: "/projects/video",
    image: picturesAssets5,
    description: "Projects using After Effects and Premiere Pro for creative video content.",
  
  },
  {
    title: "Content Creation",
    link: "/projects/content",
    image: picturesAssets3,
    description: "Designing graphics, business cards, and posters for various assignments."
  },
  {
    title: "UX Projects",
    link: "/projects/ux",
    image: picturesAssets4,
    description: "Projects done for the specific purpose of UX design, including wireframes and prototypes." 
  },
  
];


const titleVisible = ref(false);
const projectVisible = ref(projects.map(() => false));

onMounted(() => {
  titleVisible.value = true;
  projects.forEach((_, index) => {
    setTimeout(() => {
      projectVisible.value[index] = true;
    }, index * 300);
  });
});
</script>


<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
