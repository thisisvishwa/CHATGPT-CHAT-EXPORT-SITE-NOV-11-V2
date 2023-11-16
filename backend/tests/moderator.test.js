```javascript
const request = require('supertest');
const app = require('../server');
const { moderateContent } = require('../controllers/moderatorController');

describe('Moderator Controller', () => {
  it('should moderate content correctly', async () => {
    const req = {
      body: {
        conversationId: '123',
        action: 'delete',
      },
    };
    const res = {
      send: jest.fn(),
      status: jest.fn(() => res),
    };

    await moderateContent(req, res);

    expect(res.send).toHaveBeenCalledWith({ message: 'Content moderated successfully' });
  });

  it('should handle errors correctly', async () => {
    const req = {
      body: {
        conversationId: '123',
        action: 'unknown',
      },
    };
    const res = {
      send: jest.fn(),
      status: jest.fn(() => res),
    };

    await moderateContent(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalledWith({ error: 'Invalid moderation action' });
  });

  it('should handle API requests correctly', async () => {
    const response = await request(app)
      .post('/api/moderate')
      .send({
        conversationId: '123',
        action: 'delete',
      });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: 'Content moderated successfully' });
  });
});
```