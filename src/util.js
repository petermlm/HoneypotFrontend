import countries from 'i18n-iso-countries'

export function getCountryName(countryCode) {
    return countries.getName(countryCode, "en", {select: "official"});
}
