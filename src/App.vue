<template>
  <div id="app">
    <p v-text="titile"></p>
    <ul >
      <li v-for="item in items" :class="{finished: item.isFinished}" @click="toggleFinish(item)">
        {{item.label}}
      </li>
    </ul>
    <input v-model="newItem" @keyup.enter="addNew">
    <made msgdog='you die'
          v-on:tellme='listenToMyBoy'></made>
    <p>child tells me:{{childWords}}</p>
  </div>
</template>

<script>
import Store from './store'
import Made from './components/made'
console.log(Store)
export default {
  data(){
    return{
     titile:"this is apple",
     items:Store.fetch(),
     newitem: '',
     childWords:''
   }
  },

  components:{Made},
  watch:{
      items:{
        handler:function(items){
           Store.save(items)
        },
          deep:true
      }
   },
  methods:{
     toggleFinish:function(item){
       item.isFinished=!item.isFinished
     },
     events:{
       tellme:function(msg){
        this.childWords=msg;
       }
     },
     addNew:function(){
        console.log(this.newItem)
        this.items.push({
           label:this.newItem,
           isFinished:false
        })
        this.newItem=""
        this.$broadcast('onAddnew',this.items)
     },
     listenToMyBoy:function(msg){
          this.childWords=msg;
     }
  }
}
</script>

<style>
.finished{
  text-decoration:underline;
}
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
