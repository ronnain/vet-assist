import { Injectable } from '@nestjs/common';
import { Conversation, Message, Prisma } from '@prisma/client';
import { PrismaService } from '../../core/services/prisma/prisma.service';
import { ConversationFindManyArgsSchema } from '@vet-assist/zod-types-from-prisma';

@Injectable()
export class ConversationStoreService {
  constructor(private prisma: PrismaService) {}

    async messages(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.MessageWhereUniqueInput;
        where?: Prisma.MessageWhereInput;
        orderBy?: Prisma.MessageOrderByWithRelationInput;
        }): Promise<Message[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.message.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }

    async conversations(params: Prisma.ConversationFindManyArgs): Promise<Conversation[]> {
            return this.prisma.conversation.findMany(params);
    }

    async conversation(params: Prisma.ConversationFindUniqueArgs): Promise<Conversation | null> {
        return this.prisma.conversation.findUnique(params);
    }


//   async post(
//     postWhereUniqueInput: Prisma.PostWhereUniqueInput,
//   ): Promise<Post | null> {
//     return this.prisma.post.findUnique({
//       where: postWhereUniqueInput,
//       // include: {
//       //   author: true,
//       // }
//     });
//   }

//   async posts(params: {
//     skip?: number;
//     take?: number;
//     cursor?: Prisma.PostWhereUniqueInput;
//     where?: Prisma.PostWhereInput;
//     orderBy?: Prisma.PostOrderByWithRelationInput;
//   }): Promise<Post[]> {
//     const { skip, take, cursor, where, orderBy } = params;
//     return this.prisma.post.findMany({
//       skip,
//       take,
//       cursor,
//       where,
//       orderBy,
//     });
//   }

//   async createPost(data: Prisma.PostCreateInput): Promise<Post> {
//     return this.prisma.post.create({
//       data,
//     });
//   }

//   async updatePost(params: {
//     where: Prisma.PostWhereUniqueInput;
//     data: Prisma.PostUpdateInput;
//   }): Promise<Post> {
//     const { data, where } = params;
//     return this.prisma.post.update({
//       data,
//       where,
//     });
//   }

//   async deletePost(where: Prisma.PostWhereUniqueInput): Promise<Post> {
//     return this.prisma.post.delete({
//       where,
//     });
//   }
}