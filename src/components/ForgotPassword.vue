<template>
  <div class="vertical-center">
    <div class="inner-block">
      <div class="vue-tempalte">
        <form @submit.prevent="forgetPassword">
          <h3>Şifremi Hatırlat</h3>

          <div class="form-group">
            <label>Email</label>
            <input
              type="email"
              class="form-control form-control-lg"
              v-model="user.email"
            />
          </div>

          <button type="submit" class="btn btn-dark btn-lg btn-block">
            Şifre Resetle
          </button>
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
        email: "",
      },
    };
  },
  methods: {
    forgetPassword() {
      firebase
        .auth()
        .sendPasswordResetEmail(this.user.email)
        .then(() => {
          alert("Check your registered email to reset the password!");
          this.user = {
            email: "",
          };
        })
        .catch((error) => {
          alert(error);
        });
    },
  },
};
</script>

