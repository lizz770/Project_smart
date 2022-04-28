<script>
import { Radar } from "vue-chartjs";

export default {
  extends: Radar,
  mounted() {
    this.renderChart(
      {
        labels: [
          "Вычисления",
          "Лексика",
          "Эрудиция",
          "Зрительная логика",
          "Абстрактная логика",
          "Внимание",
          "Общий балл"
        ],
        datasets: [
          {
            label: "Интеллект",
            backgroundColor: "rgba(179,181,198,0.2)",
            borderColor: "rgba(179,181,198,1)",
            pointBackgroundColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
            data: [7.4, 6.1, 6.7, 9.8, 6.7, 9.3, 7.7]
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
</script>