<template>
  <div>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a href="https://vuejs.org/" class="navbar-brand">
        <img src="./assets/logo.png" width="30" height="30" class="d-inline-block align-top"/>
        Vue.js
      </a>
      <div class="navbar-nav mr-auto">
        <li class="nav-item" v-if="isAdmin">
          <a href="/admin" class="nav-link">
            <font-awesome-icon icon="user-shield"/> Admin Panel
          </a>
        </li>
      </div>
      <div class="navbar-nav ml-auto" v-if="!currentUser">
        <li class="nav-item">
          <a href="/register" class="nav-link">
            <font-awesome-icon icon="user"/> Sign Up
          </a>
        </li>
        <li class="nav-item">
          <a href="/login" class="nav-link">
            <font-awesome-icon icon="sign-in-alt"/> Login
          </a>
        </li>
      </div>
      <div class="navbar-nav ml-auto" v-if="currentUser">
        <li class="nav-item">
          <a href="/profile" class="nav-link">
            <font-awesome-icon icon="user"/> {{currentUser.name}}
          </a>
        </li>
        <li class="nav-item">
          <a v-on:click="logOut" class="nav-link">
            <font-awesome-icon icon="sign-out-alt"/> LogOut
          </a>
        </li>
      </div>
    </nav>
    <div class="container">
      <div class="row">
        <div class="col-sm-6 offset-sm-3">
          <div v-if="alert.message" :class="alertStyle">
            {{alert.message}}
          </div>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserService from './services/user.service';
import Role from './models/role';

export default {
  data() {
    return {
      currentUser: null
    };
  },
  created() {
    UserService.currentUser.subscribe(data => {
      this.currentUser = data;
    });
  },
  computed: {
    isAdmin() {
      return this.currentUser && this.currentUser.role === Role.ADMIN;
    },
    alert() {
      return this.$store.state;
    },
    alertStyle() {
      return this.$store.getters.alertStyle;
    }
  },
  methods: {
    logOut() {
      UserService.logOut().then(() => {
        this.$router.push('/login');
      });
    },
    clearAlert() {
      this.$store.dispatch('clear');
    }
  },
  watch: {
    $route(to, from) {
      //You can get warning (error: 'from' is defined but never used), if you don't use parameters; 
      console.log(to + " -> " + from);
      this.clearAlert();
    }
  }
  
}
</script>


<style>
</style>
