import type { LoveNotesDNDEntity } from '@lovenotes/core/types/dnd';

export const allowedSplitViewEntityTypes: Set<LoveNotesDNDEntity['type']> =
  new Set(['doc', 'collection', 'tag']);

export const inferToFromEntity = (entity: LoveNotesDNDEntity) => {
  if (entity.type === 'doc') {
    return `/${entity.id}`;
  } else if (entity.type === 'collection') {
    return `/collection/${entity.id}`;
  } else if (entity.type === 'tag') {
    return `/tag/${entity.id}`;
  }
  return null;
};
