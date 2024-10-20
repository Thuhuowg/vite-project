<template>
    <div  v-if="rider" class="rider-banner p-5 d-flex">
        <div class="col-sm-6 all-rider">
            <div class="col" >
            <font-awesome-icon :icon="['fas', 'chevron-left']" class="me-2" style="width: 30px; color: #aaa7a7;" />
            <a class="custom-link" href="/rider">All riders</a>
        </div>
       <div class="ps-4 pt-5 text-white">
    <h5 class="content-medium-1">#{{ rider.rider_code }}</h5>
    <div class="row content-medium mb-0 pt-2">
        <h1 class="col mb-3">{{ rider.first_name }} {{ rider.last_name }}</h1>
    </div>
    
    <div class="row pt-3">
        <div class="col-1 custom-link">
            {{ rider.nationality }}
        </div>
        <div class="col-8 custom-link">
            {{ rider.team_name }}
        </div>
    </div>
  </div>
  <div class="ps-4 pt-5 text-white">
    <div class="pt-3 content-medium-1 current-season">current season</div>
    <div class="row pt-1 background-grey mt-4">
        <div class="col">
            <div class="text-title-score">Position</div>
            <div class="point">2</div>
        </div>
        <div class="col">
            <div class="text-title-score">Points</div>
            <div class="point">{{ rider.total_score }}</div>
        </div>
        <div class="col">
            <div class="text-title-score">Victories</div>
            <div class="point">{{ rider.first_finish_count }}</div>
        </div>
    </div>
    <div class="row background-grey mt-4 mb-5">
        <div class="">
            <!-- <img src="https://resources.motogp.pulselive.com/photo-resources/2024/02/19/ca002749-a487-432f-879e-e44969678daa/rider-bio_eneabastianini.png?height=300&width=200" alt=""> -->
        </div>
        <div class="pt-3">
            <div class="text-title-score">TEAMMATE</div>
            <div class="point">{{ rider.teammate_first_name }} {{ rider.teammate_last_name }}</div>
        </div>
    </div>
  </div>
        </div>
        <div class="col-sm-6" style="margin-top: 55px;">
            <img :src=" rider.rider_image " alt="" style="width: 100%;">
        </div>
    </div>
    <div  v-if="rider" class="row p-5">
        <div class="col-sm-6">
            <div class="rider-title-info">
                Rider Story
            </div>
            <div class="rider-story">
                <p class="text-start">
                    {{ rider.rider_story }}
                    <!-- Italian Francesco Bagnaia moved to the highly competitive CEV Championship in Spain in 2010, and he came third overall that year. He was reconfirmed for the Monlau Competicion team for 2012 and won another race before the step up to the World Championship, where he partnered Roman Fenati in the Team Italia FMI in 2013. For 2014 he switched teams as well as machinery as he lined up for the Sky Racing Team VR46 on a KTM, and 2015 brought another new challenge with the new Aspar Team Mahindra. Ending the year as the top Mahindra rider, the Italian was also frequently involved in the podium battle, retaining his seat for 2016 and going on to take not only a maiden win in Assen, but also a second win in Sepang. Earning a test ride on the team’s MotoGP™ machine in Valencia at the end of the season, Bagnaia moved up to Moto2™ in 2017 with the new Sky Racing Team VR46 intermediate class effort and was Rookie of the Year, taking several podiums. In 2018 he hit the ground running and was a contender for the crown from the off, with some incredible wins and consistency seeing him eventually take the title in Malaysia.
<br>
<br>
Impressive in his first outings in the premier class in testing, Bagnaia moved up to MotoGP™ with Pramac Racing in 2019. It was a difficult rookie year for Bagnaia but a fantastic P4 in Australia showed plenty signs of promise. 2020 proved a mixed year for the Italian and his GP-20. He earned an impressive second place in the San Marino GP and a week later at the same track, he was on the verge of a maiden premier class victory until a heartbreaking slide off the track ended his hopes. He never quite got going again in the remaining races but 2021 brought renewed hope for Pecco in the factory squad. Three podiums and a pole at the opening four rounds signalled the Italian as a title contender and, despite a blip in the middle of the season, he finished the year as the form man of the Championship. A debut MotoGP™ win came at Aragon after an incredible head-to-head with Marc Marquez, and he backed it up with victory in Misano a week after. His title charge slipped through his fingers with a crash during our second visit to Misano, but he did add victories at the final two rounds of the year.
<br><br>
The Italian's 2022 season got off to a slow start and a crash at the Sachsenring left him 91 points away from the Championship lead, before a stellar run in the second half of the campaign saw Bagnaia do what once seemed impossible and clinch his first premier class crown in Valencia. Sporting the number 1 in 2023, Bagnaia managed to fend off Jorge Martin at the season finale to become the first rider to successfully defend the #1 plate since Mick Doohan, and joined Valentino Rossi and Marc Marquez in becoming the only riders in MotoGP™ to win back-to-back titles. -->
</p>
            </div>
        </div>
        <div class="col-sm-6" style="padding-left: 100px;">
            <div class="rider-title-info">
                Rider Bio
            </div>
            <div class="rider-bio row">
                <table class="table">
  <tbody>
    <tr>
      <td class="info-title" colspan="3" style="color: grey !important;" >Champion</td>
      <td class="text-end">{{ rider.championship }}</td>
    </tr>
    <tr>
      <td class="info-title" colspan="3" style="color: grey !important; font-size: 15px; font-weight: 500 ;justify-content: center; padding-top: 12px;" >Bike</td>
      <td class="text-end"> {{ rider.motobike }}</td>
    </tr>
    <tr>
      <td class="info-title" colspan="3" style="color: grey !important; font-size: 15px; font-weight: 500 ;justify-content: center; padding-top: 12px;" >Date of birth</td>
      <td class="text-end">{{ rider.date_of_birth }}</td>
    </tr>
    <tr>
      <td class="info-title" colspan="3" style="color: grey !important; font-size: 15px; font-weight: 500 ;justify-content: center; padding-top: 12px;" >Place of birth</td>
      <td class="text-end">{{ rider.nationality }}</td>
    </tr>
    <tr>
      <td class="info-title" colspan="3" style="color: grey !important; font-size: 15px; font-weight: 500 ;justify-content: center; padding-top: 12px;" >Height</td>
      <td class="text-end">{{ rider.heigth }} cm</td>
    </tr>
    <tr>
      <td class="info-title" colspan="3" style="color: grey !important; font-size: 15px; font-weight: 500 ;justify-content: center; padding-top: 12px;" >Weight</td>
      <td class="text-end">{{ rider.weight }} kg</td>
    </tr>
  </tbody>
</table>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      rider:null, // Chứa thông tin rider
    };
  },

  mounted() {
    this.fetchRiderData();
  },

  methods: {
    async fetchRiderData() {
      const riderCode = this.$route.params.rider_code; // Lấy rider_code từ route params
      const apiURL = `http://localhost:3000/rider/${riderCode}`; // API sử dụng rider_code
console.log(this.$route.params.rider_code)
      try {
        const response = await axios.get(apiURL);
        this.rider = response.data; // Gán dữ liệu vào rider
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu rider:', error);
      }
    },
  },
};
</script>