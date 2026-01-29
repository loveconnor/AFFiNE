import { globalStyle } from '@vanilla-extract/css';

// Ensure popper/portal content renders above the sidebar
globalStyle('[data-radix-popper-content-wrapper]', {
  zIndex: 2000,
});

// Some menus render into a portal container with role=listbox/menu
globalStyle('[role="menu"], [role="listbox"]', {
  zIndex: 2000,
});

// Generic dropdown panels often use data-portal attributes; lift them
globalStyle('[data-portal]', {
  zIndex: 2000,
});
