import { lazy } from 'react';

export default [
  {
    path: '/',
    label: 'Home',
    exact: true,
    component: lazy(() =>
      import('./view/HomeView.js' /* webpackChunkName: "home-view" */)
    ),
  },
  {
    path: '/characters',
    label: 'Characters',
    exact: true,
    component: lazy(() =>
      import(
        './view/CharactersView.js' /* webpackChunkName: "characters-view" */
      )
    ),
  },
  {
    path: '/characters/:id',
    label: 'CharacterDetal',
    exact: true,
    component: lazy(() =>
      import(
        './view/CharacterDetalView.js' /* webpackChunkName: "character-detal-view" */
      )
    ),
  },
  {
    path: '/episodes',
    label: 'Episodes',
    exact: true,
    component: lazy(() =>
      import('./view/EpisodesView.js' /* webpackChunkName: "episodes-view" */)
    ),
  },
  {
    path: '/locations',
    label: 'Locations',
    exact: true,
    component: lazy(() =>
      import('./view/LocationsView.js' /* webpackChunkName: "locations-view" */)
    ),
  },
  {
    path: '/myWatchList',
    label: 'My watch list',
    exact: true,
    component: lazy(() =>
      import(
        './view/MyWatchListView.js' /* webpackChunkName: "my-watch-list-view" */
      )
    ),
  },
];
