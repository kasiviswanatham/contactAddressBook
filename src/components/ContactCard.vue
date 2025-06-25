<template>
  <article class="contact-card">
    <img
      :src="user.picture.medium"
      :alt="`${user.name.first} ${user.name.last}`"
      class="contact-image"
    />
    <div class="contact-info">
      <div class="name-section">
        <h3>{{ user.name.first }} {{ user.name.last }}</h3>
      </div>

      <div class="address-call">
        <div class="address">
          <p class="street">{{ user.location.street.number }} {{ user.location.street.name }}</p>
          <p class="city">{{ user.location.postcode }} {{ user.location.city }}</p>
          <p class="country">{{ user.location.country }}</p>
        </div>
        <button class="call-button">Call {{ user.phone }}</button>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { User, ApiResponse } from '../types/user'

defineProps<{
  user: User
}>()
</script>
