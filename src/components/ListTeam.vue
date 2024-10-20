<template>
    <router-view></router-view>
    <div class="" style="margin-top: 162px;">
        <div class="" style=" background: linear-gradient(to right, #1c1c1c, #4c0000); width: 100%; height: 160px;">
        <div class="header-calendar d-flex" >
            <p>RIDERS & TEAM</p>
        </div>    
        <div class="row justify-content-start">
    <div class="col-4 choice-option row">
      <div class="col-3">
        <router-link :to="{name: 'rider'}">RIDERS</router-link>
        
      </div>
      <div class="col-1">
        <router-link :to="{name: 'team'}">TEAM</router-link>  
        
      </div>
    </div>
  </div>
  </div>
  <div class="ps-5 pt-5">
    <button type="button" class="btn btn-danger" style="border-radius: 20px;">Motogp</button>
    <div class="row">
        <!-- <router-view></router-view> -->
<div v-for="team in listTeamData" :key="team.id" class="col-3 container-card-rider mb-5">
        <router-link :to="{name:'team_detail',params: { id: team.id } }">
     <div class="pt-4">
        <div class="card bg-dark text-white " >
  <img :src="team.moto_image" class="card-img img-team" alt="...">
  <div class="card-img-overlay card-team">
    <div class="row content-medium mb-0 mt-2">
        <p class="col mb-3" style="line-height: 30px;">{{ team.team_name }}</p>
    </div>
    
    <div v-for="teammate in team.rider_on_team" :key="teammate.id" class="row">
        <div class="team-mate">
            {{ teammate.first_name }} {{ teammate.last_name }}
        </div>
    </div>
  </div>
</div>
    </div>
        </router-link>
</div>
</div>
  </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      listTeamData: [] 
    };
  },
 
  mounted() {
    this.listTeam();
  },
  methods: {
    async listTeam() {
      const apiURL = 'http://localhost:3000/team'; // URL của API
      try {
        const response = await axios.get(apiURL);
        this.listTeamData = response.data; 
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu từ API:', error);
      }
    }
    
  }
};
</script>