<template>
    <div id="app">
  <table>
  <tr>
    <th>Id's</th>  
  </tr>
  <tr v-for="item in items" :class="{highlight:selected.includes(item.id)}" :key="item.index"
    @click="selected.includes(item.id)? selected.splice(selected.indexOf(item.id), 1) : selected.push(item.id)">
    <td>{{item.id}}</td>    
  </tr>
</table>
<button @click="deleteButon">delete</button>
</div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SelectItem extends Vue{
 items = [
   {
     "id": "1"
   },
   {
     "id": "2"
   },
   {
     "id": "3"
   },
   {
     "id": "4"
   },
   {
     "id": "5"
   },
 ]
   
  selected= []

 deleteButon(index: any){
   this.selected.splice((index), 5);
   console.log(index)
   
 }


}
</script>
<style>

li:hover {
  color: red;
}

tr.highlight {
  background: yellow;
}

h2 {
  margin-bottom: 0px;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  text-align: center;
}
td:hover {
  background-color: lightblue;
}



</style>