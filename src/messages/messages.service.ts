import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  constructor(private messagesRepo: MessagesRepository) {}

  findOne(id: string): Promise<string> {
    return this.messagesRepo.findOne(id);
  }

  findAll(): Promise<string[]> {
    return this.messagesRepo.findAll();
  }

  create(content: string): Promise<void> {
    return this.messagesRepo.create(content);
  }
}
