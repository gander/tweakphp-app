<script setup lang="ts">
  import { useSettingsStore } from '../../stores/settings'
  const settingsStore = useSettingsStore()
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    id="docker"
    :style="{ stroke: settingsStore.colors.foreground }"
  >
    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="5.04" cy="16" r=".5"></circle>
      <path
        d="M1.5 9.5h3v3h-3zM4.5 9.5h3v3h-3zM7.5 9.5h3v3h-3zM10.5 9.5h3v3h-3zM4.5 6.5h3v3h-3zM7.5 6.5h3v3h-3zM10.5 6.5h3v3h-3zM10.5 3.5h3v3h-3zM13.5 9.5h3v3h-3z"
      ></path>
      <path
        d="M23.5 11.5s-1.75-1.12-3-.5A3.45 3.45 0 0 0 19 8.5a3.64 3.64 0 0 0-.58 2.88 1 1 0 0 1-1 1.12H.5c0 6.25 3.83 8 7.5 8a13.76 13.76 0 0 0 12.06-7 4.68 4.68 0 0 0 3.44-2Z"
      ></path>
    </g>
  </svg>
</template>
