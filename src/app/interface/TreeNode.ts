export class TreeNode {
  constructor(private pageTree: ITreeNode) {
    this.page = this.pageTree;
  }

  page: ITreeNode;

  choosenTechnology(technology: TECHNOLOGYCHOICE): TECHNOLOGYCHOICE {
    return technology;
  }

  constructReactCode(): void {}

  construcAngularCode() {}

  constructComponent() {}

  main() {
    const reactExample = new ReactExample(this.page).traverseTheTree();
  }
}

export interface ITreeNode {
  elementType: 'div' | 'button' | 'p' | 'img';
  elementStyles: string;
  elementEvent: void | undefined; // for now void then will implement custom event emitter
  elementId: string;
  elementClass: string;
  isFlex: boolean;
  flexDirection: 'row' | 'column';
  imgSrc: string | undefined;
  text?: string;
  children?: Array<ITreeNode>;
}

enum TECHNOLOGYCHOICE {
  REACT = 'React',
  ANGULAR = 'Angular',
}

export class ReactExample {
  constructor(private exampleTree: ITreeNode) {}

  traverseTheTree() {
    if (!this.exampleTree.children) return;

    console.log(this.exampleTree.elementType);

    for (const elements of this.exampleTree.children) {
      console.log(elements.elementType);
      if (!elements.children) return;
      this.recursiveTreeTraversal(elements.children);
    }
  }

  recursiveTreeTraversal(data: ITreeNode[]) {
    for (const elements of data) {
      console.log(elements.elementType);
      if (!elements.children) return;
      this.recursiveTreeTraversal(elements.children);
    }
  }
}
