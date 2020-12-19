import buildUrl from 'build-url';
import { settings } from './settings.js'

export let endpoints = {
  totalConsumptions: 'totalConsumptions',
  mapData: 'map',
  connAttemps: 'connAttemps',
  topConsumers: 'topConsumers',
  topFlavours: 'topFlavours',
}

export function makeUrl(endpoint) {
  return buildUrl(settings.host, { path: endpoint });
}

export function makeUrlList(endpoint, range) {
  return buildUrl(settings.host, {
    path: endpoint,
    queryParams: { range: range }
  });
}
