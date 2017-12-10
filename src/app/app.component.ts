import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private result: Array<any>;
  private name: string;

  constructor(private dataService: DataService) {
    this.onLoad();
  }

  onAdd() {
    this.dataService.addCourse(this.name).subscribe(res => {
      console.log(res);
      this.onLoad();
    });
  }

  onLoad() {
    this.dataService.getCourse().subscribe(res => {
      console.log(res);
      this.result = res;
    });
  }

  onDelete(name: string) {
    this.dataService.deleteCourse(name).subscribe(res => {
      console.log(res);
      this.result = res;
      this.onLoad();
    });
  }
}
