<template>
	<li class="app-item">
		<div class="app-item__title">
			<span>{{item.id}}. {{item.name}}</span>
		</div>
		<ul class="app-item__sub-items">
			<li
					v-for="subItem in item.items"
					:key="subItem.id"
					class="app-item__sub-item"
			>
				<span>{{subItem.id}}. {{subItem.name}}</span>
			</li>
		</ul>
		<button
				class="app-item__button"
				@click="$emit('click')"
		>
			{{added ? "-" : "+"}}
		</button>
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
export default class AppItem extends Vue{

}
</script>

<style lang="scss" scoped>
	.app-item{
		padding: 16px;
		border-radius: 25px;
		width: 270px;
		margin-bottom: 16px;
		background: #f9f9f9;

		&__sub-items, &__title{
			margin-bottom: 16px;
		}

		&__title{
			font-weight: 700;
		}

		&__sub-items{
			list-style: none;
			padding-left: 16px;
		}

		&__button{
			width: 100%;
			padding: 8px 0;
			border: none;
		}
	}
</style>