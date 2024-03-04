import { Injectable } from '@nestjs/common'

import { CreateDotaDto } from './dto/create-dota.dto'
import { UpdateDotaDto } from './dto/update-dota.dto'

@Injectable()
export class DotaService {
  findAll() {
    // https://api.opendota.com/api/live
    return `This action returns all dota`
  }

  findOne(id: number) {
    return `This action returns a #${id} dota`
  }
}
