import {test, expect} from '@playwright/test';

test('Practice test 1', async ({ page }) => {
  console.log('Starting jenkins test1');
    await page.goto('https://google.com/');
   await expect(page).toHaveTitle('Google');
   console.log('Ending jenkins test1');
});

test('Practice test 2', async ({ page }) => {
  console.log('Starting jenkins test2');
    await page.goto('https://google.com/');
   await expect(page).toHaveTitle('Google');
   console.log('Ending jenkins test2');
});

test('Practice test 3', async ({ page }) => {
  console.log('Starting jenkins test3');
    await page.goto('https://google.com/');
   await expect(page).toHaveTitle('Google');
   console.log('Ending jenkins test3');
}); 
