<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'

const isLogin = ref(true)
const authStore = useAuthStore()

const handleSubmit = () => {
  authStore.login()
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-xl w-96">
      <div class="flex justify-center mb-6">
        <img src="/logo.png" alt="HeronFit" class="h-16">
      </div>
      <h1 class="text-2xl font-bold mb-6 text-center">HeronFit Admin Portal</h1>
      
      <div class="flex mb-6">
        <button 
          class="flex-1 py-2 rounded-l"
          :class="isLogin ? 'bg-blue-600 text-white' : 'bg-gray-200'"
          @click="isLogin = true"
        >
          Login
        </button>
        <button 
          class="flex-1 py-2 rounded-r"
          :class="!isLogin ? 'bg-blue-600 text-white' : 'bg-gray-200'"
          @click="isLogin = false"
        >
          Register
        </button>
      </div>

      <form @submit.prevent="handleSubmit" class="space-y-4">
        <template v-if="isLogin">
          <div>
            <label class="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              placeholder="admin@heronfit.com"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              placeholder="••••••••"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
          </div>
        </template>
        
        <template v-else>
          <div>
            <label class="block text-sm font-medium text-gray-700">First Name</label>
            <input 
              type="text" 
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Last Name</label>
            <input 
              type="text" 
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input 
              type="password" 
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
          </div>
        </template>

        <button 
          type="submit" 
          class="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors"
        >
          {{ isLogin ? 'Login' : 'Register' }}
        </button>
      </form>
    </div>
  </div>
</template>