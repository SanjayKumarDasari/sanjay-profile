import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  imports: [CommonModule],
  standalone: true,
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements AfterViewInit {

  educations = [
    {
      image: '/assets/school.webp',
      title: '10<sup>th</sup>',
      institution: 'Viswakavi Public School',
      grade: '9.7/10',
      year: '2015'
    },
    {
      image: '/assets/inter.jpg',
      title: '12<sup>th</sup>',
      institution: 'Sri Chaitanya Boys Jr. College',
      grade: '97.3/100',
      year: '2017'
    },
    {
      image: '/assets/btech.jpeg',
      title: 'B.Tech',
      institution: 'GAYATRI VIDYA PARISHAD COLLEGE OF ENGINEERING',
      grade: '8.2/10',
      year: '2021'
    },
    // Add more education items as needed
  ];

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.renderer.listen('window', 'scroll', () => {
      this.onScroll();
    });
  }

  onScroll(): void {
    const cards = this.el.nativeElement.querySelectorAll('.education-card');
    const section = this.el.nativeElement.querySelector('.education-section');
    const sectionRect = section.getBoundingClientRect();

    cards.forEach((card: HTMLElement) => {
      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;
      const sectionCenter = sectionRect.left + sectionRect.width / 2;

      if (cardCenter > sectionCenter - 50 && cardCenter < sectionCenter + 50) {
        this.renderer.addClass(card, 'highlighted');
      } else {
        this.renderer.removeClass(card, 'highlighted');
      }
    });
  }
}
