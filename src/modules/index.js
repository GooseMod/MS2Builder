import goosemod from './goosemod.js';
import ms2porter from './ms2porter.js';
import bdThemes from './ports/bdThemes.js';

// export default bdThemes;
export default goosemod.concat(ms2porter).concat(bdThemes);