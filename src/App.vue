<template>
	<div class="app">
		<app-header></app-header>
		<main class="app-content">
			<router-view></router-view>
		</main>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from "vue-class-component";
import AppHeader from "./components/AppHeader.vue";

@Component({
	components: {
		AppHeader
	}
})
export default class App extends Vue {

}
</script>

<style lang="scss">
	html, body {
		margin: 0;
	}

	.app-content{

	}

</style>