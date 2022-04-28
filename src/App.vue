<template>
  <v-card>
    <v-toolbar
      color="cyan"
      dark
      flat
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Проект SMART</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      <template v-slot:extension>
        <v-tabs
          v-model="tab"
          align-with-title
        >
          
          <v-tabs
          v-model="model"
          centered
          slider-color="yellow">
          <router-link class="routerLink" to="/"><v-btn
                      elevation="2"
                      plain
                      large>Главная страница
                      </v-btn></router-link>
          <router-link class="routerLink" to="/about"><v-btn
                      elevation="2"
                      plain
                      outlined
                      large>Персональная информация студента
                      </v-btn></router-link>
          <router-link class="routerLink" to="/smart"><v-btn
                      elevation="2"
                      plain
                      large>О проекте
                      </v-btn></router-link>

          </v-tabs>


        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item"
      >
        <v-card flat>
          <v-card-text v-text="text"></v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
    <router-view></router-view>
  </v-card>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.routerLink{
     text-decoration: none;
 }

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
