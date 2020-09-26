import { FullTodoItem } from './itemTypes';
export declare type ModifyItem = Partial<FullTodoItem> & Pick<FullTodoItem, 'id'>;
export declare type AddItem = Omit<FullTodoItem, 'id' | 'order'>;
