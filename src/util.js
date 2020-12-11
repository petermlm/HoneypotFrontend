import { settings } from './settings.js'

export function makeUrl(endpoint) {
  return settings.host + endpoint;
}
