import React from 'react'
import { MemoryRouter, generatePath } from 'react-router-dom'
import renderer from 'react-test-renderer'

import { BrandTypes, Pages } from '../../constants/router'
import { Header } from './Header'

describe('Header', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it('should render correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter
          initialEntries={[
            generatePath(Pages.ITEMS, { brandType: BrandTypes.PINK }),
          ]}
        >
          <Header
            newItems={10}
            filteredItems={10}
            totalItems={100}
          >
            Hello
          </Header>
        </MemoryRouter>,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
