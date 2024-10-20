<template>
    <div class="">
        <div class="row mb-4 mt-4" style="height: 50px;">
          <div class="col-1">
          <a href="/riders">
          <font-awesome-icon :icon="['fas', 'arrow-left']" />
        </a>
        </div>
            <h3 class="col-sm-10 pt-2">Danh sách các tay bị xoá</h3>
                <div class="col-sm-2" style="font-size: 34px;" >   
            </div>
          
            
        </div>
        <table class="table">
  <thead>
    <tr>
      <th scope="width-col-2">#</th>
      <th scope="width-col-2">Mã tay đua</th>
      <th scope="col">Tên tay đua</th>
      <th scope="col">Thao tác</th>
    </tr>
  </thead>
  <tbody>
    <tr  v-for="(rider,index) in listRiderData" :key="rider.rider_code">
      <th class="width-col-1" scope="row">{{ index+1 }}</th>
      <td class="width-col-3">{{rider.rider_code}}</td>
      <td >{{rider.first_name}} {{ rider.last_name }}</td>
      <td class="width-col-2">
        <div class="row">
          <!-- <div class="col p-0">
            <router-link :to="{name: 'rider-update', params: {rider_code: rider.rider_code}}">
            <button type="button"  class="btn btn-primary">Khôi phục</button>
            </router-link>
          </div> -->
          <div class="col p-0">
            <a href="">
            <button type="button"  @click="restoreRider(rider.rider_code)"  class="btn btn-info">Khôi phục</button>
          </a>
          </div>
        </div>
      </td>
    </tr>
  </tbody>
</table>
    </div>
</template>
<script>
import { authentication } from '../../helpers/authentication';

export default {
  data() {
        return {
          listRiderData: [],
        };
    },
 
    mounted() {
      this.listRider();
      
    },
    methods: {
      async listRider() {
      const apiURL = 'http://localhost:3000/rider/trash'; // URL của API
      try {
      
        const response = await authentication(apiURL);
        this.listRiderData = response.data; 
        console.log(this.listRiderData)
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu từ API:', error);
      }
    },
    async restoreRider(riderCode) {
    console.log('ppppp')
    const apiURL = `http://localhost:3000/rider/restore/${riderCode}`;
    try {
      await axios.get(apiURL);
      this.listRider(); // Cập nhật lại danh sách tay đua
      alert('Thêm lại tay đua thành công');
      // window.location.href = '/riders'; 
    } catch (error) {
      console.error('Lỗi khi thêm lại tay đua:', error);
      alert('Đã xảy ra lỗi khi thêm lại tay đua');
    }
  
},


    }
}
</script>