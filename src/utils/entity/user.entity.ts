import { Exclude } from 'class-transformer';

export class UserEntity {
  name: string;
  email: string;
  role: string;

  @Exclude()
  password: string;

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}
