import '@lovenotes/core/bootstrap/browser';
import '@lovenotes/core/bootstrap/cleanup';
import '@lovenotes/component/theme';
import '@lovenotes/core/styles/stacking-fix.css';

// Alias legacy --affine-* CSS variables to --lovenotes-* so layout/fonts still resolve
const aliasAffineVars = () => {
  const root = document.documentElement;
  const styles = getComputedStyle(root);
  for (let i = 0; i < styles.length; i++) {
    const name = styles[i];
    if (!name.startsWith('--affine-')) continue;
    const loveNotesName = '--lovenotes-' + name.substring('--affine-'.length);
    // Only set if not already defined
    if (!styles.getPropertyValue(loveNotesName)) {
      root.style.setProperty(loveNotesName, styles.getPropertyValue(name));
    }
  }
};

if (typeof window !== 'undefined') {
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    aliasAffineVars();
  } else {
    window.addEventListener('DOMContentLoaded', aliasAffineVars, { once: true });
  }
}
