<template>
    <div class="container">
        <header class="jumbotron">
            <h1 class="display-3">
                <strong>{{currentUser.name}}</strong> details are displayed...
            </h1>
            <h1 class="display-3">
                <strong>{{userId}}</strong>
            </h1>
        </header>
    </div>
</template>
<script>
export default {
    name: 'detail',
    data() {
        return {
            userId: null,
            currentUser: null
        };
    },
    created() {
        this.currentUser = JSON.parse(localStorage.getItem('detailUser'));
        this.userId = this.$route.params.id;
    }
}
</script>
<style>

</style>

