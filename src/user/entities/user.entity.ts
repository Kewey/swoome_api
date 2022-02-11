import { User as UserPrisma } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class User implements UserPrisma {
  id: string;
  email: string;
  firstname: string | null;

  @Exclude()
  password: string;

  createdAt: Date;
  updatedAt: Date;

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}
