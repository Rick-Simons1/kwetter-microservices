import { Message } from 'src/message/entities/message.entity';
import { Profile } from 'src/profile/entities/profile.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
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

  @OneToMany(() => Message, (message: Message) => message.user)
  messages: Message[];

  @CreateDateColumn()
  created_at: Date;
}
