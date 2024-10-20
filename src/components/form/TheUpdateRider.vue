<template>
    <div class="ms-4 me-4 mt-4  ">
      <div class="row">
        <div class="col-1">
          <a href="/admin">
          <font-awesome-icon :icon="['fas', 'arrow-left']" />
        </a>
        </div>
        <div class="col row " style="align-items: center; justify-content: center;">
          <h4 class="col-4 ">Chỉnh sửa thông tin tay đua </h4>
           <h4 class="col-1" style="color: brown;">{{dataRider.rider_code }}</h4>
        </div>
       

      </div>
     <form enctype="multipart/form-data" @submit.prevent="handleUpdateRider">
      <div class="">
        <div class="input-group mb-2">
  <span class="input-group-text">Họ và tên tay đua </span>
  <input type="text" v-model="dataRider.first_name" aria-label="First name" class="form-control" placeholder="Nhập họ tay đua">
  <input type="text" v-model="dataRider.last_name" aria-label="Last name" class="form-control" placeholder="Nhập tên tay đua"> 
        </div>
       
        <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">Quốc tịch</span>
  <input type="text" v-model="dataRider.nationality" class="form-control" placeholder="Nhập quốc tịch" aria-label="Username" aria-describedby="basic-addon1"> 
</div>

<div class="row">
  <div class="col">
    <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon2">Chiều cao</span>
  <input type="text" class="form-control"  v-model="dataRider.heigth"  aria-label="Recipient's username" aria-describedby="basic-addon2"> 
  <span class="input-group-text" id="basic-addon1">cm</span>
</div>
  </div>
  <div class="col">
    <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">Cân nặng </span>
  <input type="text" class="form-control" v-model="dataRider.weight" aria-label="Username" aria-describedby="basic-addon1"> 
  <span class="input-group-text" id="basic-addon1">kg </span>
</div>
  </div>
</div>
      </div>

<div class="row mt-3" style="display: flex; justify-content: end; text-align: end;">
  <div class="col-1 p-0 ms-5">
    <button class="btn btn-primary" type="submit">Tạo</button>
  </div>
  <div class="col-1 ">
    <a href="/riders">
      <button type="button" class="btn btn-outline-secondary">Huỷ</button>
    </a>
 
  </div>
</div>
</form>
    </div>
</template>
<script>
import axios from 'axios';
import { ref, onMounted, getCurrentInstance } from 'vue';
import { authentication } from '../../helpers/authentication';

export default {
  setup() {
    const dataRider = ref({
      first_name: '',
      last_name: '',
      nationality: '',
      heigth: '',
      weight: ''
    });
    const { proxy } = getCurrentInstance();
    const handleUpdateRider = async () => {
      const formData = new FormData();
      formData.append('first_name', dataRider.value.first_name);
      formData.append('last_name', dataRider.value.last_name);
      formData.append('nationality', dataRider.value.nationality);
      // Các trường khác cần thiết...
      formData.append('heigth', dataRider.value.heigth);
      formData.append('weight', dataRider.value.weight);
      const riderCode =proxy.$route.params.rider_code;
      const apiURL = `http://localhost:3000/rider/update/${riderCode}`;
      try {
        const response = await axios.post(apiURL, formData
        );
        if (response.status === 200) { // Kiểm tra status của phản hồi
          alert('Cập nhật thông tin tay đua thành công'); // Xử lý phản hồi thành công
          window.location.href = '/riders'; 
        } else {
          alert('Đã xảy ra lỗi');
        }
      } catch (error) {
        alert('Đã xảy ra lỗi');
        console.log(error);
      }
    };
    const fetchRider = async () => {
      const riderCode =proxy.$route.params.rider_code;
      const apiURL = `http://localhost:3000/rider/admin/${riderCode}`
      console.log(apiURL)
      try {
        const response = await authentication(apiURL)
        console.log('response.data',response); // Log the response data

        dataRider.value = response.data
      } catch (error) {
        alert('dacoloi')
        console.log(error)
      }
    }

    onMounted(() => {
      fetchRider()
    });
    return {
      dataRider,
      handleUpdateRider,
    };
  },
};
</script>
