<template>
    <div v-if="team" class="rider-banner p-5 d-flex d-relative">
        <div class="col-sm-6 all-rider">
            <div class="col" >
            <font-awesome-icon :icon="['fas', 'chevron-left']" class="me-2" style="width: 30px; color: #aaa7a7;" />
            <a class="custom-link" href="/team">All teams</a>
        </div>
       <div class="ps-4 pt-5 text-white">
    <div class="row content-medium mb-0 pt-2">
        <h1 class="col mb-3">{{ team.team_name }}</h1>
    </div>
    
    <div class="row pt-3">
        <div class="col-4 custom-link">
            {{ team.motobike }}
        </div>
        <div class="col-2 custom-link">
            {{ team.moto_brand }}
        </div>
    </div>
  </div>
  <div class="ps-4 pt-5 text-white">
    <div class="pt-3 content-medium-1 current-season">Team Riders</div>
    <div class="row background-grey mt-4 mb-5">
        <div class="">
            <!-- <img src="https://resources.motogp.pulselive.com/photo-resources/2024/02/19/ca002749-a487-432f-879e-e44969678daa/rider-bio_eneabastianini.png?height=300&width=200" alt=""> -->
        </div>
        <div class="pt-3">
            <div class="text-title-score">TEAMMATE</div>
            <div v-for="item in team.rider_on_team" :key="item.id"  class="point">{{ item.first_name }} {{ item.last_name }}</div>
        </div>
    </div>
  </div>
        </div>
        <div class="col-sm-6" style="margin-top: 55px;">
            <img :src=team.moto_image alt="" style="width: 100%;" class="img-team-1">
        </div>
    </div>
    <div v-if="team" class="row p-5">
    </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      team: null,
    };
  },
 
  mounted() {
    this.getTeamById();
  },
  methods: {
    async getTeamById() {
        const Team_id = this.$route.params.id; // Lấy rider_code từ route params
        const apiURL = `http://localhost:3000/team/${Team_id}`; // URL của API
      try {
        const response = await axios.get(apiURL);
        this.team = response.data; 
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu từ API:', error);
      }
    }
    
  }
};
</script>