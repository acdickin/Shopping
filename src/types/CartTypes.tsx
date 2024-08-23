
export interface Item {
    uuid: number;
    name: string;
    icon: string
    cost: number;
    count: number

}
export type CartItems = Item[];