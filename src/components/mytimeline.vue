<template>
  <div>
    <v-timeline
      width = "400"
      height = "800"
      align-top
      :dense="$vuetify.breakpoint.smAndDown"
    >
      <v-timeline-item
      >
        <v-card 
        color = "#b9c5d7">
          <v-card-title class="text-h5">
            Обо мне
          </v-card-title>
          <v-card-text>
            Я специализируюсь в дизайне в области брендинга продукции и услуг, диджитале, полиграфии, упаковки, коммуникационном дизайне в пространстве, сувенирной продукции и прочее.
          </v-card-text>
        </v-card> 
      </v-timeline-item>
         <v-timeline-item>
        <v-card >
          <v-card-title class="text-h5">
            Образование
          </v-card-title>
          <v-card-text>
            <div style = "line-height: 0.7;">
         <p style = "font-weight: bolder;">Бакалавриат</p>
         <p style = "font-weight: lighter;">2018-2022</p>
         <p>54.03.01 Дизайн</p></div>
          </v-card-text>
        </v-card>
      </v-timeline-item>
      <v-timeline-item>
        <v-card >
          <v-card-title class="text-h5">
            Опыт работы
          </v-card-title>
          <v-card-text>
            <div style = "line-height: 0.7;">
         <p style = "font-weight: bolder;">UI/UX designer</p>
         <p style = "font-weight: lighter;">2018-2022</p>
         <p>Фриланс</p></div>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    <v-timeline-item>
        <v-card>
          <v-card-title class="text-h5">
            Моя цель
          </v-card-title>
          <v-card-text>
         <p>Создавать продукт, который будет приносить прибыль компании</p>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>
    fixed-tabs
    background-color="indigo"
    width = "500"
    -----
        class="mx-auto"
    width="1200"
    max-height="600"
    tile