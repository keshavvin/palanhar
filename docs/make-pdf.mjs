import { chromium } from 'playwright';
import { pathToFileURL } from 'url';
import { resolve } from 'path';

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(pathToFileURL(resolve('docs/CHANGES-DOCUMENTATION.html')).href);
await page.pdf({
  path: 'docs/PALANHAR-CHANGES.pdf',
  format: 'A4',
  printBackground: true,
  margin: { top: '12mm', bottom: '12mm', left: '10mm', right: '10mm' },
});
await browser.close();
console.log('pdf done');
