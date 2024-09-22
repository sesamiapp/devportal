"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[546],{3905:(a,e,l)=>{l.d(e,{Zo:()=>A,kt:()=>s});var i=l(7294);function r(a,e,l){return e in a?Object.defineProperty(a,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):a[e]=l,a}function u(a,e){var l=Object.keys(a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),l.push.apply(l,i)}return l}function n(a){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?u(Object(l),!0).forEach((function(e){r(a,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(l)):u(Object(l)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(l,e))}))}return a}function t(a,e){if(null==a)return{};var l,i,r=function(a,e){if(null==a)return{};var l,i,r={},u=Object.keys(a);for(i=0;i<u.length;i++)l=u[i],e.indexOf(l)>=0||(r[l]=a[l]);return r}(a,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(a);for(i=0;i<u.length;i++)l=u[i],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(a,l)&&(r[l]=a[l])}return r}var c=i.createContext({}),o=function(a){var e=i.useContext(c),l=e;return a&&(l="function"==typeof a?a(e):n(n({},e),a)),l},A=function(a){var e=o(a.components);return i.createElement(c.Provider,{value:e},a.children)},b={inlineCode:"code",wrapper:function(a){var e=a.children;return i.createElement(i.Fragment,{},e)}},v=i.forwardRef((function(a,e){var l=a.components,r=a.mdxType,u=a.originalType,c=a.parentName,A=t(a,["components","mdxType","originalType","parentName"]),v=o(l),s=r,m=v["".concat(c,".").concat(s)]||v[s]||b[s]||u;return l?i.createElement(m,n(n({ref:e},A),{},{components:l})):i.createElement(m,n({ref:e},A))}));function s(a,e){var l=arguments,r=e&&e.mdxType;if("string"==typeof a||r){var u=l.length,n=new Array(u);n[0]=v;var t={};for(var c in e)hasOwnProperty.call(e,c)&&(t[c]=e[c]);t.originalType=a,t.mdxType="string"==typeof a?a:r,n[1]=t;for(var o=2;o<u;o++)n[o]=l[o];return i.createElement.apply(null,n)}return i.createElement.apply(null,l)}v.displayName="MDXCreateElement"},9356:(a,e,l)=>{l.r(e),l.d(e,{assets:()=>v,contentTitle:()=>A,default:()=>p,frontMatter:()=>o,metadata:()=>b,toc:()=>s});var i=l(7462),r=l(7294),u=l(3905);const n=[{value:"zh-CN",label:"Chinese(Simplified, China)"},{value:"da",label:"Danish(Denmark)"},{value:"de",label:"Deutsch(Germany)"},{value:"en",label:"English(United States)"},{value:"fi",label:"Finnish(Finland)"},{value:"fr",label:"French(France)"},{value:"it",label:"Italian(Italy)"},{value:"ja",label:"Japanese(Japan)"},{value:"no",label:"Norwegian(Norway)"},{value:"pl",label:"Polish(Poland)"},{value:"pt",label:"Portuguese(Brazil)"},{value:"es",label:"Spanish(Spain)"},{value:"sv",label:"Swedish(Sweden)"}],t=[{value:"Africa/Abidjan",label:"Africa/Abidjan"},{value:"Africa/Accra",label:"Africa/Accra"},{value:"Africa/Addis_Ababa",label:"Africa/Addis Ababa"},{value:"Africa/Algiers",label:"Africa/Algiers"},{value:"Africa/Asmara",label:"Africa/Asmara"},{value:"Africa/Asmera",label:"Africa/Asmera"},{value:"Africa/Bamako",label:"Africa/Bamako"},{value:"Africa/Bangui",label:"Africa/Bangui"},{value:"Africa/Banjul",label:"Africa/Banjul"},{value:"Africa/Bissau",label:"Africa/Bissau"},{value:"Africa/Blantyre",label:"Africa/Blantyre"},{value:"Africa/Brazzaville",label:"Africa/Brazzaville"},{value:"Africa/Bujumbura",label:"Africa/Bujumbura"},{value:"Africa/Cairo",label:"Africa/Cairo"},{value:"Africa/Casablanca",label:"Africa/Casablanca"},{value:"Africa/Ceuta",label:"Africa/Ceuta"},{value:"Africa/Conakry",label:"Africa/Conakry"},{value:"Africa/Dakar",label:"Africa/Dakar"},{value:"Africa/Dar_es_Salaam",label:"Africa/Dar es Salaam"},{value:"Africa/Djibouti",label:"Africa/Djibouti"},{value:"Africa/Douala",label:"Africa/Douala"},{value:"Africa/El_Aaiun",label:"Africa/El Aaiun"},{value:"Africa/Freetown",label:"Africa/Freetown"},{value:"Africa/Gaborone",label:"Africa/Gaborone"},{value:"Africa/Harare",label:"Africa/Harare"},{value:"Africa/Johannesburg",label:"Africa/Johannesburg"},{value:"Africa/Juba",label:"Africa/Juba"},{value:"Africa/Kampala",label:"Africa/Kampala"},{value:"Africa/Khartoum",label:"Africa/Khartoum"},{value:"Africa/Kigali",label:"Africa/Kigali"},{value:"Africa/Kinshasa",label:"Africa/Kinshasa"},{value:"Africa/Lagos",label:"Africa/Lagos"},{value:"Africa/Libreville",label:"Africa/Libreville"},{value:"Africa/Lome",label:"Africa/Lome"},{value:"Africa/Luanda",label:"Africa/Luanda"},{value:"Africa/Lubumbashi",label:"Africa/Lubumbashi"},{value:"Africa/Lusaka",label:"Africa/Lusaka"},{value:"Africa/Malabo",label:"Africa/Malabo"},{value:"Africa/Maputo",label:"Africa/Maputo"},{value:"Africa/Maseru",label:"Africa/Maseru"},{value:"Africa/Mbabane",label:"Africa/Mbabane"},{value:"Africa/Mogadishu",label:"Africa/Mogadishu"},{value:"Africa/Monrovia",label:"Africa/Monrovia"},{value:"Africa/Nairobi",label:"Africa/Nairobi"},{value:"Africa/Ndjamena",label:"Africa/Ndjamena"},{value:"Africa/Niamey",label:"Africa/Niamey"},{value:"Africa/Nouakchott",label:"Africa/Nouakchott"},{value:"Africa/Ouagadougou",label:"Africa/Ouagadougou"},{value:"Africa/Porto-Novo",label:"Africa/Porto-Novo"},{value:"Africa/Sao_Tome",label:"Africa/Sao Tome"},{value:"Africa/Timbuktu",label:"Africa/Timbuktu"},{value:"Africa/Tripoli",label:"Africa/Tripoli"},{value:"Africa/Tunis",label:"Africa/Tunis"},{value:"Africa/Windhoek",label:"Africa/Windhoek"},{value:"America/Adak",label:"America/Adak"},{value:"America/Anchorage",label:"America/Anchorage"},{value:"America/Anguilla",label:"America/Anguilla"},{value:"America/Antigua",label:"America/Antigua"},{value:"America/Araguaina",label:"America/Araguaina"},{value:"America/Argentina/Buenos_Aires",label:"America/Argentina/Buenos Aires"},{value:"America/Argentina/Catamarca",label:"America/Argentina/Catamarca"},{value:"America/Argentina/ComodRivadavia",label:"America/Argentina/ComodRivadavia"},{value:"America/Argentina/Cordoba",label:"America/Argentina/Cordoba"},{value:"America/Argentina/Jujuy",label:"America/Argentina/Jujuy"},{value:"America/Argentina/La_Rioja",label:"America/Argentina/La Rioja"},{value:"America/Argentina/Mendoza",label:"America/Argentina/Mendoza"},{value:"America/Argentina/Rio_Gallegos",label:"America/Argentina/Rio Gallegos"},{value:"America/Argentina/Salta",label:"America/Argentina/Salta"},{value:"America/Argentina/San_Juan",label:"America/Argentina/San Juan"},{value:"America/Argentina/San_Luis",label:"America/Argentina/San Luis"},{value:"America/Argentina/Tucuman",label:"America/Argentina/Tucuman"},{value:"America/Argentina/Ushuaia",label:"America/Argentina/Ushuaia"},{value:"America/Aruba",label:"America/Aruba"},{value:"America/Asuncion",label:"America/Asuncion"},{value:"America/Atikokan",label:"America/Atikokan"},{value:"America/Atka",label:"America/Atka"},{value:"America/Bahia",label:"America/Bahia"},{value:"America/Bahia_Banderas",label:"America/Bahia Banderas"},{value:"America/Barbados",label:"America/Barbados"},{value:"America/Belem",label:"America/Belem"},{value:"America/Belize",label:"America/Belize"},{value:"America/Blanc-Sablon",label:"America/Blanc-Sablon"},{value:"America/Boa_Vista",label:"America/Boa Vista"},{value:"America/Bogota",label:"America/Bogota"},{value:"America/Boise",label:"America/Boise"},{value:"America/Buenos_Aires",label:"America/Buenos Aires"},{value:"America/Cambridge_Bay",label:"America/Cambridge Bay"},{value:"America/Campo_Grande",label:"America/Campo Grande"},{value:"America/Cancun",label:"America/Cancun"},{value:"America/Caracas",label:"America/Caracas"},{value:"America/Catamarca",label:"America/Catamarca"},{value:"America/Cayenne",label:"America/Cayenne"},{value:"America/Cayman",label:"America/Cayman"},{value:"America/Chicago",label:"America/Chicago"},{value:"America/Chihuahua",label:"America/Chihuahua"},{value:"America/Coral_Harbour",label:"America/Coral Harbour"},{value:"America/Cordoba",label:"America/Cordoba"},{value:"America/Costa_Rica",label:"America/Costa Rica"},{value:"America/Creston",label:"America/Creston"},{value:"America/Cuiaba",label:"America/Cuiaba"},{value:"America/Curacao",label:"America/Curacao"},{value:"America/Danmarkshavn",label:"America/Danmarkshavn"},{value:"America/Dawson",label:"America/Dawson"},{value:"America/Dawson_Creek",label:"America/Dawson Creek"},{value:"America/Denver",label:"America/Denver"},{value:"America/Detroit",label:"America/Detroit"},{value:"America/Dominica",label:"America/Dominica"},{value:"America/Edmonton",label:"America/Edmonton"},{value:"America/Eirunepe",label:"America/Eirunepe"},{value:"America/El_Salvador",label:"America/El Salvador"},{value:"America/Ensenada",label:"America/Ensenada"},{value:"America/Fort_Nelson",label:"America/Fort Nelson"},{value:"America/Fort_Wayne",label:"America/Fort Wayne"},{value:"America/Fortaleza",label:"America/Fortaleza"},{value:"America/Glace_Bay",label:"America/Glace Bay"},{value:"America/Godthab",label:"America/Godthab"},{value:"America/Goose_Bay",label:"America/Goose Bay"},{value:"America/Grand_Turk",label:"America/Grand Turk"},{value:"America/Grenada",label:"America/Grenada"},{value:"America/Guadeloupe",label:"America/Guadeloupe"},{value:"America/Guatemala",label:"America/Guatemala"},{value:"America/Guayaquil",label:"America/Guayaquil"},{value:"America/Guyana",label:"America/Guyana"},{value:"America/Halifax",label:"America/Halifax"},{value:"America/Havana",label:"America/Havana"},{value:"America/Hermosillo",label:"America/Hermosillo"},{value:"America/Indiana/Indianapolis",label:"America/Indiana/Indianapolis"},{value:"America/Indiana/Knox",label:"America/Indiana/Knox"},{value:"America/Indiana/Marengo",label:"America/Indiana/Marengo"},{value:"America/Indiana/Petersburg",label:"America/Indiana/Petersburg"},{value:"America/Indiana/Tell_City",label:"America/Indiana/Tell City"},{value:"America/Indiana/Vevay",label:"America/Indiana/Vevay"},{value:"America/Indiana/Vincennes",label:"America/Indiana/Vincennes"},{value:"America/Indiana/Winamac",label:"America/Indiana/Winamac"},{value:"America/Indianapolis",label:"America/Indianapolis"},{value:"America/Inuvik",label:"America/Inuvik"},{value:"America/Iqaluit",label:"America/Iqaluit"},{value:"America/Jamaica",label:"America/Jamaica"},{value:"America/Jujuy",label:"America/Jujuy"},{value:"America/Juneau",label:"America/Juneau"},{value:"America/Kentucky/Louisville",label:"America/Kentucky/Louisville"},{value:"America/Kentucky/Monticello",label:"America/Kentucky/Monticello"},{value:"America/Knox_IN",label:"America/Knox IN"},{value:"America/Kralendijk",label:"America/Kralendijk"},{value:"America/La_Paz",label:"America/La Paz"},{value:"America/Lima",label:"America/Lima"},{value:"America/Los_Angeles",label:"America/Los Angeles"},{value:"America/Louisville",label:"America/Louisville"},{value:"America/Lower_Princes",label:"America/Lower Princes"},{value:"America/Maceio",label:"America/Maceio"},{value:"America/Managua",label:"America/Managua"},{value:"America/Manaus",label:"America/Manaus"},{value:"America/Marigot",label:"America/Marigot"},{value:"America/Martinique",label:"America/Martinique"},{value:"America/Matamoros",label:"America/Matamoros"},{value:"America/Mazatlan",label:"America/Mazatlan"},{value:"America/Mendoza",label:"America/Mendoza"},{value:"America/Menominee",label:"America/Menominee"},{value:"America/Merida",label:"America/Merida"},{value:"America/Metlakatla",label:"America/Metlakatla"},{value:"America/Mexico_City",label:"America/Mexico City"},{value:"America/Miquelon",label:"America/Miquelon"},{value:"America/Moncton",label:"America/Moncton"},{value:"America/Monterrey",label:"America/Monterrey"},{value:"America/Montevideo",label:"America/Montevideo"},{value:"America/Montreal",label:"America/Montreal"},{value:"America/Montserrat",label:"America/Montserrat"},{value:"America/Nassau",label:"America/Nassau"},{value:"America/New_York",label:"America/New York"},{value:"America/Nipigon",label:"America/Nipigon"},{value:"America/Nome",label:"America/Nome"},{value:"America/Noronha",label:"America/Noronha"},{value:"America/North_Dakota/Beulah",label:"America/North Dakota/Beulah"},{value:"America/North_Dakota/Center",label:"America/North Dakota/Center"},{value:"America/North_Dakota/New_Salem",label:"America/North Dakota/New Salem"},{value:"America/Ojinaga",label:"America/Ojinaga"},{value:"America/Panama",label:"America/Panama"},{value:"America/Pangnirtung",label:"America/Pangnirtung"},{value:"America/Paramaribo",label:"America/Paramaribo"},{value:"America/Phoenix",label:"America/Phoenix"},{value:"America/Port-au-Prince",label:"America/Port-au-Prince"},{value:"America/Port_of_Spain",label:"America/Port of Spain"},{value:"America/Porto_Acre",label:"America/Porto Acre"},{value:"America/Porto_Velho",label:"America/Porto Velho"},{value:"America/Puerto_Rico",label:"America/Puerto Rico"},{value:"America/Punta_Arenas",label:"America/Punta Arenas"},{value:"America/Rainy_River",label:"America/Rainy River"},{value:"America/Rankin_Inlet",label:"America/Rankin Inlet"},{value:"America/Recife",label:"America/Recife"},{value:"America/Regina",label:"America/Regina"},{value:"America/Resolute",label:"America/Resolute"},{value:"America/Rio_Branco",label:"America/Rio Branco"},{value:"America/Rosario",label:"America/Rosario"},{value:"America/Santa_Isabel",label:"America/Santa Isabel"},{value:"America/Santarem",label:"America/Santarem"},{value:"America/Santiago",label:"America/Santiago"},{value:"America/Santo_Domingo",label:"America/Santo Domingo"},{value:"America/Sao_Paulo",label:"America/Sao Paulo"},{value:"America/Scoresbysund",label:"America/Scoresbysund"},{value:"America/Shiprock",label:"America/Shiprock"},{value:"America/Sitka",label:"America/Sitka"},{value:"America/St_Barthelemy",label:"America/St Barthelemy"},{value:"America/St_Johns",label:"America/St Johns"},{value:"America/St_Kitts",label:"America/St Kitts"},{value:"America/St_Lucia",label:"America/St Lucia"},{value:"America/St_Thomas",label:"America/St Thomas"},{value:"America/St_Vincent",label:"America/St Vincent"},{value:"America/Swift_Current",label:"America/Swift Current"},{value:"America/Tegucigalpa",label:"America/Tegucigalpa"},{value:"America/Thule",label:"America/Thule"},{value:"America/Thunder_Bay",label:"America/Thunder Bay"},{value:"America/Tijuana",label:"America/Tijuana"},{value:"America/Toronto",label:"America/Toronto"},{value:"America/Tortola",label:"America/Tortola"},{value:"America/Vancouver",label:"America/Vancouver"},{value:"America/Virgin",label:"America/Virgin"},{value:"America/Whitehorse",label:"America/Whitehorse"},{value:"America/Winnipeg",label:"America/Winnipeg"},{value:"America/Yakutat",label:"America/Yakutat"},{value:"America/Yellowknife",label:"America/Yellowknife"},{value:"Antarctica/Casey",label:"Antarctica/Casey"},{value:"Antarctica/Davis",label:"Antarctica/Davis"},{value:"Antarctica/DumontDUrville",label:"Antarctica/DumontDUrville"},{value:"Antarctica/Macquarie",label:"Antarctica/Macquarie"},{value:"Antarctica/Mawson",label:"Antarctica/Mawson"},{value:"Antarctica/McMurdo",label:"Antarctica/McMurdo"},{value:"Antarctica/Palmer",label:"Antarctica/Palmer"},{value:"Antarctica/Rothera",label:"Antarctica/Rothera"},{value:"Antarctica/South_Pole",label:"Antarctica/South Pole"},{value:"Antarctica/Syowa",label:"Antarctica/Syowa"},{value:"Antarctica/Troll",label:"Antarctica/Troll"},{value:"Antarctica/Vostok",label:"Antarctica/Vostok"},{value:"Arctic/Longyearbyen",label:"Arctic/Longyearbyen"},{value:"Asia/Aden",label:"Asia/Aden"},{value:"Asia/Almaty",label:"Asia/Almaty"},{value:"Asia/Amman",label:"Asia/Amman"},{value:"Asia/Anadyr",label:"Asia/Anadyr"},{value:"Asia/Aqtau",label:"Asia/Aqtau"},{value:"Asia/Aqtobe",label:"Asia/Aqtobe"},{value:"Asia/Ashgabat",label:"Asia/Ashgabat"},{value:"Asia/Ashkhabad",label:"Asia/Ashkhabad"},{value:"Asia/Atyrau",label:"Asia/Atyrau"},{value:"Asia/Baghdad",label:"Asia/Baghdad"},{value:"Asia/Bahrain",label:"Asia/Bahrain"},{value:"Asia/Baku",label:"Asia/Baku"},{value:"Asia/Bangkok",label:"Asia/Bangkok"},{value:"Asia/Barnaul",label:"Asia/Barnaul"},{value:"Asia/Beirut",label:"Asia/Beirut"},{value:"Asia/Bishkek",label:"Asia/Bishkek"},{value:"Asia/Brunei",label:"Asia/Brunei"},{value:"Asia/Calcutta",label:"Asia/Calcutta"},{value:"Asia/Chita",label:"Asia/Chita"},{value:"Asia/Choibalsan",label:"Asia/Choibalsan"},{value:"Asia/Chongqing",label:"Asia/Chongqing"},{value:"Asia/Chungking",label:"Asia/Chungking"},{value:"Asia/Colombo",label:"Asia/Colombo"},{value:"Asia/Dacca",label:"Asia/Dacca"},{value:"Asia/Damascus",label:"Asia/Damascus"},{value:"Asia/Dhaka",label:"Asia/Dhaka"},{value:"Asia/Dili",label:"Asia/Dili"},{value:"Asia/Dubai",label:"Asia/Dubai"},{value:"Asia/Dushanbe",label:"Asia/Dushanbe"},{value:"Asia/Famagusta",label:"Asia/Famagusta"},{value:"Asia/Gaza",label:"Asia/Gaza"},{value:"Asia/Harbin",label:"Asia/Harbin"},{value:"Asia/Hebron",label:"Asia/Hebron"},{value:"Asia/Ho_Chi_Minh",label:"Asia/Ho Chi Minh"},{value:"Asia/Hong_Kong",label:"Asia/Hong Kong"},{value:"Asia/Hovd",label:"Asia/Hovd"},{value:"Asia/Irkutsk",label:"Asia/Irkutsk"},{value:"Asia/Istanbul",label:"Asia/Istanbul"},{value:"Asia/Jakarta",label:"Asia/Jakarta"},{value:"Asia/Jayapura",label:"Asia/Jayapura"},{value:"Asia/Jerusalem",label:"Asia/Jerusalem"},{value:"Asia/Kabul",label:"Asia/Kabul"},{value:"Asia/Kamchatka",label:"Asia/Kamchatka"},{value:"Asia/Karachi",label:"Asia/Karachi"},{value:"Asia/Kashgar",label:"Asia/Kashgar"},{value:"Asia/Kathmandu",label:"Asia/Kathmandu"},{value:"Asia/Katmandu",label:"Asia/Katmandu"},{value:"Asia/Khandyga",label:"Asia/Khandyga"},{value:"Asia/Kolkata",label:"Asia/Kolkata"},{value:"Asia/Krasnoyarsk",label:"Asia/Krasnoyarsk"},{value:"Asia/Kuala_Lumpur",label:"Asia/Kuala Lumpur"},{value:"Asia/Kuching",label:"Asia/Kuching"},{value:"Asia/Kuwait",label:"Asia/Kuwait"},{value:"Asia/Macao",label:"Asia/Macao"},{value:"Asia/Macau",label:"Asia/Macau"},{value:"Asia/Magadan",label:"Asia/Magadan"},{value:"Asia/Makassar",label:"Asia/Makassar"},{value:"Asia/Manila",label:"Asia/Manila"},{value:"Asia/Muscat",label:"Asia/Muscat"},{value:"Asia/Nicosia",label:"Asia/Nicosia"},{value:"Asia/Novokuznetsk",label:"Asia/Novokuznetsk"},{value:"Asia/Novosibirsk",label:"Asia/Novosibirsk"},{value:"Asia/Omsk",label:"Asia/Omsk"},{value:"Asia/Oral",label:"Asia/Oral"},{value:"Asia/Phnom_Penh",label:"Asia/Phnom Penh"},{value:"Asia/Pontianak",label:"Asia/Pontianak"},{value:"Asia/Pyongyang",label:"Asia/Pyongyang"},{value:"Asia/Qatar",label:"Asia/Qatar"},{value:"Asia/Qyzylorda",label:"Asia/Qyzylorda"},{value:"Asia/Rangoon",label:"Asia/Rangoon"},{value:"Asia/Riyadh",label:"Asia/Riyadh"},{value:"Asia/Saigon",label:"Asia/Saigon"},{value:"Asia/Sakhalin",label:"Asia/Sakhalin"},{value:"Asia/Samarkand",label:"Asia/Samarkand"},{value:"Asia/Seoul",label:"Asia/Seoul"},{value:"Asia/Shanghai",label:"Asia/Shanghai"},{value:"Asia/Singapore",label:"Asia/Singapore"},{value:"Asia/Srednekolymsk",label:"Asia/Srednekolymsk"},{value:"Asia/Taipei",label:"Asia/Taipei"},{value:"Asia/Tashkent",label:"Asia/Tashkent"},{value:"Asia/Tbilisi",label:"Asia/Tbilisi"},{value:"Asia/Tehran",label:"Asia/Tehran"},{value:"Asia/Tel_Aviv",label:"Asia/Tel Aviv"},{value:"Asia/Thimbu",label:"Asia/Thimbu"},{value:"Asia/Thimphu",label:"Asia/Thimphu"},{value:"Asia/Tokyo",label:"Asia/Tokyo"},{value:"Asia/Tomsk",label:"Asia/Tomsk"},{value:"Asia/Ujung_Pandang",label:"Asia/Ujung Pandang"},{value:"Asia/Ulaanbaatar",label:"Asia/Ulaanbaatar"},{value:"Asia/Ulan_Bator",label:"Asia/Ulan Bator"},{value:"Asia/Urumqi",label:"Asia/Urumqi"},{value:"Asia/Ust-Nera",label:"Asia/Ust-Nera"},{value:"Asia/Vientiane",label:"Asia/Vientiane"},{value:"Asia/Vladivostok",label:"Asia/Vladivostok"},{value:"Asia/Yakutsk",label:"Asia/Yakutsk"},{value:"Asia/Yangon",label:"Asia/Yangon"},{value:"Asia/Yekaterinburg",label:"Asia/Yekaterinburg"},{value:"Asia/Yerevan",label:"Asia/Yerevan"},{value:"Atlantic/Azores",label:"Atlantic/Azores"},{value:"Atlantic/Bermuda",label:"Atlantic/Bermuda"},{value:"Atlantic/Canary",label:"Atlantic/Canary"},{value:"Atlantic/Cape_Verde",label:"Atlantic/Cape Verde"},{value:"Atlantic/Faeroe",label:"Atlantic/Faeroe"},{value:"Atlantic/Faroe",label:"Atlantic/Faroe"},{value:"Atlantic/Jan_Mayen",label:"Atlantic/Jan Mayen"},{value:"Atlantic/Madeira",label:"Atlantic/Madeira"},{value:"Atlantic/Reykjavik",label:"Atlantic/Reykjavik"},{value:"Atlantic/South_Georgia",label:"Atlantic/South Georgia"},{value:"Atlantic/St_Helena",label:"Atlantic/St Helena"},{value:"Atlantic/Stanley",label:"Atlantic/Stanley"},{value:"Australia/ACT",label:"Australia/ACT"},{value:"Australia/Adelaide",label:"Australia/Adelaide"},{value:"Australia/Brisbane",label:"Australia/Brisbane"},{value:"Australia/Broken_Hill",label:"Australia/Broken Hill"},{value:"Australia/Canberra",label:"Australia/Canberra"},{value:"Australia/Currie",label:"Australia/Currie"},{value:"Australia/Darwin",label:"Australia/Darwin"},{value:"Australia/Eucla",label:"Australia/Eucla"},{value:"Australia/Hobart",label:"Australia/Hobart"},{value:"Australia/LHI",label:"Australia/LHI"},{value:"Australia/Lindeman",label:"Australia/Lindeman"},{value:"Australia/Lord_Howe",label:"Australia/Lord Howe"},{value:"Australia/Melbourne",label:"Australia/Melbourne"},{value:"Australia/NSW",label:"Australia/NSW"},{value:"Australia/North",label:"Australia/North"},{value:"Australia/Perth",label:"Australia/Perth"},{value:"Australia/Queensland",label:"Australia/Queensland"},{value:"Australia/South",label:"Australia/South"},{value:"Australia/Sydney",label:"Australia/Sydney"},{value:"Australia/Tasmania",label:"Australia/Tasmania"},{value:"Australia/Victoria",label:"Australia/Victoria"},{value:"Australia/West",label:"Australia/West"},{value:"Australia/Yancowinna",label:"Australia/Yancowinna"},{value:"Brazil/Acre",label:"Brazil/Acre"},{value:"Brazil/DeNoronha",label:"Brazil/DeNoronha"},{value:"Brazil/East",label:"Brazil/East"},{value:"Brazil/West",label:"Brazil/West"},{value:"CET",label:"CET"},{value:"CST6CDT",label:"CST6CDT"},{value:"Canada/Atlantic",label:"Canada/Atlantic"},{value:"Canada/Central",label:"Canada/Central"},{value:"Canada/Eastern",label:"Canada/Eastern"},{value:"Canada/Mountain",label:"Canada/Mountain"},{value:"Canada/Newfoundland",label:"Canada/Newfoundland"},{value:"Canada/Pacific",label:"Canada/Pacific"},{value:"Canada/Saskatchewan",label:"Canada/Saskatchewan"},{value:"Canada/Yukon",label:"Canada/Yukon"},{value:"Chile/Continental",label:"Chile/Continental"},{value:"Chile/EasterIsland",label:"Chile/EasterIsland"},{value:"Cuba",label:"Cuba"},{value:"EET",label:"EET"},{value:"EST",label:"EST"},{value:"EST5EDT",label:"EST5EDT"},{value:"Egypt",label:"Egypt"},{value:"Eire",label:"Eire"},{value:"Etc/GMT",label:"Etc/GMT"},{value:"Etc/GMT+0",label:"Etc/GMT+0"},{value:"Etc/GMT+1",label:"Etc/GMT+1"},{value:"Etc/GMT+10",label:"Etc/GMT+10"},{value:"Etc/GMT+11",label:"Etc/GMT+11"},{value:"Etc/GMT+12",label:"Etc/GMT+12"},{value:"Etc/GMT+2",label:"Etc/GMT+2"},{value:"Etc/GMT+3",label:"Etc/GMT+3"},{value:"Etc/GMT+4",label:"Etc/GMT+4"},{value:"Etc/GMT+5",label:"Etc/GMT+5"},{value:"Etc/GMT+6",label:"Etc/GMT+6"},{value:"Etc/GMT+7",label:"Etc/GMT+7"},{value:"Etc/GMT+8",label:"Etc/GMT+8"},{value:"Etc/GMT+9",label:"Etc/GMT+9"},{value:"Etc/GMT-0",label:"Etc/GMT-0"},{value:"Etc/GMT-1",label:"Etc/GMT-1"},{value:"Etc/GMT-10",label:"Etc/GMT-10"},{value:"Etc/GMT-11",label:"Etc/GMT-11"},{value:"Etc/GMT-12",label:"Etc/GMT-12"},{value:"Etc/GMT-13",label:"Etc/GMT-13"},{value:"Etc/GMT-14",label:"Etc/GMT-14"},{value:"Etc/GMT-2",label:"Etc/GMT-2"},{value:"Etc/GMT-3",label:"Etc/GMT-3"},{value:"Etc/GMT-4",label:"Etc/GMT-4"},{value:"Etc/GMT-5",label:"Etc/GMT-5"},{value:"Etc/GMT-6",label:"Etc/GMT-6"},{value:"Etc/GMT-7",label:"Etc/GMT-7"},{value:"Etc/GMT-8",label:"Etc/GMT-8"},{value:"Etc/GMT-9",label:"Etc/GMT-9"},{value:"Etc/GMT0",label:"Etc/GMT0"},{value:"Etc/Greenwich",label:"Etc/Greenwich"},{value:"Etc/UCT",label:"Etc/UCT"},{value:"Etc/UTC",label:"Etc/UTC"},{value:"Etc/Universal",label:"Etc/Universal"},{value:"Etc/Zulu",label:"Etc/Zulu"},{value:"Europe/Amsterdam",label:"Europe/Amsterdam"},{value:"Europe/Andorra",label:"Europe/Andorra"},{value:"Europe/Astrakhan",label:"Europe/Astrakhan"},{value:"Europe/Athens",label:"Europe/Athens"},{value:"Europe/Belfast",label:"Europe/Belfast"},{value:"Europe/Belgrade",label:"Europe/Belgrade"},{value:"Europe/Berlin",label:"Europe/Berlin"},{value:"Europe/Bratislava",label:"Europe/Bratislava"},{value:"Europe/Brussels",label:"Europe/Brussels"},{value:"Europe/Bucharest",label:"Europe/Bucharest"},{value:"Europe/Budapest",label:"Europe/Budapest"},{value:"Europe/Busingen",label:"Europe/Busingen"},{value:"Europe/Chisinau",label:"Europe/Chisinau"},{value:"Europe/Copenhagen",label:"Europe/Copenhagen"},{value:"Europe/Dublin",label:"Europe/Dublin"},{value:"Europe/Gibraltar",label:"Europe/Gibraltar"},{value:"Europe/Guernsey",label:"Europe/Guernsey"},{value:"Europe/Helsinki",label:"Europe/Helsinki"},{value:"Europe/Isle_of_Man",label:"Europe/Isle of Man"},{value:"Europe/Istanbul",label:"Europe/Istanbul"},{value:"Europe/Jersey",label:"Europe/Jersey"},{value:"Europe/Kaliningrad",label:"Europe/Kaliningrad"},{value:"Europe/Kiev",label:"Europe/Kiev"},{value:"Europe/Kirov",label:"Europe/Kirov"},{value:"Europe/Lisbon",label:"Europe/Lisbon"},{value:"Europe/Ljubljana",label:"Europe/Ljubljana"},{value:"Europe/London",label:"Europe/London"},{value:"Europe/Luxembourg",label:"Europe/Luxembourg"},{value:"Europe/Madrid",label:"Europe/Madrid"},{value:"Europe/Malta",label:"Europe/Malta"},{value:"Europe/Mariehamn",label:"Europe/Mariehamn"},{value:"Europe/Minsk",label:"Europe/Minsk"},{value:"Europe/Monaco",label:"Europe/Monaco"},{value:"Europe/Moscow",label:"Europe/Moscow"},{value:"Europe/Nicosia",label:"Europe/Nicosia"},{value:"Europe/Oslo",label:"Europe/Oslo"},{value:"Europe/Paris",label:"Europe/Paris"},{value:"Europe/Podgorica",label:"Europe/Podgorica"},{value:"Europe/Prague",label:"Europe/Prague"},{value:"Europe/Riga",label:"Europe/Riga"},{value:"Europe/Rome",label:"Europe/Rome"},{value:"Europe/Samara",label:"Europe/Samara"},{value:"Europe/San_Marino",label:"Europe/San Marino"},{value:"Europe/Sarajevo",label:"Europe/Sarajevo"},{value:"Europe/Saratov",label:"Europe/Saratov"},{value:"Europe/Simferopol",label:"Europe/Simferopol"},{value:"Europe/Skopje",label:"Europe/Skopje"},{value:"Europe/Sofia",label:"Europe/Sofia"},{value:"Europe/Stockholm",label:"Europe/Stockholm"},{value:"Europe/Tallinn",label:"Europe/Tallinn"},{value:"Europe/Tirane",label:"Europe/Tirane"},{value:"Europe/Tiraspol",label:"Europe/Tiraspol"},{value:"Europe/Ulyanovsk",label:"Europe/Ulyanovsk"},{value:"Europe/Uzhgorod",label:"Europe/Uzhgorod"},{value:"Europe/Vaduz",label:"Europe/Vaduz"},{value:"Europe/Vatican",label:"Europe/Vatican"},{value:"Europe/Vienna",label:"Europe/Vienna"},{value:"Europe/Vilnius",label:"Europe/Vilnius"},{value:"Europe/Volgograd",label:"Europe/Volgograd"},{value:"Europe/Warsaw",label:"Europe/Warsaw"},{value:"Europe/Zagreb",label:"Europe/Zagreb"},{value:"Europe/Zaporozhye",label:"Europe/Zaporozhye"},{value:"Europe/Zurich",label:"Europe/Zurich"},{value:"GB",label:"GB"},{value:"GB-Eire",label:"GB-Eire"},{value:"GMT",label:"GMT"},{value:"GMT+0",label:"GMT+0"},{value:"GMT-0",label:"GMT-0"},{value:"GMT0",label:"GMT0"},{value:"Greenwich",label:"Greenwich"},{value:"HST",label:"HST"},{value:"Hongkong",label:"Hongkong"},{value:"Iceland",label:"Iceland"},{value:"Indian/Antananarivo",label:"Indian/Antananarivo"},{value:"Indian/Chagos",label:"Indian/Chagos"},{value:"Indian/Christmas",label:"Indian/Christmas"},{value:"Indian/Cocos",label:"Indian/Cocos"},{value:"Indian/Comoro",label:"Indian/Comoro"},{value:"Indian/Kerguelen",label:"Indian/Kerguelen"},{value:"Indian/Mahe",label:"Indian/Mahe"},{value:"Indian/Maldives",label:"Indian/Maldives"},{value:"Indian/Mauritius",label:"Indian/Mauritius"},{value:"Indian/Mayotte",label:"Indian/Mayotte"},{value:"Indian/Reunion",label:"Indian/Reunion"},{value:"Iran",label:"Iran"},{value:"Israel",label:"Israel"},{value:"Jamaica",label:"Jamaica"},{value:"Japan",label:"Japan"},{value:"Kwajalein",label:"Kwajalein"},{value:"Libya",label:"Libya"},{value:"MET",label:"MET"},{value:"MST",label:"MST"},{value:"MST7MDT",label:"MST7MDT"},{value:"Mexico/BajaNorte",label:"Mexico/BajaNorte"},{value:"Mexico/BajaSur",label:"Mexico/BajaSur"},{value:"Mexico/General",label:"Mexico/General"},{value:"NZ",label:"NZ"},{value:"NZ-CHAT",label:"NZ-CHAT"},{value:"Navajo",label:"Navajo"},{value:"PRC",label:"PRC"},{value:"PST8PDT",label:"PST8PDT"},{value:"Pacific/Apia",label:"Pacific/Apia"},{value:"Pacific/Auckland",label:"Pacific/Auckland"},{value:"Pacific/Bougainville",label:"Pacific/Bougainville"},{value:"Pacific/Chatham",label:"Pacific/Chatham"},{value:"Pacific/Chuuk",label:"Pacific/Chuuk"},{value:"Pacific/Easter",label:"Pacific/Easter"},{value:"Pacific/Efate",label:"Pacific/Efate"},{value:"Pacific/Enderbury",label:"Pacific/Enderbury"},{value:"Pacific/Fakaofo",label:"Pacific/Fakaofo"},{value:"Pacific/Fiji",label:"Pacific/Fiji"},{value:"Pacific/Funafuti",label:"Pacific/Funafuti"},{value:"Pacific/Galapagos",label:"Pacific/Galapagos"},{value:"Pacific/Gambier",label:"Pacific/Gambier"},{value:"Pacific/Guadalcanal",label:"Pacific/Guadalcanal"},{value:"Pacific/Guam",label:"Pacific/Guam"},{value:"Pacific/Honolulu",label:"Pacific/Honolulu"},{value:"Pacific/Johnston",label:"Pacific/Johnston"},{value:"Pacific/Kiritimati",label:"Pacific/Kiritimati"},{value:"Pacific/Kosrae",label:"Pacific/Kosrae"},{value:"Pacific/Kwajalein",label:"Pacific/Kwajalein"},{value:"Pacific/Majuro",label:"Pacific/Majuro"},{value:"Pacific/Marquesas",label:"Pacific/Marquesas"},{value:"Pacific/Midway",label:"Pacific/Midway"},{value:"Pacific/Nauru",label:"Pacific/Nauru"},{value:"Pacific/Niue",label:"Pacific/Niue"},{value:"Pacific/Norfolk",label:"Pacific/Norfolk"},{value:"Pacific/Noumea",label:"Pacific/Noumea"},{value:"Pacific/Pago_Pago",label:"Pacific/Pago Pago"},{value:"Pacific/Palau",label:"Pacific/Palau"},{value:"Pacific/Pitcairn",label:"Pacific/Pitcairn"},{value:"Pacific/Pohnpei",label:"Pacific/Pohnpei"},{value:"Pacific/Ponape",label:"Pacific/Ponape"},{value:"Pacific/Port_Moresby",label:"Pacific/Port Moresby"},{value:"Pacific/Rarotonga",label:"Pacific/Rarotonga"},{value:"Pacific/Saipan",label:"Pacific/Saipan"},{value:"Pacific/Samoa",label:"Pacific/Samoa"},{value:"Pacific/Tahiti",label:"Pacific/Tahiti"},{value:"Pacific/Tarawa",label:"Pacific/Tarawa"},{value:"Pacific/Tongatapu",label:"Pacific/Tongatapu"},{value:"Pacific/Truk",label:"Pacific/Truk"},{value:"Pacific/Wake",label:"Pacific/Wake"},{value:"Pacific/Wallis",label:"Pacific/Wallis"},{value:"Pacific/Yap",label:"Pacific/Yap"},{value:"Poland",label:"Poland"},{value:"Portugal",label:"Portugal"},{value:"ROC",label:"ROC"},{value:"ROK",label:"ROK"},{value:"Singapore",label:"Singapore"},{value:"Turkey",label:"Turkey"},{value:"UCT",label:"UCT"},{value:"US/Alaska",label:"US/Alaska"},{value:"US/Aleutian",label:"US/Aleutian"},{value:"US/Arizona",label:"US/Arizona"},{value:"US/Central",label:"US/Central"},{value:"US/East-Indiana",label:"US/East-Indiana"},{value:"US/Eastern",label:"US/Eastern"},{value:"US/Hawaii",label:"US/Hawaii"},{value:"US/Indiana-Starke",label:"US/Indiana-Starke"},{value:"US/Michigan",label:"US/Michigan"},{value:"US/Mountain",label:"US/Mountain"},{value:"US/Pacific",label:"US/Pacific"},{value:"US/Pacific-New",label:"US/Pacific-New"},{value:"US/Samoa",label:"US/Samoa"},{value:"UTC",label:"UTC"},{value:"Universal",label:"Universal"},{value:"W-SU",label:"W-SU"},{value:"WET",label:"WET"},{value:"Zulu",label:"Zulu"}],c=()=>{const[a,e]=(0,r.useState)("76573311249"),[l,i]=(0,r.useState)("8689310236945"),[u,c]=(0,r.useState)(null),[o,A]=(0,r.useState)("1"),[b,v]=(0,r.useState)(""),[s,m]=(0,r.useState)("en"),[p,d]=(0,r.useState)(null),[E,f]=(0,r.useState)(!1),[g,h]=(0,r.useState)(!1),[M,C]=(0,r.useState)(!1),[k,S]=(0,r.useState)(null),[T,P]=(0,r.useState)(300),[y,G]=(0,r.useState)(50),[B,N]=(0,r.useState)("#FFF"),[w,I]=(0,r.useState)("#14146d"),[_,D]=(0,r.useState)(18),[j,K]=(0,r.useState)(1),[x,U]=(0,r.useState)("#0f0f30"),[R,L]=(0,r.useState)(12),[V,z]=(0,r.useState)("flex-start"),[H,O]=(0,r.useState)(!0);(0,r.useEffect)((()=>{O(!1)}),[k,T,y,B,w,_,j,R,x,V]),(0,r.useEffect)((()=>{!H&&O(!0)}),[H]);const J={"shop-id":a,...null!==l&&{"product-id":l},...null!==u&&{"variant-id":u},..."0"!==o&&{quantity:o},...""!==b&&{timezone:b},...null!==s&&{locale:s},...null!==p&&{"skip-monthly-calendar":p},...!0===E&&{"auto-add-to-cart":""},...!0===g&&{"skip-cart":""},...!0===M&&{"hide-any-available":""},...null!==k&&{"button-label":k},"button-customized-settings":encodeURIComponent(JSON.stringify({width:`${T}px`,height:`${y}px`,color:B,color_background:w,font_size:_,border_width:j,border_radius:R,border_color:x,alignment:V}))};return r.createElement("div",{className:"contentWrapper"},r.createElement("div",{className:"inputsWrapper"},r.createElement("div",{className:"leftColumn"},r.createElement("div",{className:"inputContainer"},r.createElement("a",null,"Shop ID:"),r.createElement("input",{defaultValue:a,onChange:a=>e(a.target.value)})),r.createElement("div",{className:"inputContainer"},r.createElement("a",null,"Product ID:"),r.createElement("input",{defaultValue:null===l?"":l,onChange:a=>i(""===a.target.value?null:a.target.value)})),r.createElement("div",{className:"inputContainer"},r.createElement("a",null,"Variant ID:"),r.createElement("input",{defaultValue:null===u?"":u,onChange:a=>c(""===a.target.value?null:a.target.value)})),r.createElement("div",{className:"inputContainer"},r.createElement("a",null,"Quantity:"),r.createElement("input",{type:"number",min:0,defaultValue:o,onChange:a=>A(a.target.value)})),r.createElement("div",{className:"inputContainer"},r.createElement("a",null,"Timezone:"),r.createElement("select",{defaultValue:b,onChange:a=>v(a.target.value)},r.createElement("option",{key:"",value:""},"Auto"),t.map((a=>r.createElement("option",{key:a.value,value:a.value},a.label))))),r.createElement("div",{className:"inputContainer"},r.createElement("a",null,"Locale:"),r.createElement("select",{defaultValue:null===s?"none":s,onChange:a=>m("none"===a.target.value?null:a.target.value)},r.createElement("option",{value:"none"},"Do not specify"),n.map((a=>r.createElement("option",{key:a.value,value:a.value},a.label))))),r.createElement("div",{className:"inputContainer"},r.createElement("a",null,"Skip Monthly Calendar:"),r.createElement("select",{defaultValue:null===p?"none":!0===p?"true":"false",onChange:a=>d("none"===a.target.value?null:"true"===a.target.value)},r.createElement("option",{value:"true"},"Skip"),r.createElement("option",{value:"false"},"Do Not Skip"),r.createElement("option",{value:"none"},"Auto(Based on Experience)"))),r.createElement("div",{className:"checkboxWrapper"},r.createElement("input",{type:"checkbox",checked:E,onChange:a=>f(a.target.checked)}),r.createElement("a",null,"Auto Add To Cart")),r.createElement("div",{className:"checkboxWrapper"},r.createElement("input",{type:"checkbox",checked:g,onChange:a=>h(a.target.checked)}),r.createElement("a",null,"Skip Cart")),r.createElement("div",{className:"checkboxWrapper"},r.createElement("input",{type:"checkbox",checked:M,onChange:a=>C(a.target.checked)}),r.createElement("a",null,"Hide Any Available"))),r.createElement("div",{className:"rightColumn"},r.createElement("div",{className:"inputContainer"},r.createElement("a",null,"Label:"),r.createElement("input",{defaultValue:null===k?"":k,onChange:a=>S(""===a.target.value?null:a.target.value)})),r.createElement("div",{className:"widthHeightWrapper"},r.createElement("div",{className:"inputContainer"},r.createElement("a",null,"Width(px):"),r.createElement("input",{type:"number",min:0,defaultValue:T,onChange:a=>P(a.target.valueAsNumber)})),r.createElement("div",{className:"inputContainer"},r.createElement("a",null,"Height(px):"),r.createElement("input",{type:"number",min:0,defaultValue:y,onChange:a=>G(a.target.valueAsNumber)}))),r.createElement("div",{className:"inputContainer"},r.createElement("a",null,"Color:"),r.createElement("input",{defaultValue:B,onChange:a=>N(a.target.value)})),r.createElement("div",{className:"inputContainer"},r.createElement("a",null,"Background Color:"),r.createElement("input",{defaultValue:w,onChange:a=>I(a.target.value)})),r.createElement("div",{className:"inputContainer"},r.createElement("a",null,"Font Size(px):"),r.createElement("input",{type:"number",min:0,defaultValue:_,onChange:a=>D(a.target.valueAsNumber)})),r.createElement("div",{className:"inputContainer"},r.createElement("a",null,"Border Width(px):"),r.createElement("input",{type:"number",min:0,defaultValue:j,onChange:a=>K(a.target.valueAsNumber)})),r.createElement("div",{className:"inputContainer"},r.createElement("a",null,"Border Radius(px):"),r.createElement("input",{defaultValue:R,min:0,onChange:a=>L(a.target.valueAsNumber)})),r.createElement("div",{className:"inputContainer"},r.createElement("a",null,"Border Color:"),r.createElement("input",{defaultValue:x,onChange:a=>U(a.target.value)})),r.createElement("div",{className:"inputContainer"},r.createElement("a",null,"Alignment:"),r.createElement("select",{defaultValue:V,onChange:a=>z(a.target.value)},r.createElement("option",{value:"flex-start"},"Left"),r.createElement("option",{value:"center"},"Center"),r.createElement("option",{value:"flex-end"},"Right"))))),r.createElement("textarea",{className:"codeSampleTextarea",wrap:"off",rows:14,value:`<sesami-experience${JSON.stringify(J,null,4).replace("{","").replace("}","").replace(new RegExp(": ","g"),"=").replace(new RegExp(' "',"g")," ").replace(new RegExp('"=',"g"),"=").replace(new RegExp(",","g"),"").replace(new RegExp('=""',"g"),"")}></sesami-experience>`}),H&&r.createElement("sesami-experience",J))},o={sidebar_position:6},A="Experience Configurator",b={unversionedId:"storefront-integration/configurator",id:"storefront-integration/configurator",title:"Experience Configurator",description:"You can configure you Experience based on your needs.",source:"@site/docs/storefront-integration/configurator.md",sourceDirName:"storefront-integration",slug:"/storefront-integration/configurator",permalink:"/docs/storefront-integration/configurator",draft:!1,editUrl:"https://github.com/sesamiapp/devportal/edit/master/docs/storefront-integration/configurator.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Multiple product forms",permalink:"/docs/storefront-integration/multiple-product-forms"},next:{title:"Storefront SDK",permalink:"/docs/sesami-sdk/sdk"}},v={},s=[],m={toc:s};function p(a){let{components:e,...l}=a;return(0,u.kt)("wrapper",(0,i.Z)({},m,l,{components:e,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"experience-configurator"},"Experience Configurator"),(0,u.kt)("p",null,"You can configure you Experience based on your needs."),(0,u.kt)(c,{mdxType:"Configurator"}))}p.isMDXComponent=!0}}]);