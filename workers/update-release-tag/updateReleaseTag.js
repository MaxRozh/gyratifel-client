/* eslint-disable @typescript-eslint/no-var-requires */

const { execSync } = require('child_process');

const { findOutWhichVersion, getWrittenVersion, getWrittenCommitMessage } = require('./promptsForTag');
const { ANSWERS, validateVersion } = require('./helpers');
const colorfulConsole = require('../utils/colorfulConsole');

colorfulConsole({ message: 'Start updating release tag', hasStartLine: true });

const tagsRes = execSync('git tag', { encoding: 'utf-8' });
const tagsInArr = tagsRes.split('\n');
const lastTags = tagsInArr.splice(tagsInArr.length - 4);

colorfulConsole({ message: '[1/3] Showing last release tags...' });
colorfulConsole({ message: lastTags.join('\n') });

(async () => {
  colorfulConsole({ message: '[2/3] Selecting version...' });

  let selectedVersion = await findOutWhichVersion(lastTags);

  if (!selectedVersion || selectedVersion === ANSWERS.no_matching) {
    selectedVersion = await getWrittenVersion();
  }

  const isValidVersion = validateVersion(selectedVersion);

  if (!isValidVersion) {
    colorfulConsole({ message: 'Version is invalid. Valid example - v1.4.7', isWarn: true });
    selectedVersion = await getWrittenVersion();

    if (!validateVersion(selectedVersion)) {
      colorfulConsole({ message: 'Version is invalid. Good bay.', isWarn: true });
      throw new Error('Invalid version');
    }
  }

  colorfulConsole({ message: '[success] Selected version', isInfo: true });
  colorfulConsole({ message: '[3/3] Setting new tag version...' });

  let commitMessage = await getWrittenCommitMessage();

  if (!commitMessage) {
    colorfulConsole({ message: 'You need write commit message', isWarn: true });
    commitMessage = await getWrittenCommitMessage();

    if (!commitMessage) {
      colorfulConsole({ message: "Message wasn't written. Good bay.", isWarn: true });
      throw new Error('No commit message');
    }
  }

  execSync(`git tag -a ${selectedVersion} -m "${commitMessage}"`);

  colorfulConsole({ message: '[success] Version is updated', isInfo: true });
  colorfulConsole({
    message: `PLEASE, don't forget change version in package.json with this - ${selectedVersion}`,
    isWarn: true
  });
})();
