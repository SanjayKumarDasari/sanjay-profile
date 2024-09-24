import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { routes } from './app.routes';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, HomeComponent, ProjectsComponent, SkillsComponent,EducationComponent, RouterModule, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-profile';

  isMenuOpen = false;

  // Method to toggle the menu
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  constructor(private titleService: Title) {
    this.setTitle('Sanjay | Dev');
  }

  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
