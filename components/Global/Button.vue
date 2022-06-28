<template>
	<button type="button" :class="classes" @click="onClick" :style="style">{{ label }}</button>
</template>

<script>
	import { reactive, computed } from 'vue'

	export default {
		name: 'k-button',

		props: {
			label: {
				type: String,
				required: true
			},
			primary: {
				type: Boolean,
				default: false
			},
			size: {
				type: String,
				validator: function(value) {
					return ['small', 'medium', 'large'].indexOf(value) !== -1
				}
			},
			backgroundColor: {
				type: String
			}
		},

		emits: ['click'],

		setup(props, { emit }) {
			props = reactive(props)
			return {
				classes: computed(() => ({
					'k-btn': true,
					'k-btn--primary': props.primary,
					'k-btn--secondary': !props.primary,
					[`k-btn--${props.size || 'medium'}`]: true
				})),
				style: computed(() => ({
					backgroundColor: props.backgroundColor
				})),
				onClick() {
					emit('click')
				}
			}
		}
	}
</script>

<style lang="scss">
@import "../../assets/scss/abstracts/storybook";

@mixin k-btn-background-color($btnBackgroundColor) {
    background-color: $btnBackgroundColor;
    color: $white;
    &:hover, &:focus, &:active {
        background-color: lighten($btnBackgroundColor, 3%);
    }
}

.k-btn {
    padding: 0.25rem 1rem 0.25rem 1rem;
    display: block;
    overflow: visible;
    line-height: normal;
    text-transform: none;
    text-decoration: none;
    text-shadow: none;
    border: none;
    border-radius: 0.25rem;
    outline: none;
    cursor: pointer;
    user-select: none;
    transition: background-color 0.3s;
    font: {
        family: system-ui, -apple-system, "Segoe UI", roboto,
    helvetica, arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    }
    &[disabled], &:disabled {
        opacity: 0.7;
        pointer-events: none;
        &:hover, &:focus, &:active {
            opacity: 0.7;
            pointer-events: none;
        }
    }
    &--primary {
        @include k-btn-background-color($blue);
    }
    &--secondary {
        @include k-btn-background-color($blue-100);
    }
    &--sm {
        font: {
            size: 1rem;
        }
    }
    &--md {
        font: {
            size: 1.125rem;
        }
    }
    &--lg {
        font: {
            size: 1.25rem;
        }
    }
}
</style>