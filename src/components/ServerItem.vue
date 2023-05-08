<script setup>
defineProps(["server", "index"]);
</script>

<template>
  <div class="server">
    <!-- 服务器索引 -->
    <div class="server-index">{{ index + 1 }}</div>
    <!-- 服务器地图 -->
    <img class="server-image" :src="server.url" :title="server.currentMap" />
    <!-- 服务器信息 -->
    <div class="server-info">
      <div class="prefix">{{ server.prefix }}</div>
      <div class="description">
        {{ server.description }}
        <span class="tooltip">
          <div>{{ server.prefix }}</div>
          <div>{{ server.description }}</div>
        </span>
      </div>
      <div class="map">
        <img :src="server.regionImage" :title="server.region" />
        <div>{{ server.mode }} - {{ server.currentMap }} - 60HZ</div>
      </div>
    </div>
    <!-- 服务器人数 -->
    <div class="server-count">
      {{ server.playerAmount }} / {{ server.maxPlayers }} [{{ server.inQue }}]
    </div>
  </div>
</template>

<style scoped>
.server {
  width: 100%;
  color: #fff;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  border-bottom: 1px solid gray;
  position: relative;
}
.server:hover {
  color: #000;
  background-color: #fff;
}
.server-index {
  width: 30px;
  font-size: 14px;
  margin: 0 10px 0 10px;
  text-align: center;
}
.server-image {
  width: 130px;
}
.server-info {
  flex: 1;
  margin: 3px 10px 3px 20px;
}
.prefix,
.description {
  word-wrap: break-word;
  word-break: break-all;
  text-overflow: ellipsis;
  white-space: normal;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
.server-info .prefix {
  font-size: 1.1em;
  font-weight: bold;
  -webkit-line-clamp: 1;
}
.server-info .description {
  font-size: 0.8em;
  height: calc(1em * 2 * 1.5);
  -webkit-line-clamp: 2;
}
.server-info .map {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 0.9em;
}
.server-info .map > img {
  width: 20px;
  margin-right: 10px;
}
.server-count {
  width: 100px;
  text-align: right;
  margin-right: 20px;
}

.description .tooltip {
  margin: 10px;
  padding: 10px;
  position: absolute;
  left: 40%;
  top: 60%;
  box-shadow: 0 0 10px #000;
  background-color: #fff;
  visibility: collapse;
  z-index: 99;
}
.description:hover .tooltip {
  visibility: visible;
}
.tooltip > :nth-child(1) {
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 3px;
}
</style>
