<template>
  <v-card class="background">
    <slot />
  </v-card>
</template>
<style scoped>
.background {
  min-width: 540px;
  padding: 16px;
  background-color: rgba(255, 210, 196, 0.288);
  display: flex;
  justify-content: center;
}
</style>
