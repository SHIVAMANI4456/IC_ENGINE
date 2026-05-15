const rpm=document.getElementById("rpm");
const speed=document.getElementById("speed");
const load=document.getElementById("load");
const gear=document.getElementById("gear");
const terrain=document.getElementById("terrain");

const rpmValue=document.getElementById("rpmValue");
const speedValue=document.getElementById("speedValue");
const loadValue=document.getElementById("loadValue");
const gearValue=document.getElementById("gearValue");

const performance=document.getElementById("performance");
const efficiency=document.getElementById("efficiency");
const stress=document.getElementById("stress");
const suggestion=document.getElementById("suggestion");

function updateDashboard(){

rpmValue.innerHTML=rpm.value;
speedValue.innerHTML=speed.value;
loadValue.innerHTML=load.value;
gearValue.innerHTML=gear.value;

let torque=(rpm.value/100)*gear.value-load.value;

let mileage=40-load.value*0.2;

let engineStress="Normal";

if(load.value>70){
engineStress="High Engine Stress";
}

let vehiclePerformance="Optimal";

if(rpm.value>5000){
vehiclePerformance="High Performance";
}

performance.innerHTML="Performance: "+vehiclePerformance;

efficiency.innerHTML="Mileage: "+mileage.toFixed(1)+" km/l";

stress.innerHTML="Stress: "+engineStress;

suggestion.innerHTML="Suggestion: Maintain optimal RPM";

const trace1={

x:[1000,2000,3000,4000,5000,6000,7000],

y:[20,40,torque,120,100,70,40],

type:'scatter',

mode:'lines+markers',

hovertemplate:
'RPM: %{x}<br>'+
'Torque: %{y} Nm'

};

const layout1={

title:'Torque vs RPM',

paper_bgcolor:'#111827',

plot_bgcolor:'#111827',

font:{
color:'white'
}

};

Plotly.newPlot('torqueChart',[trace1],layout1);

const trace2={

x:[20,40,60,80,100],

y:[35,32,mileage,20,15],

type:'scatter',

mode:'lines+markers',

hovertemplate:
'Speed: %{x}<br>'+
'Mileage: %{y} km/l'

};

const layout2={

title:'Speed vs Fuel Efficiency',

paper_bgcolor:'#111827',

plot_bgcolor:'#111827',

font:{
color:'white'
}

};

Plotly.newPlot('efficiencyChart',[trace2],layout2);

}

rpm.addEventListener("input",updateDashboard);
speed.addEventListener("input",updateDashboard);
load.addEventListener("input",updateDashboard);
gear.addEventListener("input",updateDashboard);
terrain.addEventListener("change",updateDashboard);

updateDashboard();
