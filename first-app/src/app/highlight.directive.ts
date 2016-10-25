import { Directive, HostListener, HostBinding, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

	@HostListener('mouseenter') mouseover(){
		this.backgroundColor = this.highlightColor;
	};
	@HostListener('mouseleave') mouseleave(){
		this.backgroundColor = this.defaultColor;
	};
	@HostBinding('style.backgroundColor') get setColor(){
		return this.backgroundColor;
	};
	@Input() defaultColor = 'white';
	@Input('highlight') highlightColor = 'green';

	private backgroundColor = this.defaultColor;


	constructor(){}

	ngOnInit(){
		this.backgroundColor = this.defaultColor;
	}


/*  constructor(private elementRef: ElementRef, private renderer: Renderer) {
  	You should not use the below since it accesses 
  	the element	directly. This alows the code to run
  	in several environments	
  	/*this.elementRef.nativeElement.style.backgroundColor = 'green';*/
  	/*USE THIS*/
  	/*this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green');
  }*/

}
