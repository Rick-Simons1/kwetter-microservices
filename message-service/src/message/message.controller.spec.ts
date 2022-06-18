import { Test, TestingModule } from '@nestjs/testing';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { MessageController } from './message.controller';
import { MessageService } from './message.service';

describe('messageController', () => {
  let controller: MessageController;
  let service: MessageService;

  beforeEach(async () => {
    const messageServiceProvider = {
      provide: MessageService,
      useFactory: () => ({
        create: jest.fn(() => []),
        findAll: jest.fn(() => []),
        findOne: jest.fn(() => {
          /**/
        }),
        update: jest.fn(() => {
          /**/
        }),
        delete: jest.fn(() => {
          /**/
        }),
      }),
    };
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MessageController],
      providers: [MessageService, messageServiceProvider],
    }).compile();

    controller = module.get<MessageController>(MessageController);
    service = module.get<MessageService>(MessageService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('calling create method', () => {
    const dto = new CreateMessageDto();
    expect(controller.create(dto)).not.toEqual(null);
  });

  it('calling create method', () => {
    const dto = new CreateMessageDto();
    controller.create(dto);
    expect(service.create).toHaveBeenCalled();
    expect(service.create).toHaveBeenCalledWith(dto);
  });

  it('calling findAll method', () => {
    controller.findAll();
    expect(service.findAll).toHaveBeenCalled();
  });

  it('calling findOne method', () => {
    const id = 2;
    controller.findOne(id);
    expect(service.findOne).toHaveBeenCalled();
  });

  it('calling update function', () => {
    const dto = new UpdateMessageDto();
    controller.update(dto);
    expect(service.update).toHaveBeenCalled();
  });
});
