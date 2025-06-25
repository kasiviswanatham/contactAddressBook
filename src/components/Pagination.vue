<template>
  <nav class="pagination">
    <button :disabled="currentPage === 1" @click="changePage(currentPage - 1)">Previous</button>
    <span>Page {{ currentPage }} of {{ totalPages }}</span>
    <button :disabled="currentPage === totalPages" @click="changePage(currentPage + 1)">
      Next
    </button>
  </nav>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{
  currentPage: number
  totalPages: number
}>()

const emit = defineEmits<{
  (e: 'update:current-page', page: number): void
}>()

const changePage = (page: number) => {
  if (page >= 1 && page <= props.totalPages) {
    emit('update:current-page', page)
  }
}
</script>

<style scoped lang="scss">
@import '../assets/main.scss';

.pagination {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;

  button {
    padding: 8px 16px;
    border: 1px solid $primary-color;
    background-color: white;
    color: $primary-color;
    border-radius: 4px;
    cursor: pointer;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:hover:not(:disabled) {
      background-color: $primary-color;
      color: white;
    }
  }
}
</style>
