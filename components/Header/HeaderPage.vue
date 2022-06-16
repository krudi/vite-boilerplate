<template>
	<header class="header-page">
		<HeaderPageSkip />
		<HeaderPageNav />
	</header>
</template>

<script>
	import HeaderPageSkip from '~/components/Header/HeaderPageSkip'
	import HeaderPageNav from '~/components/Header/HeaderPageNav'

	export default {
		name: 'HeaderPage',
		components: {
			HeaderPageSkip,
			HeaderPageNav
		}
	}
</script>

<style
	lang="scss"
	scoped
>
	.header-page {

		position: sticky;
		top: 0;
		z-index: 50;
		background-color: $white;

	}
</style>
