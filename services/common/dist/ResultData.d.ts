interface RawResultData {
    code: number;
    msg?: string;
    result?: any;
}
interface SuccessResultData extends RawResultData {
    code: 200;
    result: any;
}
interface FailResultData extends RawResultData {
    code: number;
    msg: string;
}
export declare type ResultData = SuccessResultData | FailResultData;
export {};
