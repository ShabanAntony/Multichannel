import { MemoryRouter, generatePath } from 'react-router-dom'
import renderer from 'react-test-renderer'

import { BrandTypes, Pages } from '../../constants/router'
import { App } from './App'

jest.mock('../../pages/VSPage/VSPage', () => ({
  VSPage: 'mocked-VSPage',
}))

jest.mock('../../pages/PinkPage/PinkPage', () => ({
  PinkPage: 'mocked-PinkPage',
}))

jest.mock('../../pages/NikePage/NikePage', () => ({
  NikePage: 'mocked-NikePage',
}))

describe('App', () => {
  it('should render default router', () => {
    const tree = renderer
      .create(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should render VS classic route', () => {
    const tree = renderer
      .create(
        <MemoryRouter
          initialEntries={[
            generatePath(Pages.ITEMS, { brandType: BrandTypes.Classic }),
          ]}
        >
          <App />
        </MemoryRouter>,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should render PINK route', () => {
    const tree = renderer
      .create(
        <MemoryRouter
          initialEntries={[
            generatePath(Pages.ITEMS, { brandType: BrandTypes.PINK }),
          ]}
        >
          <App />
        </MemoryRouter>,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should render NIKE route', () => {
    const tree = renderer
      .create(
        <MemoryRouter
          initialEntries={[
            generatePath(Pages.ITEMS, { brandType: BrandTypes.NIKE }),
          ]}
        >
          <App />
        </MemoryRouter>,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
