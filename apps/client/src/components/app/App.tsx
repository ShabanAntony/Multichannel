import { FC, useEffect } from 'react'
import {
  Navigate,
  Route,
  Routes,
  generatePath,
  useLocation,
  useParams,
} from 'react-router-dom'

import { BrandTypes, Pages } from '../../constants/router'
import { Params, setLocation, setParams } from '../../models/router'
import { NikePage } from '../../pages/NikePage/NikePage'
import { PinkPage } from '../../pages/PinkPage/PinkPage'
import { ReebokPage } from '../../pages/ReebokPage/ReebokPage'
import { VSPage } from '../../pages/VSPage/VSPage'

export interface Props {}
export const App: FC<Props> = () => {
  const params = useParams<Params>()

  useEffect(() => {
    setParams(params)
  }, [params])

  const location = useLocation()

  useEffect(() => {
    setLocation(location)
  }, [location])

  return (
    <Routes>
      <Route
        path={generatePath(Pages.ITEMS, { brandType: BrandTypes.Classic })}
        element={<VSPage />}
      />
      <Route
        path={generatePath(Pages.ITEMS, { brandType: BrandTypes.PINK })}
        element={<PinkPage />}
      />
      <Route
        path={generatePath(Pages.ITEMS, { brandType: BrandTypes.NIKE })}
        element={<NikePage />}
      />
      <Route
        path={generatePath(Pages.ITEMS, { brandType: BrandTypes.REEBOK })}
        element={<ReebokPage />}
      />
      <Route
        path="*"
        element={
          <Navigate
            to={generatePath(Pages.ITEMS, { brandType: BrandTypes.Classic })}
          />
        }
      />
    </Routes>
  )
}
