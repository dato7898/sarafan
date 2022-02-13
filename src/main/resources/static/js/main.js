import { createApp } from 'vue'
import App from 'pages/App.vue'
import { connect } from "./util/ws";

connect()

createApp(App).mount('#app')
