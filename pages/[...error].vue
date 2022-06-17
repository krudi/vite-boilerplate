<template>
	<div>
		<div class="page-error">
			<div class="k-container">
				<span class="page-error-id"> 404 </span>
				<div class="page-error-box">
					<div class="page-error-box-header">
						<span class="page-error-box-header-title"> error </span>
						<span class="page-error-box-header-desc"> 404 </span>
					</div>
					<div class="page-error-box-content">
						<span class="page-error-box-content-title">
							Not Found
						</span>
						<span class="page-error-box-content-desc">
							The document/file requested was not found on this
							server.
						</span>
						<NuxtLink
							class="page-error-box-content-link"
							title="Home page"
							to="/"
							rel="index"
						>
							Go to the "Home" page
						</NuxtLink>
					</div>
					<div class="page-error-box-footer">
						<span class="page-error-box-footer-desc">
							Looks like this page is unavailable. Please contact
							the administration from the site.
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import MetaTags from '~/plugins/meta-tags'

	export default {
		name: 'error',
		setup() {
			definePageMeta({
				layout: 'error'
			})
			useMeta(
				MetaTags({
					title: 'vite-boilerplate :: Error'
				})
			)
		}
	}
</script>

<style lang="scss" scoped>
.page-error {

    min-height: 100vh;
    padding: 0 0 7rem;
    text-align: center;
    background: $white url( "/images/page-error-background.webp" ) no-repeat;
    background-size: cover;
    &-id {

        color: $white;
        line-height: 2.6;
        text-shadow: 1px 1px $black;
        font: {
            size: $xxl;
            weight: 700;

        }

    }
    &-box {

        width: 60%;
        margin: 0 auto;
        text-align: left;
        border: 2px solid $white-100;
        &-header {

            display: flex;
            justify-content: space-between;
            padding: 1.875rem 1.625rem;
            background-color: $white-100;
            &-title {

                text-transform: uppercase;
                font: {
                    weight: 700;

                }

            }
            &-desc {

                display: block;

            }

        }
        &-content {

            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            padding: 5.625rem 1.625rem;
            background-color: $white;
            &-title {

                display: block;
                margin-bottom: 0 0 .625rem 0;
                font: {
                    weight: 700;

                }

            }
            &-desc {

                color: $grey;

            }
            &-link {

                display: block;
                margin: .625rem 0;
                color: $grey;

            }

        }
        &-footer {

            padding: 1.25rem 1.625rem;
            background-color: $white-100;
            &-desc {

                color: $grey;

            }

        }

    }

}
</style>
