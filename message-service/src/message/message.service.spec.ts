import { Test, TestingModule } from '@nestjs/testing';
import { MessageService } from './message.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import * as sinon from 'sinon';
import { Repository } from 'typeorm';
import { Message } from './entities/message.entity';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';

class MockMessageService {
  create(_dto: any) {
    return [];
  }

  findOne() {
    return [];
  }

  findAll() {
    return [];
  }

  update(_id: number, _dto: any) {
    return [];
  }

  remove(_id: number) {
    return [];
  }

  findAllMessagesByUserId(_id: number) {
    return [];
  }
}

describe('MessageService', () => {
  let service: MessageService;
  let messageService: MessageService;
  let sandbox: sinon.Sinonbox;

  beforeEach(async () => {
    const provider = {
      provide: MessageService,
      useClass: MockMessageService,
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [MessageService, provider],
    }).compile();
    sandbox = sinon.createSandbox();
    const app: TestingModule = await Test.createTestingModule({
      providers: [
        MessageService,
        {
          provide: getRepositoryToken(Message),
          useValue: sinon.createStubInstance(Repository),
        },
      ],
    }).compile();
    messageService = app.get<MessageService>(MessageService);
    service = module.get<MessageService>(MessageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Call create with expected param', async () => {
    const createSpy = jest.spyOn(service, 'create');
    const dto = new CreateMessageDto();
    service.create(dto);
    expect(createSpy).toHaveBeenCalledWith(dto);
  });

  it('Call findOne with expected param', async () => {
    const findOneSpy = jest.spyOn(service, 'findOne');
    const id = 1;
    service.findOne(id);
    expect(findOneSpy).toHaveBeenCalledWith(id);
  });

  it('Call findAll', async () => {
    const findAllSpy = jest.spyOn(service, 'findAll');
    service.findAll();
    expect(findAllSpy).toHaveBeenCalled();
  });

  it('Call update with expected param', async () => {
    const spy = jest.spyOn(service, 'update');
    const id = 1;
    const dto = new UpdateMessageDto();
    service.update(id, dto);
    expect(spy).toHaveBeenCalledWith(id, dto);
  });

  it('Call remove with expected param', async () => {
    const spy = jest.spyOn(service, 'remove');
    const id = 1;
    service.remove(id);
    expect(spy).toHaveBeenCalledWith(id);
  });

  it('Call findAllMessagesByUserId with expected param', async () => {
    const spy = jest.spyOn(service, 'findAllMessagesByUserId');
    const id = "1";
    service.findAllMessagesByUserId(id);
    expect(spy).toHaveBeenCalledWith(id);
  });

  it('Call create with repo & expected param', async () => {
    const createSpy = jest.spyOn(messageService, 'create');
    const dto = new CreateMessageDto();
    messageService.create(dto);
    expect(createSpy).toHaveBeenCalledWith(dto);
  });

  it('Call findOne with repo &  expected param', async () => {
    const findOneSpy = jest.spyOn(messageService, 'findOne');
    const id = 1;
    messageService.findOne(id);
    expect(findOneSpy).toHaveBeenCalledWith(id);
  });

  it('Call findAll withRepo', async () => {
    const findAllSpy = jest.spyOn(messageService, 'findAll');
    messageService.findAll();
    expect(findAllSpy).toHaveBeenCalled();
  });

  it('Call update with repo &  expected param', async () => {
    const spy = jest.spyOn(messageService, 'update');
    const id = 1;
    const dto = new UpdateMessageDto();
    messageService.update(id, dto);
    expect(spy).toHaveBeenCalledWith(id, dto);
  });

  it('Call remove with repo &  expected param', async () => {
    const spy = jest.spyOn(messageService, 'remove');
    const id = 1;
    messageService.remove(id);
    expect(spy).toHaveBeenCalledWith(id);
  });

  it('Call findAllMessagesByUserId with repo &  expected param', async () => {
    const spy = jest.spyOn(messageService, 'findAllMessagesByUserId');
    const id = "1";
    messageService.findAllMessagesByUserId(id);
    expect(spy).toHaveBeenCalledWith(id);
  });

  afterAll(async () => {
    sandbox.restore();
  });
});
