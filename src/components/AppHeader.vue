<template>
	<header class="app-header">
		<nav class="app-header__nav">
			<ul class="app-header__menu">
				<li class="app-header__menu-item" v-for="menuItem in menuList" :key="menuItem.link">
					<router-link
							:to="menuItem.link"
							class="app-header__link"
							:active-class="'app-header__link_active'"
							exact
					>
						{{menuItem.text}}
					</router-link>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

interface IMenuItem {
	text: string,
	link: string
}

@Component
export default class AppHeader extends Vue {
	public menuList: IMenuItem[] = [
		{
			text: "Главная",
			link: "/"
		},
		{
			text: "История",
			link: "/history"
		},
		{
			text: "История добавлений",
			link: "/history/add"
		},
		{
			text: "История удалений",
			link: "/history/remove"
		},

	];
}
</script>

<style lang="scss" scoped>
	.app-header{
		$self: &;

		&__menu{
			display: flex;
			list-style: none;
			padding: 0;
		}

		&__link{
			display: block;
			padding: 10px 15px;
			text-decoration: none;
			color: black;

			&_active{
				border-bottom: 1px solid black;
			}
		}
	}
</style>