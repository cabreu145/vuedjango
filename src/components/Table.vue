<template>
  <div >
    <b-container>

      <b-table
       striped hiver
       :items="elements"
       :fields=fields></b-table>
   
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
      fields: [
        {
          key:'id',
          sortable:true
        },
        {
          key:'titulo',
          sortable:false
        },
        {
          key:'descripcion',
          sortable:false
        },
        {
          key:'volumen',
          sortable:false
        },
        {
          key:'ancho',
          sortable:false
        },
        {
          key:'precio_venta',
          sortable:true,
          variant: "danger"
        }
      ],
      elements: []
    };
  },
  methods: {
    findAll: function () {
        fetch('http://127.0.0.1:8000/api/pieza/?format=json')
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