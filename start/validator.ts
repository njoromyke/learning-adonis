import vine, { SimpleMessagesProvider } from '@vinejs/vine'

vine.messagesProvider = new SimpleMessagesProvider({
  'required': 'The {{field}} is required',
  'string': 'The {{field}} must be a string',
  'email': 'The email is not a valid email',

  // Add more messages here
  'username.required': 'The username is required',
})
