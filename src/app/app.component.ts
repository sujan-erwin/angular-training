import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private titles: string = 'first-component';

  public nameList: Array<string> = ['tokyo', 'berlin', 'usa', 'delhi', 'mumbai' , 'hyderabad'];

  public get title(): string {
    return this.titles;
  }
}
