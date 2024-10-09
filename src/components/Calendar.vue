<template>
    <div class="" style="margin-top: 162px;">
        <div class="header-calendar d-flex" style="background: linear-gradient(to right, #1c1c1c, #4c0000); width: 100%; height: 100px;"> 2024
    </div>
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
    <div v-for="(matches, month) in groupedCalendarData" :key="month"  class="calendar-event col-sm-12 d-flex align-items-center ms-5 me-5 row">
        <div class="content-large text-start mt-5 ms-4 mb-3">
          <h2 class="content-large">{{ month }}</h2>
      </div>
      <div   class="" style="">
      <div v-for="event in matches" :key="event.race_id" class="calendar row " style="margin-bottom: 50px;height: 150px;margin-right: 100px;">
      
        <div class="col-sm-3 col d-flex align-items-center" >
          <div class="">
            <!--<h6 class="content-large" :class="{'text-success': event.active === 1, 'text-danger': event.active === 0}">
                {{ event.active === 1 ? 'Finish' : 'Upcoming' }}
              </h6>-->

          <div class="content-large row" >
            <h2 class="col ml-2 content-large">{{ event.date_start }}</h2>
            <h2 class="col p-0 mb-3 content-large">-</h2>
            <h2 class=" col ml-2 content-large">{{ event.date_end }}</h2>
          </div>
        
          
          </div>
        </div>
        
          <div class="col-sm-6 row d-flex align-items-center">
            <h2 class="m-0 text-start">{{ event.race_name }}</h2>
          <div class="">
            <img :src="event.image_url" alt="" />
            
              <p class="content-large" style="font-size:15px">{{ event.race_location }}</p>

            </div>
          
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
      calendarData: [], // Mảng để lưu dữ liệu lịch thi đấu
      groupedCalendarData: {}
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
        this.groupMatchesByMonth(); // Gọi hàm để nhóm các trận đấu theo tháng
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu từ API:', error);
      }
    },

    groupMatchesByMonth() {
      this.groupedCalendarData = this.calendarData.reduce((acc, match) => {
        const month = match.month; // Giả sử 'month' là tên của trường chứa tháng

        if (!acc[month]) {
          acc[month] = []; // Tạo mảng nếu chưa có tháng
        }
        acc[month].push(match); // Thêm trận đấu vào mảng tương ứng với tháng
        return acc;
      }, {});
    }
  }
};
</script>
