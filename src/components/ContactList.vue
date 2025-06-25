<template>
  <section class="container">
    <header class="header">
      <h1>My Contacts</h1>
      <div class="custom-select-wrapper">
        <select v-model="sortOrder" @change="sortUsers">
          <option value="asc">ascending</option>
          <option value="desc">descending</option>
        </select>
      </div>
    </header>
    <div class="contact-grid">
      <ContactCard v-for="user in paginatedUsers" :key="user.email" :user="user" />
    </div>
    <Pagination
      :current-page="currentPage"
      :total-pages="totalPages"
      @update:current-page="currentPage = $event"
    />
  </section>
</template>
<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import axios from 'axios'
import ContactCard from './ContactCard.vue'
import Pagination from './Pagination.vue'
import type { User, ApiResponse } from '../types/user'

const users = ref<User[]>([])
const sortOrder = ref<'asc' | 'desc'>('asc')
const currentPage = ref(1)
const usersPerPage = 10

const fetchUsers = async () => {
  try {
    const response = await axios.get<ApiResponse>('https://api.randomuser.me/?results=30')
    users.value = response.data.results
    sortUsers()
  } catch (error) {
    console.error('Error fetching users:', error)
  }
}

const sortUsers = () => {
  users.value.sort((a, b) => {
    const nameA = `${a.name.first} ${a.name.last}`.toLowerCase()
    const nameB = `${b.name.first} ${b.name.last}`.toLowerCase()
    return sortOrder.value === 'asc' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA)
  })
}

const totalPages = computed(() => Math.ceil(users.value.length / usersPerPage))

const paginatedUsers = computed(() => {
  const start = (currentPage.value - 1) * usersPerPage
  const end = start + usersPerPage
  return users.value.slice(start, end)
})
watch([sortOrder], ([sorted]) => {
  if (sorted) {
    currentPage.value = 1
  }
})
onMounted(fetchUsers)
</script>
