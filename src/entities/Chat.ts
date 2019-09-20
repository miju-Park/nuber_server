import {
  BaseEntity,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";

import Message from "./Message";
import User from "./User";

@Entity()
class Chat extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @OneToMany(type => User, user => user.chat)
  participants: User[];

  @OneToMany(type => Message, messages => messages.chat)
  messages: Message[];
  @CreateDateColumn() createAt: string;
  @UpdateDateColumn() updateAt: string;
}

export default Chat;
