import { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Layout } from 'app/components'
import { GlobalStyles } from 'app/styles/global'

const IndexPage = lazy(() => import('./pages'))
const CategoriesPage = lazy(() => import('./pages/categories'))
const MensPage = lazy(() => import('./pages/mens'))
const WomensPage = lazy(() => import('./pages/womens'))
const FavouritesPage = lazy(() => import('./pages/favourites'))
const AccountPage = lazy(() => import('./pages/account'))
const CartPage = lazy(() => import('./pages/cart'))

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <Route exact path="/">
              <IndexPage />
            </Route>

            <Route path="/men">
              <MensPage />
            </Route>

            <Route path="/women">
              <WomensPage />
            </Route>

            <Route path="/favourites">
              <FavouritesPage />
            </Route>

            <Route path="/my-account">
              <AccountPage />
            </Route>

            <Route path="/cart">
              <CartPage />
            </Route>

            <Route path="/categories">
              <CategoriesPage />
            </Route>

          </Switch>
        </Suspense>
      </Layout>
    </>
  );
}

