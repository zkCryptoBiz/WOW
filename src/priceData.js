// DexScreener API endpoint for Solana tokens
const API_URL = 'https://api.dexscreener.com/latest/dex/search/?q=';
const TOKEN_ADDRESS = 'FvXKHksfxFou7Jvx3144yKySJC9VGkBLWHigEBudwow';

export async function fetchTokenData() {
  try {
    const response = await fetch(`${API_URL}${TOKEN_ADDRESS}`);
    const data = await response.json();
    
    if (data.pairs && data.pairs.length > 0) {
      const pair = data.pairs[0];
      updateUI({
        price: pair.priceUsd,
        priceChange: pair.priceChange.h24,
        marketCap: pair.fdv,
        volume: pair.volume.h24
      });
    } else {
      setFallbackValues();
    }
  } catch (error) {
    console.error('Error fetching token data:', error);
    setFallbackValues();
  }
}

function updateUI(data) {
  document.getElementById('token-price').textContent = `$${parseFloat(data.price || 0).toFixed(8)}`;
  
  const priceChange = document.getElementById('price-change');
  const change = parseFloat(data.priceChange || 0);
  priceChange.textContent = `${change.toFixed(2)}%`;
  priceChange.style.color = change >= 0 ? '#00ff00' : '#ff0000';
  
  document.getElementById('market-cap').textContent = `$${formatNumber(data.marketCap || 0)}`;
  document.getElementById('volume-24h').textContent = `$${formatNumber(data.volume || 0)}`;
}

function setFallbackValues() {
  document.getElementById('token-price').textContent = '$0.000000069';
  document.getElementById('price-change').textContent = '+420.69%';
  document.getElementById('price-change').style.color = '#00ff00';
  document.getElementById('market-cap').textContent = '$69,420';
  document.getElementById('volume-24h').textContent = '$42,069';
}

function formatNumber(num) {
  if (num >= 1e9) return (num / 1e9).toFixed(2) + 'B';
  if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M';
  if (num >= 1e3) return (num / 1e3).toFixed(2) + 'K';
  return num.toFixed(2);
}

// Initialize price updates
export function initPriceUpdates() {
  fetchTokenData();
  setInterval(fetchTokenData, 30000);
}
