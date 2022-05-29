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
    if(window.innerWidth >= 1200) {
      this.showCarousel = false;
    } else {
      this.showCarousel = true;
    }
  }

  @HostListener('window:resize', ['$event'])
onResize(event: { target: { innerWidth: number; }; }) {
  if (event.target.innerWidth <= 1200) {
    this.showCarousel = true;
  } else {
    this.showCarousel = false;
  };
}


  boxContentArray: [string, string][] = [
    ["/assets/images/glowing-abstract-sd.jpg", "Box1"],
    ["/assets/images/fakurian-design-58Z17lnVS4U-unsplash.jpg", "Box2"],
    ["/assets/images/aldebaran-s-uXchDIKs4qI-unsplash.jpg", "Box3"]
  ];

}
