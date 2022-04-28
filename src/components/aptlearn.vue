<script>
import { Radar } from "vue-chartjs";

export default {
  extends: Radar,
  mounted() {
    this.renderChart(
      {
        labels: [
          "инженерный",
          "физико-математический",
          "естественнонаучный",
          "естественно-технологический",
          "творческий",
          "лингвистический",
          "общественно-гуманитарный",
          "финансово-экономический",
          "информационно-технологический"
        ],
        datasets: [
          {
            label: "Склонность к обучению",
            backgroundColor: "rgba(179,181,198,0.2)",
            borderColor: "rgba(179,181,198,1)",
            pointBackgroundColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
            data: [8.1, 8.6, 7.6, 8.4, 6.4, 3.5, 4.8, 5.7, 8.4]
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
</script>