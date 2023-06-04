<template>
  <BackgroundLayout>
    <ListArea v-for="(item,index) in list" :item="item" :index="index" :key="`${index}_list`"/>
    <InputArea @clickAddButton="setNewInfo" />
    <v-btn>계산하기</v-btn>
  </BackgroundLayout>
</template>
<script>
import BackgroundLayout from "@/components/common/BackgroundLayout.vue";
import InputArea from "@/components/InputPage/InputArea.vue";
import ListArea from "@/components/InputPage/ListArea.vue";
import { reactive } from 'vue';

export default {
  components:{BackgroundLayout, InputArea, ListArea},
  setup(){
    const list = reactive([]);
    const setNewInfo = function (name, money) {
      list.push({
        name : name, 
        money : money});
    }
    return {list, setNewInfo};
  }
};
</script>

<style scoped>

</style>
