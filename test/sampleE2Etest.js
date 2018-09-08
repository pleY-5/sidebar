const puppeteer = require('puppeteer');
const pageUrl = 'http://localhost:7878/';

let page;
let browser;
const width = 1280;
const height = 720;

beforeAll(async () => {
  browser = await puppeteer.launch({
    // headless: false,
    slowMo: 80,
    args: [`--window-size=${width},${height}`]
  });
  page = await browser.newPage();
  await page.setViewport({ width, height });
});

afterAll(() => {
  browser.close();
});

describe('Test', () => {

  beforeEach(async () => {
    await page.goto(pageUrl, { waitUntil: 'networkidle2' })
  });

  test('inital title is correct', async () => {
    const title = await page.$eval('h1', e => e.innerHTML);
    expect(title).toEqual('Hello World');
  });

  // test('can search', async () => {
  //   const selector = 'input.form-control[type=text]';
  //   await page.click(selector);
  //   await page.type(selector, 'cats');
  // });

});