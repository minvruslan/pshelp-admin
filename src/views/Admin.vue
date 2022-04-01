<template>
  <div class="admin">
    {{ getSession.name }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Admin',
  computed: {
    ...mapGetters('auth', [
      'getSession'
    ])
  }
}
</script>
