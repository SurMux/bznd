import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  members: {img: string, name: string, content: string}[] = [
    {img: "/assets/images/JudithRommel.jpg", name: "Judith Rommel", content: "JudithRommel"},
    {img: "/assets/images/ManfredBartel.jpg", name: "Manfred Bartel", content: "ManfredBartel"},
    {img: "/assets/images/PiaBeyerWunsch.jpg", name: "PiaBeyer Wunsch", content: "PiaBeyerWunsch"}
  ];

}
