
function createSkillCharts(divName)
{
  var skillsDic = {};

  skillsDic['C#'] = 75;
  skillsDic['Java'] = 75;
  skillsDic['C++'] = 75;
  skillsDic['Python'] = 75;
  skillsDic['HTML'] = 100;
  skillsDic['CSS'] = 50;
  skillsDic['PHP'] = 50;
  skillsDic['Javascript'] = 75;

  var skillsDiv = document.getElementById(divName);

  Object.keys(skillsDic).forEach(function(key) {
    var newChartCanvas = document.createElement('canvas');
    newChartCanvas.id = key;
    var newSkillDiv = document.createElement('div');
    newSkillDiv.className = "chart-skill";
    newSkillDiv.appendChild(newChartCanvas);

    skillsDiv.appendChild(newSkillDiv);

    createChart(key, key, skillsDic[key]);
  });
}

function createChart(divName, title, pourcent)
{
  var ctx = document.getElementById(divName).getContext('2d');
  var chart = new Chart(ctx, {
  type: 'pie',
  data: {
      datasets: [{
          data: [pourcent, 100 - pourcent],
          backgroundColor: [
              'rgba(17, 18, 18, 0.90)',
              'rgba(255, 255, 255, 0.90)',
          ],
          borderColor: [
              'rgba(17, 18, 18, 1.0)',
              'rgba(17, 18, 18, 1.0)'
          ],
          borderWidth: 1
      }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: true,
      title: {
          display: true,
          text: title
      },
      scales: {
          yAxes: [{
              gridLines: {
                  drawBorder: false,
                  display: false,
              },
              ticks: {
                  display: false
              }
          }]
      }
  }
  });
}
