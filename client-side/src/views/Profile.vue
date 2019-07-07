<template>
    <div class="container">
        <header class="jumbotron">
            <h1 class="display-3">
                <strong>{{currentUser.name}}</strong>, Welcome to my app.
            </h1>
        </header>
        <a class="btn btn-link log-out" @click="logOut">LogOut</a>
    </div>
</template>
<script>
import UserService from '../services/user.service';

export default {
    name: 'profile',
    data() {
        return {
            currentUser: null
        };
    },
    created() {
        this.currentUser = UserService.currentUserValue;
        if(!this.currentUser){
            this.$router.push('/login');
        }
    },
    methods: {
        logOut() {
            UserService.logOut().then(() => {
                this.$router.push('/login');
            });
        }
    }
}
</script>
<style>

</style>

