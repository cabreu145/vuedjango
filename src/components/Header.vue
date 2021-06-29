<template>
  <div>
    <b-navbar  type="dark" class=" custom-class">
      <b-navbar-brand> Piezas </b-navbar-brand>
      <b-navbar-nav >
        <b-nav-item href="#">Home</b-nav-item>

        <!-- Navbar dropdowns -->
    
        <b-nav-item-dropdown text="User" right >
          <b-dropdown-item href="#" >Account</b-dropdown-item>
          <b-dropdown-item href="#">Settings</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<style>
.custom-class {
  background-color: var(--gray-dark);
  margin-bottom: 80px;
}
.mb-q {
    margin-top: 60%;
}
</style>