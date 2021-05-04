<template>
  <div class="row justify-content-center">
    <div class="col-md-5">
      <h3 class="text-center">Cari Kart</h3>
      <form @submit.prevent="onFormSubmit">
        <div class="form-group">
          <label>Kod</label>
          <input type="text" class="form-control" v-model="cari.kod" required />
        </div>

        <div class="form-group">
          <label>Cari Adı</label>
          <input
            type="text"
            class="form-control"
            v-model="cari.isim"
            required
          />
        </div>

        <div class="form-group">
          <label>Adres</label>
          <input
            type="text"
            class="form-control"
            v-model="cari.adres"
            required
          />
        </div>
        <div class="form-group">
          <label>Adres</label>
          <input
            type="text"
            class="form-control"
            v-model="cari.adres2"
            required
          />
        </div>

        <div class="form-group">
          <button class="btn btn-primary btn-block">Ekle</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
//import { db } from "../firebaseDb";
import firebase from "firebase";
const db = firebase.firestore();

export default {
  data() {
    return {
      cari: {},
    };
  },
  methods: {
    onFormSubmit(event) {
      event.preventDefault();
      db.collection("scari")
        .add(this.cari)
        .then(() => {
          alert("Cari kart eklendi.");
          this.cari.kod = "";
          this.cari.isim = "";
          this.cari.adres = "";
          this.cari.adres2 = "";
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>