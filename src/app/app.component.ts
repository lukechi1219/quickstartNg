import {Http} from '@angular/http';
import { Component } from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  data: any;

  constructor(private http: Http) {
  }

  ngOnInit() {
    let url = '/opendata/datalist/apiAccess?scope=resourceAquire&rid=0b544701-fb47-4fa9-90f1-15b1987da0f5';
    this.http.get(url)
      .map(x => x.json())
      .subscribe(
        (data) => this.data = data,
        (err) => console.error(err));
  }
}
