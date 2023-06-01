<template>
  <div class="input-area">
    <v-combobox
      hide-details="true"
      class="name-select"
      label="Name"
      :items="['test']"
      v-model="name"
    />
    <v-text-field
      hide-details="true"
      class="money-input"
      type="number"
      v-model="money"
    />
    <v-btn class="add-button" @click="onClickAddButton">추가</v-btn>
  </div>
</template>
<script setup>
import { ref, defineEmits } from "vue";
const emit = defineEmits(["clickAddButton"]);

const name = ref("");
const money = ref(0);

const onClickAddButton = function () {
  emit("clickAddButton", name.value, money.value);
};
</script>
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
  margin-right: 5px;
}
.money-input {
  width: 50%;
  margin-right: 5px;
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
