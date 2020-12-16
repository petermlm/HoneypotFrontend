import countries from 'i18n-iso-countries'
import { settings } from './settings.js'

export function makeUrl(endpoint) {
  return settings.host + endpoint;
}

export function getCountryName(countryCode) {
    return countries.getName(countryCode, "en", {select: "official"});
}
