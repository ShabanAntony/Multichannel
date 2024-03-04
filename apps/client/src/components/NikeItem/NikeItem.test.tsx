import React from 'react'
import renderer from 'react-test-renderer'

import { NikeItemEntity } from '@server-api'

import { NikeItem } from './NikeItem'

jest.mock('../ImageLink/ImageLink', () => ({
  ImageLink: 'ImageLink',
}))

const mockItem: NikeItemEntity & { discount: number } = {
  discount: 25,
  id: '2',
  image: 'image_2',
  subtitle: 'subtitle_2',
  title: 'title_2',
  url: 'url_2',
  price: 100,
  salePrice: 75,
  isNew: false,
}

describe('NikeItem', () => {
  it('should renders regular item', () => {
    const tree = renderer.create(<NikeItem data={mockItem} />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should renders new item', () => {
    const tree = renderer
      .create(<NikeItem data={{ ...mockItem, isNew: true }} />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
