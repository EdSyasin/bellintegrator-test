import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

interface IItem {
    id: Number,
    name: string,
    items?: IItem[]
}

interface IStoreState{
    items: IItem[],
    loading: boolean
}

const store = new Vuex.Store({
    state: {
        items: [],
        loading: false
    } as IStoreState,
    mutations: {
        setItems(state: IStoreState, newItems: IItem[]): void{
            state.items = newItems;
        }
    }
});

export default store;