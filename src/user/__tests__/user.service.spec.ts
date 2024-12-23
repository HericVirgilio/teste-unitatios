import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '../user.service';
import { Repository } from 'typeorm';
import { UserEntity } from '../../entity/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserEntityMock } from '../__mocks__/user.mock';

describe('UserService', () => {
  let service: UserService;
  let userRepository: Repository<UserEntity>

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService,
        {
          provide: getRepositoryToken(UserEntity),
          useValue: {
            findOne: jest.fn().mockResolvedValue(UserEntityMock),
            save: jest.fn().mockResolvedValue({}),
          }
        }
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    userRepository = module.get<Repository<UserEntity>>(getRepositoryToken(UserEntity));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(userRepository).toBeDefined();
  });

  it('should return user in findOne', async () => {

    const user = await service.findOne(UserEntityMock.id)
    
    expect(user).toEqual(UserEntityMock)
  });
});
