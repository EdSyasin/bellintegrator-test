<template>
	<li class="history-item" :class="{'history-item_remove': item.action === 'remove'}">
		<div class="history-item__title">
			<span>{{item.item.id}}. {{item.item.name}}</span>
		</div>
		<div class="history-item__action">{{item.action === "add" ? "Добавлен" : "Удален"}}</div>
		<div class="history-item__date">{{new Date(item.at).toString()}}</div>
	</li>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component({
	props: {
		item: Object,
		added: Boolean
	}
})
export default class HistoryItem extends Vue{

}
</script>

<style lang="scss" scoped>
	.history-item{
		padding: 16px;
		border-radius: 25px;
		width: 270px;
		background: rgba(27,255,0,0.15);

		&_remove{
			background: rgba(255,0,37,0.15);
		}

		&__title, &__action{
			margin-bottom: 16px;
		}

		&__title{
			font-weight: 700;
		}

	}
</style>