<template>
  <div >
    <b-container>
    
        <b-card
          :title="element.titulo"
        >

        <b-card-text>
           {{ element.descripcion }}
        </b-card-text>


        </b-card>
   
    </b-container>

  </div>
</template>

<script>
export default {

    created(){
        this.find();
        
    },

  data() {
    return {
      element: Object,
    };
  },
  methods: {
    find: function () {
        fetch("http://127.0.0.1:8000/api/pieza/"+this.$route.params.id+"/?format=json")
        .then(res => res.json())
        //.then(res => console.log(res[0].id))
        .then(res => this.element = res)
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