import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  messageContent: string;

  @Column({ nullable: true })
  likes: number;

  @Column({ nullable: true })
  retweets: number;

  @Column()
  userId: string;

  @Column()
  userName: string;

  @Column()
  userHashtag: string;
}
