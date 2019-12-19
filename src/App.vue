<template>
  <v-app>
    <TableData />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import TableData from "./components/TableData.vue";

export default Vue.extend({
  name: "App",
  components: {
    TableData
  }
});
</script>

<style >
html {
  overflow: hidden;
}
html {
  overflow: hidden;
}
h1 {
  text-align: center;
}

* {
  margin: 0px;
}

input[type="text"] {
  padding: 25px;
}

.btn {
  margin-top: 50px;
  margin-left: 40%;
  padding: 25px;
  text-align: center;
}
.removebtn {
  margin-top: 50px;
  margin-left: 10%;
}

th.text-left {
  background-color: lightslategray;
}
button.removebtn.v-btn.v-btn--contained.theme--light.v-size--default {
  background-color: lightcoral;
}

button.btn.btn-info.v-btn.v-btn--contained.theme--light.v-size--default {
  background-color: lightgreen;
}
</style>  