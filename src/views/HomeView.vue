<template>
  <v-container grid-list-xs>
    <v-row
      ><v-col v-for="dog in doggies" :key="dog.id" md="3" sm="6" xs="12"
        ><DoggieCard :dog="dog" /></v-col
    ></v-row>
  </v-container>
</template>

<script>
import DoggieCard from "../components/DoggieCard";
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      doggies: [],
    };
  },
  components: {
    DoggieCard,
  },
  mounted() {
    axios.get("https://api.thedogapi.com/v1/breeds").then((response) =>
      // console.log(
      //   data.data
      //     .filter((item) =>
      //       Object.prototype.hasOwnProperty.call(item, "origin")
      //     )
      //     .filter((item) => item.origin === "")
      //     .map((item) => item.image.url)
      // )
      {
        this.doggies = response.data;
        console.log(this.doggies);
      }
    );
  },
};
</script>
