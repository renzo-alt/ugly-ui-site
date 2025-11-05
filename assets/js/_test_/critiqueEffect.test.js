// __tests__/critiqueEffect.test.js

const { critiqueMessages } = require('../critiqueEffect'); // Import your function or variable

describe('Critique Effect', () => {
  it('should return a critique message', () => {
    const message = critiqueMessages[0]; // Use the first message as an example
    expect(message).toBe("This layout looks like it was made in 1998!");
  });

  it('should randomly return a critique message', () => {
    const randomMessage = critiqueMessages[Math.floor(Math.random() * critiqueMessages.length)];
    expect(critiqueMessages).toContain(randomMessage);
  });

  // Failing test example
  it('should fail if an invalid message is included', () => {
    const invalidMessage = "This is not a critique message";
    expect(critiqueMessages).toContain(invalidMessage);  // This will fail as the message is not in the array
  });
});
