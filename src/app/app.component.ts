import { Component, OnInit } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ask.fm-Clone';
  thing;

  constructor(private authHttp: AuthHttp, private http: Http) {}

  ngOnInit() {
    const myHeader = new Headers();
    myHeader.append('Content-Type', 'application/json');
    myHeader.append('Php-Auth-User', 'asdffdsa');
    myHeader.append('Php-Auth-Pw', 'asdffdsa');
    const options = new RequestOptions({ headers: myHeader });

    this.http.post('http://api.askfm.apdev.idowapro.de/tokens', null , options)
      .subscribe(
        data => this.thing = data,
        err => console.log(err),
        () => console.log('Request complete', this.thing)
      );
  }

}
