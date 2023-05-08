<script setup>
defineProps(["player", "index"]);
</script>

<template>
  <div class="player">
    <div class="index">{{ index + 1 }}</div>
    <img :src="`https://cdn.gametools.network/bf1/${player.rank}.png`" alt="" />
    <div class="rank">{{ player.rank }}</div>
    <div class="name" v-if="player.platoon !== ''">
      [{{ player.platoon }}] {{ player.name }}
    </div>
    <div class="name" v-if="player.platoon === ''">{{ player.name }}</div>
    <div class="time">{{ player.join_time }} 分钟</div>
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
  width: 20px;
  text-align: right;
  font-size: 0.8em;
  margin-right: 10px;
}
.player .rank {
  width: 40px;
  font-size: 0.8em;
  text-align: center;
  border: 1px solid gray;
  margin-right: 10px;
}
.player .name {
  flex: 1;
}
.player .time {
  text-align: right;
  width: 60px;
  font-size: 0.8em;
}
.player .latency {
  text-align: right;
  width: 60px;
  font-size: 0.8em;
}
</style>
