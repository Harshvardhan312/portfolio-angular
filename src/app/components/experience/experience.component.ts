import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  experienceData = [
    {
      title: 'Technical Associate Development',
      role: '.NET Full Stack Developer',
      company: 'Atyati Technologies',
      date: '08/2023 - Present',
      location: 'Bangalore, India',
      description: [
        'Designed, coded, tested, debugged, and maintained software applications using the .NET framework and related technologies.',
        'Developed web, desktop, and API applications using C#, ASP.NET MVC, and .NET Core.',
        'Created dynamic and responsive UI/UX using HTML5, CSS3, JavaScript, Angular, TypeScript, Bootstrap, and jQuery.',
        'Designed and optimized SQL Server databases, including writing complex stored procedures, functions, and performance-tuned queries.',
        'Deployed and managed applications on Microsoft Azure using hybrid cloud architecture for scalability, high availability, and disaster recovery. Worked with Azure DevOps and managed deployments using IIS servers.',
        'Utilized ADO.NET and Entity Framework for efficient data operations and LINQ for querying collections and databases.',
        'Developed and consumed RESTful APIs for internal and external integrations, ensuring secure and scalable endpoints.'
      ]
    }
  ];

}
