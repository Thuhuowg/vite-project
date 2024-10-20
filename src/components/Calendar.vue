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
        
            <div class="justify-content-center mb-5" :class="{'text-success': event.active === 1, 'text-danger': event.active === 0}"  style="border:1px solid #1c1c1c; height: 30px; border-radius: 40px;">
                {{ event.active === 1 ? 'Finish' : 'Upcoming' }}
         
            </div>

          <div class="content-large row" >
            <h2 class="col ml-2 content-large">{{ event.date_start }}</h2>
            <h2 class="col p-0 mb-3 content-large">-</h2>
            <h2 class=" col ml-2 content-large">{{ event.date_end }}</h2>
          </div>
        
          
          </div>
        </div>
        
          <div class="col-sm-6 row d-flex align-items-center">
            <h2 class="m-0 text-start">{{ event.race_name }}</h2>
          <div class="row d-flex justify-start align-items-center" >
            <div class="col-1 d-flex mb-2">
              <img :src="country_flag(event.country)" alt=""  height="30px" style="width: 40px; justify-content: start;"/>     
            </div>
              <p class="content-large col content-center" style="font-size:15px">{{ event.race_location }}</p>
            </div>
          
        </div>
      </div>
    </div>
    </div>
  </div>
  
</template>

<script>
import axios from 'axios';
import { authentication } from '../helpers/authentication';

export default {
  data() {
    return {
      calendarData: [], // Mảng để lưu dữ liệu lịch thi đấu
      groupedCalendarData: {},
      img_country:null
    };
  },

  mounted() {
    this.fetchCalendar();
    this.country_flag()
  },

  methods: {
    async fetchCalendar() {
      console.log(localStorage.getItem('token'));
      const apiURL = 'http://localhost:3000/calendar'; // URL của API
      try {
        const response = await axios.get(apiURL);
        console.log(response)
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
