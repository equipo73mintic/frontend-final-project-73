<template>
    <v-app id="inspire">
        <v-app-bar app color="deep-purple darken-4" dark>

            <v-toolbar-title>PageName</v-toolbar-title>
            <v-spacer></v-spacer>

            <v-btn
            icon
            class="mr-5"
            :to="{path: '/login'}"
            >
                <v-icon> mdi-login </v-icon>
                <span>Log In</span>
            </v-btn>
        </v-app-bar>

        <v-main class="">
            <v-container>
                 <router-view/>
            </v-container>
    </v-main>
    </v-app>
</template>

<style>
#landing {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
