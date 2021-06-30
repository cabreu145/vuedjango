<template>
  <div >
    <b-container fluid>
      Listado de Categorias
      

    <div  v-for="e in elements" v-bind:key="e.id">
        <router-link  :to=" '/detalle/' + e.id ">
          <b-card
            :title="e.titulo"
          >

          <b-card-text>
              {{ e.descripcion }}
          </b-card-text>


          </b-card>
        </router-link>
    </div>
    </b-container>

  </div>
</template>

<script>
export default {

    created(){
        this.findAll()
    },

  data() {
    return {
      elements: [],
    };
  },
  methods: {
    findAll: function () {
        fetch('http://127.0.0.1:8000/api/categoria/'+this.$route.params.id+'/piezas/?format=json')
        .then(res => res.json())
        //.then(res => console.log(res[0].id))
        .then(res => this.elements = res)
    },
  },
}
</script>

<style>
.box {
  border: 3px solid #ccc;
  margin: 5px 0 0 0;
}
</style>