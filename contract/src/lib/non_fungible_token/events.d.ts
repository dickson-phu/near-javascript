import { AccountId } from "near-sdk-js";
import { NearEvent } from "../event";
import { TokenId } from "./token";

export type Nep171EventKind = NftMint[] | NftTransfer[] | NftBurn[];
export declare class Nep171Event extends NearEvent {
    version: string;
    event_kind: Nep171EventKind;
    constructor(version: string, event_kind: Nep171EventKind);
}

export declare class NftMint {
    owner_id: AccountId;
    token_ids: TokenId[];
    memo?: string;
    constructor(owner_id: AccountId, token_ids: TokenId[], memo?: string);
    /** Logs the event to the host. This is required to ensure that the event is triggered
     * and to consume the event. */
    emit(): void;
    /** Emits an nft mint event, through `near.log`,
     * where each [`NftMint`] represents the data of each mint. */
    static emit_many(data: NftMint[]): void;
}

export declare class NftTransfer {
    old_owner_id: AccountId;
    new_owner_id: AccountId;
    token_ids: TokenId[];
    authorized_id?: AccountId;
    memo?: string;
    constructor(old_owner_id: AccountId, new_owner_id: AccountId, token_ids: TokenId[], authorized_id?: AccountId, memo?: string);
    /** Logs the event to the host. This is required to ensure that the event is triggered
     * and to consume the event. */
    emit(): void;
    /** Emits an nft transfer event, through `near.log`,
     * where each [`NftTransfer`] represents the data of each transfer. */
    static emit_many(data: NftTransfer[]): void;
}

export declare class NftBurn {
    owner_id: AccountId;
    token_ids: TokenId[];
    authorized_id?: string;
    memo?: string;
    constructor(owner_id: AccountId, token_ids: TokenId[], authorized_id?: string, memo?: string);
    /** Logs the event to the host. This is required to ensure that the event is triggered
     * and to consume the event. */
    emit(): void;
    /** Emits an nft burn event, through `near.log`,
     * where each [`NftBurn`] represents the data of each burn. */
    static emit_many(data: NftBurn[]): void;
}