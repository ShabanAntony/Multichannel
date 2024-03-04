import {
  Controller,
  Get,
  Param,
} from '@nestjs/common'

import {DotaService} from './dota.service'
import {
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger'
import {DotaEntity} from './entities/dota.entity'

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

  @Get(':id')
  @ApiOperation({
    operationId: 'findOne',
  })
  @ApiUnauthorizedResponse()
  @ApiOkResponse({ type: DotaEntity, isArray: true })
  findOne(@Param('id') id: string) {
    return this.dotaService.findOne(+id)
  }

}
