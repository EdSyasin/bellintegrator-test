<template>
	<div class="history-view">
		<transition-group name="items" tag="ul" class="history-view__items">
			<history-item
				class="history-view__item"
				v-for="item in historyItems"
				:item="item"
				:key="item.at"
			></history-item>
		</transition-group>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import HistoryItem from "../components/HistoryItem.vue";
import { IHistoryItem } from "../types/store";

@Component({
	components: {
		HistoryItem
	}
})
export default class History extends Vue {
	get filter(): string {
		return this.$route.meta?.historyAction || "";
	}

	get historyItems(): IHistoryItem[]{
		if (this.filter) {
			return this.$store.state.history.filter((x: IHistoryItem) => x.action === this.filter);
		} else return this.$store.state.history;
	}
}

</script>

<style lang="scss" scoped>
	.history-view{

		&__items{
			list-style: none;
			padding: 0;
			width: 315px;
			margin-left: auto;
			margin-right: auto;
		}

		&__item{
			transition: all 0.5s;
			margin-bottom: 16px;
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