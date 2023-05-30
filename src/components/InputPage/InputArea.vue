<template>
  <div class="input-area">
    <v-select class="name-select" label="Name" />
    <v-text-field class="money-input" type="number" />
    <v-btn class="add-button">추가</v-btn>
  </div>
</template>
<style scoped>
.input-area {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
input {
  border: 0px;
  border-bottom: 2px solid rgb(255, 210, 196);
  background: none;
  margin: 3px 6px;
  height: 1.7rem;
}
input:focus,
input:active {
  border: none;
}
.name-select {
  width: 25%;
}
.money-input {
  width: 50%;
}
.add-button {
  width: 15%;
  margin-left: 3px;
  background: rgb(130, 174, 255);
  font-weight: 600;
  color: white;
  border: none;
  height: 2rem;
  cursor: pointer;
}
</style>
