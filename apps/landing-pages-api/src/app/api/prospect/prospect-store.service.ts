import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../core/services/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProspectStoreService {
  constructor(private prisma: PrismaService) {}

    async prospects(params: Prisma.ProspectFindManyArgs) {
        return this.prisma.prospect.findMany(params);
    }

    async prospect(params: Prisma.ProspectFindUniqueArgs) {
        return this.prisma.prospect.findUnique(params);
    }

    async createProspect(data: Prisma.ProspectCreateInput) {
        return this.prisma.prospect.create({
            data,
        });
    }

    async updateProspect(params: {
        where: Prisma.ProspectWhereUniqueInput;
        data: Prisma.ProspectUpdateInput;
    }) {
        const { data, where } = params;
        return this.prisma.prospect.update({
            data,
            where,
        });
    }

    async deleteProspect(where: Prisma.ProspectWhereUniqueInput) {
        return this.prisma.prospect.delete({
            where,
        });
    }
}