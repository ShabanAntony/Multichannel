import { NikeItemEntity, NikeService } from '@server-api'
import { allSettled, fork } from 'effector'

import { $nikeRawItems, requestNikeItemsFx } from './nike'

import MockedFunction = jest.MockedFunction

jest.mock('@server-api', () => ({
  NikeService: {
    findAll: jest.fn(),
  },
}))

const findAllNikeItemsMocked = NikeService.findAll as MockedFunction<
  typeof NikeService.findAll
>

const mockData: Array<NikeItemEntity> = [
  {
    id: '1',
    image: 'image_1',
    subtitle: 'subtitle_1',
    title: 'title_1',
    url: 'url_1',
    price: 90,
    salePrice: 70,
    isNew: false,
  },
  {
    id: '2',
    image: 'image_2',
    subtitle: 'subtitle_2',
    title: 'title_2',
    url: 'url_2',
    price: 100,
    salePrice: 75,
    isNew: false,
  },
]

describe('requestNikeItemsFx', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it('fetches items from VS service', async () => {
    findAllNikeItemsMocked.mockResolvedValue(mockData)

    const scope = fork()

    await allSettled(requestNikeItemsFx, {
      scope,
    })
    expect(NikeService.findAll).toBeCalledTimes(1)
    expect(scope.getState($nikeRawItems)).toEqual([
      {
        discount: 22.22222222222222,
        id: '1',
        image: 'image_1',
        subtitle: 'subtitle_1',
        title: 'title_1',
        url: 'url_1',
        price: 90,
        salePrice: 70,
        isNew: false,
      },
      {
        discount: 25,
        id: '2',
        image: 'image_2',
        subtitle: 'subtitle_2',
        title: 'title_2',
        url: 'url_2',
        price: 100,
        salePrice: 75,
        isNew: false,
      },
    ])
  })
})
