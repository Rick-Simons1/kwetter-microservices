import { Profile } from 'src/profile/entities/profile.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  role: string;

  @ManyToMany(() => Profile, (profile: Profile) => profile.users)
  profiles: Profile[];

  @CreateDateColumn()
  created_at: Date;
}
