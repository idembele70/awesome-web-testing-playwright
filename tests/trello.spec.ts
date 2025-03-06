import { test, expect } from '@playwright/test';
import GetStartedPage from './pages/get-started';
import BoardPage from './pages/board';
import MyBoardsPage from './pages/my-bords';

test.beforeAll(async ({request}) => {
  // Clear the database
  await request.post('http://localhost:3000/api/reset')
})

test('Create a new board with a list and cards', async ({ page }) => {
  const getStartedPage = new GetStartedPage(page)
  const boardPage = new BoardPage(page);
  const myBoardsPage = new MyBoardsPage(page);

  await test.step('It should load the app', async () => {
    await getStartedPage.load();
  });

  await test.step('Create a new board', async () => {
    await getStartedPage.createFirstBoard('Chores');
    await boardPage.expectNewBoardLoaded('Chores');
  });

  await test.step('It should create a new list', async () => {
    await boardPage.addList('TODO');
    await expect(boardPage.listName).toHaveValue('TODO')
  });

  await test.step('Add cards to the list', async () => {
    await boardPage.addCardToList(0, 'Buy groceries')
    await boardPage.addCardToList(0, 'Mow the lawn')
    await boardPage.addCardToList(0, 'Walk the dog')
    await expect(boardPage.cardTexts).toHaveText(
      ['Buy groceries', 'Mow the lawn', 'Walk the dog'])
  });

  await test.step('Navigate to the home page', async () => {
    await boardPage.goHome()
    await myBoardsPage.expectLoaded(['Chores'])
  });
});