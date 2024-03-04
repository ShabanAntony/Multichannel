import { Injectable } from '@nestjs/common'

const idsByPlayerName:Record<number, string> = {
  1044002267: "butterfly",
  165671428: "sclkoma",
  171262902: "watson",
  86700461: "w33",
  56939869: "gorgc",
  321580662: "yatoro",
  70388657: "dendi",
  132851371: "ramzes666",
  111620041: "sumail",
  86745912: "arteezy",
  84772440: "iceiceice",
  86738694: "qojqva",
  113995822: "iltw",
  118305301: "attacker",
  173480718: "sketcher_8",
  164199202: "nine_class",
  140251702: "miragedotess"
}

@Injectable()
export class SteamService {

  async findPlayersByIds(ids:number[]) {
    return ids.map((id) => idsByPlayerName[id])
  }

}
