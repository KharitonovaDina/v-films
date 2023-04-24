<template>
  <v-container class="serial">
    <v-card class="hero">
      <div class="hero__img-wrap">
        <img class="hero__img" src="@/assets/img/tmp/poster.jpg" alt=""/>
      </div>
      <v-progress-linear
        height="5"
        :value="15"
        color="red"
      />
    </v-card>

    <v-card class="description">
      <v-card-title class="description__ttl">Малефисента</v-card-title>
      <v-chip dark>
        <v-icon small color="orange">mdi-star</v-icon>
        7.8
      </v-chip>
      <v-chip dark>
        <v-icon small color="orange">mdi-star</v-icon>
        8.1
      </v-chip>
      <v-card-text class="description__txt">
        <span>2022, фантастика, приключения Россия</span>
        <p>
          Юная волшебница Малефисента вела уединенную жизнь в зачарованном лесу, окруженная
          сказочными существами, но однажды все изменилось… В её мир вторглись люди, которые
          принесли с собой разрушение и хаос, и Малефисенте пришлось встать на защиту своих
          подданных, призвав на помощь могущественные тёмные силы.
        </p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'SerialPage',
};
</script>

<style lang="scss" scoped>
  .serial {
    padding: 40px;
  }
  .hero {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
  .hero__img-wrap {
    width: 100%;
    height: 600px;
    overflow: hidden;
  }
  .hero__img {
    width: 100%;
    height: auto;
  }
  .description {
    background-color: transparent;
  }
  .description__ttl {
    font-size: 36px;
    color: $font-c;
    text-transform: uppercase;
    font-weight: 700;
  }
  .description__txt {
    font-size: 16px;
    color: white;
    font-weight: 500;
  }
  /*.description {*/
  /*  position: absolute;*/
  /*}*/
</style>
