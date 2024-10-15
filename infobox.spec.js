import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://eael.site/infobox/');
  await page.locator('.infobox-icon-wrap').first().click();
  await page.getByRole('heading', { name: 'Take care of your Heart' }).click();
  await page.getByText('Almost 70% of the 4.2 million').click();
  await page.locator('.elementor-widget-container').first().click();
  await page.locator('.e-con-inner').click();
  await page.locator('div:nth-child(2) > .elementor-widget-container > .eael-infobox > .infobox-icon').click();
  await page.getByRole('heading', { name: 'Welcome to MSF Square' }).click();
  await page.getByText('MSF Square had been founded').click();
  await page.getByText('MSF Square', { exact: true }).click();
  await page.locator('.e-con-inner').click();
  await page.locator('div:nth-child(3) > .elementor-widget-container').click();
  await page.getByText('The best plugin of WordPress').click();
  await page.getByRole('heading', { name: 'BetterLinks the Plugin' }).click();
  await page.locator('div:nth-child(3) > .elementor-widget-container > .eael-infobox > .infobox-icon').click();
  await page.locator('#post-281987 img').click();
  await page.locator('.e-con-inner').click();
  await page.locator('div:nth-child(3) > .elementor-widget-container > .eael-infobox > .infobox-icon').click();
  await page.locator('div:nth-child(2) > .elementor-widget-container > .eael-infobox > .infobox-icon').click();
  await page.locator('.infobox-icon-wrap').first().click();
  await page.locator('.eael-infobox').first().click();
  await page.locator('.e-con-inner').click();
});