<template>
  <div class="vertical-center">
    <div class="inner-block">
      <div class="vue-tempalte">
        <form @submit.prevent="userRegistration">
          <h3>Kayıt</h3>

          <div class="form-group">
            <label>İsim</label>
            <input
              type="text"
              class="form-control form-control-lg"
              v-model="user.name"
            />
          </div>

          <div class="form-group">
            <label>Email</label>
            <input
              type="email"
              class="form-control form-control-lg"
              v-model="user.email"
            />
          </div>

          <div class="form-group">
            <label>Şifre</label>
            <input
              type="password"
              class="form-control form-control-lg"
              v-model="user.password"
            />
          </div>

          <button type="submit" class="btn btn-dark btn-lg btn-block">
            Kayıt Ol
          </button>

          <p class="forgot-password text-right">
            Kayıtlı Kullanıcı
            <router-link :to="{ name: 'login' }">Giriş?</router-link>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
import firebase from "firebase";
//import { firebase } from "../firebaseDb";

export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    userRegistration() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.user.email, this.user.password)
        .then((res) => {
          res.user
            .updateProfile({
              displayName: this.user.name,
            })
            .then(() => {
              this.$router.push("/login");
            });
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
</script>