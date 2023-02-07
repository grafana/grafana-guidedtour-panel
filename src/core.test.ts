import { getStepSelector } from './core';
jest.mock('@grafana/runtime', () => ({ config: { buildInfo: { version: '9.4.0' } } }));
describe('core', () => {
  it('getStepSelector', () => {
    const a = getStepSelector({ selectBy: 'panelTitle', panelTitle: 'hello', content: 'hello content' });
    expect(a).toStrictEqual(`section[aria-label='hello panel']`);
  });
});
