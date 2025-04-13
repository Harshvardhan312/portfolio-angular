import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'C#', icon: 'bi bi-code-slash' },
        { name: 'Java', icon: 'bi bi-cup-hot' },
        { name: 'Python', icon: 'bi bi-terminal' }
      ]
    },
    {
      title: 'Frameworks',
      skills: [
        { name: '.NET Core' },
        { name: 'ASP.NET MVC' },
        { name: 'Entity Framework' },
        { name: 'LINQ' },
        { name: 'J2EE' },
        { name: 'JSP' },
        { name: 'Spring Boot' },
        { name: 'Hibernate' }
      ]
    },
    {
      title: 'Front-End',
      skills: [
        { name: 'HTML5', icon: 'bi bi-filetype-html' },
        { name: 'CSS3', icon: 'bi bi-filetype-css' },
        { name: 'JavaScript', icon: 'bi bi-filetype-js' },
        { name: 'Angular' },
        { name: 'TypeScript' },
        { name: 'Bootstrap' },
        { name: 'jQuery' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'Microsoft Azure' },
        { name: 'Azure Functions' },
        { name: 'Azure Blob Storage' },
        { name: 'Azure DevOps' },
        { name: 'IIS' }
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'SQL Server' },
        { name: 'MySQL' }
      ]
    },
    {
      title: 'API & Tools',
      skills: [
        { name: 'RESTful APIs' },
        { name: 'JSON' },
        { name: 'Postman' },
        { name: 'Swagger' }
      ]
    },
    {
      title: 'Version Control & IDEs',
      skills: [
        { name: 'Git', icon: 'bi bi-git' },
        { name: 'Visual Studio' },
        { name: 'VS Code' },
        { name: 'Eclipse' }
      ]
    },
    {
      title: 'Soft Skills',
      skills: [
        { name: 'Team Collaboration' },
        { name: 'Communication' },
        { name: 'Critical Thinking' },
        { name: 'Problem Solving' },
        { name: 'Attention to Detail' }
      ]
    }
  ];
}
