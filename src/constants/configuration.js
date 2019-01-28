// Setup and helpers

import * as columns from '../components/columns'

const colors = {
  base: {
    black: 'rgb(0, 0, 0)',
    white: 'rgb(255, 255, 255)'
  },
  neon: {
    orange: 'rgb(255, 120, 60)',
    red: 'rgb(255, 60, 120)',
    green: 'rgb(120, 255, 60)',
    cyan: 'rgb(60, 255, 120)',
    purple: 'rgb(120, 60, 255)',
    blue: 'rgb(60, 120, 255)'
  },
  bootstrapLight: {
    blue: '#cce5ff',
    green: '#d4edda',
    red: '#f8d7da',
    yellow: '#fff3cd',
    cyan: '#d1ecf1'
  },
  bootstrap: {
    blue: '#007bff',
    green: '#28a745',
    red: '#dc3545',
    yellow: '#ffc107',
    cyan: '#17a2b8'
  },
  bootstrapDark: {
    blue: '#004085',
    green: '#155724',
    red: '#721c24',
    yellow: '#856404',
    cyan: '#0c5460'
  },
  colorBrewer: {
    multiHue: {
      blueGreen: [
        'rgb(237,248,251)',
        'rgb(204,236,230)',
        'rgb(153,216,201)',
        'rgb(102,194,164)',
        'rgb(65,174,118)',
        'rgb(35,139,69)',
        'rgb(0,88,36)'
      ],
      bluePurple: [
        'rgb(237,248,251)',
        'rgb(191,211,230)',
        'rgb(158,188,218)',
        'rgb(140,150,198)',
        'rgb(140,107,177)',
        'rgb(136,65,157)',
        'rgb(110,1,107)'
      ],
      greenBlue: [
        'rgb(240,249,232)',
        'rgb(204,235,197)',
        'rgb(168,221,181)',
        'rgb(123,204,196)',
        'rgb(78,179,211)',
        'rgb(43,140,190)',
        'rgb(8,88,158)'
      ],
      orangeRed: [
        'rgb(254,240,217)',
        'rgb(253,212,158)',
        'rgb(253,187,132)',
        'rgb(252,141,89)',
        'rgb(239,101,72)',
        'rgb(215,48,31)',
        'rgb(153,0,0)'
      ],
      purpleBlue: [
        'rgb(241,238,246)',
        'rgb(208,209,230)',
        'rgb(166,189,219)',
        'rgb(116,169,207)',
        'rgb(54,144,192)',
        'rgb(5,112,176)',
        'rgb(3,78,123)'
      ],
      purpleBlueGreen: [
        'rgb(246,239,247)',
        'rgb(208,209,230)',
        'rgb(166,189,219)',
        'rgb(103,169,207)',
        'rgb(54,144,192)',
        'rgb(2,129,138)',
        'rgb(1,100,80)'
      ],
      purpleRed: [
        'rgb(241,238,246)',
        'rgb(212,185,218)',
        'rgb(201,148,199)',
        'rgb(223,101,176)',
        'rgb(231,41,138)',
        'rgb(206,18,86)',
        'rgb(145,0,63)'
      ],
      redPurple: [
        'rgb(254,235,226)',
        'rgb(252,197,192)',
        'rgb(250,159,181)',
        'rgb(247,104,161)',
        'rgb(221,52,151)',
        'rgb(174,1,126)',
        'rgb(122,1,119)'
      ],
      yellowGreen: [
        'rgb(255,255,204)',
        'rgb(217,240,163)',
        'rgb(173,221,142)',
        'rgb(120,198,121)',
        'rgb(65,171,93)',
        'rgb(35,132,67)',
        'rgb(0,90,50)'
      ],
      yellowGreenBlue: [
        'rgb(255,255,204)',
        'rgb(199,233,180)',
        'rgb(127,205,187)',
        'rgb(65,182,196)',
        'rgb(29,145,192)',
        'rgb(34,94,168)',
        'rgb(12,44,132)'
      ],
      yellowOrangeBrown: [
        'rgb(255,255,212)',
        'rgb(254,227,145)',
        'rgb(254,196,79)',
        'rgb(254,153,41)',
        'rgb(236,112,20)',
        'rgb(204,76,2)',
        'rgb(140,45,4)'
      ],
      yellowOrangeRed: [
        'rgb(255,255,178)',
        'rgb(254,217,118)',
        'rgb(254,178,76)',
        'rgb(253,141,60)',
        'rgb(252,78,42)',
        'rgb(227,26,28)',
        'rgb(177,0,38)'
      ],
    },
    singleHue: {
      blue: [
        'rgb(239,243,255)',
        'rgb(198,219,239)',
        'rgb(158,202,225)',
        'rgb(107,174,214)',
        'rgb(66,146,198)',
        'rgb(33,113,181)',
        'rgb(8,69,148)'
      ],
      green: [
        'rgb(237,248,233)',
        'rgb(199,233,192)',
        'rgb(161,217,155)',
        'rgb(116,196,118)',
        'rgb(65,171,93)',
        'rgb(35,139,69)',
        'rgb(0,90,50)'
      ],
      grey: [
        'rgb(247,247,247)',
        'rgb(217,217,217)',
        'rgb(189,189,189)',
        'rgb(150,150,150)',
        'rgb(115,115,115)',
        'rgb(82,82,82)',
        'rgb(37,37,37)'
      ],
      orange: [
        'rgb(254,237,222)',
        'rgb(253,208,162)',
        'rgb(253,174,107)',
        'rgb(253,141,60)',
        'rgb(241,105,19)',
        'rgb(217,72,1)',
        'rgb(140,45,4)'
      ],
      purple: [
        'rgb(242,240,247)',
        'rgb(218,218,235)',
        'rgb(188,189,220)',
        'rgb(158,154,200)',
        'rgb(128,125,186)',
        'rgb(106,81,163)',
        'rgb(74,20,134)'
      ],
      red: [
        'rgb(254,229,217)',
        'rgb(252,187,161)',
        'rgb(252,146,114)',
        'rgb(251,106,74)',
        'rgb(239,59,44)',
        'rgb(203,24,29)',
        'rgb(153,0,13)'
      ]
    }
  }
}

const dataFiles = [
  'bigdata.csv', 'data.csv', 'dataset2.csv', 'observations-1.csv', 'observations-2.csv'
]

// Configuration
export const SCALE = 1.3
export const GRID_SIZE = 20 * SCALE
export const FONT_SIZE = `${1 * SCALE}em`
export const GUTTER_SIZE = 1 * SCALE
export const MAX_COLUMN_COUNT = 40
export const BASE_COLOR = colors.base.white
export const COLORS = Object.values(colors.colorBrewer.singleHue)
export const DATA_FILE = dataFiles[1]
export const COLUMN_CLASS = columns.ViolinPlotColumn



// WEBPACK FOOTER //
// ./src/constants/configuration.js