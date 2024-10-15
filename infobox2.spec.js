import { test, expect } from '@playwright/test';

test('infobox interaction test', async ({ page }) => {
  // Navigate to the target page
  await page.goto('https://eael.site/infobox/');

  // Click on the first infobox icon
  const firstIcon = page.locator('.infobox-icon-wrap').first();
  await firstIcon.click();

  // Validate heading and text interactions for each infobox
  await expect(page.getByRole('heading', { name: 'Take care of your Heart' })).toBeVisible();
  await page.getByText('Almost 70% of the 4.2 million').click();

  // Click the second infobox icon
  await expect(page.getByRole('heading', { name: 'Welcome to MSF Square' })).toBeVisible();

  // Interact with the third infobox
  await page.locator('div:nth-child(3) .infobox-icon').click();
  await page.getByText('The best plugin of WordPress').click();
  await expect(page.getByRole('heading', { name: 'BetterLinks the Plugin' })).toBeVisible();

  // Validate image interaction
  await page.locator('#post-281987 img').click();

  // Hover over key elements to trigger effects
  const innerContainer = page.locator('.e-con-inner');
  await innerContainer.hover(); // Hover instead of click for intended hover effect

  // Ensure the infobox elements remain functional after multiple interactions
  await firstIcon.click(); // Re-click to validate consistent behavior
  await expect(page.locator('.eael-infobox').first()).toBeVisible();
});
