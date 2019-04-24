import { Component, OnChanges, ViewChild, RenderComponentType } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { map } from 'rxJs/operators';
import { DataService } from './data.service';
import 'rxjs/add/observable/merge';
import { catchError } from 'rxjs/operators';
import Rx from 'rxjs/Rx';
import * as _ from "lodash";
import { Observable,of } from 'rxjs';
import { from } from 'rxjs/observable/from';
import {MatSelectModule} from '@angular/material/select';

import { groupBy, mergeMap, toArray } from 'rxjs/operators';
import { FileSaverService } from 'ngx-filesaver';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

import { DomSanitizer } from '@angular/platform-browser';
import domtoimage from 'dom-to-image';
declare var pdfMake: any;
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';



@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  //const download = require('image-downloader');
  columns: string[] = [];
  data: any[] = [];
  enterUrl: string = '';
  resp: string = '';
  tables: any=[];
  data1: any=[];
  first_name: String[]=[];
  public barChartLegend:boolean = true;

  chartList: string[] = ['pie','line','bar','radar','polarArea', 'doughnut'];
  aggregates: string[] = ['Count', 'Min', 'Max', 'Average'];
  dropMenu: string[] = ['Download png', 'Download jpg','Download pdf'];
  valueField: string = '';
  argumentField: string = '';
  aggregation : string = '';
  fieldAgg: string = '';
  chart : string = 'radar';
  groupedData: any=[];
  example: any;
  source: any=[];
  keys: string='';
  labels = [];
  showChart: boolean = false;
  chartData = [];
  temp: any;
  data3: any;
  avg: any;
  sum: any=0;
  dchart: any;
  collection = [];
  fileUrl;
  constructor(public dataservice: DataService, private sanitizer: DomSanitizer ) { 
  }

  public show:boolean = false;
  public buttonName:any = 'Show';
  toggle() {
    this.show = !this.show;
    if(this.show)  {
     this.buttonName = "Hide";
    }
    else{
     this.buttonName = "Show";
    }
      
  }
  ngOnInit() {

    this.dataservice.columns.subscribe(cols => {
    //console.log(cols);
      this.columns = cols;
      this.tables=cols;
    });
    this.dataservice.data.subscribe((data: any) => {
      //console.log("Hello " + data);
      this.data = data;
      
    });
  
    
  }
  //  @ViewChild(MatPaginator) paginator: MatPaginator;

  //  ngAfterViewInit() {
  //   this.tables.paginator = this.paginator;
  // }
  
  ngOnChanges(){
  this.keys = this.argumentField;
  //console.log("kk "+this.keys);
}

generateKey(){
this.showChart = false;
this.labels = [];
this.chartData  = [];
const groupKeys = _.groupBy(this.data, this.argumentField);
_.forEach(groupKeys, (g, k) => {
console.log(g.length);
//console.log("hrll "+ (g[0][this.valueField]));
this.labels.push(k);
console.log(this.valueField);
var temp=g;

this.chartData.push(g.length);
for (var _i = 0; _i < k.length; _i++) {
    var num = this.chartData.push(g[_i][this.valueField]);
    console.log(num);
}


switch (this.aggregation) {
   case "Count": {
      console.log("Count Value " + temp.length );
      break;
   }
	
   case "Max": {
     for (var _i = 0; _i < g.length; _i++) {
    var num = this.chartData.push(g[_i][this.valueField]);
    //console.log(num);
    }
     (Math.max(num));
    console.log("Max Value "+ Math.max(num));
      break;
   }
	
   case "Min": {
    for (var _i = 0; _i < g.length; _i++) {
    var num = this.chartData.push(g[_i][this.valueField]);
    //console.log(num);
    }
     (Math.min(num));
     console.log("Min Value " + (Math.min(num)));
      break;
   }
	
   case "Average": {
  //    console.log("  hello " +this.chartData.push(temp[1]));
  //    for (var _i = 1; _i <= k.length; _i++) {
  //         for( var i = 1; i<=temp.length; i++ ){
  //           var sum= + this.chartData.push(temp[_i][i]);
  //         }
  //           this.avg = sum / temp.length;
  //   console.log(k.length);
  //   console.log("Sum " + sum);
  //     console.log(" Average " + this.avg);
  //  }
  
      break;
   }
	
   default: {
      console.log("Invalid choice");
      break;
   }
}

});


console.log("Chart labels " + this.labels);
//console.log("Chart Data " + this.chartData);
setTimeout(() => {
this.showChart = true;
}, 0);
}

  prepareDataForChart(){
    //console.log(this.aggregation, this.argumentField, this.valueField, this.chart);
  // console.log("hello"+this.data);
   // console.log(this.columns);
  //console.log(this.generateKey());
  //console.log(this.aggregation);

  this.generateKey();
  }
  getChart(){
    return this.chart;
  }

 
exportButton(){
    domtoimage.toBlob(document.getElementById('mychart'))
    .then(function (blob) {
      saveAs(blob, 'chartlist.png');
    });
    
}


}