export interface APIUsageRequest {
    format?: 'JSON' | 'CSV';
    delimiter?: string;
}

export interface APIUsageResponse {
    timestamp: string;
    current_usage: number;
    plan_limit: number;
}