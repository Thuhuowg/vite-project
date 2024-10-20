<template>
    <div class="login-container pt-5 mt-5">
      <div class="form-card mt-5">
        <div class="tabs">
          <button :class="{'active': tab === 'register'}" @click="tab = 'register'; goToTab('register')">REGISTER</button>
          <button :class="{'active': tab === 'login'}" @click="tab = 'login'; goToTab('login')">LOGIN</button>
        </div>
  
        <div class="social-login">
          <button class="btn fb-login">Continue with Facebook</button>
          <button class="btn apple-login">Continue with Apple</button>
        </div>
  
        <form @submit.prevent="handleLogin">
          <div class="form-fields" v-if="tab === 'login'">
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
            <button type="submit" class="btn login-btn">Login</button>
          </div>
        </form>

        <form @submit.prevent="handleRegister">
          <div class="form-fields" v-if="tab === 'register'">
            <input type="text" v-model="username" placeholder="Username" />
            <input type="email" v-model="email" placeholder="Email" />
            <div class="password-field">
              <input 
                :type="showPassword ? 'text' : 'password'" 
                v-model="password" 
                placeholder="Password" 
              />
              <span class="input-group-text mb-2 ms-1" id="basic-addon2" @click="togglePassword">{{ showPassword ? 'hide' : 'show' }}</span>
            </div>
            <div class="password-field">
              <input 
                :type="showPasswordConfirm ? 'text' : 'password'" 
                v-model="passwordConfirm" 
                placeholder="Confirm Password" 
              />
              <span class="input-group-text mb-2 ms-1" id="basic-addon2" @click="togglePasswordConfirm">{{ showPasswordConfirm ? 'hide' : 'show' }}</span>
            </div>
            <button type="submit" class="btn login-btn">Register</button>
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
      const tab = ref('login');
      const checkCurrentRoute = () => {
      if (router.currentRoute.value.name === 'login-client') {
        tab.value = 'login';
      } else if (router.currentRoute.value.name === 'register') {
        tab.value = 'register';
      }
      
    };
    checkCurrentRoute()
      // default to login
      const username = ref('');
      const email = ref('');
      const password = ref('');
     
      const passwordConfirm = ref('');
      const showPassword = ref(false);
      const showPasswordConfirm = ref(false);
  
      const togglePassword = () => {
        showPassword.value = !showPassword.value;
      };
      const togglePasswordConfirm = () => {
        showPasswordConfirm.value = !showPasswordConfirm.value;
      };

      const goToTab = (newTab) => {
      tab.value = newTab;
     
      if (newTab === 'register') {
        window.location.href = '/register'; 
      } else {
        router.push('/login');
      }
      
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
        if(response.status === 200 && response.data.token){
          console.log(response)
        localStorage.setItem('token',response.data.token.access_token)
        // router.push('/')
        window.location.href = '/'; 
        }else {
          alert('login incorrect')
        }
        
        } catch (error) {
          if (error.response && error.response.status === 401) {
      alert('Login incorrect');
    } else {
      alert('Login failed! Please try again.');
    }
          console.log(error)
        }
      };

      const handleRegister = async() => {
        if (password.value !== passwordConfirm.value) {
    alert('Passwords do not match!');
    return;
  }
  if (password.value.length < 6) { // Kiểm tra độ dài tối thiểu
    alert('Password must be at least 6 characters long!');
    return;
  }
  let test =username.value
  console.log(username, password)
  if (username.value.length < 3) { // Kiểm tra độ dài tối thiểu
    alert('username must be at least 3 characters long!');
    return;
  }
        const apiURL = 'http://localhost:3000/users/create';
        try {
          const response = await axios.post(apiURL, {
          username: username.value,
          email: email.value,
          password: password.value
        })
        window.location.href = '/login'; 
      }catch (error) {
          alert('Register fail');
          console.log(error)
        }

      }
  
      return {
        tab,
        email,
        password,
        showPassword,
        togglePassword,
        passwordConfirm,
        // checkCurrentRoute,
        goToTab,
        handleLogin,
        togglePasswordConfirm,
        showPasswordConfirm,
        handleRegister,
        username
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
  