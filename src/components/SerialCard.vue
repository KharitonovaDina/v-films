<template>
  <v-card class="serial-card">
    <div class="serial-card__img-wrap">
      <img class="serial-card__img" :src="require(`@/assets/img/tmp/${value.poster}`)" alt="">
    </div>
    <v-progress-linear
      bottom
      absolute
      value="15"
      height="5"
      color="red"
    />
  </v-card>
</template>

<script>
export default {
  name: 'SerialCard',
  props: ['value'],
};
</script>

<style lang="scss" scoped>
  .serial-card {
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    overflow: hidden;
    border-radius: 4px;
    border: none;
    width: 210px;
    height: 297px;
  }
  .serial-card__img-wrap {
    width: 100%;
    height: 100%;
    object-fit: cover;
    &:before {
       content: "";
       position: absolute;
       width: 100%;
       height: 100%;
       background-color: $bg-c;
       opacity: 0.2;
    }
  }
  .serial-card__img {
    width: 100%;
    height: auto;
  }
  //.serial-card__progress {
  //  background-color: red;
  //  color: #1E1717;
  //}
</style>
