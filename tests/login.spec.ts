import { expect, test } from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage';
import { LoginPage } from '../pages/LoginPage';

test.describe('SauceDemo login', () => {
  test('standard user can log in successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await inventoryPage.expectLoaded();
    await inventoryPage.expectProductCount(6);
    await expect(page).toHaveURL(/inventory\.html/);
  });
});
