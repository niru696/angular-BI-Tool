import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'piechart',
  templateUrl: './piechart.html'
})
export class PieChartComponent implements OnInit{

  @Input()
  labels: any;
  @Input()
  chartData: any;
  @Input()
  chartType: any;
  ngOnInit(){

  }
}