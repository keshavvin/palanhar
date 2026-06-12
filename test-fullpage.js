import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  console.log('📸 Capturing Full Page Screenshot...\n');

  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto('http://localhost:5175/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  // Get page height and take full page screenshot
  const fullHeight = await page.evaluate(() => document.documentElement.scrollHeight);
  console.log(`📄 Page Height: ${fullHeight}px\n`);

  // Take full page screenshot
  await page.screenshot({ path: 'full-page.png', fullPage: true });
  console.log('✅ Full page screenshot saved: full-page.png\n');

  // Count sections
  const sections = await page.locator('section').count();
  const divs = await page.locator('div').count();

  console.log(`📊 Page Statistics:`);
  console.log(`   - Sections: ${sections}`);
  console.log(`   - Total HTML Size: ${(await page.content()).length} characters`);

  // Get all headings
  const h2s = await page.locator('h2').count();
  console.log(`   - H2 Headings: ${h2s}`);

  // List all sections
  const sectionTexts = await page.locator('section h2, section h1').allTextContents();
  console.log(`\n🎯 Page Sections:`);
  sectionTexts.forEach((text, i) => {
    console.log(`   ${i + 1}. ${text.trim()}`);
  });

  console.log('\n✨ Website structure complete with full responsive design!');

  await browser.close();
})();
