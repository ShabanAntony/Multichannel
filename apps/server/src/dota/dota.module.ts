import { Module } from '@nestjs/common'

import { DotaController } from './dota.controller'
import { DotaService } from './dota.service'
import {HttpModule} from '@nestjs/axios'
import {SteamModule} from '../steam/steam.module'
import {TwitchModule} from '../twitch/twitch.module'

@Module({
  controllers: [DotaController],
  providers: [DotaService],
  imports: [HttpModule, SteamModule, TwitchModule],
})
export class DotaModule {}
