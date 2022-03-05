import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  type = '';
  key = '';
  public actionsList: {
    [key: string]: {
      name: string,
      key: string,
      color: string
    }[]
  } = {
    positive: [
      {
        name: 'CREATE',
        key: 'create',
        color: 'primary'
      },
      {
        name: 'UPDATE',
        key: 'update',
        color: 'accent'

      },
    ],
    negative: [
      {
        name: 'DELETE',
        key: 'delete',
        color: 'warn'

      },
    ],
  };

  public actionTypes = Object.keys(this.actionsList);

  handleClick(actionType: string, actionKey: string) {
    this.type = actionType;
    this.key = actionKey;
  }
}
