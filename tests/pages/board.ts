import { expect, Locator, Page } from "@playwright/test";

export default class BoardPage {
  readonly page: Page;
  readonly boardTitle: Locator;
  readonly boardOptionsButton: Locator;
  readonly deleteBoardButton: Locator;
  readonly enterListTitle: Locator;
  readonly boardLists: Locator;
  readonly listName: Locator;
  readonly addAnotherCard: Locator;
  readonly enterCardTitle: Locator;
  readonly addCard: Locator;
  readonly cardTexts: Locator;
  readonly homeButton: Locator;

  constructor(page: Page) {
    this.boardTitle = page.locator('input[name="board-title"]');
    this.boardOptionsButton = page.locator('[data-cy="board-options"]');
    this.deleteBoardButton = page.locator('[data-cy="delete-board"]');
    this.enterListTitle = page.getByPlaceholder('Enter list title...');
    this.boardLists = page.locator('[data-cy="list"]');
    this.listName = page.locator('[data-cy="list-name"]');
    this.addAnotherCard = page.getByText('Add another card');
    this.enterCardTitle = page.getByPlaceholder('Enter a title for this card...');
    this.addCard = page.getByRole('button', {name: 'Add card'});
    this.cardTexts = page.locator('[data-cy="card-text"]');
    this.homeButton = page.getByRole('navigation').getByRole('button');
    this.page = page;
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

  public async addCardToList(listIndex:number, cardName: string) {
    await this.boardTitle.click() // unfocus
    await this.addAnotherCard.nth(listIndex).click();
    await this.enterCardTitle.fill(cardName);
    await this.addCard.click();
  }

  public async goHome() {
    await this.homeButton.click()
  }

   /**
   * deleteBoard
   */
   public async deleteBoard() {
    await this.boardOptionsButton.click();
    await this.deleteBoardButton.click();
    await this.page.waitForURL('http://localhost:3000/')
  }
};
