const { handler } = require('./app');

describe('Lambda function handler', () => {
  it('should return a response with status code 200 and the correct message', async () => {
    const event = {}; // Mock the event parameter
    const expectedResponse = {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "Hello from Node",
        },
        null,
        2
      ),
    };

    const response = await handler(event);
    expect(response).toEqual(expectedResponse);
  });
});
