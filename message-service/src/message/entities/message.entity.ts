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

  @Column({nullable : false})
  messageContent: string;

  @Column({ nullable: true })
  likes: number;

  @Column({ nullable: true })
  retweets: number;

  @Column({nullable : false})
  userId: string;

  @Column({nullable : false})
  userName: string;

  @Column({nullable : false})
  userHashtag: string;
}
