import { Component, OnInit } from '@angular/core';
import * as d3 from "d3";
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  lineChartData: ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 75], label: 'Crude oil prices' },
  ];

  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  constructor() { }

  ngOnInit() {

    // BAR GRAPH START

 var models = [
  {
    "model_name":"f1",
    "field1":19,
    "field2":83
  },
  {
    "model_name":"f2",
    "field1":67,
    "field2":93
  },
  {
    "model_name":"f3",
    "field1":10,
    "field2":56
  },
];

    var container = d3.select('#d3Id'),
      width = 320,
      height = 220,
      margin = {top: 30, right: 20, bottom: 30, left: 50},
      barPadding = .2,
      axisTicks = {qty: 5, outerSize: 0, dateFormat: '%m-%d'};
    var svg = container
     .append("svg")
     .attr("width", width)
     .attr("height", height)
     .append("g")
     .attr("transform", `translate(${margin.left},${margin.top})`);


var xScale0 = d3.scaleBand().range([0, width - margin.left - margin.right]).padding(barPadding)
var xScale1 = d3.scaleBand()
var yScale = d3.scaleLinear().range([height - margin.top - margin.bottom, 0])

var xAxis = d3.axisBottom(xScale0).tickSizeOuter(axisTicks.outerSize);
var yAxis = d3.axisLeft(yScale).ticks(axisTicks.qty).tickSizeOuter(axisTicks.outerSize);

xScale0.domain(models.map(d => d.model_name))
xScale1.domain(['field1', 'field2']).range([0, xScale0.bandwidth()])
yScale.domain([0, d3.max(models, d => d.field1 > d.field2 ? d.field1 : d.field2)])

var model_name = svg.selectAll(".model_name")
  .data(models)
  .enter().append("g")
  .attr("class", "model_name")
  .attr("transform", d => `translate(${xScale0(d.model_name)},0)`);


  /* Add field1 bars */
model_name.selectAll(".bar.field1")
.data(d => [d])
.enter()
.append("rect")
.attr("class", "bar field1")
.style("fill","#61A1E7")
.attr("x", d => xScale1('field1'))
.attr("y", d => yScale(d.field1))
.attr("width", xScale1.bandwidth())
.attr("height", d => {
  return height - margin.top - margin.bottom - yScale(d.field1)
});

/* Add field2 bars */
model_name.selectAll(".bar.field2")
.data(d => [d])
.enter()
.append("rect")
.attr("class", "bar field2")
.style("fill","#C6ECFF")
.attr("x", d => xScale1('field2'))
.attr("y", d => yScale(d.field2))
.attr("width", xScale1.bandwidth())
.attr("height", d => {
  return height - margin.top - margin.bottom - yScale(d.field2)
});

// // Add the Y Axis
  svg.append("g")
  .attr("class", "y axis")
  .call(yAxis);

// Add the X Axis
  svg.append("g")
  .attr("class", "x axis")
  .attr("transform",`translate(0,${height - margin.top - margin.bottom})` )
  .call(xAxis);


// BAR GRAPH END


// PRICE CHART START



// PRICE CHART END

  }

  jioImage = 'https://i.ibb.co/Yh8FmZG/jio.png';
  relianceImage = 'https://i.ibb.co/c8J7CWv/mutualfund.png';
  bussiness = 'https://i.ibb.co/KFB4kbm/bussiness.jpg';
  stocksMarket = 'https://i.ibb.co/XF7hS9F/stocks.jpg';
  marketUpdate = 'https://i.ibb.co/zHhCGxZ/marketupdate.jpg';






}
