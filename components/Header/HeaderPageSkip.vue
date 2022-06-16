<template>
	<NuxtLink
		class="header-page-skip"
		id="page-index"
		to="/"
		title="Skip to content"
	>
		Skip to content
	</NuxtLink>
</template>

<script>
	export default {
		name: 'HeaderPageSkip'
	}
</script>

<style
	lang="scss"
	scoped
>
	.header-page {
		&-skip {
			position: absolute;
			left: 50%;
			height: 3.125rem;
			padding: 0 0.625rem 0 0.625rem 0;
			color: $white !important;
			line-height: 3.125rem;
			background-color: $blue-100;
			transform: translate(-50%, -100%);
			transition: transform .3s;
			&:active,
			&:focus {
				transform: translate(-50%, 10%);
			}
		}
	}
</style>
