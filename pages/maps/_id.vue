<template>
  <div>
    <div class="mapPlayers" v-if="players.length > 0">
      <div class="mapPlayers_player" v-for="(content, index) in players" :key="index">
        <img :src="`https://crafatar.com/renders/head/${content.uuid}`" :alt="`${content.name}`" height="35px">
        <div class="mapPlayers_name">{{ content.name }}</div>
      </div>
    </div>
    <div class="mapPlayers" v-else>
      <div class="mapPlayers_name">
        だれもいません...
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  layout: 'map',
  data() {
    return {
      players: {}
    }
  },
  created() {
    this.loadPlayers()
  },
  methods: {
    loadPlayers() {
       axios
        .get(`https://${ this.$nuxt.$route.params.id }.map.morino.party/live/players`)
        .then(res => {
          this.players = res.data.players
        })
        .catch(error => {
          console.error(error)
        })
    }
  },
}
</script>

<style lang="scss" scoped>
.mapPlayers {
  width: 150px;
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  backdrop-filter: blur(20px);
  background-color: rgba(0, 121, 7, 0.7);
  border-radius: 8px;
  padding: 10px;
  display: grid;
  gap: 10px;
  overflow-y: auto;
  max-height: 70vh;
  @media (max-width: 750px) {
    display: none;
  }
  &::before {
    content: 'オンラインプレイヤー';
    color: white;
    font-weight: bold;
    font-size: 0.85rem;
  }
  &_player {
    display: grid;
    grid-template-columns: 35px 1fr;
    gap: 10px;    
    overflow: hidden;
  }
  &_name {
    color: white;
    font-weight: bold;
    align-self: center;
    font-size: 0.75rem;
    opacity: 0.8;
    text-overflow: ellipsis!important;
    white-space: nowrap!important;
    overflow: hidden!important;
  }
}

</style>