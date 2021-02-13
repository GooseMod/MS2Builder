import goosemod from './goosemod.js';
import ms2porter from './ms2porter.js';
import bdThemes from './ports/bdThemes.js';

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
      description: 'Auto-ported BD themes.'
    },
    filename: 'bdthemes',
    modules: bdThemes
  }
];

// export default goosemod.concat(ms2porter).concat(bdThemes);