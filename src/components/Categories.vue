<template>
  <div>
    <b-list-group>
      <div v-for="c in categories" v-bind:key="c.id">
        <b-list-group-item button>
            <router-link :to="'/categoria/' + c.id + '/categoria'">
                {{c.titulo}}
            </router-link>
        </b-list-group-item>
      </div>
    </b-list-group>
  </div>
</template>

<script>
export default {

    created(){
        this.findAll()
    },

  data() {
    return {
      categories: [],
    };
  },
  methods: {
    findAll: function () {
        fetch('http://127.0.0.1:8000/api/categoria/?format=json')
        .then(res => res.json())
        //.then(res => console.log(res[0].id))
        .then(res => (this.categories = res));
    }
  }
};
</script>