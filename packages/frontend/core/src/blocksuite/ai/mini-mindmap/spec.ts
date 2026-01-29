import { SurfaceBlockSchema } from '@blocksuite/lovenotes/blocks/surface';
import { ConnectorElementRendererExtension } from '@blocksuite/lovenotes/gfx/connector';
import {
  MindmapElementRendererExtension,
  MindMapView,
} from '@blocksuite/lovenotes/gfx/mindmap';
import { ShapeElementRendererExtension } from '@blocksuite/lovenotes/gfx/shape';
import { TextElementRendererExtension } from '@blocksuite/lovenotes/gfx/text';
import { RootBlockSchema } from '@blocksuite/lovenotes/model';
import {
  DocModeService,
  ThemeService,
} from '@blocksuite/lovenotes/shared/services';
import { BlockViewExtension, FlavourExtension } from '@blocksuite/lovenotes/std';
import type { BlockSchema, ExtensionType } from '@blocksuite/lovenotes/store';
import { literal } from 'lit/static-html.js';
import type { z } from 'zod';

import { MindmapService } from './mindmap-service.js';
import { MindmapSurfaceBlockService } from './surface-service.js';

export const MiniMindmapSpecs: ExtensionType[] = [
  DocModeService,
  ThemeService,
  FlavourExtension('lovenotes:page'),
  MindmapService,
  BlockViewExtension('lovenotes:page', literal`mini-mindmap-root-block`),
  FlavourExtension('lovenotes:surface'),
  MindMapView,
  MindmapSurfaceBlockService,
  BlockViewExtension('lovenotes:surface', literal`mini-mindmap-surface-block`),
  TextElementRendererExtension,
  MindmapElementRendererExtension,
  ShapeElementRendererExtension,
  ConnectorElementRendererExtension,
];

export const MiniMindmapSchema: z.infer<typeof BlockSchema>[] = [
  RootBlockSchema,
  SurfaceBlockSchema,
];
