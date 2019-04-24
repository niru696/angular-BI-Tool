import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

//import { Component } from '@angular/core';
import { AppComponent } from './app.component';

//@Injectable()
@Injectable()
export class DataService {
  constructor(private http: HttpClient) { }
  columns = new BehaviorSubject<string[]>(null);
  data = new BehaviorSubject<any>(null);

  //step 1
  fetchData(url, resp) {
    this.http.get(url).subscribe((data: any) => {
     
      var _data = data;
      if (resp) {
        _data = data[resp];
      }
        this.data.next(_data);
      if (_data && _data.length) {
        this.columns.next(Object.keys(_data[0]));
      }
    });
  }

}