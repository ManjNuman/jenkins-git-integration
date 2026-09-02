import {test, expect} from '@playwright/test';

test('Practice test 4  ', async ({ page }) => {
    console.log('Starting jenkins test4'); 
    await page.goto('https://google.com/');
    await expect(page).toHaveTitle('Google');
    console.log('Ending jenkins test4');
});

test('Practice test 5', async ({ page }) => {
    console.log('Starting jenkins test5'); 
    await page.goto('https://google.com/');
    await expect(page).toHaveTitle('Google');
    console.log('Ending jenkins test5');
});
test('Practice test 6', async ({ page }) => {
    console.log('Starting jenkins test6'); 
    await page.goto('https://google.com/');
    await expect(page).toHaveTitle('Google');
    console.log('Ending jenkins test666');
});   