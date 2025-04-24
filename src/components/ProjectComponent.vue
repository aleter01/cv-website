<template>
    <section class="mb-10">
      <div>
        <h4 class="text-white text-6xl py-15">About me</h4>
      </div>
  
      <div class="bg-white h-screen w-full flex items-center justify-center p-8">
        <div class="flex flex-wrap gap-8 justify-center max-w-5xl w-full">
          <div
            v-for="quality in qualities"
            :key="quality.text"
            class="animated-card w-[calc(50%-1rem)] p-6 rounded-md opacity-0 translate-y-5 transition-all duration-700"
            :class="quality.bgColor"
          >
            <p class="text-base leading-relaxed" :class="quality.textColor">
              {{ quality.text }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </template>
 
 <script setup>
 import { onMounted } from 'vue';

const qualities = [
  {
    text: "Creative - I strive to think outside the box every chance I get!",
    bgColor: "bg-[#1e4463]",
    textColor: "text-white",
  },
  {
    text: "Consistent – If I set my mind on anything, I see it done.",
    bgColor: "bg-[#fffecb]",
    textColor: "text-black",
  },
  {
    text: "Resourceful – I always find ways to finish my work!",
    bgColor: "bg-[#fffecb]",
    textColor: "text-black",
  },
  {
    text: "Open-minded – Always willing to consider different views.",
    bgColor: "bg-[#1e4463]",
    textColor: "text-white",
  },
];

onMounted(() => {
  const cards = document.querySelectorAll('.animated-card');
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.remove('opacity-0', 'translate-y-5');
      card.classList.add('opacity-100', 'translate-y-0');
    }, index * 200);
  });
});
 </script>
 
 
 <style>
 
 </style>
 