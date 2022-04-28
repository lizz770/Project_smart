<script>
import { Radar } from "vue-chartjs";

export default {
  extends: Radar,
  mounted() {
    this.renderChart(
      {
        labels: [
          "Общий балл мотивации",
          "Мотивация",
          "Интеллектуальное развитие",
          "Коммуникативные навыки",
          "Лидерство и отношения",
          "Самоорганизация",
          "Эмоциональная саморегуляция"
        ],
        datasets: [
          {
            label: "Тренинговые программы",
            backgroundColor: "rgba(179,181,198,0.2)",
            borderColor: "rgba(179,181,198,1)",
            pointBackgroundColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
            data: [4.9, 2.2, 5.4, 10, 5.2, 5.6, 1]
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
</script>