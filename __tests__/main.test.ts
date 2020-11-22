import * as core from '@actions/core'
import {runInContext} from 'vm'
import {run} from '../src/main'

describe('When running the action', () => {
  const fakeSetOutput = core.setOutput as jest.MockedFunction<
    typeof core.setOutput
  >

  test('it should set the release-url output parameter', async () => {
    await run()
    expect(fakeSetOutput).toHaveBeenCalledWith('release-url', expect.anything())
  })
})
