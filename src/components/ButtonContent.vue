<template>
  <div>
    <p style="text-align:center">Click "+" to add a row</p>
    <p style="text-align:center">Double click to select</p>
    <p style="text-align:center">Click "-" to delete selected row</p>
    <v-btn type="button" class="btn btn-info large" @click="add">
      <i class="material-icons large">add</i>
    </v-btn>

    <v-btn type="button" class="btn removebtn large" @click="clear">
      <i class="material-icons">remove</i>
    </v-btn>
  </div>
</template>


<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class ButtonContent extends Vue {
  /**
   * add event.
   */
  add() {
    this.$emit("add");
  }
  /**
   * clear event.
   */
  clear() {
    this.$emit("clear");
  }
}
</script>
  




