const { expect } = require("chai");
const { Given, When, Then, Before, After } = require("@cucumber/cucumber");
const { Builder, By, Key, until, sleep } = require("selenium-webdriver");
const { delay } = require("../utils/delay");



// Given("Test registration functionality", { timeout: 30000 }, async function () {
//   let driver = await new Builder().forBrowser("chrome").build();
//   await driver.get("http://localhost:4200/register");
//   await driver.findElement(By.id("firstName")).sendKeys("test");
//   await driver.findElement(By.id("lastName")).sendKeys("test");
//   await driver.findElement(By.id("age")).sendKeys("test");
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

//login for freelancer
// Given("Test login functionality", { timeout: 30000 }, async function () {
//   let driver = await new Builder().forBrowser("chrome").build();
//   await driver.get("http://localhost:4200/login/");
//   await driver.findElement(By.id("email")).sendKeys("aavash@freelancer.com");
//   await driver.findElement(By.id("password")).sendKeys("password");
//   await driver.sleep(delay);
//   await driver.findElement(By.id("loginBtn")).click();
// await driver.quit();
  
// });


//view posting of client posting

// Given("Test PostJob functionality", { timeout: 30000 }, async function () {
//   let driver = await new Builder().forBrowser("chrome").build();
//   await driver.get("http://localhost:4200/login/");
//   await driver.findElement(By.id("email")).sendKeys("aavash@client.com");
//   await driver.findElement(By.id("password")).sendKeys("password");
//   await driver.sleep(delay);
//   await driver.findElement(By.id("loginBtn")).click();
  
//   await driver.sleep(delay);
//   await driver.findElement(By.id("addjob")).click();
//   await driver.sleep(delay);
//   await driver.findElement(By.id("title")).sendKeys("testtitle");
//   await driver.findElement(By.id("type")).sendKeys("test");
//   await driver.findElement(By.id("price")).sendKeys("test");
//   await driver.findElement(By.id("vacancy")).sendKeys("available");
//   await driver.findElement(By.id("skills")).sendKeys("skilltest");
//   await driver.findElement(By.id("description")).sendKeys("testdes");
//   await driver.findElement(By.id("exp")).sendKeys("testexp");
//   await driver.findElement(By.id("img")).isSelected();
//   await driver.sleep(delay);
//   await driver.quit();
// });

//search functionality 
// Given("Test Search functionality", { timeout: 30000 }, async function () {
//   let driver = await new Builder().forBrowser("chrome").build();
//   await driver.get("http://localhost:4200/showAllJob");
//   await driver.findElement(By.id("search")).sendKeys("a");
//   await driver.sleep(delay);
//   await driver.findElement(By.id("searchbtn")).click();
//   await driver.quit();
// });

//apply functionality
// Given("Test Apply functionality", { timeout: 30000 }, async function () {
//   let driver = await new Builder().forBrowser("chrome").build();

//   await driver.get("http://localhost:4200/jobDetails/61018e71c8920c5ab8c8442f");
//   await driver.findElement(By.id("applyid")).sendKeys("220");
//   await driver.sleep(delay);
//   await driver.findElement(By.id("apply")).click();
//   // await driver.wait(until.elementLocated(By.id("applyform")), );
//   //await driver.findElement(By.id("yesapply")).click();
//   await driver.quit();
// });

//save job functionality

// Given("Test Save functionality", { timeout: 30000 }, async function () {
//   let driver = await new Builder().forBrowser("chrome").build();
//   await driver.get("http://localhost:4200/jobDetails/61018e71c8920c5ab8c8442f");
//   await driver.findElement(By.id("saveid")).sendKeys("220");
//   await driver.sleep(delay);
//   await driver.findElement(By.id("save")).click();
//   // await driver.wait(until.elementLocated(By.id("applyform")), );
//   // await driver.findElement(By.id("yesapply")).click();

//   await driver.quit();
// });

// confirm job functionality

// Given("Test confirm functionality", { timeout: 30000 }, async function () {
//   let driver = await new Builder().forBrowser("chrome").build();
//   await driver.get("http://localhost:4200/login/");
//   await driver.findElement(By.id("email")).sendKeys("aavash@client.com");
//   await driver.findElement(By.id("password")).sendKeys("password");
//   await driver.sleep(delay);
//   await driver.findElement(By.id("loginBtn")).click();
//   await driver.sleep(delay);
//   await driver.findElement(By.id("myposting")).click();
//   await driver.sleep(delay);
//   await driver.findElement(By.id("applicants")).click();
//   await driver.sleep(delay);
//   // await driver.findElement(By.id("confirm")).click();
//   await driver.quit();
// });

//delete job funtionality
// Given("Test Delete functionality", { timeout: 30000 }, async function () {
//   let driver = await new Builder().forBrowser("chrome").build();
//   await driver.get("http://localhost:4200/login/");
//   await driver.findElement(By.id("email")).sendKeys("aavash@client.com");
//   await driver.findElement(By.id("password")).sendKeys("password");
//   await driver.sleep(delay);
//   await driver.findElement(By.id("loginBtn")).click();
//   await driver.sleep(delay);
//   await driver.findElement(By.id("myposting")).click();
//   await driver.sleep(delay);
//   await driver.findElement(By.id("deletethis")).click();
//   await driver.sleep(delay);
//   // await driver.findElement(By.id("confirm")).click();
//   await driver.quit();
// });

//update client work
// Given("Test Updatework functionality", { timeout: 30000 }, async function () {
//   let driver = await new Builder().forBrowser("chrome").build();
//   await driver.get("http://localhost:4200/login/");
//   await driver.findElement(By.id("email")).sendKeys("aavash@client.com");
//   await driver.findElement(By.id("password")).sendKeys("password");
//   await driver.sleep(delay);
//   await driver.findElement(By.id("loginBtn")).click();
//   await driver.sleep(delay);
//   await driver.findElement(By.id("myposting")).click();
//   await driver.sleep(delay);
//   await driver.findElement(By.id("update")).click();
//   await driver.sleep(delay);
//   await driver.findElement(By.id("work")).sendKeys("testtitle");
//   await driver.findElement(By.id("know")).sendKeys("test");
//   await driver.findElement(By.id("edu")).sendKeys("test");
//   await driver.sleep(delay);
//   await driver.findElement(By.id("confirm")).click();

//  await driver.quit();
// });



Given("Test ClientProfile functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:4200/login/");
  await driver.findElement(By.id("email")).sendKeys("aavash@client.com");
  await driver.findElement(By.id("password")).sendKeys("password");
  await driver.sleep(delay);
  await driver.findElement(By.id("loginBtn")).click();
  await driver.sleep(delay);
  await driver.findElement(By.id("profile")).click();
  await driver.sleep(delay);
  await driver.findElement(By.id("updatedetail")).click();
  await driver.sleep(delay);
  await driver.findElement(By.id("fname")).sendKeys("testtitle");
  await driver.findElement(By.id("phn")).sendKeys("test");
  await driver.findElement(By.id("add")).sendKeys("test");
  await driver.sleep(delay);
  await driver.findElement(By.id("updateprof")).click();

 await driver.quit();
});




