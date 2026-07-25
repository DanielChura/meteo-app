import { ChartOptions } from 'chart.js';

export const options: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: '#0F172A',
      titleColor: '#FFFFFF',
      bodyColor: '#38BDF8',
      borderColor: '#1E293B',
      borderWidth: 1,
      padding: 12,
      displayColors: false,
      titleFont: {
        family: "'Plus Jakarta Sans', sans-serif",
        size: 12,
        weight: 'bold',
      },
      bodyFont: {
        family: "'Plus Jakarta Sans', sans-serif",
        size: 14,
        weight: 'bold',
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
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: '#64748B',
        font: {
          family: "'Plus Jakarta Sans', sans-serif",
          size: 11,
          weight: 500,
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
