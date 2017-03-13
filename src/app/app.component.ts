import {Http} from '@angular/http';
import {Component, PipeTransform, Injectable, Pipe} from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
    './main_style.css'
  ]
})
export class AppComponent {
  title = 'app works!';
  races: Race[];

  constructor(private http: Http) {
  }

  ngOnInit() {
    const url = '/member/act/queryRaceData?raceVersion=-1&raceCloseVersion=-1&locationSettingVersion=-1&siteRaceVersion=-1&toteVersion=-1&resultVersion=-1&gameType=-1';
//    const url = '/opendata/datalist/apiAccess?scope=resourceAquire&rid=0b544701-fb47-4fa9-90f1-15b1987da0f5';

    this.http.get(url)
      .map(x => x.json())
      .subscribe(
        (data) => this.handleRaceData(data),
        (err) => console.error(err)
      );
    }

    handleRaceData(data) {

      if (data.status == '200') {
        this.races = data.races;

        this.races.sort((a,b) => {
          return a.minutesToRun - b.minutesToRun;
        });

        for (var i=0; i < this.races.length; i++) {
          var race = this.races[i];

          if (race.gameType == 0) {
            race.gameTypeClass = 'HS';
          } else if (race.gameType == 1) {
            race.gameTypeClass = 'Dog';
          } else if (race.gameType == 2) {
            race.gameTypeClass = 'Har';
          }
        }
      }
    }
 }

export class Race {
  id: number;
  simpleRaceDate: string;
  raceType: string;
  locationID: number;
  raceNO: number;
  raceTime: string;
  countryName: string;
  locationName: string;
  gameType: number;
  gameTypeClass:string;
  status: number;
  flagCssClass: string;
  minutesToRun: number;
//  "hasResults": true,
//  "weather": "OCAST",
//  "distance": "1730",
}
