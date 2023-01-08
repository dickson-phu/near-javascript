import { TokenMetadata } from "./metadata";
import { AccountId } from "near-sdk-js/lib/types";

type tokenId = number;

export declare class Token {
    token_id: tokenId;
    owner_id: AccountId;
    metadata?: TokenMetadata;
    approved_account_id?: {
        [approved_account_id: AccountId]: number;
    };

    constructor(token_id: tokenId, owner_id: AccountId, metadata?: TokenMetadata, approved_account_ids?: {
        [approved_account_ids: AccountId]: number;
    })
}