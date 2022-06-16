<template>
	<div>
		<HeaderPage />

		<slot />
	</div>
</template>

<script>
	import HeaderPage from '~/components/Header/HeaderPage'

	export default {
		name: 'default',
		components: {
			HeaderPage
		}
	}
</script>
