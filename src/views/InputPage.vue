<template>
  <BackgroundLayout>
    <InputArea @clickAddButton="setNewInfo" />
  </BackgroundLayout>
</template>
<script>
import BackgroundLayout from "@/components/common/BackgroundLayout.vue";
import InputArea from "@/components/InputPage/InputArea.vue";

export default {
  components: { BackgroundLayout, InputArea },
  methods: {
    setNewInfo: function (name, money) {
      console.log(name);
      console.log(money);
    },
  },
};
</script>

<style scoped></style>
