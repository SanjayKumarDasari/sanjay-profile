import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit {
  skills = [
    { name: 'HTML', image: 'assets/skills/html.png', left: '50px', top: '100px' },
    { name: 'CSS', image: 'assets/skills/css.png', left: '150px', top: '200px' },
    { name: 'JavaScript', image: 'assets/skills/js.png', left: '200px', top: '50px' },
    { name: 'Angular', image: 'assets/skills/angular.png', left: '300px', top: '250px' },
    // Add more skills with appropriate positions
  ];

  constructor() {}

  ngOnInit(): void {
    this.animatePuzzlePieces();
  }

  animatePuzzlePieces(): void {
    const pieces = document.querySelectorAll('.puzzle-piece');
    let delay = 0;

    pieces.forEach((piece) => {
      setTimeout(() => {
        piece.classList.add('animate');
      }, delay);
      delay += 500;
    });
  }
}
