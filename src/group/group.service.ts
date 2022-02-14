import { Injectable } from '@nestjs/common';
import { Group } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';

@Injectable()
export class GroupService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateGroupDto, user): Promise<Group> {
    return this.prisma.group.create({
      data: {
        ...data,
        members: {
          create: [
            {
              assignedAt: new Date(),
              user: {
                connect: {
                  id: user.id,
                },
              },
            },
          ],
        },
      },
    });
  }

  async findAll(): Promise<Group[]> {
    return this.prisma.group.findMany();
  }

  async findOne(id: number) {
    return this.prisma.group.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: UpdateGroupDto): Promise<Group> {
    return this.prisma.group.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<Group> {
    return this.prisma.group.delete({
      where: { id },
    });
  }
}
