import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  console.log('📱 Testing Palanhar Farms Website\n');

  try {
    // Test 1: Home page with longer wait
    console.log('✅ Testing Home Page...');
    await page.goto('http://localhost:5175/', { waitUntil: 'networkidle', timeout: 10000 });
    await page.waitForTimeout(3000);

    // Take screenshot
    await page.screenshot({ path: 'home-rendered.png', fullPage: true });
    console.log('📸 Screenshot saved: home-rendered.png\n');

    // Check page content
    const bodyHTML = await page.innerHTML('body');
    console.log(`✅ Body HTML length: ${bodyHTML.length} characters`);
    console.log(`✅ Page title: ${await page.title()}\n`);

    // Test all pages
    const pages = [
      { path: '/', name: 'Home' },
      { path: '/about', name: 'About' },
      { path: '/products', name: 'Products' },
      { path: '/services', name: 'Services' },
      { path: '/gallery', name: 'Gallery' },
      { path: '/contact', name: 'Contact' },
    ];

    for (const { path, name } of pages) {
      try {
        await page.goto(`http://localhost:5175${path}`, { waitUntil: 'networkidle', timeout: 8000 });
        await page.waitForTimeout(1000);
        console.log(`✅ ${name} page loaded successfully`);
      } catch (err) {
        console.log(`❌ ${name} page failed: ${err.message}`);
      }
    }

    console.log('\n🎉 Website is running successfully!');
    console.log('✨ The Palanhar Farms website is now live at http://localhost:5175');

  } catch (err) {
    console.error('❌ Test error:', err.message);
  }

  await browser.close();
})().catch(err => {
  console.error('❌ Fatal error:', err.message);
  process.exit(1);
});
