```javascript
const request = require('supertest');
const app = require('../server');
const { getConversation } = require('../controllers/conversationController');

jest.mock('../controllers/conversationController');

describe('Conversation API', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('GET /conversations/:id - Success', async () => {
    const conversation = {
      id: '1',
      title: 'Test Conversation',
      messages: [
        { id: '1', text: 'Hello', sentiment: 'neutral' },
        { id: '2', text: 'How are you?', sentiment: 'neutral' },
      ],
    };

    getConversation.mockReturnValue(Promise.resolve(conversation));

    const res = await request(app).get('/conversations/1');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(conversation);
    expect(getConversation).toHaveBeenCalledWith('1');
  });

  test('GET /conversations/:id - Failure', async () => {
    getConversation.mockReturnValue(Promise.reject(new Error('Conversation not found')));

    const res = await request(app).get('/conversations/1');

    expect(res.statusCode).toEqual(404);
    expect(res.body).toEqual({ error: 'Conversation not found' });
    expect(getConversation).toHaveBeenCalledWith('1');
  });
});
```