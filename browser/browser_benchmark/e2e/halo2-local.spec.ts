import { test, expect } from '@playwright/test';


test('has button', async ({ page }) => {

  await page.goto('http://localhost:3000');

  await expect(page.getByRole('button', { name: 'prove (scalar mult full)' })).toBeVisible();;
});

test('scalar mult full', async ({page}) => {
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
