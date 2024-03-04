import { SaleItemEntity, VsClassicService } from '@server-api'
import { allSettled, fork } from 'effector'

import { $vsRawItems, requestVSItemsFx } from './vs'

import MockedFunction = jest.MockedFunction

jest.mock('@server-api', () => ({
  VsClassicService: {
    findAll: jest.fn(),
  },
}))

const findAllPinkItemsMocked = VsClassicService.findAll as MockedFunction<
  typeof VsClassicService.findAll
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

describe('requestVSItemsFx', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it('fetches items from VS service', async () => {
    findAllPinkItemsMocked.mockResolvedValue(mockData)

    const scope = fork()

    await allSettled(requestVSItemsFx, {
      scope,
    })
    expect(VsClassicService.findAll).toBeCalledTimes(1)
    expect(scope.getState($vsRawItems)).toEqual(mockData)
  })
})
