<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const navigation = [
  { name: 'Dashboard', path: '/dashboard', icon: '📊' },
  { name: 'Booking Management', path: '/dashboard/booking', icon: '📅' },
  { name: 'User Management', path: '/dashboard/users', icon: '👥' },
  { name: 'Session Management', path: '/dashboard/sessions', icon: '⏱️' },
  { name: 'Announcements', path: '/dashboard/announcements', icon: '📢' },
  { name: 'Analytics', path: '/dashboard/analytics', icon: '📈' }
]

const handleLogout = () => {
  router.push('/authentication')
}
</script>

<template>
  <aside class="bg-primary text-white h-screen fixed left-0 w-64 flex flex-col">
    <div class="p-4">
      <img src="/logo.png" alt="HeronFit" class="h-8 mb-4">
      <h1 class="text-xl font-bold">HeronFit Admin</h1>
    </div>
    <nav class="flex-1 overflow-y-auto">
      <router-link
        v-for="item in navigation"
        :key="item.name"
        :to="item.path"
        class="flex items-center px-4 py-2 hover:bg-primary-dark transition-colors"
        :class="$route.path === item.path ? 'bg-primary-dark' : ''"
      >
        <span class="mr-2">{{ item.icon }}</span>
        {{ item.name }}
      </router-link>
    </nav>
    <button 
      @click="handleLogout"
      class="m-4 p-2 bg-primary-dark hover:bg-primary-light transition-colors rounded text-center"
    >
      Logout
    </button>
  </aside>
</template>