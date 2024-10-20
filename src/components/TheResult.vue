<template>
    <div class="rider-baner  d-flex row" style="margin-top: 150px;">
      <div class="" style=" background: linear-gradient(to right, #1c1c1c, #4c0000); width: 100%; height: 160px;">
        <div class="header-calendar-1 d-flex row" >
            <p>Motul Grand Prix of Japan</p>
            <br>
            <div>2024</div>
        </div>    
        <div class="row justify-content-start mb-3">
    <div class="col-4 choice-option row">
      <div class="col-3">
        <router-link :to="{name:'result',params: {race_id: 16}}">Result</router-link>
        
      </div>
      <div class="col-1">
        <router-link :to="{name: 'standing'}">Standings</router-link>  
      </div>
    </div>
  </div>
  </div>
        <div class=" ps-5 pe-5 pt-3 pb-3 col-sm-4">
          <form action="">
          <select class="form-select" aria-label="Default select example"  v-model="selectedRaceId" @change="fetchRaceResults">
            <option selected disabled>Chọn đường đua</option>
      <option v-for="(item,i) in list_race_result" :key="item.race_id" :value="item.race_id">
        {{ item.race_name }}
      </option>
</select>
</form>
      </div>
      <div class="ps-5 pe-5">
        <table class="table">
            <tbody>
                <tr>
                    <td class="info-title width-col-1 text-small-1">Pos</td>
                    <td class="width-col-1 text-small-2">Pts</td>
                    <td class="width-col-2 text-center"></td>
                    <td class="width-col-2 text-small-1">Rider</td>
                    <td class="width-col-3 text-small-2">Team</td>
                    <td class="text-end text-small-1" colspan="3">Time/Gap</td>
                </tr>
                <tr v-for="(result, index) in listResult" :key="result.id">
                    <td class="info-title text-big-1"><div class="mt-3">{{ index + 1 }}</div></td>
                    <td class="text-big-2 mt-3"><div class="mt-3 text-custom-grey">{{ result.score_race_current }}</div></td>
                    <td class="width-col-1">
                        <div class="container-img"><img class="img-team-2" :src="result.rider_image" width="100px" alt=""></div>
                    </td>
                    <td class="width-col-3 ">
                        <div class="row mt-3">
                            <div class="col  p-0 text-custom-grey text-big-2">{{ index + 1 }}</div>
                            <div class="col me-5 mt-2 font-bold-1"><span class="me-1" style="font-weight: 300;">{{ result.first_name ? result.first_name.charAt(0) + '.' : '' }}</span>{{ result.last_name }}</div>
                        </div>
                    </td>
                    <td>
                        <div class="mt-4 text-custom-grey row">
                            <div class="col-1 d-flex">
                                <img :src="country_flag(result.nationality)" alt="" height="30px" style="width: 35px; justify-content: start;"/>
                            </div>
                            <div class="col">{{ result.team_name }}</div>
                        </div>
                    </td>
                    <td class="text-end" colspan="3">
                        <div class="mt-4 text-custom-grey text-medium-1">{{ result.different || 'N/A' }}</div> 
                    </td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            listResult: [],
            img_country: null,
            list_race_result: [],
            selectedRaceId: null || 16,
        };
    },
 
    mounted() {
        this.getResult();
        this.getOptionResult()
    },
    
    methods: {
        async getResult() {
          if (!this.selectedRaceId) return;
          const race_id = this.selectedRaceId || 16
            const apiURL = `http://localhost:3000/result/${race_id}` ;
            try {
                const response = await axios.get(apiURL);
                this.listResult = response.data; 
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu từ API:', error);
            }
        },
        async getOptionResult () {
            const apiURL = `http://localhost:3000/result`;
            try {
                const response = await axios.get(apiURL);
                this.list_race_result = response.data; 
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu từ API:', error);
            }
        },
        fetchRaceResults() {
            this.getResult();
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
