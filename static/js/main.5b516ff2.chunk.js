(this["webpackJsonpalgo-visualiser-dsa"]=this["webpackJsonpalgo-visualiser-dsa"]||[]).push([[0],{218:function(e,t,a){},219:function(e,t,a){},220:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(33),c=a.n(o),l=(a(97),a(98),a(34)),s=a(35),i=a(38),u=a(37),m=a(39),d=a(87),h=100,v=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={chartData:[],chartDataSorted:[],chartDataTime:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.resetArray()}},{key:"computeTimeGraph",value:function(){var e=document.getElementById("time-taken-is").innerHTML,t=document.getElementById("time-taken-bs").innerHTML,a=document.getElementById("time-taken-qs").innerHTML,n=document.getElementById("time-taken-ms").innerHTML,r=document.getElementById("time-taken-ss").innerHTML;this.setState({chartDataTime:{datasets:[{label:"time(ms)",data:[t,n,a,e,r]}]}})}},{key:"clearSortGraph",value:function(){this.setState({chartDataSorted:{datasets:[{label:"Value not sorted"}]}})}},{key:"resetSizeOfArray500",value:function(){h=500,this.resetArray()}},{key:"resetSizeOfArray250",value:function(){h=250,this.resetArray()}},{key:"resetSizeOfArray5000",value:function(){h=5e3,this.resetArray()}},{key:"resetSizeOfArray1000",value:function(){h=1e3,this.resetArray()}},{key:"resetSizeOfArray100",value:function(){h=100,this.resetArray()}},{key:"resetArray",value:function(){for(var e,t,a=[],n=0;n<h;n++)a.push((e=80,t=250,Math.floor(Math.random()*(t-e+1)+e)));for(var r=[],o=0;o<h;o++)r.push("".concat(o));this.setState({chartData:{labels:r,datasets:[{label:"Value",data:a}]}}),this.setState({chartDataSorted:{labels:r,datasets:[{label:"Value not sorted",data:a}]}}),this.setState({chartDataTime:{labels:["Bubble sort","Merge Sort","Quick Sort","Insertion Sort","Selection Sort"],datasets:[{label:"time(ms)"}]}}),document.getElementById("time-taken-is").innerHTML="Not Sorted",document.getElementById("time-taken-bs").innerHTML="Not Sorted",document.getElementById("time-taken-qs").innerHTML="Not Sorted",document.getElementById("time-taken-ms").innerHTML="Not Sorted",document.getElementById("time-taken-ss").innerHTML="Not Sorted"}},{key:"insertionSort",value:function(){for(var e=this.state.chartData.datasets[0].data,t=e.length,a=performance.now(),n=1;n<t;n++){for(var r=e[n],o=n-1;o>=0&&e[o]>r;o--)e[o+1]=e[o];e[o+1]=r}var c=performance.now();this.setState({chartDataSorted:{datasets:[{label:"Insertion Sorted Values",data:e}]}}),document.getElementById("time-taken-is").innerHTML="".concat(c-a)}},{key:"selectionSort",value:function(){for(var e=this.state.chartData.datasets[0].data,t=e.length,a=performance.now(),n=0;n<t-1;n++){for(var r=n,o=n+1;o<t;o++)e[o]<e[r]&&(r=o);if(r!=n){var c=e[n];e[n]=e[r],e[r]=c}}var l=performance.now();this.setState({chartDataSorted:{datasets:[{label:"Selection Sorted Values",data:e}]}}),document.getElementById("time-taken-ss").innerHTML="".concat(l-a)}},{key:"bubbleSort",value:function(){for(var e=this.state.chartData.datasets[0].data,t=e.length,a=!1,n=performance.now(),r=0;r<t;r++){for(var o=0;o<t-r-1;o++)if(e[o]>e[o+1]){var c=e[o];e[o]=e[o+1],e[o+1]=c,a=!0}if(!a)break}var l=performance.now();this.setState({chartDataSorted:{datasets:[{label:"Bubble Sorted Values",data:e}]}}),document.getElementById("time-taken-bs").innerHTML="".concat(l-n)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-md-8"},r.a.createElement("div",{className:"array-container"},r.a.createElement(m.Bar,{data:this.state.chartData}))),r.a.createElement("div",{className:"col-12 col-md-4 py-4"},r.a.createElement("div",{className:"buttons-container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("button",{className:"btn btn-light",onClick:function(){return e.resetArray()}},"Click Here to get Started")),r.a.createElement("div",{className:"col-12"},r.a.createElement("div",null,"Generate New Array Of Size"),r.a.createElement("button",{className:"btn btn-light",onClick:function(){return e.resetSizeOfArray100()}},"100"),r.a.createElement("button",{className:"btn btn-light",onClick:function(){return e.resetSizeOfArray250()}},"250"),r.a.createElement("button",{className:"btn btn-light",onClick:function(){return e.resetSizeOfArray500()}},"500"),r.a.createElement("button",{className:"btn btn-light",onClick:function(){return e.resetSizeOfArray1000()}},"1000"),r.a.createElement("button",{className:"btn btn-light",onClick:function(){return e.resetSizeOfArray5000()}},"5000"),r.a.createElement("div",{className:"text-info"},"Array Size > 1000 may cause browser to slow down")))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-md-4 order-2 py-4"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("button",{className:"btn btn-light",onClick:function(){return e.clearSortGraph()}},"Clear Sort Graph")),r.a.createElement("div",{className:"col-6"},"Time Elapsed(ms)"),r.a.createElement("div",{className:"col-6"},r.a.createElement("button",{className:"btn btn-light",onClick:function(){return e.bubbleSort()}},"Bubble Sort")),r.a.createElement("div",{className:"col-6",id:"time-taken-bs"}),r.a.createElement("div",{className:"col-6"},r.a.createElement("button",{className:"btn btn-light",onClick:function(){return e.mergeSort()}},"Merge Sort")),r.a.createElement("div",{className:"col-6",id:"time-taken-ms"}),r.a.createElement("div",{className:"col-6"},r.a.createElement("button",{className:"btn btn-light",onClick:function(){return e.quickSort()}},"Quick Sort")),r.a.createElement("div",{className:"col-6",id:"time-taken-qs"}),r.a.createElement("div",{className:"col-6"},r.a.createElement("button",{className:"btn btn-light",onClick:function(){return e.insertionSort()}},"Insertion Sort")),r.a.createElement("div",{className:"col-6",id:"time-taken-is"}),r.a.createElement("div",{className:"col-6"},r.a.createElement("button",{className:"btn btn-light",onClick:function(){return e.selectionSort()}},"Selection Sort")),r.a.createElement("div",{className:"col-6",id:"time-taken-ss"})),r.a.createElement("div",{className:"text-info"},"Least Count of time measurement depends on your browser settings, ",r.a.createElement("a",{target:"_blank",href:"https://developer.mozilla.org/en-US/docs/Web/API/Performance/now"},"click here")," for more info")),r.a.createElement("div",{className:"col-12 col-md-8 order-1"},r.a.createElement(m.Bar,{data:this.state.chartDataSorted}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-md-8"},r.a.createElement(m.Bar,{data:this.state.chartDataTime})),r.a.createElement("div",{className:"col-12 col-md-4 py-4"},r.a.createElement(d.a,{className:"btn btn-light",onClick:function(){return e.computeTimeGraph()}},"Compute Time Graph")))))}}]),a}(n.Component);var f=a(12),b=a(221),p=a(222),E=a(223),y=a(224),g=a(225),k=a(226),S=a(230),N=a(229),C=a(228),w=a(227),T=a(22),A=function(e){var t=Object(n.useState)(!1),a=Object(f.a)(t,2),o=a[0],c=a[1];return r.a.createElement("div",null,r.a.createElement(b.a,{light:!0,className:"bg-light",expand:"md"},r.a.createElement(p.a,{to:"/"},"algoVisualizer"),r.a.createElement(E.a,{onClick:function(){return c(!o)}}),r.a.createElement(y.a,{isOpen:o,navbar:!0},r.a.createElement(g.a,{className:"mr-auto",navbar:!0},r.a.createElement(k.a,null,r.a.createElement(T.b,{to:"/home",className:"nav-link"},"Time Comparsion Algos")),r.a.createElement(k.a,null,r.a.createElement(T.b,{to:"/sorting-visualizer",className:"nav-link"},"Sorting Algo Visualizer")),r.a.createElement(k.a,null,r.a.createElement(T.b,{to:"/pathfinding",className:"nav-link"},"Dijkstra Algo Visualizer")),r.a.createElement(S.a,{nav:!0,inNavbar:!0},r.a.createElement(N.a,{nav:!0,caret:!0},"Documentation"),r.a.createElement(C.a,{right:!0},r.a.createElement(w.a,null,"Sorting Algo Visualizer"),r.a.createElement(w.a,{divider:!0}),r.a.createElement(w.a,null,"Djikstra Algo Visualizer"),r.a.createElement(w.a,{divider:!0}),r.a.createElement(w.a,null,"Time Comparision Algos")))))))};function O(e){var t=[];if(e.length<=1)return e;var a=e.slice();return function e(t,a,n,r,o){if(a===n)return;var c=Math.floor((a+n)/2);e(r,a,c,t,o),e(r,c+1,n,t,o),function(e,t,a,n,r,o){var c=t,l=t,s=a+1;for(;l<=a&&s<=n;)o.push([l,s]),o.push([l,s]),r[l]<=r[s]?(o.push([c,r[l]]),e[c++]=r[l++]):(o.push([c,r[s]]),e[c++]=r[s++]);for(;l<=a;)o.push([l,l]),o.push([l,l]),o.push([c,r[l]]),e[c++]=r[l++];for(;s<=n;)o.push([s,s]),o.push([s,s]),o.push([c,r[s]]),e[c++]=r[s++]}(t,a,c,n,r,o)}(e,0,e.length-1,a,t),t}function B(e){var t=[];return function(e,t){var a=e.length-1;for(;a>0;){for(var n=!1,r=0;r<a;++r)t.push(["comparison1",r,r+1]),t.push(["comparison2",r,r+1]),e[r]>e[r+1]&&(n=!0,t.push(["swap",r,e[r+1]]),t.push(["swap",r+1,e[r]]),M(e,r,r+1));if(!n)break;a--}}(e.slice(),t),t}function M(e,t,a){var n=e[t];e[t]=e[a],e[a]=n}function j(e){var t=[],a=e.slice();return function e(t,a,n,r){var o;if(a===n)return;a<n&&(o=function(e,t,a,n){var r=H(t,a);n.push(["comparison1",r,a]),n.push(["swap",r,e[a]]),n.push(["swap",a,e[r]]),n.push(["comparison2",r,a]),D(e,r,a);for(var o=t,c=t;c<a;++c)n.push(["comparison1",c,a]),n.push(["comparison2",c,a]),e[c]<=e[a]&&(n.push(["comparison1",c,o]),n.push(["swap",c,e[o]]),n.push(["swap",o,e[c]]),n.push(["comparison2",c,o]),D(e,c,o),o++);return n.push(["comparison1",o,a]),n.push(["swap",a,e[o]]),n.push(["swap",o,e[a]]),n.push(["comparison2",o,a]),D(e,o,a),o}(t,a,n,r),e(t,a,o-1,r),e(t,o+1,n,r))}(a,0,a.length-1,t),e=a,t}function D(e,t,a){var n=e[t];e[t]=e[a],e[a]=n}a(218);var z="rgba(0, 0, 0, 0.1)",I=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={array:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.resetArray()}},{key:"resetArray",value:function(){for(var e=[],t=0;t<15;t++)e.push(H(5,300));this.setState({array:e})}},{key:"mergeSort",value:function(){for(var e=O(this.state.array),t=function(t){var a=document.getElementsByClassName("array-bar");if(t%3!==2){var n=Object(f.a)(e[t],2),r=n[0],o=n[1],c=a[r].style,l=a[o].style,s=t%3===0?"grey":z;setTimeout((function(){c.backgroundColor=s,l.backgroundColor=s}),120*t)}else setTimeout((function(){var n=Object(f.a)(e[t],2),r=n[0],o=n[1];a[r].style.height="".concat(o,"px")}),120*t)},a=0;a<e.length;a++)t(a)}},{key:"quickSort",value:function(){for(var e=j(this.state.array),t=0;t<e.length;t++){var a="comparison1"===e[t][0]||"comparison2"===e[t][0],n=document.getElementsByClassName("array-bar");if(!0===a)!function(){var a="comparison1"===e[t][0]?"grey":z,r=Object(f.a)(e[t],3),o=r[1],c=r[2],l=n[o].style,s=n[c].style;setTimeout((function(){l.backgroundColor=a,s.backgroundColor=a}),120*t)}();else if("continue"===function(){var a=Object(f.a)(e[t],3),r=a[1],o=a[2];if(-1===r)return"continue";var c=n[r].style;setTimeout((function(){c.height="".concat(o,"px")}),120*t)}())continue}}},{key:"insertionSort",value:function(){for(var e=function(e){var t=[];return function(e,t){for(var a=e.length,n=1;n<a;n++){var r=e[n],o=n-1;for(t.push(["comparison1",o,n]),t.push(["comparison2",o,n]);o>=0&&e[o]>r;)t.push(["overwrite",o+1,e[o]]),e[o+1]=e[o],(o-=1)>=0&&(t.push(["comparison1",o,n]),t.push(["comparison2",o,n]));t.push(["overwrite",o+1,r]),e[o+1]=r}}(e.slice(),t),t}(this.state.array),t=0;t<e.length;t++){var a="comparison1"===e[t][0]||"comparison2"===e[t][0],n=document.getElementsByClassName("array-bar");!0===a?function(){var a="comparison1"===e[t][0]?"grey":z,r=Object(f.a)(e[t],3),o=r[1],c=r[2],l=n[o].style,s=n[c].style;setTimeout((function(){l.backgroundColor=a,s.backgroundColor=a}),120*t)}():function(){var a=Object(f.a)(e[t],3),r=a[1],o=a[2],c=n[r].style;setTimeout((function(){c.height="".concat(o,"px")}),120*t)}()}}},{key:"selectionSort",value:function(){for(var e=function(e){var t=[];return function(e,t){for(var a=e.length,n=0;n<a-1;n++){for(var r=n,o=n+1;o<a;o++)t.push(["comparision1",o,r]),t.push(["comparision2",o,r]),e[o]<e[r]&&(t.push(["overwrite",r,o]),r=o);if(r!=n){t.push(["swap",n,e[r]]),t.push(["swap",r,e[n]]);var c=e[n];e[n]=e[r],e[r]=c}}}(e.slice(),t),t}(this.state.array),t=0;t<e.length;t++){var a="comparison1"===e[t][0]||"comparison2"===e[t][0],n=document.getElementsByClassName("array-bar");!0===a?function(){var a="comparison1"===e[t][0]?"grey":z,r=Object(f.a)(e[t],3),o=r[1],c=r[2],l=n[o].style,s=n[c].style;setTimeout((function(){l.backgroundColor=a,s.backgroundColor=a}),120*t)}():function(){var a=Object(f.a)(e[t],3),r=a[1],o=a[2],c=n[r].style;setTimeout((function(){c.height="".concat(o,"px")}),120*t)}()}}},{key:"bubbleSort",value:function(){for(var e=B(this.state.array),t=0;t<e.length;t++){var a="comparison1"===e[t][0]||"comparison2"===e[t][0],n=document.getElementsByClassName("array-bar");if(a)!function(){var a="comparison1"===e[t][0]?"grey":z,r=Object(f.a)(e[t],3),o=r[1],c=r[2],l=n[o].style,s=n[c].style;setTimeout((function(){l.backgroundColor=a,s.backgroundColor=a}),120*t)}();else if("continue"===function(){var a=Object(f.a)(e[t],3),r=a[1],o=a[2];if(-1===r)return"continue";var c=n[r].style;setTimeout((function(){c.height="".concat(o,"px")}),120*t)}())continue}}},{key:"render",value:function(){var e=this,t=this.state.array;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-md-8"},r.a.createElement("div",{className:"array-container"},t.map((function(e,t){return r.a.createElement("div",{className:"array-bar",key:t,style:{backgroundColor:z,height:"".concat(e,"px")}})})))),r.a.createElement("div",{className:"col-12 col-md-4"},r.a.createElement("div",{className:"btn-container"},r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-light",onClick:function(){return e.resetArray()}},"Generate New Array")),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-light",onClick:function(){return e.mergeSort()}},"Merge Sort")),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-light",onClick:function(){return e.quickSort()}},"Quick Sort")),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-light",onClick:function(){return e.insertionSort()}},"Insertion Sort")),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-light",onClick:function(){return e.bubbleSort()}},"Bubble Sort"))),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-light",onClick:function(){return e.selectionSort()}},"Selection Sort")))))}}]),a}(r.a.Component);function H(e,t){return Math.floor(Math.random()*(t-e+1)+e)}var L=a(9);a(219);var x=function(){return r.a.createElement(T.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(A,null),r.a.createElement(L.d,null,r.a.createElement(L.b,{path:"/home",component:function(){return r.a.createElement(v,null)}}),r.a.createElement(L.b,{exact:!0,path:"/sorting-visualizer",component:function(){return r.a.createElement(I,null)}}),r.a.createElement(L.a,{to:"/home"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},92:function(e,t,a){e.exports=a(220)},98:function(e,t,a){}},[[92,1,2]]]);
//# sourceMappingURL=main.5b516ff2.chunk.js.map