import { PartialType } from '@nestjs/swagger'

import { CreateDotaDto } from './create-dota.dto'

export class UpdateDotaDto extends PartialType(CreateDotaDto) {}
