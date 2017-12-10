import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private result: Array<any>;

  constructor(private dataService: DataService) {
    this.onLoad();
  }

  onLoad() {
    this.dataService.getCourse().subscribe(res => {
      this.result = res;
    });
  }
}
