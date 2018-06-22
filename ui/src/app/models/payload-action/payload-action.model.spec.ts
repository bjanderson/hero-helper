import { PayloadAction } from './payload-action.model';

describe('PayloadAction', () => {
  it('sets the type and payload', () => {
    const model = new PayloadAction('test', {a: 'test-payload'});
    expect(model.type).toEqual('test');
    expect(model.payload).toEqual({a: 'test-payload'});
  });
});
