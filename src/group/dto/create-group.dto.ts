import { Prisma } from '@prisma/client';
import { IsEmail, MinLength } from 'class-validator';

export class CreateGroupDto implements Prisma.GroupCreateInput {
  @MinLength(1)
  name: string;
}
