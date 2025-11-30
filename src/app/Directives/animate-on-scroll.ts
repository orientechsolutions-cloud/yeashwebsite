import { Directive, ElementRef, Input, Renderer2, AfterViewInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appAnimateOnScroll]'
})
export class AnimateOnScroll {

  @Input('appAnimateOnScroll') animationClass = 'in-view'; // class to add
  @Input() rootMargin = '0px 0px -10% 0px';
  @Input() threshold: number | number[] = 0.12;
  @Input() once = true; // default: animate once

  private io?: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit() {
    this.renderer.addClass(this.el.nativeElement, 'animate-init');

    this.io = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.renderer.addClass(this.el.nativeElement, this.animationClass);
            if (this.once && this.io) {
              this.io.unobserve(this.el.nativeElement);
            }
          } else if (!this.once) {
            // if repeated animations are required, remove when out of view
            this.renderer.removeClass(this.el.nativeElement, this.animationClass);
          }
        });
      },
      {
        root: null,
        rootMargin: this.rootMargin,
        threshold: this.threshold
      }
    );

    this.io.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.io?.disconnect();
  }

}
