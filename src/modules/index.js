import goosemod from './goosemod.js';
import ms2porter from './ms2porter.js';
import bdThemes from './ports/themes/bdThemes.js';
import pcThemes from './ports/themes/pcThemes.js';

export default [
  {
    meta: {
      name: 'Store Core - GooseMod Modules',
      description: 'Officially published GooseMod modules.',
    },
    filename: 'goosemod',
    modules: goosemod
  },

  {
    meta: {
      name: 'Store Core - MS2Porter',
      description: 'Auto-ported MS1 (older) GooseMod modules.'
    },
    filename: 'ms2porter',
    modules: ms2porter
  },

  {
    meta: {
      name: 'Store Core - BD Themes',
      description: 'Auto-ported BetterDiscord themes.'
    },
    filename: 'bdthemes',
    modules: bdThemes
  },

  {
    meta: {
      name: 'Store Core - PC Themes',
      description: 'Auto-ported Powercord themes.'
    },
    filename: 'pcthemes',
    modules: pcThemes
  }
];