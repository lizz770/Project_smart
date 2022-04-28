import Vue from 'vue'
import Vuetify from 'vuetify/lib';
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/lib/util/colors'


Vue.use(Vuetify, {
  iconfont: 'md',
})

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: colors.teal.lighten3, 
            secondary: colors.red.lighten4, // #FFCDD2
            accent: colors.indigo.base, // #3F51B5
          },
        },
      },

})