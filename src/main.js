// import { createApp } from 'vue'
// import { createPinia } from 'pinia'

// import App from './App.vue'
// import router from './router'

// // import './assets/main.css'
// import './assets/tailwind.css'

// const app = createApp(App)

// app.use(createPinia())
// app.use(router)

// app.mount('#app')




import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// import {Parse} from 'parse'
import Parse from 'parse/dist/parse.min.js';

// import Parse from 'parse/dist/parse.min.js';


import App from './App.vue'
import router from './router'

// import './assets/main.css'
import './assets/tailwind.css'


Parse.initialize("Nq1dFjrN7gk94jJ1fRar1x1oKG0WymPmQ3JcICOA", "SIZtrTBowvghd2SZklOJUIeMZIfEhvBVkdARjouH");
//javascriptKey is required only if you have it on server.
Parse.serverURL = 'https://parseapi.back4app.com'

const app = createApp(App)

app.use(ElementPlus)

app.use(createPinia())
app.use(router)

app.mount('#app')
