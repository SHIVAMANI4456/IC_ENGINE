const rpm = document.getElementById("rpm");

function updateGraph(){

const trace = {

x:[1000,2000,3000,4000,5000,6000,7000],

y:[20,40,80,120,100,70,40],

type:'scatter',

mode:'lines+markers',

hovertemplate:
'RPM: %{x}<br>' +
'Torque: %{y} Nm'

};

const layout = {

title:'Torque vs RPM',

paper_bgcolor:'#111827',

plot_bgcolor:'#111827',

font:{
color:'white'
}

};

Plotly.newPlot('graph',[trace],layout);

}

rpm.addEventListener("input",updateGraph);

updateGraph();
