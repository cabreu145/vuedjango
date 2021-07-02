<template>
  <div>
    <h5>Material</h5>
    <b-list-group>
      <b-list-group-item button v-for="t in types" v-bind:key="t.id">
        <router-link :to="'/tipo_material/' + t.id + '/piezas'">
          {{ t.titulo }}
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
      types: [],
    };
  },
  methods: {
    findAll: function () {
      fetch("http://127.0.0.1:8000/api/tipo_material/?format=json")
        .then((res) => res.json())
        //.then(res => console.log(res[0].id))
        .then((res) => (this.types = res));
    },
  },
};
</script>