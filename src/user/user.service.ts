import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  findAll() {
    return this.userRepository.find();
  }

  async findAllFollowingById(id: string) {
    const user: User = await this.findOne(id);
    let followingList: User[] = [];

    for (let index = 0; index < user.following.length; index++) {
      const kwetterUser = await this.userRepository.findOne({
        authId: user.following[index],
      });
      followingList.push(kwetterUser);
    }

    return followingList;
  }

  async findAllFollowersById(id: string) {
    const user: User = await this.findOne(id);
    let followerList: User[] = [];

    for (let index = 0; index < user.followers.length; index++) {
      const kwetterUser = await this.userRepository.findOne({
        authId: user.followers[index],
      });
      followerList.push(kwetterUser);
    }

    return followerList;
  }

  findOne(id: string) {
    return this.userRepository.findOne({ authId: id });
  }

  findOneByHashtag(hashTag: string) {
    return this.userRepository.findOne({ hashtag: hashTag });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
