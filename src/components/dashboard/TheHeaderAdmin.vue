<template>
    <header class="pt-3 pb-3 border-bottom" style="background-color: rgb(33, 37, 41);">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-end">
        <a href="/admin" class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
          <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
        </a>

        <!-- <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" class="nav-link px-2 link-secondary">Overview</a></li>
          <li><a href="#" class="nav-link px-2 link-dark">Inventory</a></li>
          <li><a href="#" class="nav-link px-2 link-dark">Customers</a></li>
          <li><a href="#" class="nav-link px-2 link-dark">Products</a></li>
        </ul> -->

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input type="search" class="form-control" placeholder="Search..." aria-label="Search">
        </form>

<router-link v-if="!check_token" class="me-3" :to="{name:'admin-login'}" style="color: #fff; text-decoration: none;">
  Login
</router-link>
        <div v-if="check_token" class="dropdown text-end">
          <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle">
          </a>
          <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1">
            <li><a class="dropdown-item" href="#">Cài đặt</a></li>
            <li><a class="dropdown-item" href="#">Thông tin cá nhân</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" @click="handleLogout" href="#">Đăng xuất</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
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
      const token = localStorage.getItem('jwtToken');
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
      localStorage.removeItem('jwtToken'); // Xóa token
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