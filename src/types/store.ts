export interface IItem {
    id: Number,
    name: string,
    items?: IItem[]
}

export interface IStoreState{
    items: IItem[],
    addedItems: IItem[]
    loading: boolean,
    history: IHistoryItem[]
}

export interface IHistoryItem {
    action: "delete" | "add",
    item: IItem,
    at: number
}