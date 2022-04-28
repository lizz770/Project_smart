<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</template>
<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'НАИМЕНОВАНИЕ ДИСЦИПЛИНЫ (МОДУЛЯ), РАЗДЕЛА',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'ТИП', value: 'tip' },
          { text: 'ОБЩЕЕ КОЛ‑ВО ЧАС.', value: 'ch' },
          { text: 'ОЦЕНКА', value: 'mar' },
          { text: 'РЕЙТИНГ', value: 'rei' },
          { text: 'ДАТА СДАЧИ', value: 'ds' },
          { text: 'Ф.И.О. ПРЕПОДАВАТЕЛЯ', value: 'fio' },
        ],
        desserts: [
          {
            name: 'История и теория дизайна',
            tip: 'Экзамен',
            ch: 380,
            mar: 5,
            rei: 100,
            ds: '30.01.2022',
            fio: '-',
          },
          {
            name: 'Арт-практика',
            tip: 'Экзамен',
            ch: 456,
            mar: 5,
            rei: 100,
            ds: '31.01.2022',
            fio: '-',
          },
          {
            name: 'Креативное проектирование',
            tip: 'Экзамен',
            ch: 756,
            mar: 5,
            rei: 100,
            ds: '28.01.2022',
            fio: '-',
          },
          {
            name: 'История',
            tip: 'Экзамен',
            ch: 190,
            mar: 5,
            rei: 100,
            ds: '19.01.2022',
            fio: '-',
          },
          {
            name: 'Английский язык',
            tip: 'Экзамен',
            ch: 304,
            mar: 5,
            rei: 100,
            ds: '21.01.2022',
            fio: '-',
          },
          {
            name: 'Безопасность жизнедеятельности',
            tip: 'Зачёт',
            ch: 38,
            mar: "Зачтено",
            rei: 100,
            ds: '15.01.2022',
            fio: '-',
          },
          {
            name: 'Философия ',
            tip: 'Зачёт',
            ch: 152,
            mar: "Зачтено",
            rei: 100,
            ds: '17.01.2022',
            fio: '-',
          },
          {
             name: 'Физическая культура ',
            tip: 'Зачёт',
            ch: 100,
            mar: "Зачтено",
            rei: 100,
            ds: '-',
            fio: '-',
          },
          {
            name: 'Социология',
            tip: 'Зачёт',
            ch: 100,
            mar: "Зачтено",
            rei: 100,
            ds: '-',
            fio: '-',
          },
        ],
      }
    },
  }
</script>