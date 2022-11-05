import { Address } from "@graphprotocol/graph-ts";
import { Token } from "../../generated/schema";
import { ERC20 } from "../../generated/Controller/ERC20";
import { DEFAULT_DECIMAL, UNKNOWN } from "./Constant";

export function loadOrCreateERC20Token(tokenAddress: Address): Token{
  let tokenContract = ERC20.bind(tokenAddress)
  let token = Token.load(tokenAddress.toHex())
  if (token == null) {
    token = new Token(tokenAddress.toHex())
    token.name = tokenContract.try_name().reverted ? UNKNOWN : tokenContract.name();
    token.symbol = tokenContract.try_symbol() ? UNKNOWN : tokenContract.symbol()
    token.decimals = tokenContract.try_decimals() ? DEFAULT_DECIMAL :tokenContract.decimals()
    token.save()
  }
  return token as Token
}