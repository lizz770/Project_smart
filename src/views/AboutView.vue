<template>
 <div class="stranichka">
     <div style = "background-color: #f5f4f3">
     <v-container fluid >
         <div >
         <div style = "float: left;  padding-left: 11%; ">
         <v-card
         class="mx-auto"
         width="653px"
         height="130px"
        >
        <v-card-text>    
       <div><h6 style="color:black; padding-left: 20px; line-height:15px; padding-top: 6px">Зубенко Михаил Петрович <span style = "font-weight: normal">18 лет</span> </h6>
            <p style = "color: black; padding-left: 20px; font-size: 14px; line-height:8px;">Дальневосточный федеральный университет</p> <p style = "color: black; padding-left: 20px; font-size: 14px; line-height:0px;">Дизайн</p>
            </div> 
    </v-card-text>
    </v-card>
    </div>
    <div style = "float: left;">
    <v-card
    width="518px"
    height="130px"
    style = "margin-left: 30px">
    <v-card-text>    
       <div>
           <h6 style="color:black; line-height:15px; padding-top: 1px">Курс: <span style = "font-weight: normal">1</span> </h6>
           <h6 style="color:black; line-height:15px; ">Школа: <span style = "font-weight: normal">Институт математики и компьютерных технологий</span> </h6>
            <h6 style="color:black;  line-height:15px;">Год поступления: <span style = "font-weight: normal">2021</span> </h6>
             <h6 style="color:black; line-height:15px; ">Год окончания: <span style = "font-weight: normal">-</span> </h6>
            </div> 
    </v-card-text>
    </v-card>
    </div>
         </div>
     
     <v-sheet
    color="white"
    height="1000"
    width="1200"
    class="v-sheetmy"
    ><div style = "margin-left: 182px">
    <v-tabs>
    <v-tab
    @click = "gotoaboutme">О себе</v-tab>
    <v-tab
    @click = "gotoskill">Навыки</v-tab>
    <v-tab>Портфолио</v-tab>
    <v-tab>Успеваемость</v-tab>
    <v-tab>Графики развития</v-tab>
    <v-tab>Отзывы</v-tab>
    <v-tab>Контакты</v-tab>
  </v-tabs>
    </div>
    <div v-if = "showblock === 'aboutme'">
         <v-timeline>
         <v-timeline-item><h5>Обо мне</h5> <p>Управлял командой из 6-12 человек 2 года (сфера дистрибьюции/аутсорса). Благодаря знаниям языков программирования, успешно адаптирую прошлый опыт для работы в IT сфере. </p></v-timeline-item>
         <v-timeline-item >
             <div style = "text-align: left; line-height: 0.7;"><h5>Образование:</h5>
         <p style = "font-weight: bolder;">Бакалавриат</p>
         <p style = "font-weight: lighter;">2018-2022</p>
         <p>38.03.02 Менеджмент</p></div>
         </v-timeline-item> 
         <v-timeline-item ><div style = "line-height: 0.7;">
      <h5>Опыт работы</h5><p style = "font-weight: bolder;">Менеджер проектов</p><p style = "font-weight: lighter;">ООО "IIVE" с апреля 2021</p>
      </div>
      <ul>
          <li>Брифинг с клиентом, презентация решений и правок</li>
          <li>Организация работы команды разработчиков и дизайнеров (10 человек)</li>
          <li>Определение приоритетов, оценка, создание и распределение задач.</li>
          <li>Проведение ежедневных встреч команды.</li>
      </ul>
    </v-timeline-item>
  </v-timeline>
    </div>
    <div v-if = "showblock === 'skill'"></div>
        <h3 style="text-align:center">Навыки</h3>
       
        <div  id = "block1">
             <p >Agile, Scrum</p>
    <v-progress-linear
      v-model="Scrum"
      height="25"
      color = "#7abc8a"
      rounded

    >
      <strong>{{ Math.ceil(Scrum) }}%</strong>
    </v-progress-linear>
        </div>
    <br>
    
    <div id = "block2">
        <p>Jira, Worksection</p>
    <v-progress-linear
      v-model="Worksection"
      height="25"
      color = "#5baf7a"
      rounded

    >
      <strong>{{ Math.ceil(Worksection) }}%</strong>
    </v-progress-linear>
    </div>
    <br>
    <div id = "block3">
        <p>SAP ERP</p>
    <v-progress-linear
      v-model="ERP"
      height="25"
      color = "#7dd19d"
      rounded
    >
      <strong>{{ Math.ceil(ERP) }}%</strong>
    </v-progress-linear></div>
    <br>
    <div id = "block4"> 
        <p >Создание презентаций</p>
    <v-progress-linear
      v-model="pres"
      height="25"
      color = "#8aa895"
      rounded
    >
      <strong>{{ Math.ceil(pres) }}%</strong>
    </v-progress-linear> </div>
    <br>
    
    <div id = "block5">
        <p>Power BI</p>
     <v-progress-linear
      v-model="BI"
      height="25"
      color="#a0dcb7"
      rounded
      
    >
      <strong>{{ Math.ceil(BI) }}%</strong>
    </v-progress-linear>
    </div>
    <br>
   
    <div  id = "block6"> <p>Python</p>
    <v-progress-linear
      height="25"
      color="#acc0b4"
      rounded
      v-model="Python"
    >
      <strong>{{ Math.ceil(Python) }}%</strong>
     
    </v-progress-linear>
    </div>
     <br>
      
      <div  id = "block7"><p>HTML, CSS</p>
      <v-progress-linear
      height="25"
       color="#4c44cede"
       rounded
       value="100"
    >
      <strong>{{ Math.ceil(CSS) }}%</strong>
    </v-progress-linear>
      </div>
    <h3 class="text-center" style = "margin-top: 50px">Языки</h3>
    <div class="text-center" >
        <p>Английский язык</p>
    <v-progress-circular
      :rotate="360"
      :size="100"
      :width="15"
      :value="60"
      color="#943737de"
    >
      {{ B2 }}
    </v-progress-circular>
    <p>Немецкий язык</p>
    <v-progress-circular
      :rotate="360"
      :size="100"
      :width="15"
      :value="40"
      color="#bfce44de"
    >
      {{ А2 }}
    </v-progress-circular>
    </div>
    </v-sheet>
    </v-container>
     </div>
 </div>

