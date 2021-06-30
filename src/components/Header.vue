<template>
  <div>
    <b-navbar type="dark" class="custom-class">
      <b-navbar-brand> Piezas </b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item href="#">Home</b-nav-item>

        <!-- Navbar dropdowns -->

        <b-nav-item-dropdown text="User" right>
          <b-dropdown-item href="#">Account</b-dropdown-item>
          <b-dropdown-item href="#">Settings</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="Materiales" right>
          <b-dropdown-item
            v-for="t in types"
            v-bind:key="t.id"
            :to="'/tipo_material/' + t.id + '/pieza'"
          >
            {{ t.titulo }}</b-dropdown-item
          >

        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="Categorias" right>
          <b-dropdown-item
            v-for="c in categories"
            v-bind:key="c.id"
            :to="'/categoria/' + c.id + '/pieza'"
          >
            {{ c.titulo }}</b-dropdown-item
          >

        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {

    created(){
        this.findAllType();
        this.findAllCategory();
    },

  data() {
    return {
      types: [],
      categories: [],
    };
  },
  methods: {
    findAllType: function () {
        fetch('http://127.0.0.1:8000/api/tipo_material/?format=json')
        .then(res => res.json())
        //.then(res => console.log(res[0].id))
        .then(res => (this.types = res));
    },

    findAllCategory: function () {
        fetch('http://127.0.0.1:8000/api/categoria/?format=json')
        .then(res => res.json())
        //.then(res => console.log(res[0].id))
        .then(res => (this.categories = res));
    }

  }
};
</script>

<style>
.custom-class {
  background-color: var(--gray-dark);
  margin-bottom: 80px;
}
.mb-q {
  margin-top: 60%;
}
</style>