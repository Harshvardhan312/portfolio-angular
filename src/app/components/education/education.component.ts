import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  educationData = [
    {
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      institution: 'Reva University - Bangalore',
      year: '2019 - 2023',
      percentage: '8.41 CGPA',
      details: []
    },
    {
      degree: 'Class XII: PCMC(Science)',
      institution: 'SSES INDP RESI PU COLLGE - Bangalore, India',
      year: '2018 - 2019',
      percentage: '69%',
      details: []
    },
    {
      degree: 'Class X',
      institution: 'MADONNA HIGH SCHOOL - Bangalore',
      year: '2016 - 2017',
      percentage: '82.88%',
      details: []
    }
  ];
}
