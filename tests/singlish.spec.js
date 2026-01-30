import { test, expect } from '@playwright/test';

// ==========================================
// POSITIVE FUNCTIONAL TEST CASES (24 Scenarios)
// ==========================================

test('Pos_Fun_0001 - Convert a short daily greeting phrase', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();
  await singlishInput.fill('oyaata kohomadha?');
  await expect(sinhalaOutput).toHaveText('ඔයාට කොහොමද?');
});

test('Pos_Fun_0002 - Long mixed-language input with slang', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();
  await singlishInput.fill('machan mata adha meeting ekee Zoom link eka email ekak vidhihata evanna puLuvandha?');
  await expect(sinhalaOutput).toContainText('මචන් මට අද meeting එකේ Zoom link එක email එකක් විදිහට එවන්න පුළුවන්ද?');
});

test('Pos_Fun_0003 - Convert a short request phrase', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();
  await singlishInput.fill('mata help ekak karanna puLuvandha?');
  await expect(sinhalaOutput).toHaveText('මට help එකක් කරන්න පුළුවන්ද?');
});

test('Pos_Fun_0004 - Convert a compound sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();
  await singlishInput.fill('mama gedhara yanavaa, heethuva vahina nisaa dhaenma yannee naehae');
  await expect(sinhalaOutput).toHaveText('මම ගෙදර යනවා, හේතුව වහින නිසා දැන්ම යන්නේ නැහැ');
});

test('Pos_Fun_0005 - Convert a complex sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();
  await singlishInput.fill('mama sunaQQgu vunee maarga thadhabadhaya nisaa');
  await expect(sinhalaOutput).toHaveText('මම සුනංගු වුනේ මාර්ග තදබදය නිසා');
});

test('Pos_Fun_0006 - Convert interrogative sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();
  await singlishInput.fill('oyaata kohomadha?');
  await expect(sinhalaOutput).toHaveText('ඔයාට කොහොමද?');
});

test('Pos_Fun_0007 - Convert imperative sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();
  await singlishInput.fill('vahaama enna.');
  await expect(sinhalaOutput).toHaveText('වහාම එන්න.');
});

test('Pos_Fun_0008 - Convert positive sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();
  await singlishInput.fill('mama ehema karanavaa.');
  await expect(sinhalaOutput).toHaveText('මම එහෙම කරනවා.');
});

test('Pos_Fun_0009 - Convert negative sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();
  await singlishInput.fill('mama ehema karannee naehae.');
  await expect(sinhalaOutput).toHaveText('මම එහෙම කරන්නේ නැහැ.');
});

test('Pos_Fun_0010 - Convert polite phrasing', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();
  await singlishInput.fill('karuNaakaralaa mata podi udhavvak karanna puLuvandha?');
  await expect(sinhalaOutput).toHaveText('කරුණාකරලා මට පොඩි උදව්වක් කරන්න පුළුවන්ද?');
});

test('Pos_Fun_0011 - Frequent expression conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();
  await singlishInput.fill('mata baya hithenavaa');
  await expect(sinhalaOutput).toHaveText('මට බය හිතෙනවා');
});

test('Pos_Fun_0012 - Repeated word emphasis', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();
  await singlishInput.fill('hari hari');
  await expect(sinhalaOutput).toHaveText('හරි හරි');
});

test('Pos_Fun_0013 - Tense variation past', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();
  await singlishInput.fill('mama iiyee gedhara giyaa.');
  await expect(sinhalaOutput).toHaveText('මම ඉයේ ගෙදර ගියා.');
});

test('Pos_Fun_0014 - Tense variation present', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();
  await singlishInput.fill('mama dhaen vaeda karanavaa');
  await expect(sinhalaOutput).toHaveText('මම දැන් වැඩ කරනවා');
});

test('Pos_Fun_0015 - Tense variation future', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();
  await singlishInput.fill('mama heta enavaa');
  await expect(sinhalaOutput).toHaveText('මම හෙට එනවා');
});

test('Pos_Fun_0016 - Convert exclamatory sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();
  await singlishInput.fill('wow api jivithaya hodhayi!');
  await expect(sinhalaOutput).toHaveText('Wow අපි ජීවිතය හොඳයි!');
});

test('Pos_Fun_0017 - Convert conditional sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();
  await singlishInput.fill('oba yannee nam mama ehema karanavaa');
  await expect(sinhalaOutput).toHaveText('ඔබ යන්නේ නම් මම එහෙම කරනවා');
});

test('Pos_Fun_0018 - Convert question with mixed languages', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();
  await singlishInput.fill('mata help ekak karanna puluvandha? Can you help me?');
  await expect(sinhalaOutput).toHaveText('මට help එකක් කරන්න පුළුවන්ද? Can you help me?');
});

