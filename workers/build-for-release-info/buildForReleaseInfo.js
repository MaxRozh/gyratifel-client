/* eslint-disable @typescript-eslint/no-var-requires, global-require */

const { execSync } = require('child_process');

require('dotenv').config({ path: '.env' });

const colorfulConsole = require('../utils/colorfulConsole');

if (process.env.SITE_ALIAS !== 'newstarladder') {
  colorfulConsole({
    message: '[Warning] You need run only with SITE_ALIAS=newstarladder',
    isWarn: true,
    hasEndLine: true
  });
  throw new Error('Wrong SITE_ALIAS');
}

colorfulConsole({ message: 'Start building project', hasStartLine: true });

execSync('yarn build:prod', { stdio: 'inherit' });

colorfulConsole({ message: '[success] Build project', hasEndLine: true });
