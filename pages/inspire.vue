<template>
  <v-row>
    <v-col class="text-center">
      <img
        v-lazy="img"
        alt="Vuetify.js"
        class="mb-5"
      >
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
    </v-col>
  </v-row>
</template>
<script>
export default {
    data(){
        return{
            img:"123"
        }
    }
}
</script>
