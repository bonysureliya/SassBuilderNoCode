import { Component, EventEmitter, Input, Output, signal } from '@angular/core';

type Variants = 'filled' | 'outlined' | 'link' | 'ghosted'

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  standalone: true
})

export class ButtonComponent  {
  text: string = "this is text"
  @Output() clicked = new EventEmitter<MouseEvent>();
  @Input({required: false}) 
  varinats: Variants = "filled"

  btnClick(event: MouseEvent) {
    this.clicked.emit(event)
  }

  focus() {
    
  }
}
