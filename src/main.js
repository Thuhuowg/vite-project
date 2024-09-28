import { createApp } from 'vue'
import router from './router';
import App from './App.vue'
import { createRouter } from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fab, fas, far)
import 'ant-design-vue/dist/reset.css';
import { 
    Button,
    Menu,
    message 
} from 'ant-design-vue';
import './style.css'
const app = createApp(App);

app.use(Button)
app.use(Menu)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
// createApp(App).mount('#app')
app.config.globalProperties.$message = message;
