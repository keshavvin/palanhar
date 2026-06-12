import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Capture console messages
  page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err));

  await page.goto('http://localhost:5175/', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(2000);

  // Get page structure
  const html = await page.content();
  const lines = html.split('\n').slice(0, 50);
  console.log('HTML Structure:');
  lines.forEach((line, i) => console.log(`${i}: ${line}`));

  // Check for specific elements
  const navExists = await page.locator('nav').count();
  const headerExists = await page.locator('header').count();
  const mainExists = await page.locator('main').count();
  const footerExists = await page.locator('footer').count();

  console.log(`\nElement counts:`);
  console.log(`- nav: ${navExists}`);
  console.log(`- header: ${headerExists}`);
  console.log(`- main: ${mainExists}`);
  console.log(`- footer: ${footerExists}`);

  // Get all text content
  const text = await page.textContent('body');
  console.log(`\nBody text (first 500 chars):`);
  console.log(text ? text.substring(0, 500) : 'NO TEXT FOUND');

  await browser.close();
})();
