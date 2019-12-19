<template>
  <div>
    <div>
      <TableContent v-bind:posts="posts" />
    </div>
    <div class="buttons">
      <button-content @add="addItem" @clear="clearChecked" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios, { AxiosResponse } from "axios";
import VueAxios from "vue-axios";
import ButtonContent from "./ButtonContent.vue";
import TableContent from "./TableContent.vue";

interface IEntry {
  id: number;
  name: string;
  contact: string;
  addItem: string;
  removeItem: string;
  push: any;
  pop: any;
  filter: any;
}

@Component({
  components: {
    ButtonContent,
    TableContent
  }
})
export default class TableData extends Vue {
  posts: null | IEntry = null;

  // Fetching Data from JSON file

  async mounted() {
    console.log(this.posts);
    try {
      const response: AxiosResponse<IEntry> = await axios.get("/details.json");
      console.log(`status of response is ${response.status}`);
      this.posts = response.data;
      console.log(this.posts);
    } catch (e) {
      console.log(e);
    }
  }

  // methods

  /**
   * Gets called when the user clicks on +  button
   * @function
   */

  addItem() {
    if (this.posts !== null) {
      let emitItem = this.posts.push({
        name: "",
        contact: "",
        id: ""
      });
    } else {
      console.log("error");
    }
  }

  clearChecked(index: any) {
    if (this.posts !== null) {
      this.posts = this.posts.filter((post: any) => !post.removeSelectedItem);
      console.log(this.posts);
    } else {
      console.log("error");
    }
  }
}
</script>


