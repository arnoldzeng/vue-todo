<template>
  <div class="hello">
    <h1>{{ msg }}</h1><br>
    <h1>{{ msg2 }}</h1><br>
    <h1>{{ msg3 }}</h1><br>


  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Heorld111!',
      msg2:'this is apple1111',
      msg3:'we are banb'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
