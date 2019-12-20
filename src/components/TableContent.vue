<template>
  <div class="tableRows">
    <h1>Table Data</h1>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Contact</th>
            <th class="text-left">Id</th>
          </tr>
        </thead>
      </template>
    </v-simple-table>

    <v-responsive class="overflow-y-auto" max-height="500">
      <v-card>
        <div>
          <v-simple-table>
            <template v-slot:default>
              <tbody>
                <tr
                  :key="post.Id"
                  v-for="(post) in posts"
                  :class="{highlight:post.removeSelectedItem}"
                  @click="$set(post, 'removeSelectedItem', !post.removeSelectedItem)"
                >
                  <td>
                    <input type="text" placeholder="Add name.." v-model="post.name" />
                  </td>
                  <td>
                    <input type="text" placeholder="Add contact.." v-model="post.contact" />
                  </td>
                  <td>
                    <input type="text" placeholder="Add Id.." v-model="post.id" />
                  </td>
                  <!-- <td>
                      <v-checkbox class="large" large v-model="post.removeCheckedItem" />
                  </td>-->
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </div>
      </v-card>
    </v-responsive>
  </div>
</template>




<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class TableContent extends Vue {
  @Prop({ required: true }) posts!: null;
}
</script>

<style>
.tableRows {
  overflow-y: auto;
  scroll-behavior: smooth;
}
tr.highlight {
  background: lightcoral;
}

h2 {
  margin-bottom: 0px;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
td:hover {
  background: lightblue;
}
</style>


