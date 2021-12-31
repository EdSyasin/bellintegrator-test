<template>
	<header class="app-header">
		<nav class="app-header__nav">
			<ul class="app-header__menu">
				<li v-for="menuItem in menuList" :key="menuItem.link">
					<router-link :to="menuItem.link">{{menuItem.text}}</router-link>
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
		}
	];
}
</script>

<style scoped>

</style>