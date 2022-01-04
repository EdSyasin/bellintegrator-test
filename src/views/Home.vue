<template>
	<div class="home-view">

		<section class="home-view__first-column">
			<input class="home-view__filter-input" v-model="filter">
			<transition-group name="items" tag="ul" class="home-view__items">
				<app-item
					class="home-view__item"
					v-for="item in items"
					:item="item"
					:key="item.id"
					@click="addItem(item)"
				></app-item>
			</transition-group>
		</section>
		<transition-group name="items" tag="ul" class="home-view__items">
			<app-item
				class="home-view__item"
				v-for="item in addedItems"
				:item="item"
				:key="item.id"
				added
				@click="removeItem(item)"
			></app-item>
		</transition-group>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {IItem} from "../types/store";
import AppItem from "../components/AppItem.vue";

@Component({
	components: {AppItem}
})
export default class Home extends Vue {

	filter: string = "";

	get items (): IItem[] {
		if (!this.filter){
			return this.$store.state.items.filter((x: IItem) => !this.addedItems.includes(x));
		} else {
			const filteredItems = this.$store.state.items.filter((x: IItem) => !this.addedItems.includes(x) && this.checkReg(this.filter, x));
			return [...filteredItems].sort((a: IItem, b: IItem) => {
				return this.checkReg(this.filter, b) - this.checkReg(this.filter, a);
			});
		}
	}

	get addedItems (): IItem[] {
		return this.$store.state.addedItems;
	}

	addItem(item: IItem){
		this.$store.dispatch("addItem", item);
	}

	removeItem(item: IItem){
		this.$store.dispatch("removeItem", item);
	}

	checkReg(reg: string, item: IItem): number{
		const allNameStr = !item.items ? item.name : item.items.reduce((acum: string, item: IItem) => {
			return acum+= ` ${item.name}`;
		}, item.name)
		const matchCount = allNameStr.match(new RegExp(reg, 'g'));
		return matchCount ? matchCount.length : 0;
	}

}

</script>

<style lang="scss" scoped>
	.home-view{
		padding: 0 16px;
		display: flex;
		justify-content: space-around;

		&__filter-input{
			width: 100%;
		}

		&__items{
			list-style: none;
			padding: 0;
			width: 300px;
		}

		&__item {
			transition: all 0.5s;
		}

	}

	.items-enter, .items-leave-to
		/* .list-complete-leave-active до версии 2.1.8 */ {
		opacity: 0;
		transform: translateX(30px);
	}
	.items-leave-active {
		position: absolute;
	}
</style>