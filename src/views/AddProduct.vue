<template>
    <sidebar-vue address="Products"/>
    <div class="layout-wrapper">
        <header-vue/>
        <div className="content">
          <div class="card">
            <div class="card-body">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Title"
                />
                <label for="floatingInput">Title</label>
              </div>
              <br />
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Description"
                />
                <label for="floatingInput">Description</label>
              </div>
              <br />

              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Price Rs."
                />
                <label for="floatingInput">Price</label>
              </div>
              <br />

              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Cutted Price"
                />
                <label for="floatingInput">Cutted Price</label>
              </div>
              <br />
              <div class="form-floating">
                <input
                  className="form-control"
                  type="file"
                  name="image"
                 
                  id="floatingInput"
                />
              </div>

              <br />
              <div className="form-floating">
                <select class="form-select" aria-label="Default select example">
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <br />
              <button
                class="btn btn-primary btn-icon"
             
              >
                <i class="bi bi-plus-circle"></i> Add Product
              </button>
            </div>
          </div>
        </div>
      </div>


    
</template>

<script>
import HeaderVue from '../components/Header.vue'
import SidebarVue from '../components/Sidebar.vue'

export default {
    name:"AddProduct",
    components:{
        SidebarVue,
        HeaderVue
    }

}
</script>