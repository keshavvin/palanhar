import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  console.log('📱 Testing Palanhar Farms Navbar - Responsive Design\n');

  const viewports = [
    { width: 375, height: 667, name: 'Mobile (iPhone)' },
    { width: 768, height: 1024, name: 'Tablet (iPad)' },
    { width: 1280, height: 800, name: 'Desktop (1280px)' },
    { width: 1920, height: 1080, name: 'Desktop (1920px)' },
  ];

  for (const viewport of viewports) {
    try {
      console.log(`\n🔍 Testing: ${viewport.name} (${viewport.width}x${viewport.height})`);

      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto('http://localhost:5175/', { waitUntil: 'networkidle' });
      await page.waitForTimeout(1500);

      // Take screenshot
      const filename = `navbar-${viewport.width}x${viewport.height}.png`;
      await page.screenshot({ path: filename, fullPage: false });
      console.log(`   ✅ Screenshot saved: ${filename}`);

      // Check navbar elements
      const navbarVisible = await page.locator('nav').isVisible();
      const logoVisible = await page.locator('a:has-text("Palanhar")').isVisible();
      const contactButton = await page.locator('a:has-text("Contact")').count();

      console.log(`   ✅ Navbar visible: ${navbarVisible}`);
      console.log(`   ✅ Logo visible: ${logoVisible}`);
      console.log(`   ✅ Contact elements found: ${contactButton}`);

    } catch (err) {
      console.log(`   ❌ Error: ${err.message}`);
    }
  }

  console.log('\n✨ Responsive testing complete!');
  console.log('📸 Screenshots saved:');
  console.log('   - navbar-375x667.png (Mobile)');
  console.log('   - navbar-768x1024.png (Tablet)');
  console.log('   - navbar-1280x800.png (Desktop)');
  console.log('   - navbar-1920x1080.png (Full Desktop)');

  await browser.close();
})().catch(err => {
  console.error('❌ Fatal error:', err.message);
  process.exit(1);
});
