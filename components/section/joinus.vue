<template>
  <impression position="joinus" :background="background" :players="player_list">
    <h2 v-html="$t('title')"></h2>
    <p class="status" v-html="$t('playing').replace('CC', count)"></p>
    <figure class="randomplayer" v-if="player_random">
      <div class="flex">
        <img :src="'https://minotar.net/cube/'+ player_random +'/100.png'" alt />
        <p v-html="'<strong>'+player_random+'</strong>'+$t('ramdom_player')"></p>
      </div>
    </figure>
    <p class="status">
      <span class="tag">{{ $t('version') }}</span>
      <span>{{version}}</span>
    </p>
    <p class="status">
      <span class="tag">{{ $t('ip') }}</span>
      <span>visit.morino.party</span>
    </p>
    <figure class="changePhotos">
      <h3>{{$t('change_photos.h3')}}</h3>
      <p>{{$t('change_photos.p')}}</p>
      <a @click="changePic()">{{$t('change_photos.button')}}</a>
    </figure>
  </impression>
</template>

<i18n>
{
    "ja" : {
        "title": "今すぐ参加しよう!",
        "playing": "現在<span>CC人</span>がプレイ中!",
        "ramdom_player": "もプレイしています!",
        "version": "バージョン",
        "ip": "IP",
        "change_photos": {
            "h3": "画像をかえる!",
            "p": "Discordチャンネル「#もりすた」から選ばれたいくつかの写真をランダムで閲覧できます!",
            "button": "変えてみる!"
        }
    },
    "en" : {
        "title": "Join us now!",
        "playing": "<span>CC people</span> are playing on our server!",
        "ramdom_player": " is also playing!",
        "version": "Version",
        "ip": "IP",
        "change_photos": {
            "h3": "Click “Change” to shuffle the image!",
            "p": "The random pictures from #もりすた, Moripa Discord will be randomly shown!",
            "button": "Change"
        }
    }
}
</i18n>

<style lang="scss">
.randomplayer {
  background-color: rgba(0, 0, 0, 0.1);
  display: inline-block;
  padding: 5px 20px !important;
  border-radius: 30px;
  margin-top: 5px !important;
  margin-bottom: 5px !important;
  transform: scale(0.8);
  .flex {
    display: flex;
  }
  img {
    height: 40px;
    width: 34px;
    transform: translateY(3px);
  }
  p {
    padding-left: 15px !important;
    align-self: center;
    opacity: 0.8;
    white-space: nowrap;
  }
}
.changePhotos {
  width: 100%;
  display: block;
  border: 5px solid rgba(0, 0, 0, 0.1);
  padding: 20px 20px !important;
  border-radius: 10px;
  margin-top: 50px !important;
  margin-bottom: 0px !important;
  box-sizing: border-box;
  h3 {
    display: inline-block;
    padding: 5px 15px;
    margin-bottom: 20px !important;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.1);
  }
  p {
    font-size: 0.8rem !important;
    margin-bottom: 20px !important;
  }
  a {
    display: inline-block;
    cursor: pointer;
    background: white;
    padding: 5px 15px;
    border-radius: 20px;
    color: #867000;
    font-weight: bold;
  }
  @media (max-width: 1400px) {
    display: none;
  }
}
</style>

<script>
import impression from "~/components/section/impression.vue";
import axios from "axios";
export default {
  components: {
    impression
  },
  data() {
    return {
      pictures: [
        "/index/joinus_1.png",
        "/index/joinus_2.png",
        "/index/joinus_3.png",
        "/index/joinus_4.png",
        "/index/joinus_5.png",
        "/index/joinus_6.png"
      ],
      background: "",
      count: "…",
      version: "…",
      player_list: {},
      player_random: ""
    };
  },
  async created() {
    const r_proxy = await axios.get(
      "https://api.mcsrvstat.us/2/visit.morino.party"
    );
    if (r_proxy.data.online) {
      this.count = r_proxy.data.players.online;
      this.version = r_proxy.data.version;

      const r_main = await axios.get(
        "https://api.mcsrvstat.us/2/main3.srv.morino.party"
      );
      const player_main = r_main.data.players.list;
      const r_res = await axios.get(
        "https://api.mcsrvstat.us/2/res2.srv.morino.party"
      );
      const player_res = r_res.data.players.list;
      this.player_list = player_main.concat(player_res);
      this.player_random = this.player_list[
        Math.floor(Math.random() * this.player_list.length)
      ];
    }
  },
  methods: {
    changePic() {
      this.background = this.pictures[
        Math.floor(Math.random() * this.pictures.length)
      ];
    }
  },
  mounted() {
    this.background = this.pictures[
      Math.floor(Math.random() * this.pictures.length)
    ];
    window.setInterval(() => {
      this.player_random = this.player_list[
        Math.floor(Math.random() * this.player_list.length)
      ];
    }, 7000);
    window.setInterval(() => {
      this.background = this.pictures[
        Math.floor(Math.random() * this.pictures.length)
      ];
    }, 30000);
  }
};
</script>
