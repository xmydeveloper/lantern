'use strict';

angular.module('app.i18n', [])
  .service('langSrvc', function(modelSrvc, getByPath, LANG, DEFAULT_LANG, DEFAULT_DIRECTION) {
    var model = modelSrvc.model;
    function lang() {
      return getByPath(model, '/settings/lang') ||
             getByPath(model, '/system/lang') ||
             DEFAULT_LANG;
    }
    function direction() {
      return LANG[lang()].dir || DEFAULT_DIRECTION;
    }
    return {
      lang: lang,
      direction: direction
    };
  })
  .constant('TRANSLATIONS', {
    zh: {
      HELP_TRANSLATE: '帮助翻译'
    },
    fa: {
      HELP_TRANSLATE: 'کمک برای ترجمه'
    },
    ar: {
      HELP_TRANSLATE: 'مساعدة لترجمة'
    },
    en: {
      HELP_TRANSLATE: 'Help translate',
      LANTERN: 'Lantern',
      LANGUAGE: 'Language',
      URL: 'URL',
      SHA1: 'SHA-1',
      WAITING_FOR_LANTERN: 'Waiting for Lantern...',
      UNEXPECTED_STATE_TITLE: 'Unexpected State',
      UNEXPECTED_STATE_PROMPT: 'Lantern is in an unexpected state. Try refreshing, and if the problem persists, try quitting and restarting. As a last resort, choosing Reset will reset Lantern to its original state. Reporting any additional information about the problem to the Lantern developers can speed its resolution.',
      RESET: 'Reset',
      REFRESH: 'Refresh',
      SETTINGS_UNLOCK_TITLE: 'Unlock Settings',
      SETTINGS_UNLOCK_PROMPT: 'Enter your Lantern password to unlock your settings.',
      PASSWORD: 'password',
      PASSWORD_CONFIRM: 'confirm password',
      CREATE: 'Create',
      CREATED: 'Created',
      PASSWORDS_MUST_MATCH: 'Passwords must match',
      PASSWORD_INVALID: 'Password invalid',
      UNLOCK: 'Unlock',
      UNLOCKED: 'Unlocked',
      SETTINGS_LOAD_FAILURE_TITLE: 'Couldn’t Load Settings',
      SETTINGS_LOAD_FAILURE_PROMPT: 'Your settings could not be loaded. Try again, and if the problem persists, try quitting and restarting. As a last resort, choosing Reset will reset Lantern to its original state. Reporting any additional information about the problem to the Lantern developers can speed its resolution.',
      NOTIFY_LANTERN_DEVS: 'Notify Lantern developers',
      UNEXPECTED_ERROR: 'An unexpected error has occurred.',
      ERROR: 'An error has occurred.',
      QUIT: 'Quit',
      RETRY: 'Retry',
      PASSWORD_CREATE_TITLE: 'Create Password',
      PASSWORD_CREATE_PROMPT: 'Create your Lantern password so your information can be stored securely.',
      BETA: 'BETA',
      TAG_LINE: 'Internet freedom for everyone.',
      GIVE_ACCESS: 'Give Access',
      GET_ACCESS: 'Get Access',
      INTERNET_REQUIRED: 'Please connect to the internet to proceed.',
      CONNECTION_OFFLINE: 'Your internet connection appears to be offline.',
      AUTHORIZE_TITLE: 'Sign in through Google',
      AUTHORIZE_PROMPT: 'Lantern allows you to sign in through your Google account.',
      AUTHORIZE_TIP_GTALK: 'Lantern works best with a large network of users who trust one another to share internet connections. Signing in through Google allows you to connect to users you know, and not just anyone.',
      AUTHORIZE_EXTERNAL: 'Click to be taken to google.com',
      HELP: 'Help',
      WHY: 'Why?',
      AUTHORIZE_LANTERN: 'Sign In',
      EMAIL_PLACEHOLDER: 'email@example.com',
      CANCEL: 'Cancel',
      CONTINUE: 'Continue',
      UPDATE: 'Update',
      WAITING: 'Waiting...',
      UPDATING: 'Updating...',
      CONFIGURING: 'Configuring...',
      CONNECTING: 'Connecting...',
      CONNECTED: 'Connected',
      CONNECTING_TITLE: 'Connecting...',
      NOT_INVITED_TITLE: 'User Not Invited',
      NOT_INVITED_PROMPT: 'The user you tried has not been invited to join Lantern yet.',
      TRY_ANOTHER_USER: 'Try another user',
      REQUEST_INVITE: 'Request invite',
      REQUEST_INVITE_TITLE: 'Request Invite',
      REQUEST_INVITE_PROMPT: 'Request an invitation from:',
      SOMEONE_I_KNOW_LABEL: 'Someone I know using Lantern',
      SOMEONE_I_KNOW_INFO: 'If your contact is a recognized user, he or she will receive a message immediately with the content of your request.',
      LANTERN_DEVS_LABEL: 'The Lantern developers',
      LANTERN_DEVS_INFO: 'New users will be invited as fast as the network can accommodate them.',
      SEND_REQUEST: 'Send request',
      SENDING_REQUEST: 'Sending request...',
      REQUEST_SENT_TITLE: 'Request Sent',
      REQUEST_SENT_PROMPT: 'Your request has been sent. You will receive an email when you have been invited. You can continue to use Lantern in demonstration mode in the meantime.', // XXX can't send email if we only store hashes of emails
      FIRST_INVITE_RECEIVED_TITLE: 'Invitation Received!',
      FIRST_INVITE_RECEIVED_INTRO: 'You have received an invitation to join Lantern!',
      FIRST_INVITE_RECEIVED_SENDER: 'The sender of this invitation was:',
      FIRST_INVITE_RECEIVED_PROMPT: 'You will now be able to complete Lantern setup.',
      AUTHORIZE_LATER_TITLE: 'Authorize Later',
      AUTHORIZE_LATER_PROMPT: 'Lantern will keep trying to reach Google and prompt you to authorize again when it becomes available. You can continue to use Lantern in demonstration mode in the meantime.',
      PROXIED_SITES_TITLE: 'Proxied Sites',
      CONFIGURE_PROXIED_SITES: 'Enter the sites you’d like to access through Lantern:',
      PROXIED_SITES_PROMPT: 'By default, only sites on this list will be accessed (“proxied”) through your Lantern network. All other sites are accessed directly.',
      SEARCH: 'Search',
      NO_MATCHING_SITES: 'No matching sites',
      PROXYING_ALL_WARNING: 'Lantern is currently set to proxy all traffic.',
      DISABLE_PROXY_ALL: 'Disable proxy all traffic',
      PROXIED_SITES_TIP: 'Content on other sites included in pages on these sites will also be proxied automatically.',
      ERROR_ONE_REQUIRED: 'At least one site is required.',
      ERROR_INVALID_LINE: 'Invalid line:',
      ERROR_MAX_PROXIED_SITES_EXCEEDED: 'Maximum number of proxied sites exceeded',
      ERROR_SETTING_PROXIED_SITES: 'Error setting proxied sites.',
      SYSTEM_PROXY_TITLE: 'System Proxy',
      SYSTEM_PROXY_PROMPT: 'By default, Lantern sets itself as your system proxy so your browser will use it automatically.',
      SYSTEM_PROXY_TRUE: 'Set Lantern as my system proxy (recommended)',
      AUTO_PROXY: 'Lantern will manage your system proxy settings automatically.',
      SYSTEM_PROXY_FALSE: 'I will manually configure my browser to use Lantern.',
      PAC_FILE_LOC: 'Lantern PAC file:',
      SYSTEM_PROXY_ERROR: 'Proxy configuration failed',
      FINISHED_TITLE: 'Finished!',
      FINISHED_PROMPT: 'Thank you for joining Lantern. Your participation at this early stage is invaluable.',
      AUTOREPORT_PROMPT: 'Securely report anonymous usage statistics to contribute to Lantern',
      FINISH: 'Finish',
      LANTERN_FRIENDS: 'Lantern Friends',
      LANTERN_FRIENDS_INTRO: 'Lantern relies on a large network of users who trust one another to share internet connections. Inviting people you trust to join Lantern helps Lantern work better.',
      ROSTER_PROMPT: 'Lantern Friends are automatically added to your Google Talk contacts.',
      LANTERN_FRIENDS_COLON: 'Lantern friends:',
      PROXYING_ALL_TRAFFIC: 'Proxying all traffic',
      NO_NAME: '(name unavailable)',
      NO_EMAIL: '(email unavailable)',
      NO_FRIENDS: 'You currently have no Lantern friends.',
      NO_INVITES: 'You currently have no invites.',
      RETRIEVING_NINVITES: 'Retrieving number of invites...',
      MORE_INVITES: 'You will receive more invites as you continue to run Lantern.',
      INVITE_FRIENDS_PROMPT: 'Invite friends by Gmail or Google Apps address:',
      SEARCHING_ELLIPSIS: 'Searching...',
      ENTER_VALID_EMAIL: 'Enter a valid email address',
      NINVITES_REACHED: 'Number of invites reached',
      INVITES_REMAINING: {1: '1 invite remaining', other: '{} invites remaining'},
      PENDING_REQS_PROMPT: {1: '1 pending friend request:', other: '{} pending friend requests:'},
      PENDING_REQS_INFO: 'Only accept friend requests from people you trust to share an internet connection.',
      ACCEPT: 'Accept',
      DECLINE: 'Decline',
      SETTINGS: 'Settings',
      MODE: 'Mode',
      PROXY: 'Proxy',
      MANAGE_PROXIED_SITES: 'Manage proxied sites...',
      //HTTPS_EVERYWHERE_LABEL: 'For your security, http requests to this site will automatically be converted to https requests using rulesets from HTTPS Everywhere.',
      ADVANCED: 'Advanced',
      PROXY_ALL_TRAFFIC: 'Proxy all traffic',
      APP: 'App',
      SAVE_GTALK_PASSWORD: 'Securely save Google Talk password',
      AUTO_START: 'Run Lantern automatically on system start',
      SET_AS_SYSTEM_PROXY: 'Set as system proxy',
      NO_AUTOREPORT_WARNING: 'Your usage will not contribute to global totals.',
      ENABLE_AUTOREPORT_SUGGESTION: 'Enable automatic reporting in Settings to have your usage contribute to global totals',
      RESET_ELLIPSIS: 'Reset...',
      CLOSE: 'Close',
      BACK: 'Back',
      ABOUT_TITLE: 'About Lantern',
      UPDATE_AVAILABLE_TITLE: 'Update Available',
      UPDATE_AVAILABLE_PROMPT: 'A new version of Lantern is available!',
      VERSION: 'version',
      RELEASED: 'released',
      MORE_INFO: 'more info',
      UPDATE_AVAILABLE_PROMPT_RUNNING: 'You are currently running',
      UPDATE_PROMPT: 'Please update now to ensure you have the latest features and improvements.',
      DOWNLOAD: 'Download',
      CONTACT_TITLE: 'Contact Lantern Developers',
      MESSAGE_PLACEHOLDER: '\n\n\n\n\n--\nDiagnostic information:\n',
      ERROR_TOO_LONG: {1: '1 character too long', other: '{} characters too long'},
      SEND: 'Send',
      SEND_INVITES: {1: 'Send invite', other: 'Send {} invites'},
      GIVE_MODE_FORBIDDEN_TITLE: 'Give Access Mode Forbidden',
      GIVE_MODE_FORBIDDEN_PROMPT: 'Your internet connection appears to be coming from a censoring country. Giving access through this connection could be undesirable for other users. You can run Lantern in Give Access mode if you connect to the internet from outside a censoring country.', // XXX say which country and source identifying it as censoring
      CONTINUE_IN_GET_MODE: 'Continue in Get Access Mode',
      CONFIRM_RESET_TITLE: 'Confirm Reset',
      CONFIRM_RESET_PROMPT: 'Resetting Lantern will clear all saved information since it was set up.',
      BUG_REPORT_PROMPT: 'Additional information',
      NPEERS_ONLINE_GET: {1: '1 Get Mode user online', other: '{} Get Mode users online'},
      NPEERS_ONLINE_GIVE: {1: '1 Give Mode user online', other: '{} Give Mode users online'},
      NUSERS_EVER: {1: '1 user total', other: '{} users total'},
      LAST_CONNECTED: 'Last connected:',
      PCGIVE: 'Give Mode Lantern PC',
      PCGET: 'Get Mode Lantern PC',
      PCUNKNOWN: 'Lantern PC (awaiting connection)',
      CLOUDGIVE: 'Lantern Cloud Proxy',
      LAEPROXYGIVE: 'Lantern App Engine Proxy',
      UP: 'up',
      DN: 'down',
      UP_EVER: 'uploaded ever',
      DN_EVER: 'downloaded ever',
      SENT: 'sent',
      RECEIVED: 'received',
      USERS_ONLINE: {1: '1 user online', other: '{} users online'},
      USERS_TOTAL: {1: '1 user total', other: '{} users total'},
      TRANSFERRED_GLOBALLY: 'transferred globally',
      P: 'petabyte',
      T: 'terabyte',
      G: 'gigabyte',
      M: 'megabyte',
      K: 'kilobyte',
      B: 'byte',
      AD: 'Andorra',
      AE: 'United Arab Emirates',
      AF: 'Afghanistan',
      AG: 'Antigua and Barbuda',
      AI: 'Anguilla',
      AL: 'Albania',
      AM: 'Armenia',
      AO: 'Angola',
      AQ: 'Antarctica',
      AR: 'Argentina',
      AS: 'American Samoa',
      AT: 'Austria',
      AU: 'Australia',
      AW: 'Aruba',
      AX: '\xc5land Islands',
      AZ: 'Azerbaijan',
      BA: 'Bosnia and Herzegovina',
      BB: 'Barbados',
      BD: 'Bangladesh',
      BE: 'Belgium',
      BF: 'Burkina Faso',
      BG: 'Bulgaria',
      BH: 'Bahrain',
      BI: 'Burundi',
      BJ: 'Benin',
      BL: 'Saint Barth\xe9lemy',
      BM: 'Bermuda',
      BN: 'Brunei Darussalam',
      BO: 'Bolivia',
      BQ: 'Bonaire, Sint Eustatius and Saba',
      BR: 'Brazil',
      BS: 'Bahamas',
      BT: 'Bhutan',
      BV: 'Bouvet Island',
      BW: 'Botswana',
      BY: 'Belarus',
      BZ: 'Belize',
      CA: 'Canada',
      CC: 'Cocos (Keeling) Islands',
      CD: 'Democratic Republic of the Congo',
      CF: 'Central African Republic',
      CG: 'Congo',
      CH: 'Switzerland',
      CI: "C\xf4te d'Ivoire",
      CK: 'Cook Islands',
      CL: 'Chile',
      CM: 'Cameroon',
      CN: 'China',
      CO: 'Colombia',
      CR: 'Costa Rica',
      CU: 'Cuba',
      CV: 'Cape Verde',
      CW: 'Cura\xe7ao',
      CX: 'Christmas Island',
      CY: 'Cyprus',
      CZ: 'Czech Republic',
      DE: 'Germany',
      DJ: 'Djibouti',
      DK: 'Denmark',
      DM: 'Dominica',
      DO: 'Dominican Republic',
      DZ: 'Algeria',
      EC: 'Ecuador',
      EE: 'Estonia',
      EG: 'Egypt',
      EH: 'Western Sahara',
      ER: 'Eritrea',
      ES: 'Spain',
      ET: 'Ethiopia',
      FI: 'Finland',
      FJ: 'Fiji',
      FK: 'Falkland Islands',
      FM: 'Micronesia',
      FO: 'Faroe Islands',
      FR: 'France',
      GA: 'Gabon',
      GB: 'United Kingdom',
      GD: 'Grenada',
      GE: 'Georgia',
      GF: 'French Guiana',
      GG: 'Guernsey',
      GH: 'Ghana',
      GI: 'Gibraltar',
      GL: 'Greenland',
      GM: 'Gambia',
      GN: 'Guinea',
      GP: 'Guadeloupe',
      GQ: 'Equatorial Guinea',
      GR: 'Greece',
      GS: 'South Georgia and the South Sandwich Islands',
      GT: 'Guatemala',
      GU: 'Guam',
      GW: 'Guinea-Bissau',
      GY: 'Guyana',
      HK: 'Hong Kong',
      HM: 'Heard Island and McDonald Islands',
      HN: 'Honduras',
      HR: 'Croatia',
      HT: 'Haiti',
      HU: 'Hungary',
      ID: 'Indonesia',
      IE: 'Ireland',
      IL: 'Israel',
      IM: 'Isle of Man',
      IN: 'India',
      IO: 'British Indian Ocean Territory',
      IQ: 'Iraq',
      IR: 'Iran',
      IS: 'Iceland',
      IT: 'Italy',
      JE: 'Jersey',
      JM: 'Jamaica',
      JO: 'Jordan',
      JP: 'Japan',
      KE: 'Kenya',
      KG: 'Kyrgyzstan',
      KH: 'Cambodia',
      KI: 'Kiribati',
      KM: 'Comoros',
      KN: 'Saint Kitts and Nevis',
      KP: "North Korea",
      KR: 'South Korea',
      KW: 'Kuwait',
      KY: 'Cayman Islands',
      KZ: 'Kazakhstan',
      LA: "Laos",
      LB: 'Lebanon',
      LC: 'Saint Lucia',
      LI: 'Liechtenstein',
      LK: 'Sri Lanka',
      LR: 'Liberia',
      LS: 'Lesotho',
      LT: 'Lithuania',
      LU: 'Luxembourg',
      LV: 'Latvia',
      LY: 'Libya',
      MA: 'Morocco',
      MC: 'Monaco',
      MD: 'Moldova',
      ME: 'Montenegro',
      MF: 'Saint Martin',
      MG: 'Madagascar',
      MH: 'Marshall Islands',
      MK: 'Macedonia',
      ML: 'Mali',
      MM: 'Myanmar',
      MN: 'Mongolia',
      MO: 'Macao',
      MP: 'Northern Mariana Islands',
      MQ: 'Martinique',
      MR: 'Mauritania',
      MS: 'Montserrat',
      MT: 'Malta',
      MU: 'Mauritius',
      MV: 'Maldives',
      MW: 'Malawi',
      MX: 'Mexico',
      MY: 'Malaysia',
      MZ: 'Mozambique',
      NA: 'Namibia',
      NC: 'New Caledonia',
      NE: 'Niger',
      NF: 'Norfolk Island',
      NG: 'Nigeria',
      NI: 'Nicaragua',
      NL: 'Netherlands',
      NO: 'Norway',
      NP: 'Nepal',
      NR: 'Nauru',
      NU: 'Niue',
      NZ: 'New Zealand',
      OM: 'Oman',
      PA: 'Panama',
      PE: 'Peru',
      PF: 'French Polynesia',
      PG: 'Papua New Guinea',
      PH: 'Philippines',
      PK: 'Pakistan',
      PL: 'Poland',
      PM: 'Saint Pierre and Miquelon',
      PN: 'Pitcairn',
      PR: 'Puerto Rico',
      PS: 'Palestine',
      PT: 'Portugal',
      PW: 'Palau',
      PY: 'Paraguay',
      QA: 'Qatar',
      RE: 'R\xe9union',
      RO: 'Romania',
      RS: 'Serbia',
      RU: 'Russia',
      RW: 'Rwanda',
      SA: 'Saudi Arabia',
      SB: 'Solomon Islands',
      SC: 'Seychelles',
      SD: 'Sudan',
      SE: 'Sweden',
      SG: 'Singapore',
      SH: 'Saint Helena, Ascension and Tristan da Cunha',
      SI: 'Slovenia',
      SJ: 'Svalbard and Jan Mayen',
      SK: 'Slovakia',
      SL: 'Sierra Leone',
      SM: 'San Marino',
      SN: 'Senegal',
      SO: 'Somalia',
      SR: 'Suriname',
      SS: 'South Sudan',
      ST: 'São Tomé and Príncipe',
      SV: 'El Salvador',
      SX: 'Sint Maarten',
      SY: 'Syrian Arab Republic',
      SZ: 'Swaziland',
      TC: 'Turks and Caicos Islands',
      TD: 'Chad',
      TF: 'French Southern Territories',
      TG: 'Togo',
      TH: 'Thailand',
      TJ: 'Tajikistan',
      TK: 'Tokelau',
      TL: 'Timor-Leste',
      TM: 'Turkmenistan',
      TN: 'Tunisia',
      TO: 'Tonga',
      TR: 'Turkey',
      TT: 'Trinidad and Tobago',
      TV: 'Tuvalu',
      TW: 'Taiwan',
      TZ: 'Tanzania',
      UA: 'Ukraine',
      UG: 'Uganda',
      UM: 'United States Minor Outlying Islands',
      US: 'United States',
      UY: 'Uruguay',
      UZ: 'Uzbekistan',
      VA: 'Vatican City',
      VC: 'Saint Vincent and the Grenadines',
      VE: 'Venezuela',
      VG: 'British Virgin Islands',
      VI: 'U.S. Virgin Islands',
      VN: 'Vietnam',
      VU: 'Vanuatu',
      WF: 'Wallis and Futuna',
      WS: 'Samoa',
      YE: 'Yemen',
      YT: 'Mayotte',
      ZA: 'South Africa',
      ZM: 'Zambia',
      ZW: 'Zimbabwe'
    }
  })
  // https://groups.google.com/d/msg/angular/641c1ykOX4k/hcXI5HsSD5MJ
  .filter('i18n', function($filter, langSrvc, DEFAULT_LANG, TRANSLATIONS) {
    var COUNT = /{}/g,
        numFltr = $filter('number');
    function keyNotFound(key) {
      return '(translation key "'+key+'" not found)';
    }
    function pluralNotFound(key, count) {
      return '(plural not found for key "'+key+'" and count "'+count+'")';
    }
    return function(key, count) {
      if (_.isUndefined(key)) return '(translation key undefined. did you forget quotes?)';
      if (!key) return '';
      var translation =
          (TRANSLATIONS[langSrvc.lang()] || {})[key] ||
          TRANSLATIONS[DEFAULT_LANG][key];
      if (!translation) return keyNotFound(key);
      if (_.isPlainObject(translation)) {
        if (_.isUndefined(count)) return '';
        translation = translation[count] || translation.other;
        if (translation) return translation.replace(COUNT, numFltr(count));
        return pluralNotFound(key, count);
      }
      return translation;
    };
  });
