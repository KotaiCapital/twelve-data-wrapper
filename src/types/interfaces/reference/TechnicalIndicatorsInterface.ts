// For the HTTP route and API parameters
export interface TechnicalIndicatorsRequest {
    // No input parameters
}

// For individual parameter details
interface ParameterDetails {
    default: string | number;
    range?: string[] | number[];
    min_range?: number;
    max_range?: number;
    type: 'string' | 'int' | 'float' | 'array';
}

// For individual output values
interface OutputValues {
    default_color: string;
    display: 'line' | 'histogram' | 'candle' | 'points';
    min_range?: number;
    max_range?: number;
}

// For tinting values
interface TintingValues {
    display: string;
    color: string;
    transparency: number;
    lower_bound: string | number;
    upper_bound: string | number;
}

// For individual technical indicator
interface TechnicalIndicator {
    enable: boolean;
    full_name: string;
    description: string;
    type: string;
    overlay: boolean;
    parameters: Record<string, ParameterDetails>;
    output_values: Record<string, OutputValues>;
    tinting?: TintingValues[];
}

// The main interface for the API response
export type TechnicalIndicatorsResponse = TechnicalIndicator[];