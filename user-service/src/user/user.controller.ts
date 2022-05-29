import { Controller } from '@nestjs/common';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern('user:create-user')
  create(@Payload() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @MessagePattern('user:find-all')
  findAll(@Ctx() context: RmqContext) {
    return this.userService.findAll();
  }

  @MessagePattern('user:find-all-following-by-id')
  findAllfollowingById(id: string) {
    return this.userService.findAllFollowingById(id);
  }

  @MessagePattern('user:find-all-followers-by-id')
  findAllfollowersById(id: string) {
    return this.userService.findAllFollowersById(id);
  }

  @MessagePattern('user:find-by-id')
  findOne(@Payload() id: string) {
    return this.userService.findOne(id);
  }

  @MessagePattern('user:find-by-hashtag')
  findOneByHashtag(@Payload() hashtag: string) {
    return this.userService.findOneByHashtag(hashtag);
  }

  @MessagePattern('user:updateUser')
  update(@Payload() updateUserDto: UpdateUserDto) {
    return this.userService.update(updateUserDto.id, updateUserDto);
  }

  @MessagePattern('user:removeUser')
  remove(@Payload() id: number) {
    return this.userService.remove(id);
  }

  // @MessagePattern('user:addProfile')
  // addProfile(@Payload() profileId: number, userId: number) {
  //   return this.userService.addProfile(profileId, userId);
  // }

  // @MessagePattern('user:fetchByProfile')
  // fetchUsers(@Payload() profileId: number) {
  //   return this.userService.fetchUsers(profileId);
  // }
}
