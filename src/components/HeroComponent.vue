<template>
    <div class="bg-[#1e4463] min-h-screen flex items-center justify-center p-6 ">
      <div class="flex flex-col md:flex-row bg-[#1e4463] text-white max-w-4xl">
        
        <div class="md:w-1/2 animated-item opacity-0 scale-90 transition-all duration-700">
            <img :src="picturesAssets7" alt="Alex Profile">
        </div>
  
        
        <div class="md:w-1/2 p-6 flex items-center animated-item opacity-0 scale-90 transition-all duration-700">
          <p class="text-sm leading-relaxed">
            Hi, I am Alex, I'm a multimedia designer at EASV Esbjerg. I am highly motivated and detail-oriented with a year of experience in multimedia design. I am passionate about and committed to delivering high-quality results. I’m looking for an opportunity to demonstrate my skills and to contribute to the company that is going to hire me.
          </p>
        </div>
      </div>
    </div>
  </template>
  
    
    
    
    <script setup>
    import picturesAssets7 from '../assets/pictures/image7.png';
    import { onMounted } from 'vue';

onMounted(() => {
  const items = document.querySelectorAll('.animated-item');
  items.forEach((item, index) => {
    setTimeout(() => {
      item.classList.remove('opacity-0', 'scale-90');
      item.classList.add('opacity-100', 'scale-100');
    }, index * 200);  
  });
});
    


    
    </script>
    
    
    
    <style>
    
    
    </style>