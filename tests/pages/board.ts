import { expect, Locator, Page } from "@playwright/test";

export default class BoardPage {
  readonly page: Page;
  readonly boardTitle: Locator;
  readonly enterListTitle: Locator;
  readonly boardLists: Locator;
  readonly listName: Locator;
  readonly addAnotherCard: Locator;
  readonly enterCardTitle: Locator;
  readonly addCard: Locator;
  readonly cardTexts: Locator;
  readonly homeButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.boardTitle = page.locator('input[name="board-title"]');
    this.enterListTitle = page.getByPlaceholder('Enter list title...');
    this.boardLists = page.locator('[data-cy="list"]');
    this.listName = page.locator('[data-cy="list-name"]');
    this.addAnotherCard = page.getByText('Add another card');
    this.enterCardTitle = page.getByPlaceholder('Enter a title for this card...');
    this.addCard = page.getByRole('button', {name: 'Add card'});
    this.cardTexts = page.locator('[data-cy="card-text"]');
    this.homeButton = page.getByRole('navigation').getByRole('button');
  }
  async expectNewBoardLoaded(name: string) {
    await expect(this.boardTitle).toHaveValue(name);
    await expect(this.enterListTitle).toBeVisible();
    await expect(this.boardLists).toBeHidden();
  }

  async addList(name: string) {
    await this.enterListTitle.fill(name);
    await this.enterListTitle.press('Enter');
  }

  async addCardToList(listIndex:number, cardName: string) {
    await this.boardTitle.click() // unfocus
    await this.addAnotherCard.nth(listIndex).click();
    await this.enterCardTitle.fill(cardName);
    await this.addCard.click();
  }

  async goHome() {
    await this.homeButton.click()
  }
};
