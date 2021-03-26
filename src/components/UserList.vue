<template>
  <div>
    <div class="row">...</div>
    <div class="row">
      <div class="col-md-12">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>isim</th>
              <th>Email</th>
              <th>Telefon</th>
              <th>İşlem</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in Users" :key="user.key">
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.phone }}</td>
              <td>
                <router-link
                  :to="{ name: 'edit', params: { id: user.key } }"
                  class="btn btn-primary"
                  >Düzenle
                </router-link>
                <button
                  @click.prevent="deleteUser(user.key)"
                  class="btn btn-danger"
                >
                  Sil
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
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
      Users: [],
    };
  },
  created() {
    db.collection("users").onSnapshot((snapshotChange) => {
      this.Users = [];
      snapshotChange.forEach((doc) => {
        this.Users.push({
          key: doc.id,
          name: doc.data().name,
          email: doc.data().email,
          phone: doc.data().phone,
        });
      });
    });
  },
  methods: {
    deleteUser(id) {
      if (window.confirm("Do you really want to delete?")) {
        db.collection("users")
          .doc(id)
          .delete()
          .then(() => {
            console.log("Document deleted!");
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
  },
};
</script>

<style>
.btn-primary {
  margin-right: 12px;
}
</style>

