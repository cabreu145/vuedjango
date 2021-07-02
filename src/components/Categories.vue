<template>
  <div>
    <h5>Categorías</h5>
    <b-list-group>
      <b-list-group-item button v-for="c in categories" v-bind:key="c.id">
        <router-link :to="'/categoria/' + c.id + '/piezas'">
          {{ c.titulo }}
        </router-link>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  created() {
    this.findAll();
  },

  data() {
    return {
      categories: [],
    };
  },
  methods: {
    findAll: function () {
      fetch("http://127.0.0.1:8000/api/categoria/?format=json")
        .then((res) => res.json())
        //.then(res => console.log(res[0].id))
        .then((res) => (this.categories = res));
    },
  },
};
</script>