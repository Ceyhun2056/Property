// Simple test for price extraction patterns
const testTitles = [
  "54Â000MasazÄ±r q.2 otaqlÄ±50 mÂ²4/4 mÉrtÉbÉBakÄ±",
  "440Â000ElmlÉr AkademiyasÄ± m.3 otaql",
  "220Â000Yasamal q.2 otaqlÄ±50 mÂ²2/16 mÉrtÉbÉBakÄ±",
  "850Â00028 May m.6 otaqlÄ±360 mÂ²13/14 mÉrtÉbÉBakÄ±"
];

function extractPrice(title) {
  console.log('Testing title:', JSON.stringify(title));
  
  // Clean up title
  title = title
    .replace(/[\uFFFD\u00A0\u00C2\u00C4\u00C3]/g, ' ')
    .replace(/Â/g, '')
    .replace(/[^\w\s\d\.\,\-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  
  console.log('After cleanup:', JSON.stringify(title));
  
  let price = '';
  
  // Pattern 1: Find patterns like "850Â000" or "72Â000"
  const encodedPriceMatch = title.match(/(\d{2,4})[^\w\d]*000/);
  if (encodedPriceMatch) {
    price = `${encodedPriceMatch[1]}000 AZN`;
    console.log('Extracted encoded price:', price, 'from match:', encodedPriceMatch[0]);
  } else {
    // Pattern 2: Find any sequence of 2-4 digits
    const priceNumberMatch = title.match(/(\d{2,4})(?:[^\d\w]|$)/);
    if (priceNumberMatch) {
      const num = parseInt(priceNumberMatch[1]);
      if (num >= 80 && num <= 2000) {
        price = `${num}000 AZN`;
        console.log('Extracted price from number:', price, 'from match:', priceNumberMatch[0]);
      }
    }
  }
  
  console.log('Final price:', price);
  console.log('---');
  return price;
}

testTitles.forEach(extractPrice);