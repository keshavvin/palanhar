import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('http://localhost:5175/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(3000);

  // Check React root
  const rootHTML = await page.locator('#root').innerHTML();
  console.log('Root HTML length:', rootHTML.length);
  console.log('First 1000 chars of root HTML:');
  console.log(rootHTML.substring(0, 1000));

  // Check if h1 exists
  const h1Count = await page.locator('h1').count();
  console.log('\nh1 elements found:', h1Count);

  // Get all text
  const allText = await page.locator('*').allTextContents();
  console.log('\nAll text content (first 2000 chars):');
  const combined = allText.join(' ');
  console.log(combined.substring(0, 2000));

  await browser.close();
})();
