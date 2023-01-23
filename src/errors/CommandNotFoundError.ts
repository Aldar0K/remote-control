class CommandNotFoundError extends Error {
  constructor(commandName: string) {
    super(`There is no command called ${commandName}`);
    this.name = 'CommandNotFoundError';
  }
}

export default CommandNotFoundError;
