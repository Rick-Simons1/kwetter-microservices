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
  hashtag: string;

  @Column()
  discription: string;

  @Column({ unique: true })
  authId: string;

  @Column({ nullable: true })
  role: string;

  @Column('simple-array')
  following: string[];

  @Column('simple-array')
  followers: string[];

  @CreateDateColumn()
  created_at: Date;
}
