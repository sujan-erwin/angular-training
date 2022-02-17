import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private titles: string = 'first-component';

  public nameList: Array<string> = ['tokyo', 'berlin', 'usa', 'delhi', 'mumbai' , 'hyderabad'];

  public inputType: string = 'text';
  public defaultValue: string = '';

  public get title(): string {
    return this.titles;
  }


  public updateDefaultValue(id: string): void{
    const element: HTMLInputElement = document.getElementById(id) as HTMLInputElement;
    this.defaultValue = element.value;
  }

}
