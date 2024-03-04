import {Module} from '@nestjs/common'
import {ConfigModule as EnvConfigModule} from '@nestjs/config'

import {DotaModule} from './dota/dota.module'

@Module({
  imports: [EnvConfigModule.forRoot(), DotaModule],
})
export class AppModule {}
