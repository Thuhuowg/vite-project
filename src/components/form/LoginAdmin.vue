<template>
    <div class="login-container pt-5">
      <div class="form-card"> 
        <form @submit.prevent="handleLogin">
          <div class="form-fields">
            <input type="email" v-model="email" placeholder="Email" />
            <div class="password-field">
              <input 
                :type="showPassword ? 'text' : 'password'" 
                v-model="password" 
                placeholder="Password" 
              />
              <span class="input-group-text mb-2 ms-1" id="basic-addon2" @click="togglePassword">{{ showPassword ? 'hide' : 'show' }}</span>
            </div>
            <a href="#">Forgot password?</a>
            <button type="submit" class="btn login-btn btn-primary">Login</button>
          </div>
        </form>
      </div>
  
      <p class="footer-text"></p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
  export default {
    setup() {
      const router = useRouter();
    
      // default to login
      const email = ref('');
      const password = ref('');
      const showPassword = ref(false);
  
      const togglePassword = () => {
        showPassword.value = !showPassword.value;
      };
      
      const handleLogin = async() => {
        // Xử lý đăng nhập ở đây
        console.log('Logging in with:', email.value, password.value);
        const apiURL = 'http://localhost:3000/auth/login';
        try {
          const response = await axios.post(apiURL, {
          email: email.value,
          password: password.value
        })
        const token = response.data.token.access_token
        let role 
        const response_user = await fetch('http://localhost:3000/users/profile', {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          console.log('mmmmm',response_user)
          if (response_user.ok) {
            const userData = await response_user.json();
            console.log(userData)
            role = userData.role;
          }
        if(response.status === 200 && response.data.token){
          console.log(response)
          localStorage.setItem('jwtToken', token);
          localStorage.setItem('userRole', role);
        // router.push('/')
        window.location.href = '/admin'; 
        }else {
          alert('Thông tin đăng nhập không chính xác!')
        }
        
        } catch (error) {
          if (error.response && error.response.status === 401) {
      alert('Thông tin đăng nhập không chính xác!');
    } else {
      alert('Lỗi đăng nhập, hãy thử lại');
    }
          console.log(error)
        }
      };

     
  
      return {
        email,
        password,
        showPassword,
        togglePassword,
        // checkCurrentRoute,
        handleLogin,
      };
    }
  };
  </script>
  
  <style>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #1a1a1a;
  color: white;
}

.form-card {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 350px;
  color: black;
}

.tabs {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.tabs button {
  width: 50%;
  padding: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-weight: bold;
  border-bottom: 2px solid transparent;
}

.tabs button.active {
  border-bottom: 2px solid red;
}

.social-login {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}

.btn {
  padding: 10px;
  border: none;
  width: 100%;
  cursor: pointer;
  font-size: 16px;
}

.fb-login {
  background-color: #1877f2;
  color: white;
}

.apple-login {
  background-color: black;
  color: white;
}

.form-fields input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
}

.password-field {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.password-field span {
  cursor: pointer;
}

a {
  display: block;
  margin-bottom: 20px;
  color: #555;
}

.login-btn {
  background-color: red;
  color: white;
}

.footer-text {
  margin-top: 20px;
  text-align: center;
  color: white;
}
  </style>
  