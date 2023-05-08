<script setup>
import { ref, inject } from "vue";

import PlayerItem from "./PlayerItem.vue";
import Loading from "./Loading.vue";

const axios = inject("$axios");

const serverRaw = ref({});

const team1Player = ref([]);
const team2Player = ref([]);

const isLoading = ref(false);

function getServerPlayerList(server) {
  team1Player.value = [];
  team2Player.value = [];

  serverRaw.value = server;

  isLoading.value = true;

  axios({
    method: "get",
    url: "https://api.gametools.network/bf1/players/",
    params: {
      gameId: server.gameId,
    },
  })
    .then((res) => {
      res.data.teams[0].players.sort((a, b) => {
        return b.rank - a.rank;
      });
      res.data.teams[1].players.sort((a, b) => {
        return b.rank - a.rank;
      });

      team1Player.value = [];
      team2Player.value = [];

      for (let item of res.data.teams[0].players) {
        team1Player.value.push(item);
      }
      for (let item of res.data.teams[1].players) {
        team2Player.value.push(item);
      }

      isLoading.value = false;
    })
    .catch((err) => {
      console.log(err);

      isLoading.value = false;
    });
}

defineExpose({
  getServerPlayerList,
});
</script>

<template>
  <div class="score">
    <div class="team">
      <div class="team1">
        <Loading v-if="isLoading" />
        <PlayerItem
          v-for="(player, index) in team1Player"
          :player="player"
          :index="index"
        />
      </div>
      <div class="team2">
        <Loading v-if="isLoading" />
        <PlayerItem
          v-for="(player, index) in team2Player"
          :player="player"
          :index="index"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.score {
  color: #fff;
  width: 100%;
  height: 100%;
}
.team {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: stretch;
}
.team1,
.team2 {
  flex: 1;
  overflow: auto;
  padding: 10px;
  border: 1px solid gray;
}
.team1 {
  margin-right: 5px;
}
.team2 {
  margin-left: 5px;
}
</style>
