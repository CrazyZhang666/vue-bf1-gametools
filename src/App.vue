<script setup>
import { ref, inject, computed } from "vue";

import getRegionImage from "@/utils/region.js";

import ServerItem from "./components/ServerItem.vue";
import ScoreInfo from "./components/ScoreInfo.vue";

import Loading from "./components/Loading.vue";

const axios = inject("$axios");

const childRef = ref();
const serverList = ref({});

const filterKey = ref("");
const selectServer = ref({});

let imgIndex = 4;
const isLoading = ref(false);

const filterServerList = computed(() => {
  if (filterKey.value === "") return serverList.value;

  filterKey.value = filterKey.value.toLowerCase();

  return serverList.value.filter((server) => {
    let prefix = server.prefix.toLowerCase();
    return prefix.indexOf(filterKey.value) !== -1;
  });
});

function switchBackImage() {
  if (++imgIndex > 4) imgIndex = 1;

  document.documentElement.style.setProperty(
    "--background-image",
    `var(--background-image-0${imgIndex})`
  );
}

function refreshServerList(region) {
  filterKey.value = "";
  getServerList(region);
}

function getServerList(region) {
  serverList.value = {};

  isLoading.value = true;

  axios({
    method: "get",
    url: "https://api.gametools.network/bf1/servers/",
    params: {
      name: "",
      region,
      platform: "pc",
      limit: "200",
      player_filters: "none,onetofive,sixtoten,tenPlus",
      lang: "zh-tw",
    },
  })
    .then((res) => {
      res.data.servers.sort((a, b) => {
        if (a.playerAmount == b.playerAmount) {
          return b.inQue - a.inQue;
        }
        return b.playerAmount - a.playerAmount;
      });

      for (let item of res.data.servers) {
        let region = item.region.toLowerCase();
        item["regionImage"] = getRegionImage(region);
      }

      serverList.value = res.data.servers;

      isLoading.value = false;
    })
    .catch((err) => {
      console.log(err);

      isLoading.value = false;
    });
}

function serverClikc(server) {
  selectServer.value = server;
  childRef.value.getServerPlayerList(server);
}
</script>

<template>
  <div class="main">
    <div class="panel">
      <img
        @click="switchBackImage"
        src="@/assets/images/other/logo_console-55b4af21.png"
      />
      <button @click="refreshServerList('all')">全部區域</button>
      <button @click="refreshServerList('asia')">亞洲</button>
      <button @click="refreshServerList('eu')">歐洲</button>
      <button @click="refreshServerList('oc')">大洋洲</button>
      <button @click="refreshServerList('nam')">北美洲</button>
      <button @click="refreshServerList('sam')">南美洲</button>
      <div></div>
      <label>結果: {{ filterServerList.length }}</label>
      <input type="text" v-model="filterKey" placeholder="篩選結果" />
    </div>
    <div class="info">
      <img
        :src="
          selectServer.teams === undefined
            ? ''
            : selectServer.teams.teamOne.image
        "
        :title="
          selectServer.teams === undefined
            ? ''
            : selectServer.teams.teamOne.name
        "
      />
      <div class="details">
        <div class="prefix">{{ selectServer.prefix }}</div>
        <div class="more" v-if="selectServer.teams != undefined">
          <img :src="selectServer.regionImage" :title="selectServer.region" />
          <div>
            {{ selectServer.mode }} - {{ selectServer.currentMap }} - 60HZ
          </div>
          <div>|</div>
          <div>
            {{ selectServer.playerAmount }} / {{ selectServer.maxPlayers }} [{{
              selectServer.inQue
            }}]
          </div>
          <div>|</div>
          <div>{{ selectServer.gameId }}</div>
          <div>|</div>
          <div>{{ selectServer.serverId }}</div>
        </div>
      </div>
      <img
        :src="
          selectServer.teams === undefined
            ? ''
            : selectServer.teams.teamTwo.image
        "
        :title="
          selectServer.teams === undefined
            ? ''
            : selectServer.teams.teamTwo.name
        "
      />
    </div>
    <div class="servers">
      <Loading v-if="isLoading" />
      <ServerItem
        v-for="(server, index) in filterServerList"
        :server="server"
        :index="index"
        @click="serverClikc(server)"
      />
    </div>
    <div class="players">
      <ScoreInfo ref="childRef" />
    </div>
  </div>
</template>

<style scoped>
.main {
  height: 100%;
  width: 100%;
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  row-gap: 10px;
  column-gap: 10px;
}
.panel {
  display: flex;
  align-items: center;
}
.panel > img {
  height: 30px;
  margin-right: 10px;
}
.panel > div {
  flex: 1;
}
.panel > label {
  color: #fff;
  font-size: 0.8em;
  margin-right: 10px;
}
.info {
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.info img {
  height: 40px;
}
.info .details {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.info .details .prefix {
  font-size: 18px;
  font-weight: bold;
}
.info .details .more {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.info .details .more > img {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
.info .details .more > div {
  font-size: 12px;
  margin-right: 10px;
}
.servers {
  flex: 1;
  overflow: auto;
  padding-right: 2px;
  border: 1px solid gray;
}
.players {
  flex: 1;
  overflow: auto;
}
</style>
