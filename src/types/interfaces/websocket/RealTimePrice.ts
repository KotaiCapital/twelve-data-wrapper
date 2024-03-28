type WSAction = 'subscribe' | 'unsubscribe' | 'reset' | 'heartbeat';

export interface RealTimePriceWSOutboundMessage {
    action: WSAction;
    params?: string | {
        symbol: string;
        exchange: string;
    }[];
}

export type RealTimePriceWSInboundMessage = SubscriptionStatus | RealTimePrice | RealTimePriceMetals;

interface SubscriptionStatus {
    event: 'subscribe-status';
    status: string;
    success: IndividualSubscription[];
    fails: IndividualSubscription[];
}

interface IndividualSubscription {
    symbol: string;
    exchange: string;
    country?: string;
    type: string;
}

interface RealTimePrice {
    event: 'price';
    symbol: string;
    currency: string;
    exchange: string;
    type: string;
    timestamp: number;
    price: number;
    day_volume: number;
}

interface RealTimePriceMetals {
    event: 'price';
    symbol: string;
    currency: string;
    currency_base: string;
    currency_quote: string;
    type: string;
    timestamp: number;
    price: number;
    bid: number;
    ask: number;
}