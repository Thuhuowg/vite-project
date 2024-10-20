<template>
    <div class="ms-4 me-4 mt-4  ">
      <div class="row">
        <div class="col-1">
          <a href="/riders">
          <font-awesome-icon :icon="['fas', 'arrow-left']" />
        </a>
        </div>
        <h4 class="col">Thêm mới tay đua</h4>

      </div>
     <form enctype="multipart/form-data" @submit.prevent="handleCreateRider">
      <div class="">
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon2">Mã tay đua</span>
  <input type="text" v-model="rider_code" class="form-control" placeholder="Nhập mã tay đua" aria-label="Recipient's username" aria-describedby="basic-addon2">
  
</div>
        <div class="input-group mb-2">
  <span class="input-group-text">Họ và tên tay đua </span>
  <input type="text" v-model="first_name" aria-label="First name" class="form-control" placeholder="Nhập họ tay đua">
  <input type="text" v-model="last_name" aria-label="Last name" class="form-control" placeholder="Nhập tên tay đua">
        </div>
        <div class="">
          <div class="col-2 text-start">Đội đua</div>
          <div class="col-3 mt-2 mb-3">
             <select class="form-select" aria-label="Default select example"  v-model="selectedTeamId" @change="fetchTeam">
            <option selected disabled>Chọn team</option>
      <option v-for="(item,i) in select_team" :key="item.id" :value="item.id">
        {{ item.team_name }}
      </option>
</select>
          </div>
          
        </div>
       
        <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">Quốc tịch</span>
  <input type="text" v-model="nationality" class="form-control" placeholder="Nhập quốc tịch" aria-label="Username" aria-describedby="basic-addon1">
</div>


<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">Ngày sinh</span>
  <input type="date" v-model="birthday" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
</div>
<div class="row">
  <div class="col">
    <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon2">Chiều cao</span>
  <input type="text" class="form-control"  v-model="heigth"  aria-label="Recipient's username" aria-describedby="basic-addon2">
  <span class="input-group-text" id="basic-addon1">cm </span>
</div>
  </div>
  <div class="col">
    <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">Cân nặng </span>
  <input type="text" class="form-control" v-model="weight" aria-label="Username" aria-describedby="basic-addon1">
  <span class="input-group-text" id="basic-addon1">kg </span>
</div>
  </div>
</div>



<div class="form-floating">
  <textarea class="form-control"  v-model="rider_story" placeholder="" id="floatingTextarea"></textarea>
  <label for="floatingTextarea">Giới thiệu</label>
</div>
<div class="mb-3 pt-2">
        <label for="formFile" class="form-label col-1 d-flex">Ảnh đại diện</label>
        <input class="form-control" type="file" id="formFile" @change="onFileChange">
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
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const rider_code = ref('');
    const first_name = ref('');
    const last_name = ref('');
    const nationality = ref('');
    const birthday = ref('');
    const heigth = ref(''); 
    const weight = ref('');
    const rider_story = ref('');
    const selectedTeamId = ref(); // Sửa lại thành giá trị đơn
    const rider_image = ref(null);
    const select_team = ref([]); // Thêm để lưu trữ đội

    const onFileChange = (event) => {
  if (event.target.files.length > 0) {
    rider_image.value = event.target.files[0]; // Lưu file vào biến
    console.log('Selected file:', rider_image.value); // Kiểm tra giá trị file
  } else {
    console.error('No file selected');
  }
};

    const handleCreateRider = async () => {
      const formData = new FormData();
      formData.append('rider_code', rider_code.value);
      formData.append('first_name', first_name.value);
      formData.append('last_name', last_name.value);
      formData.append('nationality', nationality.value);
      formData.append('date_of_birth', birthday.value);
      formData.append('heigth', heigth.value);
      formData.append('weight', weight.value);
      formData.append('team_id',Number(selectedTeamId.value))
      formData.append('rider_story', rider_story.value);
      if (rider_image.value) {
        formData.append('rider_image', rider_image.value); // Thêm file vào formData
      }

      const apiURL = 'http://localhost:3000/rider/create';
      try {
        const response = await axios.post(apiURL, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        if (response.status === 200) { // Kiểm tra status của phản hồi
          alert('Tạo tay đua thành công'); // Xử lý phản hồi thành công
          window.location.href = '/riders'; 
        } else {
          alert('Đã xảy ra lỗi');
        }
      } catch (error) {
        alert('Đã xảy ra lỗi');
        console.log(error);
      }
    };
const fetchTeams = async () => {
      const apiURL = 'http://localhost:3000/team';
      try {
        const response = await axios.get(apiURL);
        select_team.value = response.data; // Store the teams in select_team
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu từ API:', error);
      }
    };

    onMounted(() => {
      fetchTeams(); // Call fetchTeams when the component mounts
    });
    return {
      rider_code,
      first_name,
      last_name,
      nationality,
      birthday,
      heigth,
      weight,
      rider_story,
      handleCreateRider,
      onFileChange,
      rider_image,
      select_team,
      selectedTeamId,
    };
  },
};
</script>
