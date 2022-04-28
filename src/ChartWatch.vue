<template>
 <div id="chart">
 
     <div style = "background-color: #f5f4f3">
     <v-container fluid > 
         <!-- <nav class= "appbar">
         <p class = "appbarfont">SMART</p>
        </nav> -->
         <div >
         <div style = "float: left;  padding-left: 11%; ">
         <v-card
         class="mx-auto"
         width="653px"
         height="130px"
        >
          <v-avatar
          width="70"
          height="70"
          style = "margin-left: 42px; margin-top: 30px; float:left">
        <img
         src="https://sun9-48.userapi.com/s/v1/ig2/E9P3P-Sy50bYjg-xWwGiIp6VCks12HCi_R9GAytp25xrxFzmA77afH8Q2EWLd83Sb6Jt7RF7jJb_n8mf0QRWVBap.jpg?size=509x515&quality=96&type=album"
         alt="John"
        >
        </v-avatar>
        <v-card-text>    
       <div style = "float:left"><h6 style="color:black; padding-left: 20px; line-height:15px; padding-top: 22px">Зубенко Михаил Петрович <span style = "font-weight: normal">18 лет</span> </h6>
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
    min-height="1000"
    max-width="1200"
    class="v-sheetmy"
    ><div style = "margin-left: 270px">
    <v-tabs>
    <v-tab
    @click = "gotoaboutme">О себе</v-tab>
    <v-tab
    @click = "gotoskill">Навыки</v-tab>
    <v-tab
    @click = "gotoportfolio">Портфолио</v-tab>
    <v-tab
    @click = "gotoyspv">Успеваемость</v-tab>
    <v-tab
    @click = "gotocharts">Графики</v-tab>
    <v-tab
    @click = "gotovk">Контакты</v-tab>
  </v-tabs>
    </div>
    <div v-if = "showblock === 'aboutme'">
      <!-- <div style = "min-height = 800px; max-width= 1200"> 
        <div>
          <h5>Обо мне</h5>
          <p> Тудым сюдым</p>
        </div>
        <div>
          <h5>Образование</h5>
          <p>Тудым сюдым </p>
        </div> -->
   <!-- <Mytimeline/> -->
   <div style = "margin-left: 102px; margin-top: 25px">
   <aboutm2/></div>
  <v-tabs
  style = "margin-top: 25px"
  centered
  >
    <v-tab
    @click = "gotoint"
    style = "margin-left: 270px">
      Интересы
    </v-tab>
    <v-tab
    @click = "gotoiq">
      Интеллект
    </v-tab>
    <v-tab
    @click = "gotopersch">
      Личностные<br>характеристики
    </v-tab>
    <v-tab
    @click = "gototrainprog">
     Тренинговые<br> программы
    </v-tab>
    <v-tab
    @click = "gotoaptlearn">
     Склонность к <br> обучению
    </v-tab>
  </v-tabs>
  <div v-if = "showchart === 'int'" style = "margin-top: 15px">
    <int/>
  </div>
  <div v-if = "showchart === 'iq'"  style = "margin-top: 15px">
    <iq/>
  </div>
  <div v-if = "showchart === 'persch'"  style = "margin-top: 15px">
    <persch/>
  </div>
  <div v-if = "showchart === 'trainprog'" style = "margin-top: 15px">
    <trainprog/>
  </div>
  <div v-if = "showchart === 'aptlearn'" style = "margin-top: 15px">
    <aptlearn/>
  </div>
    </div>
    <div v-if = "showblock === 'skill'">
      <h3 style="text-align:center">Навыки</h3>
      <div  id = "block1">
        <p >Adobe Photoshop</p>
    <v-progress-linear
      v-model="Photoshop"
      height="20"
      color = "#4c84ff"
      rounded

    >
      <strong>85%</strong>
    </v-progress-linear>
        </div>
    <br>
    
    <div id = "block2">
        <p>Adobe XD</p>
    <v-progress-linear
      v-model="XD"
      height="20"
      color = "#8e43e7"
      rounded

    >
      <strong>72%</strong>
    </v-progress-linear>
    </div>
    <br>
    <div id = "block3">
        <p>Adobe Illustrator</p>
    <v-progress-linear
      v-model="Illustrator"
      height="20"
      color = "#ffc168"
      rounded
    >
      <strong>65%</strong>
    </v-progress-linear></div>
    <br>
    <div id = "block4"> 
        <p >Создание презентаций</p>
    <v-progress-linear
      v-model="pres"
      height="20"
      color = "#29cb97"
      rounded
    >
      <strong>95%</strong>
    </v-progress-linear> </div>
    <br>
    
    <div id = "block5">
        <p>Фотография</p>
     <v-progress-linear
      v-model="photo"
      height="20"
      color="#9d3c7d"
      rounded
      
    >
      <strong>78%</strong>
    </v-progress-linear>
    </div>
    <br>
   
    <div  id = "block6"> <p>Blender</p>
    <v-progress-linear
      height="20"
      color="#acc0b4"
      rounded
      v-model="Blender"
    >
      <strong>55%</strong>
     
    </v-progress-linear>
    </div>
     <br>
      
      <div  id = "block7"><p>HTML, CSS</p>
      <v-progress-linear
      height="20"
       color="#4f679c"
       rounded
       v-model ="CSS"      
    >
      <strong>60%</strong>
    </v-progress-linear>
      </div>
    <h3 class="text-center" style = "margin-top: 256px">Языки</h3>
    <div class="text-center" >
        <p>Английский язык</p>
    <v-progress-circular
      :rotate="360"
      :size="100"
      :width="15"
      :value="60"
      color="#943737de"
    >
      B2 
    </v-progress-circular>
    <p>Немецкий язык</p>
    <v-progress-circular
      :rotate="360"
      :size="100"
      :width="15"
      :value="40"
      color="#bfce44de"
    >
      А2
    </v-progress-circular>
    </div>
    </div>
    <div v-if = "showblock === 'portfolio'"> 
        <div style = "margin-left: 87px; margin-top: 40px">
        <v-card
        class="mx-auto"
        max-width="344"
        >
       <v-img
        src="https://sun9-30.userapi.com/s/v1/ig2/KKREWA05A9YDWDiWH7sRu55iCpOcN8U1VmU0MiBd1g4hWE_An5Ko1VEUEfsVaHFd-TZg1EM1ZrEvtfUgVY3fKEkn.jpg?size=1280x853&quality=96&type=album"
        height="200px"
    ></v-img>

    <v-card-title>
     Участие в Весенней школе <br> Волонтёров
    </v-card-title>

    <v-card-subtitle>
     27 марта 2022г.
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Подробнее
      </v-btn>
      <hr>
      <v-spacer></v-spacer>
      </v-card-actions>
         </v-card>
        </div>
        <div style = "margin-right: 10px; margin-top: 5px">
         <v-card
        class="mx-auto"
        max-width="344"
        style = "margin-left: 20px"
        >
       <v-img
        src="https://sun9-28.userapi.com/s/v1/if2/jn3ccZxZMlAP48_NE3NdgGFTncNcvq9bSgwCaJHJ5QFAUuO4A6kEnCd4YU_IAWfnbprVy9oalkTZrdVTROd8Nvw1.jpg?size=1920x1280&quality=96&type=album"
        height="200px"
    ></v-img>

    <v-card-title>
      Организация мероприятия<br>"Идеальный урок в «Парта»"
    </v-card-title>

    <v-card-subtitle>
     8 сентября 2021г.
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Подробнее
      </v-btn>
      <hr>
      <v-spacer></v-spacer>
      </v-card-actions>
         </v-card>
        </div>
        <div style = "margin-left: 25px">
          <v-card
        class="mx-auto"
        max-width="344"
        style = "margin-left: 20px"
        >
       <v-img
        src="https://kursbox.ru/upload/iblock/365/365e3477f7140f3fb1db82943a0d971b.svg"
        height="200px"
    ></v-img>

    <v-card-title>
     Сертификат Skillbox "Adobe <br> After Effects c 0 до PRO" 
    </v-card-title>

    <v-card-subtitle>
     18 июля 2021г.
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Подробнее
      </v-btn>
      <hr>

      <v-spacer></v-spacer>
      </v-card-actions>
         </v-card>
        </div>
        <div  style = "margin-left: 87px; margin-top: 40px">
          <v-card
        class="mx-auto"
        max-width="344"
        >
       <v-img
        src="https://sun9-87.userapi.com/s/v1/ig2/bDYHqnLkeYmjoFsqg0lCNyarlgOOfW_75lUVYeuS2hUeCAwKzvk5wSV9A23sfqHLFinxmT65K9KwNJG4xIh12sg-.jpg?size=2560x1634&quality=95&type=album"
        height="200px"
    ></v-img>

    <v-card-title>
      Brand identity для <br> KEY EDIFICE
    </v-card-title>

    <v-card-subtitle>
     12 декабря 2020г.
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Подробнее
      </v-btn>

      <v-spacer></v-spacer>
      </v-card-actions>
         </v-card>
        </div>
    </div>
    <div v-if = "showblock === 'yspv'" style="padding-top: 30px">
        <tableyspv/>
    </div>
    <div v-if = "showblock === 'charts'">
      <section>
      <h4 style = "margin: 2%" >Шкала базисных убеждений </h4>
      <div style="overflow: hidden;">
    <div style="width: 1000%;">
      <div style="float: left; width:  36vw; height: 50vh; margin-right:-97px; margin-left: 7px">
      <Popoutpb1/>
      </div>
      <div style="float: left; width:  40vw; height: 60vh;">
      <AreaChart2/>
      </div>
      </div>
      </div> </section>
       <section >
      <h4 style = "margin: 2% auto; " >Способы совладающего поведения </h4>
      <div style="overflow: hidden;">
    <div style="width: 1000%;">
      <div style="float: left; width:  30vw; height: 50vh; margin-right:2px; margin-left: 7px">
      <Popoutpb2/>
      </div>
      <div style="float: left; width:  40vw; height: 60vh;">
      <AreaChart4/>
      </div>
      </div>
      </div> </section>
      <section>
      <h4 style = "margin: 2% auto;" >Стиль саморегуляции поведения </h4>
      <div style="overflow: hidden;">
    <div style="width: 1000%;">
      <div style="float: left; width:  30vw; height: 50vh; margin-right:2px; margin-left: 7px">
      <Popoutpb3/>
      </div>
      <div style="float: left; width:  40vw; height: 50vh; ">
      <AreaChart3/>
      </div>
      </div>
      </div> </section>
    </div>
    <div v-if = "showblock === 'vk'">
      <div style = "padding-left: 150px">
      <Contacts/>
      </div>
    </div>
    </v-sheet>
    </v-container>
     </div>
 </div>

