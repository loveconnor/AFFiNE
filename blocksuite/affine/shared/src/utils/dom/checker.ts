import type { EditorHost } from '@blocksuite/std';

export function isInsidePageEditor(host?: EditorHost) {
  if (!host) return false;
  return Array.from(host.children).some(
    v => v.tagName.toLowerCase() === 'lovenotes-page-root'
  );
}

export function isInsideEdgelessEditor(host?: EditorHost) {
  if (!host) return false;

  return Array.from(host.children).some(
    v =>
      v.tagName.toLowerCase() === 'lovenotes-edgeless-root' ||
      v.tagName.toLowerCase() === 'lovenotes-edgeless-root-preview'
  );
}
