import {Controller} from '@nestjs/common'

import {TwitchService} from './twitch.service'

@Controller('twitch')
export class TwitchController {
  constructor(private readonly steamService: TwitchService) {}
}
