<script setup>
import { ref, onMounted } from "vue";

import MainMenu from "./components/MainMenu.vue";

import background_video_01 from "@/assets/video/MP_Naval_BGLoop.mp4";
import background_video_02 from "@/assets/video/MP_Harbor_BGLoop.mp4";
import background_video_03 from "@/assets/video/MP_Beachhead_BGLoop.mp4";
import background_video_04 from "@/assets/video/MP_Ridge_BGLoop.mp4";

const back_image = ref("");
const back_video = ref("");

onMounted(() => {
  switchBackVideo(Math.floor(Math.random() * 4 + 1));
});

function switchBackVideo(index) {
  switch (index) {
    case 1:
      back_image.value =
        "https://eaassets-a.akamaihd.net/battlelog/battlebinary/sparta/assets/tunguska/backgrounds/MP_Naval_BGLoop-dd6e9a89.jpg";
      back_video.value = background_video_01;
      break;
    case 2:
      back_image.value =
        "https://eaassets-a.akamaihd.net/battlelog/battlebinary/sparta/assets/tunguska/backgrounds/MP_Harbor_BGLoop-70b9c5f4.jpg";
      back_video.value = background_video_02;
      break;
    case 3:
      back_image.value =
        "https://eaassets-a.akamaihd.net/battlelog/battlebinary/sparta/assets/tunguska/backgrounds/MP_Beachhead_BGLoop-4f04c02e.jpg";
      back_video.value = background_video_03;
      break;
    case 4:
    default:
      back_image.value =
        "https://eaassets-a.akamaihd.net/battlelog/battlebinary/sparta/assets/tunguska/backgrounds/MP_Ridge_BGLoop-22333a03.jpg";
      back_video.value = background_video_04;
      break;
  }
}
</script>

<template>
  <video autoplay loop muted preload="auto" :poster="back_image">
    <source :src="back_video" type="video/mp4" />
  </video>
  <main>
    <MainMenu />
  </main>
</template>

<style scoped>
video {
  width: 100%;
  height: 100%;
  position: fixed;
  object-fit: cover;
  z-index: -999;
}

main {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(16px);
}
</style>
