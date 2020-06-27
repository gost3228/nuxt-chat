<template>
  <v-flex xs12>
    <v-text-field
      label="Введите сообщение"
      outlined
      v-model="text"
      @keydown.enter="send"
    >
    </v-text-field>
    <v-btn icon @click="send" class="btn-send">
      <v-icon>mdi-send</v-icon>
    </v-btn>
  </v-flex>
</template>

<script>
	export default {
		name: "ChatForm",
    data: () => ({
      text: '',
    }),
    methods: {
		  send() {
		    this.$socket.client.emit('createMessage', {
		      text: this.text,
          id: this.$store.state.user.id
        }, data => {
		      if (typeof data === 'string') {
            alert(data)
          } else {
		        this.text = ''
          }
        })
      }
    }
	}
</script>

<style scoped>
.btn-send {
  position: absolute;
  right: 25px;
  top: 55%;
  transform: translateY(-50%);
}
</style>
