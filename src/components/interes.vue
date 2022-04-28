<script>
import { Radar } from "vue-chartjs";

export default {
  extends: Radar,
  mounted() {
    this.renderChart(
      {
        labels: [
          "Техника",
          "Наука",
          "Искусство",
          "Общение",
          "Бизнес",
          "Знак",
          "Природа",
          "Риск"
        ],
        datasets: [
          {
            label: "Интересы",
            backgroundColor: "rgba(179,181,198,0.2)",
            borderColor: "rgba(179,181,198,1)",
            pointBackgroundColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
            data: [6.6, 7.7, 6.2, 1, 4, 7.1, 5.7, 1]
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
</script>