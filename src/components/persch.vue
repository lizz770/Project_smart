<script>
import { Radar } from "vue-chartjs";

export default {
  extends: Radar,
  mounted() {
    this.renderChart(
      {
        labels: [
          "Активность",
          "Согласие",
          "Самоконтроль",
          "Эмоциональная стабильность"
        ],
        datasets: [
          {
            label: "Личностные характеристики",
            backgroundColor: "rgba(179,181,198,0.2)",
            borderColor: "rgba(179,181,198,1)",
            pointBackgroundColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
            data: [1, 7.6, 7.8, 5.5]
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
</script>