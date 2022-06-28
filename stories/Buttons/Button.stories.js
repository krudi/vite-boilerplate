import KButton from '../../components/Global/Button.vue'

export default {
	title: 'Example of a button',
	component: KButton,
	argTypes: {
		backgroundColor: { control: 'color' },
		onClick: {},
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg']
		}
	}
}

const Template = (args) => ({
	components: { KButton },
	setup() {
		return { args }
	},
	template: '<k-button v-bind="args" />'
})

export const Primary = Template.bind({})
Primary.args = {
	label: 'Button',
	primary: true
}

export const Secondary = Template.bind({})
Secondary.args = {
	label: 'Button'
}

export const Small = Template.bind({})
Small.args = {
	label: 'Small',
	size: 'sm'
}

export const Medium = Template.bind({})
Medium.args = {
	label: 'Medium',
	size: 'md'
}

export const Large = Template.bind({})
Large.args = {
	label: 'Large',
	size: 'lg'
}
