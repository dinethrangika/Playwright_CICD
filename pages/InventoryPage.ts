import { expect, type Locator, type Page } from '@playwright/test';

export class InventoryPage {
  readonly pageTitle: Locator;
  readonly inventoryItems: Locator;

  constructor(private readonly page: Page) {
    this.pageTitle = page.getByText('Products', { exact: true });
    this.inventoryItems = page.locator('.inventory_item');
  }

  async expectLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/inventory\.html/);
    await expect(this.pageTitle).toBeVisible();
  }

  async expectProductCount(count: number): Promise<void> {
    await expect(this.inventoryItems).toHaveCount(count);
  }
}
