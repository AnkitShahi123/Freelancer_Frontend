const { expect } = require("chai");
const { Given, When, Then, Before, After } = require("@cucumber/cucumber");
const { Builder, By, Key, until, sleep } = require("selenium-webdriver");
const { delay } = require("../utils/delay");

// Given("Test registration functionality", { timeout: 30000 }, async function () {
//   let driver = await new Builder().forBrowser("chrome").build();
//   await driver.get("http://localhost:4200/register");
//   await driver.findElement(By.id("firstName")).sendKeys("test");
//   await driver.findElement(By.id("lastName")).sendKeys("test");
//   await driver.findElement(By.id("address")).sendKeys("test");
//   await driver.findElement(By.id("email")).sendKeys("test1@gmail.com");
//   await driver.findElement(By.id("password")).sendKeys("test1234");
//   await driver.findElement(By.id("verifyPassword")).sendKeys("test1234");
//   await driver.sleep(delay);
//   await driver.findElement(By.id("registerBtn")).click();

//   await driver.wait(until.elementLocated(By.id("loginForm")), 30000);
//   expect(await driver.wait(until.elementLocated(By.id("loginForm"))));
//   // await driver.quit();
// });
// Given("Test login functionality", { timeout: 30000 }, async function () {
//   let driver = await new Builder().forBrowser("chrome").build();
//   await driver.get("http://localhost:4200/login/");
//   await driver.findElement(By.id("email")).sendKeys("aavash@client.com");
//   await driver.findElement(By.id("password")).sendKeys("password");
//   await driver.sleep(delay);
//   await driver.findElement(By.id("loginBtn")).click();


//   await driver.quit();
// });
Given("Test PostJob functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:4200/addJob");
  await driver.findElement(By.id("title")).sendKeys("testtitle");
  await driver.findElement(By.id("type")).sendKeys("test");
  await driver.findElement(By.id("price")).sendKeys("test");
  await driver.findElement(By.id("vacancy")).sendKeys("available");
  await driver.findElement(By.id("skills")).sendKeys("skilltest");
  await driver.findElement(By.id("description")).sendKeys("testdes");
  await driver.findElement(By.id("exp")).sendKeys("testexp");
  await driver.sleep(delay);
  await driver.findElement(By.id("subbmit")).click();

  await driver.wait(until.elementLocated(By.id("loginForm")), 30000);
  expect(await driver.wait(until.elementLocated(By.id("loginForm"))));
  // await driver.quit();
});