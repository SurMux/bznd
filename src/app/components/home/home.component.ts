import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

showCarousel: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
onResize(event: { target: { innerWidth: number; }; }) {
  if (event.target.innerWidth <= 600) {
    this.showCarousel = true;
  } else {
    this.showCarousel = false;
  };
}


  boxContentArray: [string, string][] = [
    ["/assets/images/glowing-abstract-sd.jpg", "Box1"],
    ["/assets/images/IMG_4160.jpeg", "Box2"],
    ["/assets/images/aldebaran-s-uXchDIKs4qI-unsplash.jpg", "Box3"]
  ];

}
