<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-icon size="45">fas fa-paw</v-icon>
      </div>
      <div>
        <span class="text-h4 font-weight-bold ml-4">Doggies</span>
      </div>

      <v-spacer></v-spacer>

      <span class="text-h4 font-weight-bold mr-4">Favorite</span>
      <v-icon size="45">fa-duotone fa-bookmark</v-icon>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
