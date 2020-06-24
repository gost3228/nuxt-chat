<template>
  <v-app app>
    <v-navigation-drawer app v-model="drawer">
      <v-list subheader>
        <v-subheader>Список людей в комнате</v-subheader>

        <v-list-item
          v-for="user in users"
          :key="user.name"
          @click.prevent=""
        >
          <v-list-item-content>
            <v-list-item-title>{{ user.name }}</v-list-item-title>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon :color="user.id === 2 ? 'primary' : 'grey'">mdi-chat</v-icon>
          </v-list-item-action>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-btn icon @click="exit">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title>Чат комнаты {{ user.room }}</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <div>
        <nuxt />
      </div>
    </v-main>
  </v-app>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
export default {
  data: () => ({
    drawer: false,
    users: [
      { id: 1, active: true, name: 'Jason Oner'},
      { id: 2, active: true, name: 'Ranee Carlson' },
      { id: 3, name: 'Cindy Baker' },
      { id: 4, name: 'Ali Connors' },
    ]
  }),
  computed: mapState(['user']),
  methods: {
    ...mapMutations(['clearData']),
    exit() {
      this.$router.push('/?message=leftChat')
      this.clearData()
    }
  }
}
</script>
