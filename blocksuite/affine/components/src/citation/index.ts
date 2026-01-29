import { CitationCard } from './citation';

export * from './citation';

export function effects() {
  customElements.define('lovenotes-citation-card', CitationCard);
}
