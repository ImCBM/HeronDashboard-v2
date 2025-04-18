<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'danger' | 'success'
  size?: 'sm' | 'md' | 'lg'
  icon?: string
  iconPosition?: 'left' | 'right'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  iconPosition: 'left'
})

const variantClasses = {
  primary: 'bg-primary hover:bg-primary-dark text-white',
  secondary: 'bg-secondary hover:bg-secondary-dark text-white',
  danger: 'bg-red-600 hover:bg-red-700 text-white',
  success: 'bg-green-600 hover:bg-green-700 text-white'
}

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2',
  lg: 'px-6 py-3 text-lg'
}
</script>

<template>
  <button
    :class="[
      'rounded-md font-medium transition-colors flex items-center justify-center gap-2',
      variantClasses[variant],
      sizeClasses[size]
    ]"
  >
    <img
      v-if="icon && iconPosition === 'left'"
      :src="icon"
      alt="Button icon"
      class="w-5 h-5"
    />
    <slot></slot>
    <img
      v-if="icon && iconPosition === 'right'"
      :src="icon"
      alt="Button icon"
      class="w-5 h-5"
    />
  </button>
</template>