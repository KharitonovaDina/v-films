<template>
  <v-container class="serial">
    <v-card class="hero">
      <div class="hero__img-wrap">
        <img
          class="hero__img"
          src="@/assets/img/tmp/poster.jpg"
          alt=""
        />
      </div>
      <v-progress-linear
        height="5"
        :value="35"
        color="red"
      />
    </v-card>

    <v-card class="description">
      <div class="description__wrap">
        <div class="description__inner">
          <v-card-title class="description__ttl">Малефисента</v-card-title>
          <v-chip dark>
            <v-icon small color="orange">mdi-star</v-icon>
            7.8
          </v-chip>
          <v-chip dark>
            <v-icon small color="orange">mdi-star</v-icon>
            8.1
          </v-chip>
        </div>
        <PrimaryBtn class="description__btn" title="Watch now"/>
      </div>
      <v-card-text class="description__txt">
        <span>2022, фантастика, приключения Россия</span>
        <p>Юная волшебница Малефисента вела уединенную жизнь в зачарованном лесу, окруженная
          сказочными существами, но однажды все изменилось… В её мир вторглись люди, которые
          принесли с собой разрушение и хаос, и Малефисенте пришлось встать на защиту своих
          сериал подданных, призвав на помощь могущественные тёмные силы. </p>
      </v-card-text>
    </v-card>

    <v-tabs
      v-model="tab"
      centered
      class="tabs"
      dark
    >
      <v-tabs-slider color="red"/>
      <v-tab
        v-for="(item,i) in items"
        :key="i"
      >
        {{ item }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab" class="tabs" dark>
      <v-tab-item>
        <v-card>
          <v-expansion-panels accordion dark>
            <v-expansion-panel
              v-for="(season, i) in seasons"
              :key="i"
            >
              <div class="test">
                <v-expansion-panel-header>
                  Season {{ i + 1 }}
                </v-expansion-panel-header>
                <v-checkbox
                  color="green"
                  off-icon="mdi-check-circle"
                  on-icon="mdi-check-circle"
                />
              </div>
              <v-progress-linear
                :value="15"
                color="red"
              />
              <v-expansion-panel-content>
                <v-card
                  v-for="(episode, i) in season"
                  :key="i"
                  class="ma-4"
                >
                  <v-card-text>
                    Episode {{ episode.number}}.
                    {{ episode.title}}
                    <v-checkbox
                      color="green"
                      off-icon="mdi-check-circle"
                      on-icon="mdi-check-circle"
                    />
                  </v-card-text>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card>
          <v-card-text>
            <p>
              {{doneTodos}}
            </p>
            <p>
              <v-btn @click="count">Count</v-btn>
            </p>
            <p>
              <v-btn @click="countAsync">CountAsync</v-btn>
            </p>
            <p>
              {{newCount}}
            </p>
            <p>
              Юная волшебница Малефисента вела уединенную жизнь в зачарованном лесу, окруженная
              сказочными существами, но однажды все изменилось… В её мир вторглись люди, которые
              принесли с собой разрушение и хаос, и Малефисенте пришлось встать на защиту своих
              сериал подданных, призвав на помощь могущественные тёмные силы.
            </p>
            <p>
              Юная волшебница Малефисента вела уединенную жизнь в зачарованном лесу, окруженная
              сказочными существами, но однажды все изменилось… В её мир вторглись люди, которые
              принесли с собой разрушение и хаос, и Малефисенте пришлось встать на защиту своих
              сериал подданных, призвав на помощь могущественные тёмные силы.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
import PrimaryBtn from '@/components/PrimaryBtn.vue';

export default {
  name: 'SerialPage',
  components: { PrimaryBtn },
  data: () => ({
    tab: null,
    items: ['Seasons', 'Details'],
    seasons: [
      [
        {
          number: '1',
          poster: 'tmp-7',
          title: 'Utopia',
        },
        {
          number: '2',
          poster: 'tmp-7',
          title: 'Utopia',
        },
        {
          number: '3',
          poster: 'tmp-7',
          title: 'Utopia',
        },
        {
          number: '4',
          poster: 'tmp-7',
          title: 'Utopia',
        },
      ],
      [
        {
          number: '1',
          poster: 'tmp-7',
          title: 'Next',
        },
        {
          number: '2',
          poster: 'tmp-7',
          title: 'Next',
        },
        {
          number: '3',
          poster: 'tmp-7',
          title: 'Next',
        },
        {
          number: '4',
          poster: 'tmp-7',
          title: 'Next',
        },
      ],
    ],
    episodes: 7,
  }),

  methods: {
    count() {
      this.$store.commit('increment');
    },

    countAsync() {
      this.$store.dispatch('incrementAsync');
    },
  },

  computed: {
    doneTodos() {
      return this.$store.getters.doneTodos;
    },

    newCount() {
      return this.$store.state.count;
    },
  },
};
</script>

<style lang="scss" scoped>
  .serial {
    padding: 40px;
  }
  .hero {
    width: 100%;
    height: 100%;
    background-color: $sidebar-c;
    border-radius: 0;
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
    display: flex;
    flex-direction: column;
    background-color: $sidebar-c;
    padding: 24px;
    border-radius: 0;
  }
  .description__wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
  }
  .description__inner{
    display: flex;
    align-items: center;
  }
  .description__ttl {
    font-size: 36px;
    color: $font-c;
    text-transform: uppercase;
    font-weight: 700;
    padding: 0;
    margin-right: 24px;
  }
  .description__txt {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    font-size: 16px;
    color: white;
    font-weight: 500;
    padding: 0;
    width: 50%;
  }
  .tabs {
    background-color: $sidebar-c;
    color: $sidebar-c;
  }
  .test {
    display: flex;
    justify-content: start;
  }
</style>
