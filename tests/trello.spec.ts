import { test, expect } from './fixtures/trello-test';

test.describe('Trello-like board', () => {
  const BOARD_NAME = 'Chores';
  const LIST_NAME = 'TODO';

  test.beforeAll(async ({request, getStartedPage})=> {
    await request.post('http://localhost:3000/api/reset');
    await getStartedPage.load();
    await getStartedPage.createFirstBoard(BOARD_NAME)
  })

  test.beforeEach(async ({ myBoardsPage }) => {
    const randomNumber = Math.trunc(Math.random() * 10000)
    await myBoardsPage.load()
    await myBoardsPage.openBoard(BOARD_NAME)
  });
  test('should display the new board', async ({ boardPage }) => {
    await boardPage.expectNewBoardLoaded(BOARD_NAME)
  });

  test('should create the first list in a board', async ({ boardPage }) => {
    await boardPage.addList(LIST_NAME)
    await expect(boardPage.listName).toHaveValue(LIST_NAME)
  });

  test('should create a list with multiple cards', async ({ boardPage }) => {
    await boardPage.addList(LIST_NAME)
    await boardPage.addCardToList(0, 'Buy groceries')
    await boardPage.addCardToList(0, 'Mow the lawn')
    await boardPage.addCardToList(0, 'Walk the dog')
    await expect(boardPage.cardTexts).toHaveText(
      ['Buy groceries', 'Mow the lawn', 'Walk the dog']
    )
  })

  test('should navigate to home from a board', async ({ boardPage, myBoardsPage }) => {
    await boardPage.goHome()
    await myBoardsPage.expectLoaded([BOARD_NAME])
  });
});