</template>

<script>
  export default {
       name: "AboutView",
    data: () => ({
      showblock: "aboutme",
      Scrum:100,
      Worksection:100,
      ERP:80,
      pres:100,
      BI: 60,
      Python:40,
      CSS: 100
      
    }),
    methods:{
        gotoaboutme: function(){
           this.showblock = "aboutme"
        },
        gotoskill: function(){
            this.showblock = "skill"
        }
    }
  }
</script>

<style>
.v-sheetmy{
    margin-top: 12%;
    margin-left: 11%;
}
.mx-auto{
    margin-left:12%;
    float: left;
}
.v-card{
    -webkit-box-shadow:none!important;
    box-shadow: none!important;
}
.v-timeline-item__dot{
    background: #8db68d!important;
}
#block1 {
float: left;
display: block;
margin: 2px;
width: 500px;
margin-top:26px;
margin-left: 10px;
}

#block2 {
float: left;
display: block;
margin: 2px;
width: 500px;
margin-left: 161px;
}
#block3 {
float: left;
display: block;
margin: 2px;
width: 500px;
margin-top:26px;
margin-left: 10px;
}
#block4 {
float: left;
display: block;
margin: 2px;
width: 500px;
margin-top:26px;
margin-left: 161px;
}
#block5 {
float: left;
display: block;
margin: 2px;
width: 500px;
margin-top:26px;
margin-left: 10px;
}
#block6 {
float: left;
display: block;
margin: 2px;
width: 500px;
margin-top:26px;
margin-left: 161px;
}
#block7 {
float: left;
display: block;
margin: 2px;
width: 500px;
margin-top:26px;
margin-left: 10px;
}
#block8 {
display: block;
margin: 2px;
margin-top: 50px;
}
#block9 {
float: left;
display: block;
margin: 2px;
width: 500px;
}
</style>
