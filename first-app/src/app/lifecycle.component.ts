import { Component, 
         OnInit, 
         OnChanges, 
         DoCheck, 
         AfterContentInit, 
         AfterContentChecked,
         AfterViewInit,
         AfterViewChecked,
         OnDestroy,Input,ViewChild
       } from '@angular/core';

@Component({
  selector: 'jenny-lifecycle',
  template: `
    <p>
      lifecycle Works!
    </p>
    <ng-content></ng-content>
    <hr>
    <p #boundParagraph>{{bindable}}</p>
    <p>{{boundParagraph.textContent}}</p>
  `,
  styles: []
})
export class LifecycleComponent 
  implements 
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy, 
    Input {

  @Input() bindable = 1000;
  @ViewChild ('boundParagraph') boundParagraph: HTMLElement;

  constructor() { }

  ngOnChanges(){this.log('ngOnChanges');}
  ngOnInit() {this.log('ngOnInit');}
  ngDoCheck(){this.log('ngDoCheck');}
  ngAfterContentInit(){this.log('ngAfterContentInit');}
  ngAfterContentChecked(){this.log('ngAfterContentChecked');}
  ngAfterViewInit(){
      this.log('ngAfterViewInit');
      console.log(this.boundParagraph);
    }
  ngAfterViewChecked(){this.log('ngAfterViewChecked');}
  ngOnDestroy(){this.log('ngOnDestroy');}

  private log(hook: string){
    console.log(hook);
  }
}
