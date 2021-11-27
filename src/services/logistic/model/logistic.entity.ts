import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'logistic' })
export class Logistic {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;
  @Column('varchar', { name: "logistic_name", length: 60 })
  logistic_name: string;
  @Column('bigint', { name: "amount" })
  amount: number;
  @Column('varchar', { name: "destination_name", length: 60 })
  destination_name: string;
  @Column('varchar', { name: "origin_name", length: 60 })
  origin_name: string;
  @Column('varchar', { name: "duration", length: 60 })
  duration: string;
}
