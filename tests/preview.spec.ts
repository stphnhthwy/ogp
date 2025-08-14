import { test, expect } from "@playwright/test";

const tabs = ["WhatsApp", "RCS", "iMessage", "X/Twitter"];

test.describe("preview cards", () => {
  test("render and snapshot", async ({ page }) => {
    await page.goto("http://localhost:5173");
    for (const tab of tabs) {
      await page.click(`text=${tab}`);
      const card = page.locator(".rounded-2xl").first();
      await expect(card).toContainText("Galactic Coffee");
      await card.screenshot({ path: `screenshots/${tab}.png` });
    }
  });
});
