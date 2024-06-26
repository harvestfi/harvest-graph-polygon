import { Address, BigDecimal, BigInt, dataSource } from "@graphprotocol/graph-ts";
import { pow } from "./MathUtils";

export const UNKNOWN = 'unknown';

export const UNISWAP_V3_VALUE = pow(pow(BigDecimal.fromString('2'), 96), 2)
export const SECONDS_OF_YEAR = BigDecimal.fromString('31557600');
export const DEFAULT_DECIMAL = 18;
export const DEFAULT_PRICE = BigInt.fromI32(0);
export const YEAR_PERIOD = BigDecimal.fromString('365')
export const BI_TEN = BigInt.fromI64(10)
export const BI_18 = BigInt.fromI64(10 ** 18)
export const BD_9 = BigDecimal.fromString('1000000000')
export const BD_18 = BigDecimal.fromString('1000000000000000000')
export const BD_ZERO = BigDecimal.fromString('0')
export const BD_ONE = BigDecimal.fromString('1')
export const BD_TEN = BigDecimal.fromString('10')
export const BD_ONE_HUNDRED = BigDecimal.fromString('100')
export const EVERY_24_HOURS = 86400;
export const BI_EVERY_24_HOURS = BigInt.fromString('86400');
export const EVERY_7_DAYS = 604800;
export const BI_EVERY_7_DAYS = BigInt.fromString('604800');
export const MODULE_RESULT = 75600;
export const MODULE_RESULT_V2 = 518400;
export const CONST_ID = '1';
export const TWO_WEEKS_IN_SECONDS = BigInt.fromString('1209600');
export const MAX_TVL_VALUE = BigDecimal.fromString('3000000');

export const PEARL_ROUTER = Address.fromString('0xcC25C0FD84737F44a7d38649b69491BBf0c7f083');

export const WETH = Address.fromString('0x7ceb23fd6bc0add59e62ac25578270cff1b9f619');
export const STABLE_COIN_ARRAY_MAINNET = [
  '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'.toLowerCase(),
  '0xe9e7cea3dedca5984780bafc599bd69add087d56'.toLowerCase(),
  '0xdAC17F958D2ee523a2206206994597C13D831ec7'.toLowerCase(),
  '0x0000000000085d4780B73119b644AE5ecd22b376'.toLowerCase(),
  '0x6B175474E89094C44Da98b954EedeAC495271d0F'.toLowerCase(),

  // Orbit Bridge Polygon Tether USD (oUSDT)
  '0x957da9ebbcdc97dc4a8c274dd762ec2ab665e15f'.toLowerCase()
]

export const STABLE_COIN_ARRAY_MATIC = [
  '0x2791bca1f2de4661ed88a30c99a7a9449aa84174'.toLowerCase(),
  '0xc2132d05d31c914a87c6611c10748aeb04b58e8f'.toLowerCase(),
  '0xE840B73E5287865EEc17d250bFb1536704B43B21'.toLowerCase(),
  '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174'.toLowerCase(),
  // Orbit Bridge Polygon Tether USD (oUSDT)
  '0x957da9ebbcdc97dc4a8c274dd762ec2ab665e15f'.toLowerCase(),
  // Orbit Bridge Polygon USD Coin (oUSDC)
  '0x5bef2617ecca9a39924c09017c5f1e25efbb3ba8'.toLowerCase(),
  '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063'.toLowerCase(),
  // STAR
  '0xc19669a405067927865b40ea045a2baabbbe57f5'.toLowerCase(),
  '0xE2Aa7db6dA1dAE97C5f5C6914d285fBfCC32A128'.toLowerCase()
]

export const USDC = Address.fromString('0x2791bca1f2de4661ed88a30c99a7a9449aa84174');
export const USDR = Address.fromString('0x40379a439d4f6795b6fc9aa5687db461677a2dba');
export const PEARL = Address.fromString('0x7238390d5f6f64e67c3211c343a410e2a3dec142');
export const CAVIAR = Address.fromString('0x6ae96cc93331c19148541d4d2f31363684917092');


export const PS_ADDRESSES_MAINNET = [
  '0xd3093e3efbe00f010e8f5efe3f1cb5d9b7fe0eb1'.toLowerCase(),
  '0x8f5adC58b32D4e5Ca02EAC0E293D35855999436C'.toLowerCase(),
  '0xa0246c9032bc3a600820415ae600c6388619a14d'.toLowerCase(),
  '0x25550Cccbd68533Fa04bFD3e3AC4D09f9e00Fc50'.toLowerCase(),
  '0x59258F4e15A5fC74A7284055A8094F58108dbD4f'.toLowerCase(),
]

export const PS_ADDRESSES_MATIC = [
  '0xab0b2ddb9c7e440fac8e140a89c0dbcbf2d7bbff'.toLowerCase(),
]

export const LP_UNI_PAIR_CONTRACT_NAME = [
  '1inch'.toLowerCase(),
  'SushiSwap'.toLowerCase(),
  // only uniswap v2
  'Uniswap'.toLowerCase(),
  'Pancake'.toLowerCase(),
  'Kyber'.toLowerCase(),
  'ApeSwapFinance'.toLowerCase(),
]

export const SKIP_TOTAL_TVL = [
  "0x9e00c8e675f3f25ca0f7f51d4bca28b7be009e12"
]

