import Vue from "vue";
import Vuex from "vuex";
import {AxiosResponse} from "axios";
import http from "../axios";
import {IItem, IStoreState, IHistoryItem} from "../types/store";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        items: [],
        addedItems: [],
        loading: false,
        history: []
    } as IStoreState,
    mutations: {
        setItems(state, newItems: IItem[]): void{
            state.items = newItems;
        },
        setAddedItems(state, newValue: IItem[]){
            state.addedItems = newValue;
        },
        setHistory(state, newHistory: IHistoryItem[]){
            state.history = newHistory;
        }
    },
    actions: {
        addItem(context, item: IItem): void{
            context.commit('setAddedItems', [...context.state.addedItems, item]);
            context.commit("setHistory", [...context.state.history, {
                item: item,
                action: "add",
                at: Date.now()
            }])
        },
        removeItem(context, item: IItem){
            context.commit('setAddedItems', context.state.addedItems.filter((x: IItem) => x != item));
            context.commit("setHistory", [...context.state.history, {
                item: item,
                action: "remove",
                at: Date.now()
            }])
        },
        getItems(context): void{
            http.get('/')
                .then((res: AxiosResponse) => {
                    context.commit('setItems', res.data.items);
                })
        }
    }

});

export default store;