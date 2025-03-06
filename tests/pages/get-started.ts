import { Locator, Page } from "@playwright/test";

export default class GetStartedPage {
  readonly page: Page;
  readonly firstBoardInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstBoardInput = page.getByPlaceholder('Name of your first board');
  }
  async load() {
  await this.page.goto('http://localhost:3000/');
  }
  async createFirstBoard(name: string) {
    await this.firstBoardInput.fill(name);
    await this.firstBoardInput.press('Enter');
  }
};
