export interface EPSRevisionsRequest {
    symbol: string;
    country?: string;
    exchange?: string;
}

interface EPSRevision {
    date: string;
    period: string;
    up_last_week: number;
    up_last_month: number;
    down_last_week: number;
    down_last_month: number;
}

export interface EPSRevisionsResponse {
    eps_revision: EPSRevision[];
    status: string;
}