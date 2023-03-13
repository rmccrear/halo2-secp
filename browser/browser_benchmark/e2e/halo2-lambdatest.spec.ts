import { chromium } from '@playwright/test';
import { test, expect } from '@playwright/test';
import { capabilities_list } from './lambdatest-setup';

let page:any, browser:any;

test.beforeAll(async () => {
    const capabilities = capabilities_list[0];
  
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


const benchmarkMinSamples = 1; // The minimum number of samples to run the same test
const evalCount = 1; // The number of experiments to run (and compare)
test('scalar mult full benchmark.js', async () => {
  await page.goto('http://localhost:3000/benchmarkjs');

  await expect(page.getByRole('button', { name: 'benchmark: prove (scalar mult full)' })).toBeVisible();;
  const expected = /Stats for: /;

  await page.getByLabel('min samples:').fill(benchmarkMinSamples.toString());
  await expect(page.getByLabel('min samples:')).toHaveValue(benchmarkMinSamples.toString());

  let msgPromise, msg; 
  await page.getByRole('button', { name: 'benchmark: prove (scalar mult full)' }).click();
  console.log("Starting benchmark");
  // If we have more than one test in our benchmarks (.add() calls)),
  // we need to loop through the console messages.
  for(let i = 0; i < evalCount; i++) {
    let msgText;
    msgPromise = page.waitForEvent('console');
    msg = await msgPromise;
    msgText = msg.text();
    console.log(msgText);
    // while(msgText.includes("Circular dependency") || msgText.includes("WebSocket connection to")) {
    while(!msgText.match(expected) ){
      msgPromise = page.waitForEvent('console');
      msg = await msgPromise;
      msgText = msg.text();
      console.log(msgText);
    }
    msgPromise = page.waitForEvent('console');
    expect(msgText).toMatch(expected);

    msg = await msgPromise;
    msgText = msg.text();
    console.log(msgText);
  }

});