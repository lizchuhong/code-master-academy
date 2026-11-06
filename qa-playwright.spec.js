const path = require('node:path');
const { pathToFileURL } = require('node:url');
const { test, expect } = require('@playwright/test');

const lab = pathToFileURL(path.join(__dirname, 'qa-practice.html')).href;

async function login(page, password = 'test-only-01') {
  await page.getByLabel('Tên đăng nhập').fill('qa-demo');
  await page.getByLabel('Mật khẩu').fill(password);
  await page.getByRole('button', { name: 'Đăng nhập' }).click();
}

test.beforeEach(async ({ page }) => {
  await page.goto(lab);
});

test('đăng nhập đúng mở màn số dư', async ({ page }) => {
  await login(page);
  await expect(page.getByRole('heading', { name: 'Số dư tài khoản' })).toBeVisible();
});

test('mật khẩu sai báo lỗi và vẫn ở màn đăng nhập', async ({ page }) => {
  await login(page, 'wrong-test-password');
  await expect(page.getByRole('alert')).toHaveText('Thông tin đăng nhập không hợp lệ.');
  await expect(page.getByRole('button', { name: 'Đăng nhập' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Số dư tài khoản' })).toBeHidden();
});

test('chuyển tiền phân biệt dưới biên và đúng biên dưới', async ({ page }) => {
  await login(page);
  const amount = page.getByLabel('Số tiền chuyển (VND)');
  const submit = page.getByRole('button', { name: 'Kiểm tra lệnh chuyển' });
  await amount.fill('9999');
  await submit.click();
  await expect(page.getByRole('alert')).toHaveText('Số tiền phải là số nguyên từ 10.000 đến 200.000 VND.');
  await expect(page.getByRole('status')).toBeHidden();
  await amount.fill('10000');
  await submit.click();
  await expect(page.getByRole('alert')).toBeHidden();
  await expect(page.getByRole('status')).toHaveText('Lệnh chuyển mẫu hợp lệ.');
});
