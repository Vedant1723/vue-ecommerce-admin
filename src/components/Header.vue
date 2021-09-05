<template>
    <div class="header">
      <div class="menu-toggle-btn">
        <a href="#">
          <i class="bi bi-list"></i>
        </a>
      </div>
      <a href="index.html" class="logo">
        <img
          width="100"
          src="https://vetra.laborasyon.com/assets/images/logo.svg"
          alt="logo"
        />
      </a>
      <div class="page-title">Overview</div>
      <form class="search-form">
        <div class="input-group">
          <button
            class="btn btn-outline-light"
            type="button"
            id="button-addon1"
          >
            <i class="bi bi-search"></i>
          </button>
          <input
            type="text"
            class="form-control"
            placeholder="Search..."
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
          />
          <a href="#" class="btn btn-outline-light close-header-search-bar">
            <i class="bi bi-x"></i>
          </a>
        </div>
      </form>
      <div class="header-bar ms-auto">
        <ul class="navbar-nav justify-content-end">
          <li class="nav-item">
            <a
              href="#"
              class="nav-link nav-link-notify"
              data-count="2"
              data-sidebar-target="#notifications"
            >
              <i class="bi bi-bell icon-lg"></i>
            </a>
          </li>

          <li class="nav-item ms-3">
            <button
              class="btn btn-primary btn-icon"
              @click="navigateToAddProduct">
              <i class="bi bi-plus-circle"></i> Add Product
            </button>
          </li>
        </ul>
      </div>
      <div class="header-mobile-buttons">
        <a href="#" class="search-bar-btn">
          <i class="bi bi-search"></i>
        </a>
        <a href="#" class="actions-btn">
          <i class="bi bi-three-dots"></i>
        </a>
      </div>
    </div>
</template>

<script>
export default {
    name:"Header",
    methods:{
      navigateToAddProduct(){
        window.location.href="/Add-Product"
      }
    }
}

</script>