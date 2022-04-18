import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'appWorkerTest';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('/proxyApi/getUserdata', {
      responseType: 'json',
      headers: {
        'content-type': 'application/json'
      }
    }).subscribe(
      (data: any) => {
        console.log(data);
      },
      (err: any) => {
        console.log(err);
      }
    );
    this.http.get('https://my-test-worker.logeshcbe131197.workers.dev/getUserdata').subscribe(
      (data: any) => {
        console.log(data);
      },
      (err: any) => {
        console.log(err);
      }
    );
    this.http.get('/apis').subscribe(
      (data: any) => {
        console.log(data);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
