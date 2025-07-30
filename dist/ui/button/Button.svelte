<script lang="ts">
	import { tv } from 'tailwind-variants';
	import clsx from 'clsx';
	import { sizes } from '../../styles/size.js';

	let { uiSize, children, class: _class, ...props } = $props();

	let style = tv({
		base: `bg-gray-200`,
		variants: {
			uiSize: sizes
		},
		defaultVariants: {}
	});
	const finalClass = $derived(style({ uiSize, class: clsx(_class) }));
</script>

<button class={finalClass} {...props}>
	{#if props.icon}
		{@render props.icon?.()}
	{/if}
	{#if children}
		{@render children?.()}
	{/if}
</button>
