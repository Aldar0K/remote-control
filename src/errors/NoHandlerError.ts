class NoHandlerError extends Error {
  constructor(commandName: string) {
    super(`There is no handler for command ${commandName}`);
    this.name = 'NoHandlerError';
  }
}

export default NoHandlerError;
