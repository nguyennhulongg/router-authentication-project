import { Account, Client } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('64a77bede8321b9a2b4c');

export const account = new Account(client)

export default client;