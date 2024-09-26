import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements AfterViewInit {

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit(): void {

    const firstCard = this.el.nativeElement.querySelector('.project-card');
  if (firstCard) {
    firstCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    this.renderer.addClass(firstCard, 'highlighted');
  }

    const section = this.el.nativeElement.querySelector('.projects-section');
    this.renderer.listen(section, 'scroll', () => {
      this.onScroll();
    });
  }

  

  onScroll(): void {
    const cards = this.el.nativeElement.querySelectorAll('.project-card');
    const section = this.el.nativeElement.querySelector('.projects-section');
    const sectionRect = section.getBoundingClientRect();

    cards.forEach((card: HTMLElement, index: number) => {
      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.top + cardRect.height / 2;
      const sectionCenter = sectionRect.top + sectionRect.height / 2;

      const isLastCard = index === cards.length - 1;

      if (cardCenter > sectionCenter - 50 && cardCenter < sectionCenter + 50) {
        this.renderer.addClass(card, 'highlighted');

        // If it's the last card, scroll it into view
        if (isLastCard) {
          card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      } else {
        this.renderer.removeClass(card, 'highlighted');
      }
    });
  }
}