const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    // userDataDir: "./user_data",
    defaultViewport: null,
  });
  for (let index = 0; index < 100; index++) {
    const page = await browser.newPage();

    await page.goto(
      "https://meeting.kashanu.ac.ir/guest-join/2bs4u6ug7sjx5fnye30k"
    );

    try {
      await page.waitFor("input[name=name]");
      await page.$eval(
        "input[name=name]",
        (el) => (el.value = "حسین محبی نیا")
      );
      // await page.click('input[type="submit"]');
      await page.click("form button");
    } catch (error) {
      console.log("divert");
    }
  }
})();