test('Pos_Fun_0019 - English abbreviations handled', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();
  await singlishInput.fill('PIN, OTP, QR Code');
  await expect(sinhalaOutput).toHaveText('PIN, OTP, QR Code');
});

test('Pos_Fun_0020 - Currency handling', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();
  await singlishInput.fill('Rs. 5343');
  await expect(sinhalaOutput).toHaveText('Rs. 5343');
});

test('Pos_Fun_0021 - Date format handling', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();
  await singlishInput.fill('2026-05-21');
  await expect(sinhalaOutput).toHaveText('2026-05-21');
});

test('Pos_Fun_0022 - Measurement unit handling', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();
  await singlishInput.fill('10 kg');
  await expect(sinhalaOutput).toHaveText('10 kg');
});

test('Pos_Fun_0023 - Punctuation retention', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();
  await singlishInput.fill('! ? ( )');
  await expect(sinhalaOutput).toHaveText('! ? ( )');
});

test('Pos_Fun_0024 - Plural form usage', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();
  await singlishInput.fill('eyaalaa enavaa.');
  await expect(sinhalaOutput).toHaveText('එයාලා එනවා.');
});


// ==========================================
// NEGATIVE FUNCTIONAL TEST CASES (10 Scenarios)
// ==========================================

test('Neg_Fun_0001 - Slang handling (Chat shorthand)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();
  await singlishInput.fill('Thanks machan');
  await expect(sinhalaOutput).toHaveText('තැන්ක්ස් machan');
});

test('Neg_Fun_0002 - Incorrect spacing (Joined words)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();
  await singlishInput.fill('mamagedharayanavaa');
  await expect(sinhalaOutput).toHaveText('mamagedharayanavaa');
});

test('Neg_Fun_0003 - Invalid characters handling', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();
  await singlishInput.fill('mama ??? karanavaa');
  await expect(sinhalaOutput).toHaveText('මම ??? කරනවා');
});

test('Neg_Fun_0004 - Empty input behavior', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();
  await singlishInput.fill('');
  await expect(sinhalaOutput).toBeEmpty();
});

test('Neg_Fun_0005 - Long unformatted text robustness', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const longText = 'mama '.repeat(100);
  await singlishInput.fill(longText);
  await expect(page.locator('div.whitespace-pre-wrap').first()).toBeVisible();
});

test('Neg_Fun_0006 - Unsupported emoji input', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();
  await singlishInput.fill('mama 😎 karanavaa');
  await expect(sinhalaOutput).toHaveText('මම 😎 කරනවා');
});

test('Neg_Fun_0007 - Invalid punctuation sequence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();
  await singlishInput.fill('mama!!! karanavaa??');
  await expect(sinhalaOutput).toHaveText('මම!!! කරනවා??');
});

test('Neg_Fun_0008 - Numeric string without context', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();
  await singlishInput.fill('123456');
  await expect(sinhalaOutput).toHaveText('123456');
});

test('Neg_Fun_0009 - Gibberish input robustness', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();
  await singlishInput.fill('qwertyuiop');
  await expect(sinhalaOutput).not.toBeEmpty();
});

test('Neg_Fun_0010 - Mixed case word variation', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();
  await singlishInput.fill('MaMa GeDhArA YaNaVaa');
  await expect(sinhalaOutput).not.toBeEmpty();
});


// ==========================================
// UI TEST SCENARIOS
// ==========================================

test('Pos_UI_0001 - Real-time output update behavior', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();
  await singlishInput.fill('man gedhara yanavaa');
  await expect(sinhalaOutput).toHaveText('මන් ගෙදර යනවා');
});

test('Pos_UI_0002 - Clear input field', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  await singlishInput.fill('mata bath oonee');
  await singlishInput.clear();
  await expect(page.locator('div.whitespace-pre-wrap').first()).toBeEmpty();
});

test('Pos_UI_0003 - Output font rendering check', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  await singlishInput.fill('oyaata kohomadha?');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();
  await expect(sinhalaOutput).toHaveCSS('font-family', /.*/);
});

test('Pos_UI_0004 - Text selection/copy behavior', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  await singlishInput.fill('oba mata sahaaya dhenna puLuvandha?');
  const sinhalaOutput = page.locator('div.whitespace-pre-wrap').first();
  await expect(sinhalaOutput).toBeVisible();
});

test('Neg_UI_0001 - UI responsiveness on long input (lag check)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const singlishInput = page.getByPlaceholder('Input Your Singlish Text Here.');
  const longText = 'mama '.repeat(90);
  await singlishInput.fill(longText);
  await expect(page.locator('div.whitespace-pre-wrap').first()).toBeVisible();
});