import {Directive, ElementRef, Input, HostListener} from '@angular/core';

@Directive({
    selector:'[.col-sm-2]'
  })
  export class appTextColorDirective {
    @Input() height: string;
    constructor(private el: ElementRef){        
     
    }
    ngOnInit() {
        this.el.nativeElement.style.height = this.height;
        this.el.nativeElement.style.fontSize= '15px';
    }

    @HostListener('mouseenter')onmouseenter(){
        this.el.nativeElement.style.backgroundColor = 'black';
       // this.el.nativeElement.style.fontSize= '50px';
 
    }
    @HostListener('mouseleave')onmouseleave(){
       this.el.nativeElement.style.backgroundColor = 'green';
     //   this.el.nativeElement.style.fontSize= '150px';
    }
  } 