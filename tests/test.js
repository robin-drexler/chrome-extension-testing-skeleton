var chromedriver = require('chromedriver');

chromedriver.start();
//run your tests

var webdriver = require('selenium-webdriver'),
    chrome = require('selenium-webdriver/chrome'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until,
    chromeOptions = new chrome.Options;

chromeOptions.addArguments("load-extension=../extension");

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .usingServer('http://localhost:9515')
    .setChromeOptions(chromeOptions)
    .build();

driver.get('http://www.google.com/ncr');
driver.findElement(By.tagName('body')).getInnerHtml().then(function(d) {
  console.log(d);
});
driver.quit();
chromedriver.stop();
