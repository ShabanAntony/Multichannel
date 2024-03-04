import React from 'react'
import renderer from 'react-test-renderer'

import * as utils from '../../../utils/VisibilityObserver'
import { ImageLink } from '../ImageLink'

describe('ImageLink', () => {
  it('should renders correct', () => {
    const tree = renderer
      .create(
        <ImageLink
          link="link"
          src="src"
          alt="alt"
          width={1}
          height={1}
        />,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should renders when visible', () => {
    const spy = jest
      .spyOn(utils, 'useVisibilityObserver')
      .mockReturnValue([{} as any, true])

    const tree = renderer
      .create(
        <ImageLink
          link="link"
          src="src"
          alt="alt"
          width={1}
          height={1}
        />,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
    expect(spy).toHaveBeenCalled()
  })
})
