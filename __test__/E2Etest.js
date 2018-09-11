const puppeteer = require('puppeteer');
const pageUrl = 'http://127.0.0.1:7878?id=1';

let page;
let browser;
const width = 1280;
const height = 720;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: [`--window-size=${width},${height}`, '--no-sanbox', '–disable-setuid-sandbox']
  });
  page = await browser.newPage();
  await page.setViewport({ width, height });
}, 15000);

afterAll(() => {
  browser.close();
});

describe('Test', () => {

  beforeEach(async () => {
    await page.goto(pageUrl, { waitUntil: 'networkidle2' })
  });

  test('Check for reservation header', async () => {
    const title = await page.$eval('#header-title', e => e.innerHTML);
    expect(title).toEqual('Make a Reservation');
  });

  // test('can search', async () => {
  //   const selector = 'input.form-control[type=text]';
  //   await page.click(selector);
  //   await page.type(selector, 'cats');
  // });

});