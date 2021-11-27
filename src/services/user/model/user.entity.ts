import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;
  @Column('varchar', { length: 60, unique: true })
  username: string;
  @Column('varchar', { length: 60, unique: true })
  msisdn: string;
  @Column('varchar', { length: 60 })
  password: string;
}