</template>

<script>
 import tableyspv from "./components/tableyspv.vue"
 import iq from "./components/iq.vue"
 import int from "./components/interes.vue"
 import persch from "./components/persch.vue"
 import trainprog from "./components/trainprog.vue"
 import aptlearn from "./components/aptlearn.vue"
 import appbar from "./components/appbar.vue"
import AreaChart2 from "./components/AreaChart2.vue"
import AreaChart3 from "./components/AreaChart3.vue"
import AreaChart4 from "./components/AreaChart4.vue"
import Popoutpb1 from "@/components/Popoutpb1.vue"
import Popoutpb2 from "./components/Popoutpb2.vue"
import Popoutpb3 from "./components/Popoutpb3.vue"
import Contacts from "./components/contacts.vue"
import aboutm2 from "./components/aboutme2.vue"


  export default {
       name: "App",
  el: "#app",
  components:{
      tableyspv,
      iq,
      int,
      persch,
      trainprog,
      aptlearn,
      appbar,
    Contacts,
    aboutm2,
    AreaChart2,
    AreaChart3,
    AreaChart4,
    Popoutpb1,
    Popoutpb2,
    Popoutpb3
  },
    data: () => ({
      showblock: "aboutme",
      showchart: "int",
      Photoshop:85,
      XD:72,
      Illustrator:65,
      photo:78,
      pres: 95,
      Blender:55,
      CSS: 60
      
    }),
    methods:{
        gotoaboutme: function(){
           this.showblock = "aboutme"
        },
        gotoskill: function(){
            this.showblock = "skill"
        },
        gotoportfolio: function(){
            this.showblock = "portfolio"
        },
        gotoreview: function(){
            this.showblock = "review"
        },
        gotocharts: function(){
            this.showblock = "charts"
        },
        gotoyspv: function(){
            this.showblock ="yspv"
        },
        gotovk: function(){
            this.showblock = "vk"
        },
        gotoint: function(){
          this.showchart = "int"
        },
        gotoiq: function(){
          this.showchart = "iq"
        },
        gotopersch: function(){
          this.showchart = "persch"
        },
        gototrainprog: function(){
          this.showchart = "trainprog"
        },
        gotoaptlearn: function(){
          this.showchart = "aptlearn"
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
.appbar{
  height: 35px;
  color: #2d3b4e;
  background-color: #2d3b4e ;
}
.appbarfont{
   text-align: center;
   font-family: 'Franklin Gothic Heavy';
   color: white;
}
</style>