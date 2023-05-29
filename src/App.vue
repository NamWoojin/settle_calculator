<template>
  <div id='app'>
    <h1 class="title">Settle Calculator</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app{
  width:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title{
  color:rgb(255, 88, 37);
}
</style>
