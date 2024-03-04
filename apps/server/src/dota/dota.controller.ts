import { Controller, Get } from '@nestjs/common'
import {
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger'

import { DotaService } from './dota.service'
import { DotaEntity } from './entities/dota.entity'

@ApiTags('dota')
@Controller('dota')
export class DotaController {
  constructor(private readonly dotaService: DotaService) {}

  @Get()
  @ApiOperation({
    operationId: 'findAll',
  })
  @ApiUnauthorizedResponse()
  @ApiOkResponse({ type: DotaEntity, isArray: true })
  findAll() {
    return this.dotaService.findAll()
  }
}
