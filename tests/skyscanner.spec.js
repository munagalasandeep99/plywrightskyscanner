const { test, expect } = require('@playwright/test');

test('My first test', async ({ page }) => {
  await page.goto('https://www.skyscanner.se/');
  await page.getByText('Ok', { exact: true }).click();
  await page
    .getByRole('combobox', { name: 'Ange den stad du flyger ifrån' })
    .click();
  await page
    .getByRole('combobox', { name: 'Ange den stad du flyger ifrån' })
    .fill('stoc');
  await page.getByText('Stockholm Arlanda (ARN)').click();
  await page
    .getByRole('combobox', { name: '. Ange din destination eller' })
    .click();
  await page.getByRole('button', { name: 'Utforska överallt' }).click();
  await page.getByLabel('söndag 31 december 2023. Välj').click();
  await page.getByLabel('lördag 6 januari 2024. Välj').click();
  await page.getByTestId('traveller-button').click();
  await page.getByLabel('VuxnaÖver 16 år').click();
  await page.getByTestId('desktop-travellerselector').getByRole('button', { name: 'Sök' }).click();
  const text = await page.getByRole('link', { name: 'Direktflyg till Sverige från' }).textContent();
  const price1 = text.match(/\d+/g);
    console.log('Price of Flight in first link');
    console.log(price1[0]);
  
  await page.getByRole('link', { name: 'Direktflyg till Sverige från' }).click();
  await page.waitForSelector('a[data-testid="flights-link"]');
  
  // Extract the aria-label content
  const ariaLabel = await page.$eval('a[data-testid="flights-link"]', (element) => {
    return element.getAttribute('aria-label');
  });

  const price2 = ariaLabel.match(/\d+/g);
  console.log('Price of Flight after clicking first link');
    console.log(price2[0]);
    if (price2[0] === price1[0]) {
        console.log('Testcase Passed: Prices are same');
      } else {
        console.log('Testcase Failed: Prices are different, berfore and after');
      }

  await page.locator('.BpkBackgroundImage_bpk-background-image__img__NDhjM').first().click();



});
