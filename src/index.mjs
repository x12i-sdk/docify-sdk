import assert from 'node:assert/strict';
import { createDocifySdk } from '@x12i/docify-sdk';

const sdk = createDocifySdk({
  catalog: { version: 1, product: 'demo', books: [] },
  useCases: { version: 1, product: 'demo', useCases: [{ id: 'quickstart', title: 'Quick start', goal: 'Read a local guide', audiences: ['developers'], tags: ['setup'] }] },
  site: { product: 'demo', knowledgePackage: 'demo-knowledge' },
  manifest: { product: 'demo', books: [], useCases: [{ id: 'quickstart', md: 'guides/quickstart.md' }] },
  files: { 'guides/quickstart.md': '# Quick start\n\nInstall the package and run the example.' },
});
assert.equal(sdk.listUseCases({ tag: 'setup' }).length, 1);
assert(sdk.getUseCaseMarkdown('quickstart').includes('Install the package'));
console.log({ useCases: sdk.listUseCases(), markdown: sdk.getUseCaseMarkdown('quickstart') });
