import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public activeTab: string = "userinformation";

  public getDate(): string {
    const date = new Date();  // 2009-11-10
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.getDate();
    const year = date.getFullYear();
    ;
    return day+'-'+month+'-'+year.toString().slice(2);
  }
  
  public onTabChange(selectedTab: string): void {
    this.activeTab = selectedTab;
  }
}
