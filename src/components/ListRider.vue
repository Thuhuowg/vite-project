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
    <button type="button" class="btn btn-danger " style="border-radius: 20px; ">Motogp</button>
    <div class="row">
        <!-- <router-view></router-view> -->

<div v-for="rider in listRiderData" :key="rider.rider_code" class="col-3 container-card-rider">
        <router-link :to="{name:'rider_detail',params: { rider_code:  rider.rider_code  } }">
     <div class="pt-4">
        <div class="card bg-dark text-white " >
  <img :src=" rider.rider_image " class="card-img img-rider" alt="...">
  <div class="card-img-overlay text-start pb-4">
    <h5 class="content-medium-1 ">#{{ rider.rider_code }}</h5>
    <div class="row content-medium mb-0">
        <!-- <p class="col mb-3" style="width: 2%;">{{ rider.first_name }}</p><span class="col name_rider" >{{ rider.last_name }}</span> -->
        <p class="col mb-3" style="width: 2%;">{{ rider.first_name }} {{ rider.last_name }}</p>
    </div>
    
    <div class="row p-0">

        <div class="col row">
          <div class="col-1 d-flex mb-2">
              <img :src="country_flag(rider.nationality)" alt=""  height="20px" style="width: 20px; justify-content: start;"/>     
            </div>
            <div class="col ms-3 p-0">
              {{ rider.nationality }}
            </div>
           
        </div>
        <div class="col-8 p-0">
            {{ rider.team }}
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
      listRiderData: [],
      img_country:null
    };
  },
 
  mounted() {
    this.listRider();
    this.country_flag()
  },
  methods: {
    async listRider() {
      const apiURL = 'http://localhost:3000/rider'; // URL của API
      try {
        
        const response = await axios.get(apiURL);
        this.listRiderData = response.data; 
        console.log(this.listRiderData)
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu từ API:', error);
      }
    },
    country_flag(name) {
    const lang = {
       'Vietnam': '', // nếu có cờ cho Việt Nam
        'Australia': 'https://static-files.motogp.pulselive.com/assets/flags/au.svg',
        'Spain': 'https://static-files.motogp.pulselive.com/assets/flags/es-ct.svg',
        'France': 'https://static-files.motogp.pulselive.com/assets/flags/fr.svg',
        'Italy': 'https://static-files.motogp.pulselive.com/assets/flags/it.svg',
        'Japan': 'https://static-files.motogp.pulselive.com/assets/flags/jp.svg',
        'South Africa': 'https://static-files.motogp.pulselive.com/assets/flags/za.svg',
        'Qatar': 'https://static-files.motogp.pulselive.com/assets/flags/qa.svg',
        'Portugal': 'https://static-files.motogp.pulselive.com/assets/flags/pt.svg',
        'Germany': 'https://static-files.motogp.pulselive.com/assets/flags/de.svg',
        'Great Britain': 'https://static-files.motogp.pulselive.com/assets/flags/gb.svg',
        'Austria': 'https://static-files.motogp.pulselive.com/assets/flags/at.svg',
        'Indonesia':'https://static-files.motogp.pulselive.com/assets/flags/id.svg',
        'Thailand':'https://static-files.motogp.pulselive.com/assets/flags/th.svg',
        'Malaysia':'https://static-files.motogp.pulselive.com/assets/flags/my.svg',
        'Netherlands':'https://static-files.motogp.pulselive.com/assets/flags/nl.svg',
        'USA':'https://static-files.motogp.pulselive.com/assets/flags/us.svg'

    };

    return lang[name] || null; // Trả về giá trị tương ứng hoặc null nếu không tìm thấy
}
  }
};
</script>