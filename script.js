// Chart configuration for each canvas
const chartConfig = (label, data, bgColor, brdColor) => {
  return {
      type: 'line', // Can be changed to 'bar', 'pie', etc.
      data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
              label: label,
              data: data,
              backgroundColor: bgColor,
              borderColor: brdColor,
              borderWidth: 1,
              fill: false
          }]
      },
      options: {
          responsive: true,
          animation: {
              duration: 2000, // Animation duration
              easing: 'easeInOutBounce'
          },
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  };
};

// Create charts for each card
const charts = [
  { id: 'chart1', label: 'Sales', data: [65, 59, 80, 81, 56, 55], bgColor: 'rgba(75, 192, 192, 0.2)', brdColor: 'rgba(75, 192, 192, 1)' },
  { id: 'chart2', label: 'Revenue', data: [28, 48, 40, 19, 86, 27], bgColor: 'rgba(153, 102, 255, 0.2)', brdColor: 'rgba(153, 102, 255, 1)' },
  { id: 'chart3', label: 'Visitors', data: [18, 12, 6, 9, 12, 3], bgColor: 'rgba(255, 159, 64, 0.2)', brdColor: 'rgba(255, 159, 64, 1)' },
  { id: 'chart4', label: 'Expenses', data: [78, 81, 96, 65, 59, 80], bgColor: 'rgba(255, 99, 132, 0.2)', brdColor: 'rgba(255, 99, 132, 1)' },
  { id: 'chart5', label: 'Profit', data: [12, 19, 3, 5, 2, 3], bgColor: 'rgba(54, 162, 235, 0.2)', brdColor: 'rgba(54, 162, 235, 1)' },
  { id: 'chart6', label: 'Growth', data: [45, 25, 85, 40, 65, 30], bgColor: 'rgba(255, 206, 86, 0.2)', brdColor: 'rgba(255, 206, 86, 1)' }
];

// Initialize each chart
charts.forEach(chart => {
  const ctx = document.getElementById(chart.id).getContext('2d');
  new Chart(ctx, chartConfig(chart.label, chart.data, chart.bgColor, chart.brdColor));
});
