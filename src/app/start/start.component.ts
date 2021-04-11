import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  @Input() isBackground = false;

  constructor() { }

  ngOnInit(): void {
  }

}
