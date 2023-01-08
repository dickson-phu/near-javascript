// Find all our documentation at https://docs.near.org
import { NearBindgen, near, call, view, initialize, LookupMap, UnorderedMap } from 'near-sdk-js';
import { AccountId } from 'near-sdk-js/lib/types';

export declare class NFTContractMetadata {
    spec: string;
    name: string;
    symbol: string;
    icon: string|null;
    base_uri: string|null;
}

export declare class TokenMetadata {
    title: string|null;
    description: string|null;
    media: string|null;
    media_hash: string|null;
    copies: number|null;
    issued_at: number|null;
    expires_at: number|null;
    starts_at: number|null;
    updated_at: number|null;
    extra: string|null;
}

export interface NonFungibleTokenMetadataProvider {
    nft_metadata(): NFTContractMetadata;
}