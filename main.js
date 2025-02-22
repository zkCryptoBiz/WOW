import { initPriceUpdates } from './src/priceData.js';
import { 
  initBackgroundImages, 
  initPopup, 
  initSoundEffects, 
  initCopyAddress 
} from './src/animations.js';

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize all features
  initBackgroundImages();
  initPopup();
  initSoundEffects();
  initCopyAddress();
  initPriceUpdates();
});
