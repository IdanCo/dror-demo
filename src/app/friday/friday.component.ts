import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friday',
  templateUrl: './friday.component.html',
  styleUrls: ['./friday.component.scss']
})
export class FridayComponent implements OnInit {
  myNow: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
