import React from 'react'
import renderer from 'react-test-renderer'

import { SaleItemEntity } from '@server-api'

import { VSItem } from './VSItem'

jest.mock('../ImageLink/ImageLink', () => ({
  ImageLink: 'ImageLink',
}))

const mockItem: SaleItemEntity = {
  discount: 0,
  isNew: false,
  masterStyleId: '',
  name: '',
  parsedDiscount: 0,
  parsedPrice: 0,
  price: '',
  productImages: ['image'],
  regDate: '',
  salePrice: '',
  swatches: [
    {
      productImage: 'productImage',
      family: 'family',
      name: 'name',
      url: 'url',
    },
  ],
  url: '',
}

describe('VSItem', () => {
  it('should renders regular item', () => {
    const tree = renderer.create(<VSItem data={mockItem} />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should renders new item', () => {
    const tree = renderer
      .create(<VSItem data={{ ...mockItem, isNew: true }} />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
