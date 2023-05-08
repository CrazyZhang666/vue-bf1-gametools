<script setup>
defineProps(["player", "index"]);
</script>

<template>
  <div class="player">
    <div class="index">{{ index + 1 }}</div>
    <img :src="`https://cdn.gametools.network/bf1/${player.rank}.png`" alt="" />
    <div class="rank">{{ player.rank }}</div>
    <div class="platoon">{{ player.platoon }}</div>
    <div class="name">{{ player.name }}</div>
    <div class="latency">{{ player.latency }} ms</div>
  </div>
</template>

<style scoped>
.player {
  display: flex;
  height: 26px;
  padding: 5px;
  align-items: center;
}
.player:hover {
  color: #000;
  background-color: #fff;
}
.player > img {
  width: 26px;
  height: 26px;
  margin-right: 10px;
}
.player .index {
  width: 30px;
  font-size: 0.8em;
}
.player .rank {
  width: 46px;
}
.player .platoon {
  width: 60px;
}
.player .name {
  flex: 1;
}
.player .latency {
  text-align: right;
  width: 70px;
  font-size: 14px;
}
</style>
