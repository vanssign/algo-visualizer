import React, { Component } from 'react'
import {Bar,Line,Pie} from 'react-chartjs-2';
import { Button } from 'reactstrap';
// Change this value for the number of bar(value) in the array.
var NUMBER_OF_ARRAY_BARS = 100;
export default class TimeComparision extends Component {

    constructor(props){
        super(props);
        this.state={
            chartData:[],
           chartDataSorted:[],
           chartDataTime:[]

        }
    }
    componentDidMount(){
        this.resetArray();
    }

    computeTimeGraph(){
     const isTime= document.getElementById('time-taken-is').innerHTML; 
     const bsTime= document.getElementById('time-taken-bs').innerHTML; 
     const qsTime= document.getElementById('time-taken-qs').innerHTML; 
     const msTime= document.getElementById('time-taken-ms').innerHTML; 
     const ssTime= document.getElementById('time-taken-ss').innerHTML; 
      this.setState({chartDataTime:{
          datasets:[
              { label:'time(ms)',
                  data:[bsTime,msTime,qsTime,isTime,ssTime]
              }
          ]
        
        }})

    }
    clearSortGraph(){
        this.setState({chartDataSorted:{
          datasets:[
              {
                  label:'Value not sorted',
              }
          ]

      }}
      
      );
    }
    resetSizeOfArray500(){
     NUMBER_OF_ARRAY_BARS=500;
      this.resetArray();
    }
    resetSizeOfArray250(){
      NUMBER_OF_ARRAY_BARS=250;
       this.resetArray();
     }
     resetSizeOfArray5000(){
      NUMBER_OF_ARRAY_BARS=5000;
       this.resetArray();
     }
     
     resetSizeOfArray1000(){
      NUMBER_OF_ARRAY_BARS=1000;
       this.resetArray();
     }
     resetSizeOfArray100(){
      NUMBER_OF_ARRAY_BARS=100;
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
        this.setState({chartDataSorted:{
          labels:indexarray,
          datasets:[
              {
                  label:'Value not sorted',
                  data:array
              }
          ]

      }}
      
      );
      this.setState({chartDataTime:{
        labels:["Bubble sort","Merge Sort","Quick Sort","Insertion Sort","Selection Sort"],
        datasets:[
          {
              label:'time(ms)'
          }
      ]

      }});
      document.getElementById('time-taken-is').innerHTML=`Not Sorted`; 
      document.getElementById('time-taken-bs').innerHTML=`Not Sorted`; 
      document.getElementById('time-taken-qs').innerHTML=`Not Sorted`; 
      document.getElementById('time-taken-ms').innerHTML=`Not Sorted`; 
      document.getElementById('time-taken-ss').innerHTML=`Not Sorted`; 

      }
      insertionSort(){
        const chartData=this.state.chartData;
        const arrayis=chartData.datasets[0].data;
      
          var len = arrayis.length;
          const t0is=performance.now();
          for (var i = 1; i < len; i++) {
            var tmp = arrayis[i]; //Copy of the current element. 
            /*Check through the sorted part and compare with the number in tmp. If large, shift the number*/
            for (var j = i - 1; j >= 0 && (arrayis[j] > tmp); j--) {
              //Shift the number
              arrayis[j + 1] = arrayis[j];
            }
            //Insert the copied number at the correct position
            //in sorted part. 
            arrayis[j + 1] = tmp;
          }
          const t1is=performance.now();
          this.setState({chartDataSorted:{
            datasets:[
                { label:'Insertion Sorted Values',
                    data:arrayis
                }
            ]
        
        }})
        document.getElementById('time-taken-is').innerHTML=`${t1is-t0is}`;    

      }

       selectionSort() {
        const chartData=this.state.chartData;
        const arrayss=chartData.datasets[0].data;
        var length = arrayss.length;
        const t0ss=performance.now();
        for (var i = 0; i < length - 1; i++) {
          //Number of passes
          var min = i; //min holds the current minimum number position for each pass; i holds the Initial min number
          for (var j = i + 1; j < length; j++) { //Note that j = i + 1 as we only need to go through unsorted array
            if (arrayss[j] < arrayss[min]) { //Compare the numbers
              min = j; //Change the current min number position if a smaller num is found
            }
          }
          if (min != i) {
            //After each pass, if the current min num != initial min num, exchange the position.
            //Swap the numbers 
            var tmp = arrayss[i];
            arrayss[i] = arrayss[min];
            arrayss[min] = tmp;
          }
        }
        const t1ss=performance.now();
        this.setState({chartDataSorted:{
          datasets:[
              { label:'Selection Sorted Values',
                  data:arrayss
              }
          ]
      
      }})
      document.getElementById('time-taken-ss').innerHTML=`${t1ss-t0ss}`;    
      }
      
