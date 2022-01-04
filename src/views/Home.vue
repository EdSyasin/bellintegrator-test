<template>
	<div class="home-view">
		<transition-group name="items" tag="ul" class="home-view__items">
			<app-item
				class="home-view__item"
				v-for="item in items"
				:item="item"
				:key="item.id"
				@click="addItem(item)"
			></app-item>
		</transition-group>
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
	get items (): IItem[] {
		return this.$store.state.items.filter((x: IItem) => !this.addedItems.includes(x));
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


}

</script>

<style lang="scss" scoped>
	.home-view{
		padding: 0 16px;
		display: flex;
		justify-content: space-around;

		&__items{
			list-style: none;
			padding: 0;
			width: 270px;
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