import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'usuarios'})
export class UserEntity{

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ name: "email", nullable: false})
    email: string;

    @Column({ name: 'senha', nullable: false})
    senha: string;
}