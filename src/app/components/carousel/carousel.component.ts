import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  carousel: {img: string, name: string, content: string}[] = [
    {img: "/assets/images/glowing-abstract-sd.jpg", name: "Dr. Karin Joder", content: "Joder"},
    {img: "/assets/images/IMG_4160.jpeg", name: "Anke Bay", content: "Bay"},
    {img: "/assets/images/aldebaran-s-uXchDIKs4qI-unsplash.jpg", name: "Dr. Karin Joder", content: "Joder"}
  ];



}
