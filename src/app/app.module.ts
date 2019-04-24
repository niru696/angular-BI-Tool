import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { ChartModule } from 'angular-highcharts';
// import * as Highcharts from 'highcharts';
// import * as HC_exporting_ from 'highcharts/modules/exporting';


import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { HelloComponent } from './hello.component';
import { ChartsModule } from 'ng2-charts';
import { PieChartComponent } from './piechart/piechart'
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FileSaverModule } from 'ngx-filesaver';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, ChartsModule, MatCardModule, MatSidenavModule, FileSaverModule, NgxPaginationModule, NgbModule, MatSelectModule, MatFormFieldModule,
  MatInputModule,
  BrowserAnimationsModule,
  MatMenuModule,
  FilterPipeModule,
  //Highcharts,
  ChartModule
  ],
  declarations: [ AppComponent, HelloComponent, PieChartComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ DataService ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
