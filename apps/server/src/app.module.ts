import { Module } from '@nestjs/common'
import { ConfigModule as EnvConfigModule } from '@nestjs/config'

import { SteamModule } from './steam/steam.module'
import { DotaModule } from './dota/dota.module'

@Module({
  imports: [EnvConfigModule.forRoot(), DotaModule, SteamModule],
})
export class AppModule {}
