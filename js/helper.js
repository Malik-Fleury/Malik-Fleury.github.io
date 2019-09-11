
function createSkillCharts(divName, skillsDic)
{
  var skillsDiv = document.getElementById(divName);

  Object.keys(skillsDic).forEach(function(key) {
    var chartDiv = document.createElement('div');
    chartDiv.className = 'chart';
    chartDiv.setAttribute('data-percent', skillsDic[key]);

    var percentSpan = document.createElement('span');
    percentSpan.className = 'percent';
    percentSpan.innerHTML = skillsDic[key] + '%';

    var chartTitle = document.createElement('h2');
    chartTitle.innerHTML = key;

    chartDiv.appendChild(percentSpan);
    chartDiv.appendChild(chartTitle);
    skillsDiv.appendChild(chartDiv);
  });
}

// function createChart(divName, title, pourcent)
// {
//   var ctx = document.getElementById(divName).getContext('2d');
//   var chart = new Chart(ctx, {
//   type: 'pie',
//   data: {
//       datasets: [{
//           data: [pourcent, 100 - pourcent],
//           backgroundColor: [
//               'rgba(17, 18, 18, 0.90)',
//               'rgba(255, 255, 255, 0.90)',
//           ],
//           borderColor: [
//               'rgba(17, 18, 18, 1.0)',
//               'rgba(17, 18, 18, 1.0)'
//           ],
//           borderWidth: 1
//       }]
//   },
//   options: {
//     responsive: true,
//     maintainAspectRatio: true,
//       title: {
//           display: true,
//           text: title
//       },
//       scales: {
//           yAxes: [{
//               gridLines: {
//                   drawBorder: false,
//                   display: false,
//               },
//               ticks: {
//                   display: false
//               }
//           }]
//       }
//   }
//   });
// }
