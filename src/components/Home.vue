<template>
  <div class="vue-tempalte">
    <nav
      class="navbar navbar-dark bg-dark justify-content-between flex-nowrap flex-row"
    >
      <div class="container">
        <a class="navbar-brand float-left">(Firebase Vue CRUD) Rehber 1.0</a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/add">Ekle</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/list">Liste</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <h3>Hoşgeldiniz</h3>
    <p>{{ user.displayName }}</p>
    <p>{{ user.email }}</p>

    <button
      type="submit"
      class="btn btn-dark btn-lg btn-block"
      @click="logOut()"
    >
      Çıkış
    </button>
  </div>
</template>

<script>
import firebase from "firebase";
//import { firebase } from "../firebaseDb";

export default {
  data() {
    return {
      user: null,
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  },
  methods: {
    logOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          firebase.auth().onAuthStateChanged(() => {
            this.$router.push("/login");
          });
        });
    },
  },
};
</script>
