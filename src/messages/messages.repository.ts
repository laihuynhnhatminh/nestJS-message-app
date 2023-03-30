import { readFile, writeFile } from 'fs/promises';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesRepository {
  async findOne(id: string): Promise<string> {
    return JSON.parse(await readFile('messages.json', 'utf8'))[id];
  }

  async findAll(): Promise<string[]> {
    return JSON.parse(await readFile('messages.json', 'utf8'));
  }

  async create(content: string): Promise<void> {
    const messages = JSON.parse(await readFile('messages.json', 'utf8'));

    const id = Math.floor(Math.random() * 99999);
    messages[id] = { id, content };
    await writeFile('messages.json', JSON.stringify(messages));
  }
}
