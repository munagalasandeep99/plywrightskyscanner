# plywrightskyscanner
# ScaniaAssignment



### Assignemt Description:
- Open www.skyscanner.net
- Give origin as "Stockholm" and destination as "Everywhere" (Överallt in Swedish)
- Choose travel dates 22 Dec 2023 and return date 06 Jan 2024 and 1 adult as passenger.
- Search for flights
- Click on the first entry and see the lowest price shown there is same as the lowest price shown when clicked on the link.
- For ex : if it shows 500 SEK for Gothenburg as cheapest as first link, when clicked on the link it should show same 500 SEK as cheapest. If it shows different price, then the test case should be failed. Otherwise it should show as passed.

You can choose any open source testing tool of your choice. For Ex : selenium, playwright, webdriverIO etc

<p>Tool used for testing: <b>Playwright Automation Tool</b></p>


## Installation

```Shell
# Run from your project's root directory
npm init playwright@latest

```

### Manually

Add dependency and install browsers.

```Shell
npm i -D @playwright/test
# install supported browsers
npx playwright install
```
## Procedure

<p>Step1 : create a file name skyscanner.spec.js in tests folder.</p>
<p>Step 2: In skyscanner.spec.js add the code from the repository in</p>


<p>Step 3: Now open the terminal and execute the following command to run the test case we created above.</p>
## execution
```Shell
npx playwright test ./tests/skyscanner.spec.js --project firefox --headed
```


<h1>Results</h1>
<img width="960" alt="sky1" src="https://github.com/munagalasandeep99/project-FRT/assets/129391713/26b49392-2871-45cf-a57c-8082e2497c03">

Challenges:
this code will only work for firefox browser



