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

  @Column({nullable : false})
  username: string;

  @Column({nullable : false})
  hashtag: string;

  @Column({nullable : false})
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
