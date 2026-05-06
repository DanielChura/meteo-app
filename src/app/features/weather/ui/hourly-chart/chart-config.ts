import { ChartOptions, TooltipItem } from 'chart.js';

export const options: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      titleColor: '#1a1a1a',
      bodyColor: '#333333',
      borderColor: 'rgba(255, 255, 255, 0.5)',
      borderWidth: 1,
      padding: 12,
      displayColors: false,
      titleFont: {
        family: "'Manrope', sans-serif",
        size: 13,
        weight: 'bold'
      },
      bodyFont: {
        family: "'Manrope', sans-serif",
        size: 14,
        weight: 'bold'
      },
      callbacks: {
        label: function (context) {
          return context.parsed.y + '°';
        },
      },
    },
  },
  layout: {
    padding: {
      top: 20,
      bottom: 5,
    }
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: 'rgba(255, 255, 255, 0.95)',
        font: {
          family: "'Manrope', sans-serif",
          size: 12.8,
        },
        maxTicksLimit: 6,
      },
      border: {
        display: false,
      },
    },
    y: {
      display: false,
      grace: '20%',
    },
  },
  interaction: {
    intersect: false,
    mode: 'index',
  },
};
