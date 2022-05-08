import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';

@Controller()
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @MessagePattern('message:create-message')
  create(@Payload() createMessageDto: CreateMessageDto) {
    return this.messageService.create(createMessageDto);
  }

  @MessagePattern('message:find-all')
  findAll() {
    return this.messageService.findAll();
  }

  @MessagePattern('message:find-by-id')
  findOne(@Payload() id: number) {
    return this.messageService.findOne(id);
  }

  @MessagePattern('message:find-all-messages-by-userId')
  findAllMessagesByUserId(@Payload() userId: string) {
    return this.messageService.findAllMessagesByUserId(userId);
  }

  @MessagePattern('message:update-message')
  update(@Payload() updateMessageDto: UpdateMessageDto) {
    return this.messageService.update(updateMessageDto.id, updateMessageDto);
  }

  // @MessagePattern('removeMessage')
  // remove(@Payload() id: number) {
  //   return this.messageService.remove(id);
  // }
}
