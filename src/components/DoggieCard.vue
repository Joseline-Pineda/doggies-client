<template>
  <v-card class="fill-height" max-width="344">
    <v-img :src="dog.image.url" height="200px"></v-img>

    <v-card-title>{{ dog.name }}</v-card-title>
    <v-card-text class="mb-10">
      <v-chip
        class="ma-2"
        color="secondary"
        v-for="temp in dog.temperament.split(',')"
        :key="temp"
      >
        {{ temp }}
      </v-chip>
    </v-card-text>
    <v-card-actions id="action">
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon color="primary" size="35">fa-solid fa-heart-circle-plus</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    dog: Object,
  },
};
</script>

<style scoped>
#action {
  position: absolute;
  bottom: 0px;
  right: 0px;
  margin-top: 10px;
}
</style>
