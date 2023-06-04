<template>
  <div class="list-area">
    <div class="list-name">{{props.item.name}}</div>
    <div class="list-money">{{props.item.money}}</div>
    <v-btn class="delete-button" @click="onClickDeleteButton">삭제</v-btn>
  </div>
</template>
<script setup>
import {defineProps} from "vue";

const props = defineProps({
  item: Object, 
  index: Number,
})
console.log(props.item);
</script>
<style scoped>
.list-area{
  width:100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height:56px;
  margin-bottom: 10px;
}
.list-name{
  width:25%;
  margin-right:5px;
}
.list-money{
  width: 60%;
  margin-right: 5px;
}
.delete-button{
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