export const CALCULATE_ONLY_TVL = [
  '0x41f36bb5b26f2e8646e6adc97faa5e2844a6c842',
  '0x948ad16cd52a1658b404fe67ed7a56360f52ce08',
  '0x9ef89a962b421b26def4b5f6435c6fe698fda822',
  '0xdde43710defef6cbcf820b18debfc3cf9a4f449f',
  '0xa5422f737f24b10a0928d5e7f6cf404d077e1cd1',
  '0x506337cc631726a21788b9fdfb6be6292ba7a835',
  '0x72d35bd4123f5c60d4cb84bfcb40946259223860',
  '0xA9B35ef7C2289b5D0391381bF8a2560d2eb0F961'.toLowerCase(),
  '0x2De733b3313890223a5D822488f6DD96cA4701C3'.toLowerCase(),
  '0x548E84517b2891E0316f604f4f5326a306F1830e'.toLowerCase(),
  '0x2eD9699441CE48F2AA9C03Af66510D6d72750591'.toLowerCase()
]

export const BALANCER_CONTRACT_NAME = [
  'Balancer'.toLowerCase(),
  'frxETH-WETH'.toLowerCase(),
  '20WMATIC-80SPHERE'.toLowerCase(),
  '20WETH-80BAL'.toLowerCase(),
  '20USDC-80TNGBL'.toLowerCase(),
  '2eur (PAR)'.toLowerCase()
]

export const PEARL_CONTRACT_NAME = [
  'VolatileV1'.toLowerCase(),
  'StableV1'.toLowerCase(),
]
export const CURVE_CONTRACT_NAME = 'Curve.fi'.toLowerCase()
export const F_UNI_V3_CONTRACT_NAME = 'fUniV3'.toLowerCase()
export const MESH_SWAP_CONTRACT = 'Meshswap'.toLowerCase()
export const TETU_CONTRACT = 'Tetu'.toLowerCase()
export const QUICK_SWAP_CONTRACT = 'a'.toLowerCase()

export const UNISWAP_V3_FEES = [
  '3000',
  '5000',
  '8000',
  '10000'
]

export const WETH_LIST = [
  Address.fromString('0x4a77ef015ddcd972fd9ba2c7d5d658689d090f1a'),
  Address.fromString('0xd00f9ca46ce0e4a63067c4657986f0167b0de1e5'),
  // weth-btc pool
  Address.fromString('0xadc7B4096C3059Ec578585Df36E6E1286d345367')
]

export const AM_USD_BALANCER = Address.fromString('0xb9ae7a44f9060a80bf436d48c4d7ad42d15715ee')
export const BB_AM_USD_BALANCER = Address.fromString('0x787dcb101a0fd5c54a993dcead38e2c6bb98b66e')

export const FARM_TOKEN_MAINNET = Address.fromString('0xa0246c9032bc3a600820415ae600c6388619a14d')
export const FARM_TOKEN_MATIC = Address.fromString('0xab0b2ddb9c7e440fac8e140a89c0dbcbf2d7bbff')

export const ORACLE_ADDRESS_MAINNET_FIRST = Address.fromString('0x48DC32eCA58106f06b41dE514F29780FFA59c279');
export const ORACLE_ADDRESS_MAINNET_SECOND = Address.fromString('0x1358c91D5b25D3eDAc2b7B26A619163d78f1717d');
export const ORACLE_ADDRESS_MATIC = Address.fromString('0x0E74303d0D18884Ce2CEb3670e72686645c4f38B');

export const ORACLE_PRICE_TETU = Address.fromString('0x0B62ad43837A69Ad60289EEea7C6e907e759F6E8')

export const NULL_ADDRESS = Address.fromString('0x0000000000000000000000000000000000000000');
export const BIG_APY_BD = BigDecimal.fromString('1000');
export const PAR = Address.fromString('0xE2Aa7db6dA1dAE97C5f5C6914d285fBfCC32A128');
export const PAR_USDT_UNISWAP_V_3 = Address.fromString('0xfa22d298e3b0bc1752e5ef2849cec1149d596674');

export const JBRL = '0xf2f77FE7b8e66571E0fca7104c4d670BF1C8d722'.toLowerCase();
export const BRZ = Address.fromString('0x491a4eB4f1FC3BfF8E1d2FC856a6A46663aD556f');

export const ST_ETH_ETH_VAULT = '0x466506EB97bDdF4B4b2B50979E251bF92FB26799'.toLowerCase();

export function isStableCoin(address: string): boolean {
  if (dataSource.network() == 'mainnet') {
    return STABLE_COIN_ARRAY_MAINNET.join(' ').includes(address) == true
  } else if (dataSource.network() == 'matic') {
    return STABLE_COIN_ARRAY_MATIC.join(' ').includes(address) == true
  }
  return false
}

export function isBrl(address: string): boolean {
  return address == JBRL;
}

export function isPsAddress(address: string): boolean {
  if (dataSource.network() == 'mainnet') {
    return PS_ADDRESSES_MAINNET.join(' ').includes(address) == true
  } else if (dataSource.network() == 'matic') {
    return PS_ADDRESSES_MATIC.join(' ').includes(address) == true
  }
  return false
}

export function getOracleAddress(block: number): Address {
  if (dataSource.network() == 'mainnet') {
    if (block >= 12820106) {
      return ORACLE_ADDRESS_MAINNET_FIRST
    } else if (block >= 12015724) {
      return ORACLE_ADDRESS_MAINNET_SECOND
    }
  } else if (dataSource.network() == 'matic') {
    if (block >= 16841617) {
      return ORACLE_ADDRESS_MATIC
    }
  }

  return NULL_ADDRESS
}

export function getFarmToken(): Address {
  if (dataSource.network() == 'mainnet') {
    return FARM_TOKEN_MAINNET
  }
  if (dataSource.network() == 'matic') {
    return FARM_TOKEN_MATIC
  }
  return NULL_ADDRESS
}

export function canCalculateTotalTvl(address: string): boolean {
  for (let i=0;i<CALCULATE_ONLY_TVL.length;i++) {
    if (address.toLowerCase() == CALCULATE_ONLY_TVL[i]) {
      return true;
    }
  }
  return false;
}