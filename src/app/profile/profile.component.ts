import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  links = [
    {
      label: "Profile",
      icon: "bi-person-fill",
      active: true
    },
    {
      label: "Settings",
      icon: "bi-gear-fill",
      active: false
    },
    {
      label: "Billing",
      icon: "bi-credit-card",
      active: false
    },
    {
      label: "Messages",
      icon: "bi-envelope-fill",
      active: false
    },
    {
      label: "Drive",
      icon: "bi-grid-3x3-gap-fill",
      active: false
    },
    {
      label: "Reminders",
      icon: "bi-clock",
      active: false
    },
  ]

  personalInfo = {
    userName: "Rebecca",
    firstName: "Rebecca",
    lastName: "Sanders"
  }
  contactInfo = {
    email: "Rebecca@webseite.com",
    twitter: "SpeedyBecky",
    linkedin: "https://www.linkedin.com/in/lorem"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
