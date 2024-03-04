import { Injectable } from '@nestjs/common'

const streamPathByNick: Record<string, string> = {
  nix: 'nix',
  cartixfuture: 'cartixfuture',
  gorgc: 'gorgc',
  yatoro: 'ytraddan',
  dendi: 'dendi',
  abed: 'abed',
  miracle: 'miracle',
  sumail: 'sumail',
  arteezy: 'arteezy',
  iceiceice: 'iceiceice',
  ramzes666: 'ramzes666',
  qojqva: 'qojqva',
  aui_2000: 'aui_2000',
  butterfly: 'satanic_dota2',
  sclkoma: 'sclkoma',
  watson: 'watsondoto',
  w33: 'w33haa',
  iltw: 'iltw1',
  attacker: 'attacker',
  sketcher_8: 'sketcher_8',
  nine_class: '9class',
  miragedotess: 'miragedotess',
}

@Injectable()
export class TwitchService {
  async findStreamsByNicks(nicks: string[]) {
    return nicks.map((nick) => streamPathByNick[nick])
  }

  getTwitchLinkByStreamId(streamId: string) {
    return `https://www.twitch.tv/${streamId}`
  }

  getTwitchMultiStreamLinkByStreamIds(streamIds: string[]) {
    return `https://www.multitwitch.tv/${streamIds.join('/')}`
  }
}
