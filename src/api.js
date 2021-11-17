import buildUrl from 'build-url';
import { settings } from './settings.js'
import { rangeToAPIRepr } from './Ranges.js'

export let endpoints = {
  totalConsumptions: 'totalConsumptions',
  mapData: 'map',
  connAttemps: 'connAttemps',
  topConsumers: 'topConsumers',
  topFlavours: 'topFlavours',

  getBytesMysql: 'getBytes/mysql',
  getBytesPostgresql: 'getBytes/postgresql',
  getBytesNeo4j: 'getBytes/neo4j',
  getBytesElasticsearch: 'getBytes/elasticsearch',
  getBytesMongodb: 'getBytes/mongodb',
}

export function makeUrl(endpoint) {
  return buildUrl(settings.APIBase, { path: endpoint });
}

export function makeUrlList(endpoint, range) {
  var rangeStr = rangeToAPIRepr(range);
  return buildUrl(settings.APIBase, {
    path: endpoint,
    queryParams: { range: rangeStr },
  });
}
