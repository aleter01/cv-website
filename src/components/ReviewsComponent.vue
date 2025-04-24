<template>
<div>
    <h4 class="text-6xl font-semibold text-white py-15">Projects </h4>
</div>

    <div class="flex flex-col gap-4 w-full">
        <div
  v-for="(skill, index) in skills"
  :key="index"
  class="flex justify-between items-center p-6 rounded-none w-full"
  :class="index % 2 === 0 ? 'bg-white' : 'bg-[#fffecb]'"
>
  <p class="text-black text-lg">{{ skill.name }}</p>

  
  <router-link
    to="/about"
    class="bg-[#1e4463] text-white text-sm rounded-full px-4 py-1 text-center"
  >
    More
  </router-link>

 
</div>

</div>


<!-- Video CV Section -->
<div class="flex flex-col gap-4 w-full py-15">

    <div class=" text-white">
  <!-- Section Title -->
  <h1 class="text-5xl font-bold mb-10 pb-15">Video CV</h1>

  <!-- Content Box -->
  <div class="flex flex-1 justify-between items-center bg-white text-black p-6 rounded-md w-full">
    <!-- Left Text -->
    <p class="text-lg font-medium">
    Here you can see my video CV and the link to my CV: <br>
    <a href="/cv/cv7.pdf" target="_blank" class="!text-black !font-bold">
      View My CV (PDF)
    </a>
  </p>

    <!-- Video Embed -->
    <iframe width="560" height="315" src="https://www.youtube.com/embed/jySsATGBVaA?si=WIKceiKXXggRI7kV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
</div>

</div>


    </template>
    
    <script setup>
    import { useReviews } from "@/modules/useReviews";
    
    
    const { reviews } = useReviews();

    const skills = [
  { name: "Coding" },
  { name: "Video production" },
  { name: "Infographics" },
  { name: "UX design" },
];
    
    </script>
    
    <style scoped>
    .ownGrid-parent {
    display: grid;
    grid-template-columns: repeat(12,1fr);
    }

    .ownGrid{
    grid-column: span 4;
    }
    </style>