import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import "@fortawesome/fontawesome-free/css/all.css";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#EC407A", // #E53935
        secondary: "#42A5F5", // #FFCDD2
        accent: "#B2DFDB", // #3F51B5
      },
    },
  },
  icon: {
    iconfont: "fa",
  },
});
