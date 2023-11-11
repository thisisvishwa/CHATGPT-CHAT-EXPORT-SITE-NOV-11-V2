```javascript
const request = require('supertest');
const app = require('../server');
const { authenticateUser } = require('../controllers/authController');

describe('Authentication Tests', () => {
  let user = {
    username: 'testUser',
    password: 'testPassword',
  };

  it('should authenticate a user', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send(user);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
  });

  it('should not authenticate a user with invalid credentials', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ username: 'invalidUser', password: 'invalidPassword' });

    expect(res.statusCode).toEqual(401);
  });

  it('should register a new user', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({ username: 'newUser', password: 'newPassword' });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('user');
  });

  it('should not register a user with existing username', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send(user);

    expect(res.statusCode).toEqual(400);
  });

  it('should logout a user', async () => {
    const res = await request(app)
      .post('/api/auth/logout')
      .send();

    expect(res.statusCode).toEqual(200);
  });
});
```