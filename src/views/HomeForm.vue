<template>
  <h1>oii</h1>
  <button @click="getTickets">Get Tickets</button>
  <div v-for="ticket in tickets" :key="ticket.id">
    <p>{{ ticket }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      tickets: []
    }
  },
  methods: {
    async getTickets() {
      const response = await axios.get('http://localhost:3000/transport').then(response => {
        this.tickets = response.data
      })
      console.log(response)
      return response.data
    }
  }
}
</script>
