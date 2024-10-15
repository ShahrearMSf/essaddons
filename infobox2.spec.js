import { test, expect } from '@playwright/test';

test('infobox interaction test', async ({ page }) => {
  await page.goto('https://eael.site/infobox/');

  const firstIcon = page.locator('.infobox-icon-wrap').first();
  await firstIcon.click();

  await expect(page.getByRole('heading', { name: 'Take care of your Heart' })).toBeVisible();
  await page.getByText('Almost 70% of the 4.2 million').click();

  await expect(page.getByRole('heading', { name: 'Welcome to MSF Square' })).toBeVisible();

  await page.locator('div:nth-child(3) .infobox-icon').click();
  await page.getByText('The best plugin of WordPress').click();
  await expect(page.getByRole('heading', { name: 'BetterLinks the Plugin' })).toBeVisible();

  await page.locator('#post-281987 img').click();

  const innerContainer = page.locator('.e-con-inner');
  await innerContainer.hover(); 

  await firstIcon.click(); 
  await expect(page.locator('.eael-infobox').first()).toBeVisible();
});
