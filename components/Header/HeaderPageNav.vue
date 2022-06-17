<template>
	<nav class="header-page-nav">
		<ul>
			<li>
				<NuxtLink
					to="/"
					title="Home page">
					Home
				</NuxtLink>
			</li>
			<li>
				<NuxtLink
					to="/error"
					title="Error page">
					Error
				</NuxtLink>
			</li>
		</ul>
	</nav>
</template>

<script>
	export default {
		name: 'HeaderPageNav'
	}
</script>

<style lang="scss" scoped>
.header-page {
    &-nav {

        width: 100%;
        padding: 1.625rem 0;
        border-bottom: 1px solid $white-200;
        ul {

            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin: 0;
            padding: 0;
            list-style: none;
            li {

                margin-right: 1.875rem;
                &:last-child {

                    margin-right: 0;

                }
                a {
                    font: {
                        weight: 500;

                    }

                }

            }

        }

    }

}
</style>
