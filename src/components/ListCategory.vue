<template>
  <div>
    
      <ListDefault :elements-list="elements" />
    
  </div>
</template>

<script>
import ListDefault from "../partials/_ListDefault";

export default {
  components: {
    ListDefault,
  },
  created() {
    this.findAll();
  },

  data() {
    return {
      elements: [],
    };
  },
  methods: {
    findAll: function () {
      fetch(
        "http://127.0.0.1:8000/api/categoria/" +
          this.$route.params.id +
          "/piezas/?format=json"
      )
        .then((res) => res.json())
        //.then(res => console.log(res[0].id))
        .then((res) => (this.elements = res));
    },
  },
  watch: {
    "$route.params.id": function () {
      console.log("Listado de categorias");
      this.findAll();
    },
  },
};
</script>

<style>
.box {
  border: 3px solid #ccc;
  margin: 5px 0 0 0;
}
</style>