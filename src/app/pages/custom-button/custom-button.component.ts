import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss']
})
export class ChildTestComponent implements OnInit {
  @Input() color = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
