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
    {img: "/assets/images/DrJoder_CLEVER_PEOPLE.jpg", name: "Dr. Karin Joder", content: "Joder"},
    {img: "/assets/images/DrJoder_CLEVER_PEOPLE.jpg", name: "Anke Bay", content: "Bay"},
    {img: "/assets/images/DrJoder_CLEVER_PEOPLE.jpg", name: "Dr. Karin Joder", content: "Joder"},
    {img: "/assets/images/DrJoder_CLEVER_PEOPLE.jpg", name: "Anke Bay", content: "Bay"},
    {img: "/assets/images/DrJoder_CLEVER_PEOPLE.jpg", name: "Dr. Karin Joder", content: "Joder"},
    {img: "/assets/images/DrJoder_CLEVER_PEOPLE.jpg", name: "Anke Bay", content: "Bay"},
    {img: "/assets/images/DrJoder_CLEVER_PEOPLE.jpg", name: "Dr. Karin Joder", content: "Joder"},
    {img: "/assets/images/DrJoder_CLEVER_PEOPLE.jpg", name: "Anke Bay", content: "Bay"},
    {img: "/assets/images/DrJoder_CLEVER_PEOPLE.jpg", name: "Dr. Karin Joder", content: "Joder"},
    {img: "/assets/images/DrJoder_CLEVER_PEOPLE.jpg", name: "Anke Bay", content: "Bay"},
    {img: "/assets/images/Manfred.Bartel_17031951.jpg", name: "Prof. Dr.-Ing. em. Manfred Bartel", content: "Bartel"}
  ];

}
