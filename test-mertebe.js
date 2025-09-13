// Simple test for Mertebe scraper
import { MertebeScraper } from './src/lib/scraping/mertebe-scraper.js';

async function testMertebeScraper() {
  console.log('Testing Mertebe scraper...');
  
  const scraper = new MertebeScraper();
  
  try {
    const properties = await scraper.scrapeProperties({
      pages: 1,
      propertyType: 'apartment'
    });
    
    console.log(`Found ${properties.length} properties:`);
    
    properties.slice(0, 3).forEach((property, index) => {
      console.log(`\n${index + 1}. ${property.title}`);
      console.log(`   Price: ${property.price}`);
      console.log(`   Location: ${property.location}`);
      console.log(`   Type: ${property.metadata?.propertyType}`);
      console.log(`   Source: ${property.metadata?.source}`);
      console.log(`   URL: ${property.url}`);
    });
    
  } catch (error) {
    console.error('Error testing scraper:', error);
  } finally {
    await scraper.close();
  }
}

testMertebeScraper();