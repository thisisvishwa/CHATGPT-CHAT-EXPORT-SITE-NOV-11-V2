```javascript
const request = require('supertest');
const app = require('../server');
const { User } = require('../models/User');

describe('User Endpoints', () => {
  let testUser;

  beforeAll(async () => {
    testUser = await User.create({
      username: 'testUser',
      password: 'testPassword',
      role: 'user',
    });
  });

  afterAll(async () => {
    await User.deleteOne({ username: 'testUser' });
  });

  it('should create a new user', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({
        username: 'newUser',
        password: 'newPassword',
        role: 'user',
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body.username).toEqual('newUser');
  });

  it('should fetch a single user', async () => {
    const res = await request(app)
      .get(`/api/users/${testUser._id}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.username).toEqual(testUser.username);
  });

  it('should update a user', async () => {
    const res = await request(app)
      .put(`/api/users/${testUser._id}`)
      .send({
        username: 'updatedUser',
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body.username).toEqual('updatedUser');
  });

  it('should delete a user', async () => {
    const res = await request(app)
      .delete(`/api/users/${testUser._id}`);
    expect(res.statusCode).toEqual(204);
  });
});
```