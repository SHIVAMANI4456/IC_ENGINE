let rpmChart;
let tempChart;
let crChart;

function runModel(){

  let rpm=parseFloat(document.getElementById("rpm").value);

  let temp=parseFloat(document.getElementById("temp").value);

  let cr=parseFloat(document.getElementById("cr").value);

  // EFFICIENCY
  let efficiency=(1-(1/Math.pow(cr,0.4)))*100;

  // EXHAUST QUALITY
  let quality=10-(rpm/2000 + temp/50);

  if(quality<0){
    quality=0;
  }

  // HEALTH SCORE
  let health=100-(rpm/100 + temp/2);

  if(health<0){
    health=0;
  }

  // DISPLAY
  document.getElementById("eff").innerHTML=
  efficiency.toFixed(1)+"%";

  document.getElementById("quality").innerHTML=
  quality.toFixed(1)+"/10";

  document.getElementById("health").innerHTML=
  health.toFixed(0)+"/100";

  // AI DIAGNOSIS

  let diagnosis="";
  let solution="";
  let severity="Low";

  // OVERHEATING
  if(temp>100){

    diagnosis=
    "🔥 Engine overheating detected";

    solution=
    "Check radiator, coolant, water pump, and cooling fan.";

    severity="High";
  }

  // HIGH RPM
  else if(rpm>5000){

    diagnosis=
    "⚠ High RPM stress causing engine wear";

    solution=
    "Reduce aggressive driving and inspect lubrication system.";

    severity="Medium";
  }

  // LOW EFFICIENCY
  else if(efficiency<45){

    diagnosis=
    "⚠ Low combustion efficiency";

    solution=
    "Check spark plugs, injector, air filter, and fuel quality.";

    severity="Medium";
  }

  // NORMAL
  else{

    diagnosis=
    "✅ Engine operating normally";

    solution=
    "No major issue detected.";

    severity="Low";
  }

  document.getElementById("diagnosis").innerHTML=
  "Problem: "+diagnosis;

  document.getElementById("solution").innerHTML=
  "Solution: "+solution;

  document.getElementById("severity").innerHTML=
  "Severity: "+severity;

  drawRPMGraph();
  drawTempGraph();
  drawCRGraph();
}

/* RPM GRAPH */

function drawRPMGraph(){

  if(rpmChart){
    rpmChart.destroy();
  }

  rpmChart=new Chart(
    document.getElementById("rpmGraph"),
    {
      type:'line',

      data:{
        labels:[1000,2000,3000,4000,5000,6000],

        datasets:[{
          label:'CO vs RPM',

          data:[8,6,4,3,2,1],

          borderColor:'#00e5ff',

          tension:0.4
        }]
      },

      options:{
        plugins:{
          tooltip:{
            callbacks:{
              label:function(context){

                let val=context.raw;

                if(val>5){
                  return 'High CO → Incomplete combustion';
                }

                else if(val>2){
                  return 'Moderate combustion';
                }

                else{
                  return 'Efficient combustion';
                }

              }
            }
          }
        }
      }
    }
  );
}

/* TEMP GRAPH */

function drawTempGraph(){

  if(tempChart){
    tempChart.destroy();
  }

  tempChart=new Chart(
    document.getElementById("tempGraph"),
    {
      type:'line',

      data:{
        labels:[20,40,60,80,100,120],

        datasets:[{
          label:'NOx vs Temperature',

          data:[2,3,5,7,9,11],

          borderColor:'#ff4d6d',

          tension:0.4
        }]
      },

      options:{
        plugins:{
          tooltip:{
            callbacks:{
              label:function(context){

                let val=context.raw;

                if(val>8){
                  return 'High NOx → Overheating risk';
                }

                else{
                  return 'Normal thermal condition';
                }

              }
            }
          }
        }
      }
    }
  );
}

/* CR GRAPH */

function drawCRGraph(){

  if(crChart){
    crChart.destroy();
  }

  crChart=new Chart(
    document.getElementById("crGraph"),
    {
      type:'line',

      data:{
        labels:[6,8,10,12,14],

        datasets:[{
          label:'Efficiency vs Compression Ratio',

          data:[35,45,52,58,62],

          borderColor:'#00ff88',

          tension:0.4
        }]
      },

      options:{
        plugins:{
          tooltip:{
            callbacks:{
              label:function(context){

                let val=context.raw;

                if(val>55){
                  return 'High efficiency → Better mileage';
                }

                else{
                  return 'Lower efficiency';
                }

              }
            }
          }
        }
      }
    }
  );
}

/* INITIAL LOAD */

runModel();
