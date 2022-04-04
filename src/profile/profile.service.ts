import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './entities/profile.entity';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile)
    private readonly profileRepository: Repository<Profile>,
  ) {}
  create(createProfileDto: CreateProfileDto) {
    return this.profileRepository.save(createProfileDto);
  }

  findAll() {
    return this.profileRepository.find();
  }

  findOne(id: number) {
    return this.profileRepository.findOne(id);
  }

  update(id: number, updateProfileDto: UpdateProfileDto) {
    return this.profileRepository.update(id, updateProfileDto);
  }

  findAllByUser(id: number) {
    return this.profileRepository.find({
      relations: ['users'],
      where: { id: id },
    });
  }

  remove(id: number) {
    return this.profileRepository.delete(id);
  }

  fetchProfiles(userId: number) {
    return this.profileRepository.find({
      relations: ['users'],
      where: (qb) => {
        qb.where('users.id = :userId', { userId: userId });
      },
    });
  }
}
