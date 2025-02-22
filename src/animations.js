export function initBackgroundImages() {
  const images = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Mountain_Dew_2025_logo.svg/800px-Mountain_Dew_2025_logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/de/f/fd/MLG_Logo.svg',
    'https://i3.wp.com/assets.stickpng.com/images/5aa8e58a7603fc558cffbf4e.png',
    'https://upload.wikimedia.org/wikipedia/commons/d/d5/Mlg_illuminati.png',
    'https://png.pngtree.com/png-vector/20230311/ourmid/pngtree-thug-life-pixel-mlg-shades-glasses-vector-free-png-image_6644249.png',
    'https://tndvjd.github.io/pop-cat/images/normal.png',
    'https://freepngimg.com/thumb/categories/954.png',
    'https://www.freeiconspng.com/uploads/blunt-smoke-mlg-hitmarker-transparent-10.png'
  ];

  function createFloatingImage() {
    const img = document.createElement('img');
    img.src = images[Math.floor(Math.random() * images.length)];
    img.className = 'floating-image';
    
    const size = Math.random() * 70 + 30;
    img.style.width = `${size}px`;
    img.style.height = `${size}px`;
    
    img.style.left = `${Math.random() * 100}vw`;
    img.style.top = `${Math.random() * 100}vh`;
    
    img.style.transform = `rotate(${Math.random() * 360}deg)`;
    
    const duration = Math.random() * 20 + 10;
    const directions = ['Left', 'Right', 'Top', 'Bottom', 'Diagonal1', 'Diagonal2'];
    const direction = directions[Math.floor(Math.random() * directions.length)];
    
    img.style.animation = `float${direction} ${duration}s linear infinite`;
    
    document.querySelector('.background-images').appendChild(img);
    
    setTimeout(() => {
      img.remove();
      createFloatingImage();
    }, duration * 1000);
  }

  // Initialize background images
  for (let i = 0; i < 15; i++) {
    createFloatingImage();
  }
}

export function initPopup() {
  function showPopup() {
    const popup = document.querySelector('.popup');
    if (popup) {
      popup.classList.add('show');
      setTimeout(() => {
        popup.classList.remove('show');
      }, 3000);
    }
  }

  // Show initial popup after a short delay
  setTimeout(showPopup, 1000);
  
  // Show popup every 30 seconds
  setInterval(showPopup, 30000);
}

export function initSoundEffects() {
  window.playWow = function() {
    const wow = document.getElementById('wow-sound');
    const airhorn = document.getElementById('airhorn');
    if (wow && airhorn) {
      wow.play();
      setTimeout(() => airhorn.play(), 500);
    }
  };
}

export function initCopyAddress() {
  window.copyContract = function() {
    const address = '12fYKMiNtcjZA4SW5K1gxviaTm1pkTHDWxBuqVnBLwow';
    navigator.clipboard.writeText(address);
    
    const button = document.querySelector('.contract-address button');
    if (button) {
      const originalText = button.textContent;
      button.textContent = 'COPIED!';
      setTimeout(() => button.textContent = originalText, 2000);
    }
  };
}
