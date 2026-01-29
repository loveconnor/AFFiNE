# LoveNotes Test Tools

## Structured Document Creation

`lovenotes-template.ts` provides a concise way to create test documents, using a html-like syntax.

### Basic Usage

```typescript
import { lovenotes } from '@blocksuite/lovenotes-shared/test-utils';

// Create a simple document
const doc = lovenotes`
  <lovenotes-page>
    <lovenotes-note>
      <lovenotes-paragraph>Hello, World!</lovenotes-paragraph>
    </lovenotes-note>
  </lovenotes-page>
`;
```

### Complex Structure Example

```typescript
// Create a document with multiple notes and paragraphs
const doc = lovenotes`
  <lovenotes-page title="My Test Page">
    <lovenotes-note>
      <lovenotes-paragraph>First paragraph</lovenotes-paragraph>
      <lovenotes-paragraph>Second paragraph</lovenotes-paragraph>
    </lovenotes-note>
    <lovenotes-note>
      <lovenotes-paragraph>Another note</lovenotes-paragraph>
    </lovenotes-note>
  </lovenotes-page>
`;
```

### Application in Tests

This tool is particularly suitable for creating documents with specific structures in test cases:

```typescript
import { describe, expect, it } from 'vitest';
import { lovenotes } from '../__tests__/utils/lovenotes-template';

describe('My Test', () => {
  it('should correctly handle document structure', () => {
    const doc = lovenotes`
      <lovenotes-page>
        <lovenotes-note>
          <lovenotes-paragraph>Test content</lovenotes-paragraph>
        </lovenotes-note>
      </lovenotes-page>
    `;

    // Get blocks
    const pages = doc.getBlocksByFlavour('lovenotes:page');
    const notes = doc.getBlocksByFlavour('lovenotes:note');
    const paragraphs = doc.getBlocksByFlavour('lovenotes:paragraph');

    expect(pages.length).toBe(1);
    expect(notes.length).toBe(1);
    expect(paragraphs.length).toBe(1);

    // Perform more tests here...
  });
});
```

### Supported Block Types

Currently supports the following block types:

- `lovenotes-page` → `lovenotes:page`
- `lovenotes-note` → `lovenotes:note`
- `lovenotes-paragraph` → `lovenotes:paragraph`
- `lovenotes-list` → `lovenotes:list`
- `lovenotes-image` → `lovenotes:image`
