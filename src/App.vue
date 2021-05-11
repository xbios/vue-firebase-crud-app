<template>
  <div class="vue-tempalte">
    <!-- Navigation -->
    <nav
      class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top"
    >
      <div class="container">
        <a
          class="navbar-brand float-left"
          href="https://www.vuez.site"
          target="_blank"
        >
          vuez.site
        </a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/onlinephp">php</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/test1">test1</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/fiddle">Fiddle</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/add">Ekle</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/list">Liste</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/login">Giriş</router-link>
          </li>
          <li class="nav-item">
            <router-link class="btn btn-outline-primary" to="/"
              >Kayıt</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
    <!-- <nav
      class="navbar navbar-dark bg-dark justify-content-between flex-nowrap flex-row"
    >
      <div class="container">
        <a class="navbar-brand float-left">Firebase Vue CRUD Rehber 1.0</a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/">Add User</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/list">View Users</router-link>
          </li>
        </ul>
      </div>
    </nav> -->
    <div>...</div>
    <div class="container mt-5">
      <router-view></router-view>
    </div>

    <!-- Main -->
    <!-- <div class="App">
      <div class="vertical-center">
        <div class="inner-block">
          <router-view />
        </div>
      </div>
    </div> -->
  </div>
</template>