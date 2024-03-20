import { networks } from '@safe-global/protocol-kit/dist/src/utils/eip-3770/config'

/**
 * A static shortName<->chainId dictionary
 * E.g.:
 *
 * {
 *   eth: '1',
 *   gor: '5',
 *   ...
 * }
 */
type Chains = Record<string, string>

const chains = [
  ...networks,
  {
    shortName: 'masatest',
    chainId: 103454,
  },
  {
    shortName: 'masa',
    chainId: 0x3454,
  },
].reduce<Chains>((result, { shortName, chainId }) => {
  result[shortName] = chainId.toString()
  return result
}, {})

export default chains
