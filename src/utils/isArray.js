export const isArray = message => {
  if (Array.isArray(message)) {
    return message;
  }
  if (typeof message === 'string') {
    return [message];
  }
};
