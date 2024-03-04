import { PinkService, SaleItemEntity } from '@server-api'
import { allSettled, fork } from 'effector'

import { $pinkRawItems, requestPinkItemsFx } from './pink'

import MockedFunction = jest.MockedFunction

jest.mock('@server-api', () => ({
  PinkService: {
    findAll: jest.fn(),
  },
}))

const findAllPinkItemsMocked = PinkService.findAll as MockedFunction<
  typeof PinkService.findAll
>

const mockData: Array<SaleItemEntity> = [
  {
    price: '2',
    salePrice: '1',
    parsedPrice: 2,
    parsedDiscount: 1,
    discount: 1,
    isNew: false,
    regDate: '',
    url: 'url',
    productImages: [],
    swatches: [],
    masterStyleId: 'styleId',
    name: 'name',
  },
  {
    price: '2',
    salePrice: '1',
    parsedPrice: 2,
    parsedDiscount: 1,
    discount: 1,
    isNew: false,
    regDate: '',
    url: 'url',
    productImages: [],
    swatches: [],
    masterStyleId: 'styleId',
    name: 'name',
  },
]

describe('requestPinkItemsFx', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it('fetches items from VS service', async () => {
    findAllPinkItemsMocked.mockResolvedValue(mockData)

    const scope = fork()

    await allSettled(requestPinkItemsFx, {
      scope,
    })
    expect(PinkService.findAll).toBeCalledTimes(1)
    expect(scope.getState($pinkRawItems)).toEqual(mockData)
  })
})
