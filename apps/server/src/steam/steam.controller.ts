import {Controller} from '@nestjs/common'
import {SteamService} from './steam.service'

@Controller('steam')
export class SteamController {
  constructor(private readonly steamService: SteamService) {}
}
