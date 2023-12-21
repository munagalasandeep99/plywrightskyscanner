const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  await page.goto('https://www.skyscanner.se/');
  await page.getByText('Ok', { exact: true }).click();

  // Setting origin
  await page.click('id=originInput-input');
  await page.fill('id=originInput-input', 'Stockholm');
  await page.getByText('Stockholm Arlanda (ARN)').click();

  // Setting destination
  await page.click('id=destinationInput-input');
  await page.getByRole('combobox', { name: '. Ange din destination eller' }).click();
  await page.getByRole('button', { name: 'Utforska överallt' }).click();

  // Setting dates and adults
  await page.getByLabel('fredag 22 december 2023. Välj').click();
  await page.getByLabel('lördag 6 januari 2024. Välj').click();
  await page.getByLabel('VuxnaÖver 16 år').click();
  await page.getByTestId('desktop-travellerselector').getByRole('button', { name: 'Sök' }).click();

  // Selecting flight options
  await page.getByRole('link', { name: 'Direktflyg till Sverige från' }).click();
  const firstFlightOption = page.locator('.BpkBackgroundImage_bpk-background-image__img__NDhjM').first();
  await firstFlightOption.click();

  // Working with the new popup page
  const popupPage = await page.waitForEvent('popup');
  const priceButton = popupPage.getByRole('button', { name: 'Flygalternativ 2: Total' });
  const priceText = await priceButton.textContent();
  const priceParts = priceText.split(' ');
  const initialPrice = priceParts[4] + ' ' + priceParts[5].substring(0, 3);
  console.log(`cost of ticket in initial stage: ${initialPrice}`);

  // Checking the price after clicking
  await priceButton.getByRole('button').click();
  const pricingContainer = popupPage.getByTestId('pricing-item-container');
  const finalPriceText = await pricingContainer.getByText('SEK').textContent();
  console.log(`cost  after clicking the first link: ${finalPriceText}`);

  // Asserting the price comparison
  expect(initialPrice).toBe(finalPriceText, 'Prices should be the same, but they differ.');
});
