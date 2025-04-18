<script setup lang="ts">
interface Column {
  key: string
  label: string
  type?: 'text' | 'status' | 'actions'
  statusColors?: {
    [key: string]: {
      bg: string
      text: string
    }
  }
}

interface Props {
  columns: Column[]
  data: any[]
  maxHeight?: string
}

const props = withDefaults(defineProps<Props>(), {
  maxHeight: '500px'
})

const getStatusClasses = (status: string, colors: Column['statusColors']) => {
  if (!colors || !colors[status]) return 'bg-gray-100 text-gray-800'
  return `${colors[status].bg} ${colors[status].text}`
}
</script>

<template>
  <div class="bg-white rounded-lg shadow">
    <div class="overflow-x-auto">
      <div :style="{ maxHeight: maxHeight }" class="overflow-y-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50 sticky top-0">
            <tr>
              <th
                v-for="column in columns"
                :key="column.key"
                class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {{ column.label }}
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="(row, index) in data" :key="index">
              <td
                v-for="column in columns"
                :key="column.key"
                class="px-6 py-4 whitespace-nowrap"
              >
                <template v-if="column.type === 'status'">
                  <span
                    class="px-2 py-1 text-sm rounded-full"
                    :class="getStatusClasses(row[column.key], column.statusColors)"
                  >
                    {{ row[column.key] }}
                  </span>
                </template>
                <template v-else-if="column.type === 'actions'">
                  <slot :name="column.key" :row="row">
                    {{ row[column.key] }}
                  </slot>
                </template>
                <template v-else>
                  {{ row[column.key] }}
                </template>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>