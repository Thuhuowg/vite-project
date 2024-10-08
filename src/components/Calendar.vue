<template>
  <div class="" style="margin-top: 162px;">
    <div class="header-calendar d-flex" style="background-color: rgb(34, 30, 30); width: 100%; height: 100px;"></div>
    <div class="group-choice col-sm-6">
      <div class="row">
        <div class="col">
          <a href="">
            <button class="button-icon">
              <font-awesome-icon :icon="['fas', 'ticket-alt']" />
            </button>
          </a>
          HOSPITALITY >
        </div>
        <div class="col">
          <a href="">
            <button class="button-icon">
              <font-awesome-icon :icon="['far', 'hospital']" />
            </button>
          </a>
          TICKETS >
        </div>
        <div class="col">
          <a href="">
            <button class="button-icon">
              <font-awesome-icon :icon="['fas', 'star']" />
            </button>
          </a>
          NEXT GP
        </div>
        <div class="col subcribe-button ">
          <button type="button" class="btn btn-danger text-subcribe-button">2024 Calendar Download</button>
        </div>
        <div class="col subcribe-button ">
          <button type="button" class="btn btn-danger text-subcribe-button">2025 Calendar</button>
        </div>
      </div>
    </div>
    <div v-for="event in calendarData" :key="event.id" class="calendar-event col-sm-12 d-flex align-items-center">
        
      <div class="calendar row " style="margin-top: 50px;width: 1400px;height: 150px;">
      
        <div class="col-sm-3 col d-flex align-items-center" >
          <div class="">
            <!--<h6 class="content-large" :class="{'text-success': event.active === 1, 'text-danger': event.active === 0}">
                {{ event.active === 1 ? 'Finish' : 'Upcoming' }}
              </h6>-->
            <div v-if="event.month" class="content-large">
        <h2 class="content-large"> {{ event.month }}</h2>
      </div>
          <div class="content-large" >
            <h2 class="ml-2 content-large">{{ event.date_start }}</h2>
            <h2 class="m-1 mb-3 content-large">-</h2>
            <h2 class="ml-2 content-large">{{ event.date_end }}</h2>
          </div>
        
          
          </div>
        </div>
        
          <div class="col-sm-6 row d-flex align-items-center">
            <h2 class="m-0">{{ event.race_name }}</h2>
          <div class="">
            <img :src="event.image_url" alt="" />
            
              <p class="content-large" style="font-size:15px">{{ event.race_location }}</p>

            </div>
          
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
      calendarData: [] // Mảng để lưu dữ liệu lịch thi đấu
    };
  },
 
  mounted() {
    this.fetchCalendar();
  },
  methods: {
    async fetchCalendar() {
      const apiURL = 'http://localhost:3000/calendar'; // URL của API
      try {
        const response = await axios.get(apiURL);
        this.calendarData = response.data; // Gán dữ liệu trả về cho calendarData
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu từ API:', error);
      }
    }
    
  }
};
</script>

<style scoped>
/* Thêm các kiểu CSS nếu cần */
</style>