     bubbleSort(){
        const chartData=this.state.chartData;
        const arraybs=chartData.datasets[0].data;
        var length = arraybs.length;
        let swapped = false;
        const t0bs=performance.now();
  for (var i = 0; i < length; i++) {
    for (var j = 0; j < (length - i - 1); j++) { 
      //Compare the adjacent positions
        if (arraybs[j] > arraybs[j + 1]) {
        
          //Swap the numbers
          var tmp = arraybs[j]; //Temporary variable to hold the current number
          arraybs[j] = arraybs[j + 1]; //Replace current number with adjacent number
          arraybs[j + 1] = tmp; //Replace adjacent number with current number
          swapped = true;
       }
  }
  if(!swapped){
    break;
  }
}
  const t1bs=performance.now();
  this.setState({chartDataSorted:{
    datasets:[
        { label:'Bubble Sorted Values',
            data:arraybs
        }
    ]

}})
document.getElementById('time-taken-bs').innerHTML=`${t1bs-t0bs}`;    

}
      

    render() {
        return (
            <div>
                 <div className="container">
        <div className="row">
        <div className="col-12 col-md-8">
      <div className="array-container">
      <Bar data={this.state.chartData}
              />


        </div>
        </div>
        <div className="col-12 col-md-4 py-4">
        <div className="buttons-container">

<div className="row">
  <div className="col-12"><button className="btn btn-light" onClick={() => this.resetArray()}>Click Here to get Started</button></div>
       <div className="col-12">
         <div>Generate New Array Of Size</div>
         <button className="btn btn-light" onClick={() => this.resetSizeOfArray100()}>100</button>
         <button className="btn btn-light" onClick={() => this.resetSizeOfArray250()}>250</button>
         <button className="btn btn-light" onClick={() => this.resetSizeOfArray500()}>500</button>
         <button className="btn btn-light" onClick={() => this.resetSizeOfArray1000()}>1000</button>
         {/* <button className="btn btn-light" onClick={() => this.resetSizeOfArray5000()}>5000</button> */}
         <div className="text-info"><i className="fa fa-info-circle"></i> Array Size &gt;  may cause browser to slow down</div>
         </div>
         
      </div>
      
      </div>
      </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-4 order-2 py-4">
        <div className="row">
       <div className="col-6"><button className="btn btn-light" onClick={() => this.clearSortGraph()}>Clear Sort Graph</button></div>
       <div className="col-6">Time Elapsed(ms)</div>
       <div className="col-6"><button className="btn btn-light" onClick={() => this.bubbleSort()}>Bubble Sort</button></div>
       <div className="col-6" id="time-taken-bs"></div>
        <div className="col-6"><button className="btn btn-light" disabled onClick={() => this.mergeSort()}>Merge Sort</button></div>
        <div className="col-6" id="time-taken-ms"></div>
        <div className="col-6"><button className="btn btn-light" disabled onClick={() => this.quickSort()}>Quick Sort</button></div>
        <div className="col-6" id="time-taken-qs"></div>
        <div className="col-6"><button className="btn btn-light" onClick={() => this.insertionSort()}>Insertion Sort</button></div>
        <div className="col-6" id="time-taken-is"></div>
        
      <div className="col-6"><button className="btn btn-light" onClick={() => this.selectionSort()}>Selection Sort</button></div>
      <div className="col-6" id="time-taken-ss"></div>
      </div>
<div className="text-info"><i className="fa fa-info-circle"></i> Least Count of time measurement depends on your browser settings, <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/Performance/now">click here</a> for more info</div>
        </div>
        <div className="col-12 col-md-8 order-1">
        <Bar data={this.state.chartDataSorted}
              />
              
        </div>
      
      </div>
      <div className="row">
        <div className="col-12 col-md-8"><Bar data={this.state.chartDataTime}/></div>
        <div className="col-12 col-md-4 py-4"><Button className="btn btn-light" onClick={()=>this.computeTimeGraph()}>Compute Time Graph</Button></div>
      </div>
      
      </div>
     
      
      </div>
        )
    }
}
function randomIntFromInterval(min, max){ 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }