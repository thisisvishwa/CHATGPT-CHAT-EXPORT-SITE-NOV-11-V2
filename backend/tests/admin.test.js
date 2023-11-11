```javascript
const request = require('supertest');
const app = require('../server');
const { manageUser } = require('../controllers/adminController');

describe('Admin Controller', () => {
  it('should manage users', async () => {
    const req = {
      body: {
        userId: '123',
        action: 'ban'
      }
    };

    const res = {
      send: jest.fn(),
      status: jest.fn(() => res),
      json: jest.fn(() => res)
    };

    await manageUser(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ message: 'User managed successfully' });
  });

  it('should handle errors', async () => {
    const req = {
      body: {
        userId: '123',
        action: 'unknown'
      }
    };

    const res = {
      send: jest.fn(),
      status: jest.fn(() => res),
      json: jest.fn(() => res)
    };

    await manageUser(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: 'Invalid action' });
  });
});
```