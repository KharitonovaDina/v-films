<template>
  <v-card
    class="serial-card"
    @click="$emit('progress')"
    router :to="value.rout"
  >
    <div class="serial-card__img-wrap">
      <img
        class="serial-card__img"
        :src="require(`@/assets/img/tmp/${value.poster}`)"
        alt=""
      >
    </div>
    <v-progress-linear
      bottom
      absolute
      height="5"
      :value=value.progress
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
    border-radius: 8px;
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
</style>
