import { Component, Inject, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-image-left',
  templateUrl: './image-left.component.html',
  styleUrls: ['./image-left.component.scss']
})
export class ImageLeftComponent implements OnInit {
  @Input() img!: string;
  @Input() imgPosition!: string;
  @Input() color!: string;
  @Input() content!: string;



  constructor() {
  }


  ngOnInit(): void {
  }


}
