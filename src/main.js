import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import * as firebase from "firebase";

import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/css/main.css";

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyDAUwggkaPCtHoZOfqOqiCWzz37ohNbO_M",
  authDomain: "sandboxcrud.firebaseapp.com",
  // databaseURL: "https://project-id.firebaseio.com",
  projectId: "sandboxcrud",
  storageBucket: "sandboxcrud.appspot.com",
  messagingSenderId: "767545572197",
  appId: "1:767545572197:web:7404b1dedf0ac9a685bf8c",
  measurementId: "G-PT0613VJM0"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
