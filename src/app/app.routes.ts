import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [ { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'education', component: EducationComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', redirectTo: '/home' } // Wildcard route for a 404 page
  ];
