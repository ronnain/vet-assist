import { Controller } from "@nestjs/common";
import { TsRestHandler, tsRestHandler } from "@ts-rest/nest";
import { ProspectStoreService } from "./prospect-store.service";
import { ProspectContract } from "@vet-assist/landing-pages-api-contract";


@Controller()
export class ProspectController {

  constructor(private readonly prospectStoreService: ProspectStoreService) {}

  @TsRestHandler(ProspectContract)
  async handler() {
    return tsRestHandler(ProspectContract, {
      prospect: async ({ params }) => {
        const prospectId = params.prospectId ? parseInt(params.prospectId) : undefined;
        const prospect = await this.prospectStoreService.prospect({
          where: {
            id: prospectId
          }
        });

        if (!prospect) {
          return { status: 404, body: null};
        }

        return { status: 200, body: prospect };
      },
      prospects: async ({ query }) => {
        console.log('prospects');
        const prospects = await this.prospectStoreService.prospects(query);
        return { status: 200, body: prospects };
      },
      createProspect: async ({ body }) => {
        const prospect = await this.prospectStoreService.createProspect(body);
        return { status: 200, body: prospect };
      },
      updateProspect: async ({ params, body }) => {
        const prospectId = params.prospectId ? parseInt(params.prospectId) : undefined;
        const prospect = await this.prospectStoreService.updateProspect({where: {id: prospectId}, data: body});
        return { status: 200, body: prospect };
      },
    }
    );
  }
}