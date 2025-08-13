type Country = {
  code: string
  name: string
  flag: string
}

export default class CountriesHelper {
  private static readonly MAIN_COUNTRIES: readonly Country[] = [
    // A
    { code: 'AD', name: 'Andorra', flag: '🇦🇩' },
    { code: 'AE', name: 'United Arab Emirates', flag: '🇦🇪' },
    { code: 'AF', name: 'Afghanistan', flag: '🇦🇫' },
    { code: 'AG', name: 'Antigua and Barbuda', flag: '🇦🇬' },
    { code: 'AI', name: 'Anguilla', flag: '🇦🇮' },
    { code: 'AL', name: 'Albania', flag: '🇦🇱' },
    { code: 'AM', name: 'Armenia', flag: '🇦🇲' },
    { code: 'AO', name: 'Angola', flag: '🇦🇴' },
    { code: 'AQ', name: 'Antarctica', flag: '🇦🇶' },
    { code: 'AR', name: 'Argentina', flag: '🇦🇷' },
    { code: 'AS', name: 'American Samoa', flag: '🇦🇸' },
    { code: 'AT', name: 'Austria', flag: '🇦🇹' },
    { code: 'AU', name: 'Australia', flag: '🇦🇺' },
    { code: 'AW', name: 'Aruba', flag: '🇦🇼' },
    { code: 'AX', name: 'Åland Islands', flag: '🇦🇽' },
    { code: 'AZ', name: 'Azerbaijan', flag: '🇦🇿' },

    // B
    { code: 'BA', name: 'Bosnia and Herzegovina', flag: '🇧🇦' },
    { code: 'BB', name: 'Barbados', flag: '🇧🇧' },
    { code: 'BD', name: 'Bangladesh', flag: '🇧🇩' },
    { code: 'BE', name: 'Belgium', flag: '🇧🇪' },
    { code: 'BF', name: 'Burkina Faso', flag: '🇧🇫' },
    { code: 'BG', name: 'Bulgaria', flag: '🇧🇬' },
    { code: 'BH', name: 'Bahrain', flag: '🇧🇭' },
    { code: 'BI', name: 'Burundi', flag: '🇧🇮' },
    { code: 'BJ', name: 'Benin', flag: '🇧🇯' },
    { code: 'BL', name: 'Saint Barthélemy', flag: '🇧🇱' },
    { code: 'BM', name: 'Bermuda', flag: '🇧🇲' },
    { code: 'BN', name: 'Brunei', flag: '🇧🇳' },
    { code: 'BO', name: 'Bolivia', flag: '🇧🇴' },
    { code: 'BQ', name: 'Caribbean Netherlands', flag: '🇧🇶' },
    { code: 'BR', name: 'Brazil', flag: '🇧🇷' },
    { code: 'BS', name: 'Bahamas', flag: '🇧🇸' },
    { code: 'BT', name: 'Bhutan', flag: '🇧🇹' },
    { code: 'BV', name: 'Bouvet Island', flag: '🇧🇻' },
    { code: 'BW', name: 'Botswana', flag: '🇧🇼' },
    { code: 'BY', name: 'Belarus', flag: '🇧🇾' },
    { code: 'BZ', name: 'Belize', flag: '🇧🇿' },

    // C
    { code: 'CA', name: 'Canada', flag: '🇨🇦' },
    { code: 'CC', name: 'Cocos Islands', flag: '🇨🇨' },
    { code: 'CD', name: 'DR Congo', flag: '🇨🇩' },
    { code: 'CF', name: 'Central African Republic', flag: '🇨🇫' },
    { code: 'CG', name: 'Republic of the Congo', flag: '🇨🇬' },
    { code: 'CH', name: 'Switzerland', flag: '🇨🇭' },
    { code: 'CI', name: "Côte d'Ivoire", flag: '🇨🇮' },
    { code: 'CK', name: 'Cook Islands', flag: '🇨🇰' },
    { code: 'CL', name: 'Chile', flag: '🇨🇱' },
    { code: 'CM', name: 'Cameroon', flag: '🇨🇲' },
    { code: 'CN', name: 'China', flag: '🇨🇳' },
    { code: 'CO', name: 'Colombia', flag: '🇨🇴' },
    { code: 'CR', name: 'Costa Rica', flag: '🇨🇷' },
    { code: 'CU', name: 'Cuba', flag: '🇨🇺' },
    { code: 'CV', name: 'Cape Verde', flag: '🇨🇻' },
    { code: 'CW', name: 'Curaçao', flag: '🇨🇼' },
    { code: 'CX', name: 'Christmas Island', flag: '🇨🇽' },
    { code: 'CY', name: 'Cyprus', flag: '🇨🇾' },
    { code: 'CZ', name: 'Czech Republic', flag: '🇨🇿' },

    // D
    { code: 'DE', name: 'Germany', flag: '🇩🇪' },
    { code: 'DJ', name: 'Djibouti', flag: '🇩🇯' },
    { code: 'DK', name: 'Denmark', flag: '🇩🇰' },
    { code: 'DM', name: 'Dominica', flag: '🇩🇲' },
    { code: 'DO', name: 'Dominican Republic', flag: '🇩🇴' },
    { code: 'DZ', name: 'Algeria', flag: '🇩🇿' },

    // E
    { code: 'EC', name: 'Ecuador', flag: '🇪🇨' },
    { code: 'EE', name: 'Estonia', flag: '🇪🇪' },
    { code: 'EG', name: 'Egypt', flag: '🇪🇬' },
    { code: 'EH', name: 'Western Sahara', flag: '🇪🇭' },
    { code: 'ER', name: 'Eritrea', flag: '🇪🇷' },
    { code: 'ES', name: 'Spain', flag: '🇪🇸' },
    { code: 'ET', name: 'Ethiopia', flag: '🇪🇹' },

    // F
    { code: 'FI', name: 'Finland', flag: '🇫🇮' },
    { code: 'FJ', name: 'Fiji', flag: '🇫🇯' },
    { code: 'FK', name: 'Falkland Islands', flag: '🇫🇰' },
    { code: 'FM', name: 'Micronesia', flag: '🇫🇲' },
    { code: 'FO', name: 'Faroe Islands', flag: '🇫🇴' },
    { code: 'FR', name: 'France', flag: '🇫🇷' },

    // G
    { code: 'GA', name: 'Gabon', flag: '🇬🇦' },
    { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
    { code: 'GD', name: 'Grenada', flag: '🇬🇩' },
    { code: 'GE', name: 'Georgia', flag: '🇬🇪' },
    { code: 'GF', name: 'French Guiana', flag: '🇬🇫' },
    { code: 'GG', name: 'Guernsey', flag: '🇬🇬' },
    { code: 'GH', name: 'Ghana', flag: '🇬🇭' },
    { code: 'GI', name: 'Gibraltar', flag: '🇬🇮' },
    { code: 'GL', name: 'Greenland', flag: '🇬🇱' },
    { code: 'GM', name: 'Gambia', flag: '🇬🇲' },
    { code: 'GN', name: 'Guinea', flag: '🇬🇳' },
    { code: 'GP', name: 'Guadeloupe', flag: '🇬🇵' },
    { code: 'GQ', name: 'Equatorial Guinea', flag: '🇬🇶' },
    { code: 'GR', name: 'Greece', flag: '🇬🇷' },
    { code: 'GS', name: 'South Georgia', flag: '🇬🇸' },
    { code: 'GT', name: 'Guatemala', flag: '🇬🇹' },
    { code: 'GU', name: 'Guam', flag: '🇬🇺' },
    { code: 'GW', name: 'Guinea-Bissau', flag: '🇬🇼' },
    { code: 'GY', name: 'Guyana', flag: '🇬🇾' },

    // H
    { code: 'HK', name: 'Hong Kong', flag: '🇭🇰' },
    { code: 'HM', name: 'Heard Island', flag: '🇭🇲' },
    { code: 'HN', name: 'Honduras', flag: '🇭🇳' },
    { code: 'HR', name: 'Croatia', flag: '🇭🇷' },
    { code: 'HT', name: 'Haiti', flag: '🇭🇹' },
    { code: 'HU', name: 'Hungary', flag: '🇭🇺' },

    // I
    { code: 'ID', name: 'Indonesia', flag: '🇮🇩' },
    { code: 'IE', name: 'Ireland', flag: '🇮🇪' },
    { code: 'IL', name: 'Israel', flag: '🇮🇱' },
    { code: 'IM', name: 'Isle of Man', flag: '🇮🇲' },
    { code: 'IN', name: 'India', flag: '🇮🇳' },
    { code: 'IO', name: 'British Indian Ocean Territory', flag: '🇮🇴' },
    { code: 'IQ', name: 'Iraq', flag: '🇮🇶' },
    { code: 'IR', name: 'Iran', flag: '🇮🇷' },
    { code: 'IS', name: 'Iceland', flag: '🇮🇸' },
    { code: 'IT', name: 'Italy', flag: '🇮🇹' },

    // J
    { code: 'JE', name: 'Jersey', flag: '🇯🇪' },
    { code: 'JM', name: 'Jamaica', flag: '🇯🇲' },
    { code: 'JO', name: 'Jordan', flag: '🇯🇴' },
    { code: 'JP', name: 'Japan', flag: '🇯🇵' },

    // K
    { code: 'KE', name: 'Kenya', flag: '🇰🇪' },
    { code: 'KG', name: 'Kyrgyzstan', flag: '🇰🇬' },
    { code: 'KH', name: 'Cambodia', flag: '🇰🇭' },
    { code: 'KI', name: 'Kiribati', flag: '🇰🇮' },
    { code: 'KM', name: 'Comoros', flag: '🇰🇲' },
    { code: 'KN', name: 'Saint Kitts and Nevis', flag: '🇰🇳' },
    { code: 'KP', name: 'North Korea', flag: '🇰🇵' },
    { code: 'KR', name: 'South Korea', flag: '🇰🇷' },
    { code: 'KW', name: 'Kuwait', flag: '🇰🇼' },
    { code: 'KY', name: 'Cayman Islands', flag: '🇰🇾' },
    { code: 'KZ', name: 'Kazakhstan', flag: '🇰🇿' },

    // L
    { code: 'LA', name: 'Laos', flag: '🇱🇦' },
    { code: 'LB', name: 'Lebanon', flag: '🇱🇧' },
    { code: 'LC', name: 'Saint Lucia', flag: '🇱🇨' },
    { code: 'LI', name: 'Liechtenstein', flag: '🇱🇮' },
    { code: 'LK', name: 'Sri Lanka', flag: '🇱🇰' },
    { code: 'LR', name: 'Liberia', flag: '🇱🇷' },
    { code: 'LS', name: 'Lesotho', flag: '🇱🇸' },
    { code: 'LT', name: 'Lithuania', flag: '🇱🇹' },
    { code: 'LU', name: 'Luxembourg', flag: '🇱🇺' },
    { code: 'LV', name: 'Latvia', flag: '🇱🇻' },
    { code: 'LY', name: 'Libya', flag: '🇱🇾' },

    // M
    { code: 'MA', name: 'Morocco', flag: '🇲🇦' },
    { code: 'MC', name: 'Monaco', flag: '🇲🇨' },
    { code: 'MD', name: 'Moldova', flag: '🇲🇩' },
    { code: 'ME', name: 'Montenegro', flag: '🇲🇪' },
    { code: 'MF', name: 'Saint Martin', flag: '🇲🇫' },
    { code: 'MG', name: 'Madagascar', flag: '🇲🇬' },
    { code: 'MH', name: 'Marshall Islands', flag: '🇲🇭' },
    { code: 'MK', name: 'North Macedonia', flag: '🇲🇰' },
    { code: 'ML', name: 'Mali', flag: '🇲🇱' },
    { code: 'MM', name: 'Myanmar', flag: '🇲🇲' },
    { code: 'MN', name: 'Mongolia', flag: '🇲🇳' },
    { code: 'MO', name: 'Macao', flag: '🇲🇴' },
    { code: 'MP', name: 'Northern Mariana Islands', flag: '🇲🇵' },
    { code: 'MQ', name: 'Martinique', flag: '🇲🇶' },
    { code: 'MR', name: 'Mauritania', flag: '🇲🇷' },
    { code: 'MS', name: 'Montserrat', flag: '🇲🇸' },
    { code: 'MT', name: 'Malta', flag: '🇲🇹' },
    { code: 'MU', name: 'Mauritius', flag: '🇲🇺' },
    { code: 'MV', name: 'Maldives', flag: '🇲🇻' },
    { code: 'MW', name: 'Malawi', flag: '🇲🇼' },
    { code: 'MX', name: 'Mexico', flag: '🇲🇽' },
    { code: 'MY', name: 'Malaysia', flag: '🇲🇾' },
    { code: 'MZ', name: 'Mozambique', flag: '🇲🇿' },

    // N
    { code: 'NA', name: 'Namibia', flag: '🇳🇦' },
    { code: 'NC', name: 'New Caledonia', flag: '🇳🇨' },
    { code: 'NE', name: 'Niger', flag: '🇳🇪' },
    { code: 'NF', name: 'Norfolk Island', flag: '🇳🇫' },
    { code: 'NG', name: 'Nigeria', flag: '🇳🇬' },
    { code: 'NI', name: 'Nicaragua', flag: '🇳🇮' },
    { code: 'NL', name: 'Netherlands', flag: '🇳🇱' },
    { code: 'NO', name: 'Norway', flag: '🇳🇴' },
    { code: 'NP', name: 'Nepal', flag: '🇳🇵' },
    { code: 'NR', name: 'Nauru', flag: '🇳🇷' },
    { code: 'NU', name: 'Niue', flag: '🇳🇺' },
    { code: 'NZ', name: 'New Zealand', flag: '🇳🇿' },

    // O
    { code: 'OM', name: 'Oman', flag: '🇴🇲' },

    // P
    { code: 'PA', name: 'Panama', flag: '🇵🇦' },
    { code: 'PE', name: 'Peru', flag: '🇵🇪' },
    { code: 'PF', name: 'French Polynesia', flag: '🇵🇫' },
    { code: 'PG', name: 'Papua New Guinea', flag: '🇵🇬' },
    { code: 'PH', name: 'Philippines', flag: '🇵🇭' },
    { code: 'PK', name: 'Pakistan', flag: '🇵🇰' },
    { code: 'PL', name: 'Poland', flag: '🇵🇱' },
    { code: 'PM', name: 'Saint Pierre and Miquelon', flag: '🇵🇲' },
    { code: 'PN', name: 'Pitcairn Islands', flag: '🇵🇳' },
    { code: 'PR', name: 'Puerto Rico', flag: '🇵🇷' },
    { code: 'PS', name: 'Palestine', flag: '🇵🇸' },
    { code: 'PT', name: 'Portugal', flag: '🇵🇹' },
    { code: 'PW', name: 'Palau', flag: '🇵🇼' },
    { code: 'PY', name: 'Paraguay', flag: '🇵🇾' },

    // Q
    { code: 'QA', name: 'Qatar', flag: '🇶🇦' },

    // R
    { code: 'RE', name: 'Réunion', flag: '🇷🇪' },
    { code: 'RO', name: 'Romania', flag: '🇷🇴' },
    { code: 'RS', name: 'Serbia', flag: '🇷🇸' },
    { code: 'RU', name: 'Russia', flag: '🇷🇺' },
    { code: 'RW', name: 'Rwanda', flag: '🇷🇼' },

    // S
    { code: 'SA', name: 'Saudi Arabia', flag: '🇸🇦' },
    { code: 'SB', name: 'Solomon Islands', flag: '🇸🇧' },
    { code: 'SC', name: 'Seychelles', flag: '🇸🇨' },
    { code: 'SD', name: 'Sudan', flag: '🇸🇩' },
    { code: 'SE', name: 'Sweden', flag: '🇸🇪' },
    { code: 'SG', name: 'Singapore', flag: '🇸🇬' },
    { code: 'SH', name: 'Saint Helena', flag: '🇸🇭' },
    { code: 'SI', name: 'Slovenia', flag: '🇸🇮' },
    { code: 'SJ', name: 'Svalbard and Jan Mayen', flag: '🇸🇯' },
    { code: 'SK', name: 'Slovakia', flag: '🇸🇰' },
    { code: 'SL', name: 'Sierra Leone', flag: '🇸🇱' },
    { code: 'SM', name: 'San Marino', flag: '🇸🇲' },
    { code: 'SN', name: 'Senegal', flag: '🇸🇳' },
    { code: 'SO', name: 'Somalia', flag: '🇸🇴' },
    { code: 'SR', name: 'Suriname', flag: '🇸🇷' },
    { code: 'SS', name: 'South Sudan', flag: '🇸🇸' },
    { code: 'ST', name: 'São Tomé and Príncipe', flag: '🇸🇹' },
    { code: 'SV', name: 'El Salvador', flag: '🇸🇻' },
    { code: 'SX', name: 'Sint Maarten', flag: '🇸🇽' },
    { code: 'SY', name: 'Syria', flag: '🇸🇾' },
    { code: 'SZ', name: 'Eswatini', flag: '🇸🇿' },

    // T
    { code: 'TC', name: 'Turks and Caicos Islands', flag: '🇹🇨' },
    { code: 'TD', name: 'Chad', flag: '🇹🇩' },
    { code: 'TF', name: 'French Southern Territories', flag: '🇹🇫' },
    { code: 'TG', name: 'Togo', flag: '🇹🇬' },
    { code: 'TH', name: 'Thailand', flag: '🇹🇭' },
    { code: 'TJ', name: 'Tajikistan', flag: '🇹🇯' },
    { code: 'TK', name: 'Tokelau', flag: '🇹🇰' },
    { code: 'TL', name: 'Timor-Leste', flag: '🇹🇱' },
    { code: 'TM', name: 'Turkmenistan', flag: '🇹🇲' },
    { code: 'TN', name: 'Tunisia', flag: '🇹🇳' },
    { code: 'TO', name: 'Tonga', flag: '🇹🇴' },
    { code: 'TR', name: 'Turkey', flag: '🇹🇷' },
    { code: 'TT', name: 'Trinidad and Tobago', flag: '🇹🇹' },
    { code: 'TV', name: 'Tuvalu', flag: '🇹🇻' },
    { code: 'TW', name: 'Taiwan', flag: '🇹🇼' },
    { code: 'TZ', name: 'Tanzania', flag: '🇹🇿' },

    // U
    { code: 'UA', name: 'Ukraine', flag: '🇺🇦' },
    { code: 'UG', name: 'Uganda', flag: '🇺🇬' },
    { code: 'UM', name: 'U.S. Outlying Islands', flag: '🇺🇲' },
    { code: 'US', name: 'United States', flag: '🇺🇸' },
    { code: 'UY', name: 'Uruguay', flag: '🇺🇾' },
    { code: 'UZ', name: 'Uzbekistan', flag: '🇺🇿' },

    // V
    { code: 'VA', name: 'Vatican City', flag: '🇻🇦' },
    { code: 'VC', name: 'Saint Vincent and the Grenadines', flag: '🇻🇨' },
    { code: 'VE', name: 'Venezuela', flag: '🇻🇪' },
    { code: 'VG', name: 'British Virgin Islands', flag: '🇻🇬' },
    { code: 'VI', name: 'U.S. Virgin Islands', flag: '🇻🇮' },
    { code: 'VN', name: 'Vietnam', flag: '🇻🇳' },
    { code: 'VU', name: 'Vanuatu', flag: '🇻🇺' },

    // W
    { code: 'WF', name: 'Wallis and Futuna', flag: '🇼🇫' },
    { code: 'WS', name: 'Samoa', flag: '🇼🇸' },

    // Y
    { code: 'YE', name: 'Yemen', flag: '🇾🇪' },
    { code: 'YT', name: 'Mayotte', flag: '🇾🇹' },

    // Z
    { code: 'ZA', name: 'South Africa', flag: '🇿🇦' },
    { code: 'ZM', name: 'Zambia', flag: '🇿🇲' },
    { code: 'ZW', name: 'Zimbabwe', flag: '🇿🇼' },
  ] as const

  static getCoutriesByContinent = (): Record<string, Country[]> => {
    const continents = {
      'Europe': [] as Country[],
      'North America': [] as Country[],
      'South America': [] as Country[],
      'Asia': [] as Country[],
      'Africa': [] as Country[],
      'Oceania': [] as Country[],
      'Other': [] as Country[],
    }

    // Mapping des codes pays par continent
    const continentMapping: Record<string, keyof typeof continents> = {
      // Europe
      AD: 'Europe',
      AL: 'Europe',
      AM: 'Europe',
      AT: 'Europe',
      AZ: 'Europe',
      BA: 'Europe',
      BE: 'Europe',
      BG: 'Europe',
      BY: 'Europe',
      CH: 'Europe',
      CY: 'Europe',
      CZ: 'Europe',
      DE: 'Europe',
      DK: 'Europe',
      EE: 'Europe',
      ES: 'Europe',
      FI: 'Europe',
      FR: 'Europe',
      GB: 'Europe',
      GE: 'Europe',
      GR: 'Europe',
      HR: 'Europe',
      HU: 'Europe',
      IE: 'Europe',
      IS: 'Europe',
      IT: 'Europe',
      LI: 'Europe',
      LT: 'Europe',
      LU: 'Europe',
      LV: 'Europe',
      MC: 'Europe',
      MD: 'Europe',
      ME: 'Europe',
      MK: 'Europe',
      MT: 'Europe',
      NL: 'Europe',
      NO: 'Europe',
      PL: 'Europe',
      PT: 'Europe',
      RO: 'Europe',
      RS: 'Europe',
      RU: 'Europe',
      SE: 'Europe',
      SI: 'Europe',
      SK: 'Europe',
      SM: 'Europe',
      TR: 'Europe',
      UA: 'Europe',
      VA: 'Europe',

      // Asie
      AF: 'Asia',
      BD: 'Asia',
      BH: 'Asia',
      BN: 'Asia',
      BT: 'Asia',
      CN: 'Asia',
      ID: 'Asia',
      IL: 'Asia',
      IN: 'Asia',
      IQ: 'Asia',
      IR: 'Asia',
      JO: 'Asia',
      JP: 'Asia',
      KG: 'Asia',
      KH: 'Asia',
      KP: 'Asia',
      KR: 'Asia',
      KW: 'Asia',
      KZ: 'Asia',
      LA: 'Asia',
      LB: 'Asia',
      LK: 'Asia',
      MM: 'Asia',
      MN: 'Asia',
      MV: 'Asia',
      MY: 'Asia',
      NP: 'Asia',
      OM: 'Asia',
      PH: 'Asia',
      PK: 'Asia',
      QA: 'Asia',
      SA: 'Asia',
      SG: 'Asia',
      SY: 'Asia',
      TH: 'Asia',
      TJ: 'Asia',
      TL: 'Asia',
      TM: 'Asia',
      TW: 'Asia',
      UZ: 'Asia',
      VN: 'Asia',
      YE: 'Asia',

      // Afrique
      AO: 'Africa',
      BF: 'Africa',
      BI: 'Africa',
      BJ: 'Africa',
      BW: 'Africa',
      CD: 'Africa',
      CF: 'Africa',
      CG: 'Africa',
      CI: 'Africa',
      CM: 'Africa',
      CV: 'Africa',
      DJ: 'Africa',
      DZ: 'Africa',
      EG: 'Africa',
      EH: 'Africa',
      ER: 'Africa',
      ET: 'Africa',
      GA: 'Africa',
      GH: 'Africa',
      GM: 'Africa',
      GN: 'Africa',
      GQ: 'Africa',
      GW: 'Africa',
      KE: 'Africa',
      KM: 'Africa',
      LR: 'Africa',
      LS: 'Africa',
      LY: 'Africa',
      MA: 'Africa',
      MG: 'Africa',
      ML: 'Africa',
      MR: 'Africa',
      MU: 'Africa',
      MW: 'Africa',
      MZ: 'Africa',
      NA: 'Africa',
      NE: 'Africa',
      NG: 'Africa',
      RW: 'Africa',
      SC: 'Africa',
      SD: 'Africa',
      SL: 'Africa',
      SN: 'Africa',
      SO: 'Africa',
      SS: 'Africa',
      ST: 'Africa',
      SZ: 'Africa',
      TD: 'Africa',
      TG: 'Africa',
      TN: 'Africa',
      TZ: 'Africa',
      UG: 'Africa',
      ZA: 'Africa',
      ZM: 'Africa',
      ZW: 'Africa',

      // Amérique du Nord
      CA: 'North America',
      US: 'North America',
      MX: 'North America',
      AG: 'North America',
      BB: 'North America',
      BS: 'North America',
      BZ: 'North America',
      CR: 'North America',
      CU: 'North America',
      DM: 'North America',
      DO: 'North America',
      GD: 'North America',
      GT: 'North America',
      HN: 'North America',
      HT: 'North America',
      JM: 'North America',
      KN: 'North America',
      LC: 'North America',
      NI: 'North America',
      PA: 'North America',
      SV: 'North America',
      TT: 'North America',
      VC: 'North America',

      // Amérique du Sud
      AR: 'South America',
      BO: 'South America',
      BR: 'South America',
      CL: 'South America',
      CO: 'South America',
      EC: 'South America',
      FK: 'South America',
      GF: 'South America',
      GY: 'South America',
      PE: 'South America',
      PY: 'South America',
      SR: 'South America',
      UY: 'South America',
      VE: 'South America',

      // Océanie
      AU: 'Oceania',
      FJ: 'Oceania',
      FM: 'Oceania',
      KI: 'Oceania',
      MH: 'Oceania',
      NR: 'Oceania',
      NZ: 'Oceania',
      PG: 'Oceania',
      PW: 'Oceania',
      SB: 'Oceania',
      TO: 'Oceania',
      TV: 'Oceania',
      VU: 'Oceania',
      WS: 'Oceania',
    }

    // Grouper les pays par continent
    this.MAIN_COUNTRIES.forEach((country) => {
      const continent = continentMapping[country.code] || 'Other'
      continents[continent].push(country)
    })

    // Trier chaque continent par nom
    Object.keys(continents).forEach((continent) => {
      continents[continent as keyof typeof continents].sort((a, b) => a.name.localeCompare(b.name))
    })

    return continents
  }

  static detectUserCountry = (): string => {
    const locale = Intl.DateTimeFormat().resolvedOptions().locale
    const countryFromLocale = locale.split('-')[1]?.toUpperCase()

    if (countryFromLocale && this.MAIN_COUNTRIES.some((c) => c.code === countryFromLocale)) {
      return countryFromLocale
    }

    return ''
  }

  static searchCountries = (query: string): Country[] => {
    const lowercaseQuery = query.toLowerCase()
    return this.MAIN_COUNTRIES.filter(
      (country) =>
        country.name.toLowerCase().includes(lowercaseQuery) ||
        country.code.toLowerCase().includes(lowercaseQuery)
    )
  }

  static getCountryByCode = (code: string): Country | undefined => {
    return this.MAIN_COUNTRIES.find((country) => country.code === code)
  }
}
