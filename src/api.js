import buildUrl from 'build-url';
import { settings } from './settings.js'
import { rangeToAPIRepr } from './Ranges.js'

export let endpoints = {
  totalConsumptions: 'totalConsumptions',
  mapData: 'map',
  connAttemps: 'connAttemps',
  topConsumers: 'topConsumers',
  topFlavours: 'topFlavours',
  getBytes: 'getBytes',
}

export function makeUrl(endpoint) {
  return buildUrl(settings.host, { path: endpoint });
}

export function makeUrlList(endpoint, range) {
  var rangeStr = rangeToAPIRepr(range);
  return buildUrl(settings.host, {
    path: endpoint,
    queryParams: { range: rangeStr },
  });
}
