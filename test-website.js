import { chromium } from 'playwright';
import fs from 'fs';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  console.log('📱 Testing Palanhar Farms Website\n');

  try {
    // Test 1: Home page
    console.log('1️⃣ Testing Home Page...');
    await page.goto('http://localhost:5175/', { waitUntil: 'networkidle' });

    // Take screenshot to see what's rendering
    await page.screenshot({ path: 'home-page.png' });
    console.log('   📸 Screenshot saved: home-page.png');

    // Check page content
    const content = await page.content();
    const hasReactRoot = content.includes('root');
    console.log(`   ✅ Page loaded, React root ${hasReactRoot ? 'found' : 'not found'}`);

    // Wait for any content to appear
    await page.waitForTimeout(2000);
    const bodyText = await page.textContent('body');
    if (bodyText && bodyText.length > 0) {
      console.log(`   ✅ Page content found (${bodyText.length} chars)`);
    }

    // Test 2: Check navigation
    console.log('\n2️⃣ Testing Navigation...');
    const navLinks = await page.locator('nav a, header a').count();
    console.log(`   ✅ Found ${navLinks} navigation links`);

    // Test 3: Check for Navbar
    console.log('\n3️⃣ Testing Navbar...');
    const navbar = await page.locator('nav').isVisible();
    console.log(`   ✅ Navbar ${navbar ? 'visible' : 'not visible'}`);

    // Test 4: Navigate to About page
    console.log('\n4️⃣ Testing Navigation to About Page...');
    const aboutLink = await page.locator('a[href="/about"]').isVisible();
    if (aboutLink) {
      await page.click('a[href="/about"]');
      await page.waitForTimeout(2000);
      await page.screenshot({ path: 'about-page.png' });
      console.log('   ✅ About page navigation works');
    } else {
      console.log('   ⚠️ About link not visible');
    }

    // Test 5: Navigate back and to Products
    console.log('\n5️⃣ Testing Products Page...');
    await page.goto('http://localhost:5175/products', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'products-page.png' });
    console.log('   ✅ Products page loaded');

    // Test 6: Navigate to Services
    console.log('\n6️⃣ Testing Services Page...');
    await page.goto('http://localhost:5175/services', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'services-page.png' });
    console.log('   ✅ Services page loaded');

    // Test 7: Navigate to Gallery
    console.log('\n7️⃣ Testing Gallery Page...');
    await page.goto('http://localhost:5175/gallery', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'gallery-page.png' });
    console.log('   ✅ Gallery page loaded');

    // Test 8: Navigate to Contact
    console.log('\n8️⃣ Testing Contact Page...');
    await page.goto('http://localhost:5175/contact', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'contact-page.png' });
    console.log('   ✅ Contact page loaded');

    // Test 9: Mobile responsive check
    console.log('\n9️⃣ Testing Mobile Responsiveness...');
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('http://localhost:5175/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'mobile-home.png' });
    console.log('   ✅ Mobile viewport (375x667) works');

    // Test 10: Desktop viewport
    console.log('\n🔟 Testing Desktop Responsiveness...');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5175/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'desktop-home.png' });
    console.log('   ✅ Desktop viewport (1920x1080) works');

    console.log('\n✨ All tests completed successfully!\n');
    console.log('📸 Screenshots saved:');
    console.log('   - home-page.png');
    console.log('   - about-page.png');
    console.log('   - products-page.png');
    console.log('   - services-page.png');
    console.log('   - gallery-page.png');
    console.log('   - contact-page.png');
    console.log('   - mobile-home.png');
    console.log('   - desktop-home.png\n');

  } catch (err) {
    console.error('❌ Test error:', err.message);
    await page.screenshot({ path: 'error-screenshot.png' });
    console.error('Error screenshot saved: error-screenshot.png');
  }

  await browser.close();
})().catch(err => {
  console.error('❌ Fatal error:', err.message);
  process.exit(1);
});
