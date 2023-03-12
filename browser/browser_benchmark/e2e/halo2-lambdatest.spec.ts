import { chromium } from '@playwright/test';
import { test, expect } from '@playwright/test';

let page:any, browser:any;

test.beforeAll(async () => {
    const capabilities = {
      'browserName': 'Chrome', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
      'browserVersion': 'latest',
      'LT:Options': {
        'platform': 'Windows 10',
        'build': 'Playwright Halo Benchmark Build',
        'name': 'Playwright Halo Benchmark Test',
        'user': process.env.LT_USERNAME,
        'accessKey': process.env.LT_ACCESS_KEY,
        'network': true,
        'video': true,
        'console': true,
        'tunnel': true
      }
    }
  
    browser = await chromium.connect({
      wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
    })
});

test.beforeEach(async () => {
    page = await browser.newPage();
});

test.afterEach(async () => {
  await page.close();
});

test.afterAll(async () => {
  await browser.close();
});


// test('has button', async ({ page }) => {
test('has button', async () => {

  await page.goto('http://localhost:3000');

  await expect(page.getByRole('button', { name: 'prove (scalar mult full)' })).toBeVisible();;
});

test('scalar mult full', async () => {
  await page.goto('http://localhost:3000');

  await expect(page.getByRole('button', { name: 'prove (scalar mult full)' })).toBeVisible();;
  const expected = [
    /Scalar mult full proof/,
    /number of threads /,
    /load params/,
    /vkey generation/,
    /pkey generation/,
    /proof generation/,
    /Full proving time/,
    /proof/
  ];
  let msgPromise, msg; 
  msgPromise = page.waitForEvent('console');
  await page.getByRole('button', { name: 'prove (scalar mult full)' }).click();
  msg = await msgPromise;
  console.log(msg.text());
  expect(msg.text()).toMatch(expected[0]);

  for(let i = 1; i < expected.length; i++) {
    let msgText;
    msgPromise = page.waitForEvent('console');
    msg = await msgPromise;
    msgText = msg.text();
    console.log(msgText);
    // while(msgText.includes("Circular dependency") || msgText.includes("WebSocket connection to")) {
    while(!msgText.match(expected[i]) ){
      msgPromise = page.waitForEvent('console');
      msg = await msgPromise;
      msgText = msg.text();
      console.log(msgText);
    }
    expect(msgText).toMatch(expected[i]);
  }
});
