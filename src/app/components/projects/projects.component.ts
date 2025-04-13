import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  projects = [
    {
      name: 'Portfolio Resume Website',
      description: 'A dynamic and responsive portfolio resume website with a modern design, built using Angular, HTML, CSS, and TypeScript.'
    },
    {
      name: 'Interactive Restaurant Website',
      description: 'Developed a dynamic front-end restaurant application to browse menus and place orders online with integrated customer reviews.',
      details: 'Prevented unauthorized access to the website from SQL injection vulnerabilities using MD5 and SHA256 hashing algorithms.',
      technologies: 'HTML, CSS, JavaScript, MySQL, MD5, SHA256'
    }
  ];


}
