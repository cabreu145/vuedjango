<template>
  <div>
    <div v-for="e in elementsList" v-bind:key="e.id">
      <router-link :to="'/detalle/' + e.id">
        <b-card :title="e.titulo">
          <b-card-text>
            {{ e.descripcion }}
          </b-card-text>
        </b-card>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["elementsList"],

  data() {
    return {
      elements: [],
    };
  },
  methods: {},
};
</script>

<style>
.box {
  border: 3px solid #ccc;
  margin: 5px 0 0 0;
}
</style>