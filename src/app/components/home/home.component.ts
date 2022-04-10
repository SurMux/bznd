import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  boxContentArray: [string, string][] = [
    ["/assets/images/glowing-abstract-sd.jpg", "Box1"],
    ["/assets/images/IMG_4160.jpeg", "Box2"],
    ["/assets/images/aldebaran-s-uXchDIKs4qI-unsplash.jpg", "Box3"]
  ];

}
