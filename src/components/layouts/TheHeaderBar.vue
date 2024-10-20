<template>
     <div class="d-flex row nav-bar">
      
        <div class="d-flex col-sm-2 favion">
          <router-link :to="{name:'home-client'}" class="d-flex">
          <!-- <a class="d-flex" href=""> -->
            <img src="https://www.motogp.com/resources/v7.8.0/i/svg-files/elements/motogp-logo-75.svg" alt=""  style="width: 125px;">
          <!-- </a> -->
      </router-link>
    </div>
        <div class="d-flex col-sm-6">
          <div class="col-sm-2">
            <router-link :to="{name:'calendar'}">
            <button type="button" class="btn btn-outline-danger">
              Calendar
            </button>
          </router-link>
          </div>
          <div class="col-sm-3">
            <router-link :to="{name:'result',params: {race_id: 16}}">
              <button type="button" class="btn btn-outline-danger">
                Result & Standing
              </button>
            </router-link>
          </div>
          <div class="col-sm-3">
           
            <router-link :to="{name:'rider'}">
              <button type="button" class="btn btn-outline-danger">
                Rider & Team
              </button>
            </router-link>

          </div>
          <div class="col-sm-2">
            <a href="https://www.motogp.com/en/videopass">
              <button type="button" class="btn btn-outline-danger">
                VideoPass
              </button>
            </a>
          </div>
          <div class="col-sm-1">
            <a href="https://www.motogp.com/en/videos">
            <button type="button" class="btn btn-outline-danger">
              Videos
            </button>
          </a>
          </div>
          <div class="col-sm-1">
            <a href="#">
            <button type="button" class="https://www.motogp.com/en/news">
              New
            </button>
          </a>
          </div>
        </div>
        <div v-if="!check_token" class="d-flex col-sm justify-content-sm-end gap-2 service-user" style="margin-right: 20px;">
      
        <router-link :to="{ name: 'login-client' }" style="text-decoration: none; color: #fff; margin: 0;">
          <div class="col-sm-1">Login</div>
        </router-link>
        <div class="col-sm-1" style="width: 1px;">|</div>
        <router-link :to="{ name: 'register' }" style="text-decoration: none; color: #fff; margin: 0;">
          <div class="col-sm-1">Register</div>
        </router-link>
        <div class="col-sm-1 ms-3">
            <font-awesome-icon :icon="['fas', 'helmet-un']" />
          </div>
        </div>
        <div v-if="check_token" class="d-flex col-sm justify-content-sm-end gap-2 service-user" style="margin-right: 20px;">
        <div class="col-sm-1" style="white-space: nowrap;">{{ userName }}</div>
        <div class="col-sm-1" style="width: 1px;">|</div>
        <div @click="handleLogout" class="col-sm-1" style="cursor: pointer; white-space: nowrap;">Logout</div>
        <div class="col-sm-1 ms-3">
            <font-awesome-icon :icon="['fas', 'helmet-un']" />
          </div>
    </div>
      </div>
</template>
<script>
export default {
  data() {
    return {
      check_token: false,
      userName: '' // Khai báo biến tên người dùng
    };
  },
  methods: {
    async fetchUserProfile() {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await fetch('http://localhost:3000/users/profile', {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          console.log('mmmmm',response)
          if (response.ok) {
            const userData = await response.json();
            console.log(userData)
            this.userName = userData.name; // Lấy tên người dùng từ response
            this.check_token = true; // Đánh dấu đã xác thực
          } else {
            this.check_token = false; // Nếu token không hợp lệ
          }
        } catch (error) {
          console.error('Lỗi khi lấy thông tin người dùng:', error);
        }
      }
    },
    handleLogout() {
      localStorage.removeItem('token'); // Xóa token
      this.check_token = false; // Đánh dấu chưa xác thực
      this.userName = ''; // Reset tên người dùng
     // Chuyển hướng về trang đăng nhập
    }
  },
  mounted() {
    this.fetchUserProfile(); // Gọi hàm khi component được mounted
  }
}
</script>
