import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss']
})
export class InfoBoxComponent implements OnInit {
  @Input() boxContent!: [string, string][];
  @Input() content!: string;

  constructor() {

  }

  ngOnInit(): void {
  }

}
