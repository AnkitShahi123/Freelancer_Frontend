const { expect } = require("chai");
const { Given, When, Then, Before, After } = require("@cucumber/cucumber");
const { Builder, By, Key, until, sleep } = require("selenium-webdriver");
const { delay } = require("../utils/delay");




//Rgistration functionality

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

//login functionality 

// Given("Test login functionality", { timeout: 30000 }, async function () {
//   let driver = await new Builder().forBrowser("chrome").build();
//   await driver.get("http://localhost:4200/login/");
//   await driver.findElement(By.id("email")).sendKeys("aavash@client.com");
//   await driver.findElement(By.id("password")).sendKeys("password");
//   await driver.sleep(delay);
//   await driver.findElement(By.id("loginBtn")).click();


//   await driver.quit();
// });

//Post job functionality

// Given("Test PostJob functionality", { timeout: 30000 }, async function () {
//   let driver = await new Builder().forBrowser("chrome").build();
//   await driver.get("http://localhost:4200/addJob");
//   await driver.findElement(By.id("title")).sendKeys("testtitle");
//   await driver.findElement(By.id("type")).sendKeys("test");
//   await driver.findElement(By.id("price")).sendKeys("test");
//   await driver.findElement(By.id("vacancy")).sendKeys("available");
//   await driver.findElement(By.id("skills")).sendKeys("skilltest");
//   await driver.findElement(By.id("description")).sendKeys("testdes");
//   await driver.findElement(By.id("exp")).sendKeys("testexp");
//   await driver.sleep(delay);
//   await driver.findElement(By.id("subbmit")).click();

//   await driver.wait(until.elementLocated(By.id("loginForm")), 30000);
//   expect(await driver.wait(until.elementLocated(By.id("loginForm"))));
//   // await driver.quit();
// });

//Search Functionality

// Given("Test Search functionality", { timeout: 30000 }, async function () {
//   let driver = await new Builder().forBrowser("chrome").build();
//   await driver.get("http://localhost:/4200showAllJob/");
//   await driver.findElement(By.id("search")).sendKeys("aavash@client.com");
//   await driver.sleep(delay);
//   await driver.findElement(By.id("searchbtm")).click();


//   await driver.quit();
// });

//Apply functionality 

// Given("Test Apply functionality", { timeout: 30000 }, async function () {
//   let driver = await new Builder().forBrowser("chrome").build();
//   await driver.get("http://localhost:4200/jobDetails/60f303dccde19e0015d50bce");
//   await driver.findElement(By.id("applyid")).sendKeys("aavash@client.com");
//   await driver.sleep(delay);
//   await driver.findElement(By.id("apply")).click();


//   await driver.quit();
// });

//Save functionality

// Given("Test Save functionality", { timeout: 30000 }, async function () {
//   let driver = await new Builder().forBrowser("chrome").build();
//   await driver.get("http://localhost:4200/jobDetails/60f303dccde19e0015d50bce");
//   await driver.findElement(By.id("saveid")).sendKeys("aavash@client.com");
//   await driver.sleep(delay);
//   await driver.findElement(By.id("save")).click();


//   await driver.quit();
// });


// Given("Test UpdateClient functionality", { timeout: 30000 }, async function () {
//   let driver = await new Builder().forBrowser("chrome").build();
//   await driver.get("http://localhost:4201/profileClient");
//   await driver.findElement(By.id("cname")).sendKeys("aavash@client.com");
//   await driver.findElement(By.id("cphone")).sendKeys("aavash@client.com");
//   await driver.findElement(By.id("caddress")).sendKeys("aavash@client.com");
//   await driver.sleep(delay);
//   await driver.findElement(By.id("cupdate")).click();


//   await driver.quit();
// });

// view freelance record functionality

Given("Test FreelancerRecord functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:4200/myApplied");
  await driver.sleep(delay);
  // await driver.findElement(By.id("deleterecord")).click();


  await driver.quit();
});
