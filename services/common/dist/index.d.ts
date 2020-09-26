export * from './itemTypes';
export * from './apiTypes';
export declare const itemSchema: {
    $schema: string;
    definitions: {
        AddItem: {
            additionalProperties: boolean;
            properties: {
                state: {
                    $ref: string;
                };
                text: {
                    maxLength: number;
                    minLength: number;
                    type: string;
                };
            };
            type: string;
        };
        ModifyItem: {
            additionalProperties: boolean;
            properties: {
                id: {
                    type: string;
                };
                order: {
                    type: string;
                };
                state: {
                    $ref: string;
                };
                text: {
                    maxLength: number;
                    minLength: number;
                    type: string;
                };
            };
            type: string;
        };
        TodoItemState: {
            enum: string[];
            type: string;
        };
    };
};
