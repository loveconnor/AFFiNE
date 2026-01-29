import { LatexEditorMenu } from './latex-node/latex-editor-menu';
import { LatexEditorUnit } from './latex-node/latex-editor-unit';
import { LoveNotesLatexNode } from './latex-node/latex-node';

export function effects() {
  customElements.define('latex-editor-menu', LatexEditorMenu);
  customElements.define('latex-editor-unit', LatexEditorUnit);
  customElements.define('lovenotes-latex-node', LoveNotesLatexNode);
}

declare global {
  interface HTMLElementTagNameMap {
    'lovenotes-latex-node': LoveNotesLatexNode;
    'latex-editor-unit': LatexEditorUnit;
    'latex-editor-menu': LatexEditorMenu;
  }
}
