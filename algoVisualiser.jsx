import React, { Component } from 'react'
import {Bar,Line,Pie} from 'react-chartjs-2';
import { Button } from 'reactstrap';
var NUMBER_OF_ARRAY_BARS = 15;

export default class AlgoVisualiser extends Component {
    constructor(props){
        super(props);
        this.state={
            chartData:[]

        }
    }
    componentDidMount(){
        this.resetArray();
    }
    resetArray() {
        const array = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
          array.push(randomIntFromInterval(80, 250));
        }
        const indexarray=[];
        for (let i=0;i<NUMBER_OF_ARRAY_BARS;i++){
            indexarray.push(`${i}`);
        }
        this.setState({chartData:{
            labels:indexarray,
            datasets:[
                {
                    label:'Value',
                    data:array
                }
            ]

        }}
        
        );
      }
     
      bubbleSort(){
        const chartData=this.state.chartData;
        const arraybs=chartData.datasets[0].data;
        var length = arraybs.length;
        let swapped = false;
  for (var i = 0; i < length; i++) {
    for (var j = 0; j < (length - i - 1); j++) { 
      //Compare the adjacent positions
        if (arraybs[j] > arraybs[j + 1]) {
        
          //Swap the numbers
          var tmp = arraybs[j]; //Temporary variable to hold the current number
          arraybs[j] = arraybs[j + 1]; //Replace current number with adjacent number
          arraybs[j + 1] = tmp; //Replace adjacent number with current number
          swapped = true;
          this.setState({chartData:{
            datasets:[
                { label:'Bubble Sorted Values',
                    data:arraybs
                }
            ]
        
        }})
       }
  }
  if(!swapped){
    break;
  }
}
 
 

}

    render() {
        return (
            <div>
                <Bar data={this.state.chartData}
              />
              <Button onClick={()=>this.bubbleSort()}>Bubble Sort</Button>
                
            </div>
        )
    }
}

function randomIntFromInterval(min, max){ 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

//   function addData(chart,data) {
//     chart.datasets.forEach((dataset) => {
//         dataset.data.push(data);
//     });
// }

// function removeData(chart) {
//     chart.datasets.forEach((dataset) => {
//         dataset.data.pop();
//     });
// }

// function swapvalues(chart,data){
//     removeData(chart);
//     addData(chart,data)

// }