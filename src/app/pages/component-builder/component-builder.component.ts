import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ITreeNode, TreeNode } from '../../interface/TreeNode';

export interface IComponentBuilder {
  type: 'div' | 'button' | 'image';
  layoutType: 'flex' | 'column' | 'none';
  rounded: number | 'sm' | 'lg' | 'xl' | 'full';
  children?: IComponentBuilder;
}

@Component({
  selector: 'app-component-builder',
  imports: [ReactiveFormsModule],
  templateUrl: './component-builder.component.html',
  styleUrls: ['./component-builder.component.css'],
  standalone: true,
})
export class ComponentBuilderComponent {
  styles: FormGroup;
  generatedCode: string = '';
  copySuccess: boolean = false;
  copyError: boolean = false;
  treeNode: ITreeNode = {
    elementType: 'div',
    elementStyles: '',
    elementEvent: undefined,
    elementId: 'container',
    elementClass: 'w-full flex flex-col',
    isFlex: true,
    flexDirection: 'column',
    imgSrc: undefined,
    children: [
      // topbar
      {
        elementType: 'div',
        elementStyles: '',
        elementEvent: undefined,
        elementId: 'topbar',
        elementClass: 'w-full flex justify-between',
        isFlex: true,
        flexDirection: 'row',
        imgSrc: undefined,
        children: [
          {
            elementType: 'img',
            elementStyles: '',
            elementEvent: undefined,
            elementId: 'topbar-logo',
            elementClass: 'w-[20-px]',
            isFlex: false,
            flexDirection: 'row',
            imgSrc: 'some image',
          },
          {
            elementType: 'div',
            elementStyles: '',
            elementEvent: undefined,
            elementId: 'topbar-menu',
            elementClass: 'flex gap-4',
            isFlex: true,
            flexDirection: 'row',
            imgSrc: undefined,
          },
          {
            elementType: 'button',
            elementStyles: '',
            elementEvent: undefined,
            elementId: 'topbar-cta',
            elementClass: 'flex px-4 py-2 bg-teal-500 text-black',
            isFlex: true,
            flexDirection: 'row',
            imgSrc: undefined,
            text: 'some cta',
          },
        ],
      },
    ],
  };

  constructor(private fb: FormBuilder) {
    this.styles = this.fb.group({
      buttonColor: ['#F88379'],
      radius: [5],
      paddingHorizontal: [10],
      paddingVertical: [10],
      textColor: ['#000000'],
      textContent: ['Button'],
    });
  }

  get buttonStyles() {
    return {
      'background-color': this.styles.get('buttonColor')?.value,
      'border-radius': `${this.styles.get('radius')?.value}px`,
      'padding-left': `${this.styles.get('paddingHorizontal')?.value}px`,
      'padding-right': `${this.styles.get('paddingHorizontal')?.value}px`,
      'padding-top': `${this.styles.get('paddingVertical')?.value}px`,
      'padding-bottom': `${this.styles.get('paddingVertical')?.value}px`,
      color: this.styles.get('textColor')?.value,
    };
  }
  fallbackCopyToClipboard(text: string) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    let successful = false;
    try {
      successful = document.execCommand('copy');
      const msg = successful ? 'successful' : 'unsuccessful';
      console.log('Fallback: Copying text command was ' + msg);
      this.copySuccess = successful;
      this.copyError = !successful;
      if (successful) {
        setTimeout(() => {
          this.copySuccess = false;
        }, 3000);
      }
    } catch (err) {
      console.error('Fallback: Unable to copy text: ', err);
      this.copyError = true;
      this.copySuccess = false;
    }
    document.body.removeChild(textArea);
  }
  onSubmit() {
    const treeNode = new TreeNode(this.treeNode).main();
  }
}
