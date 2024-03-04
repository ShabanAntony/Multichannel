import { Module } from '@nestjs/common'

import { DotaController } from './dota.controller'
import { DotaService } from './dota.service'

@Module({
  controllers: [DotaController],
  providers: [DotaService],
})
export class DotaModule {}
