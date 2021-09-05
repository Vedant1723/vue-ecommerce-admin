<template>
<SidebarVue address="Categories"/>
<div class="layout-wrapper">

    <HeaderVue/>


 <div class="content ">
          <div class="card">
            <div class="card-body">
              <div class="d-md-flex">
                <div class="d-md-flex gap-4 align-items-center">
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Category Title"
                      aria-label="Category Title"
                      aria-describedby="button-addon2"
                    />
                    <button
                      class="btn btn-outline-secondary"
                      type="button"
                      id="button-addon2"
                    >
                      Add Category
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="table-responsive">
            <table class="table table-custom table-lg mb-0" id="customers">
              <thead>
                <tr>
                  <th>
                    <input
                      class="form-check-input select-all"
                      type="checkbox"
                      data-select-all-target="#customers"
                      id="defaultCheck1"
                    />
                  </th>
                  <th>Title</th>
                  <th class="text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input class="form-check-input" type="checkbox" />
                  </td>

                  <td>Arlan Pond</td>
                  <td class="text-end">
                    <div class="d-flex">
                      <div class="dropdown ms-auto">
                        <a
                          href="#"
                          data-bs-toggle="dropdown"
                          class="btn btn-floating"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i class="bi bi-three-dots"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end">
                          <a href="#" class="dropdown-item">
                            Show
                          </a>
                          <a href="#" class="dropdown-item">
                            Edit
                          </a>
                          <a href="#" class="dropdown-item">
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input class="form-check-input" type="checkbox" />
                  </td>

                  <td>Arlan Pond</td>
                  <td class="text-end">
                    <div class="d-flex">
                      <div class="dropdown ms-auto">
                        <a
                          href="#"
                          data-bs-toggle="dropdown"
                          class="btn btn-floating"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i class="bi bi-three-dots"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end">
                          <a href="#" class="dropdown-item">
                            Show
                          </a>
                          <a href="#" class="dropdown-item">
                            Edit
                          </a>
                          <a href="#" class="dropdown-item">
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input class="form-check-input" type="checkbox" />
                  </td>

                  <td>Arlan Pond</td>
                  <td class="text-end">
                    <div class="d-flex">
                      <div class="dropdown ms-auto">
                        <a
                          href="#"
                          data-bs-toggle="dropdown"
                          class="btn btn-floating"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i class="bi bi-three-dots"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end">
                          <a href="#" class="dropdown-item">
                            Show
                          </a>
                          <a href="#" class="dropdown-item">
                            Edit
                          </a>
                          <a href="#" class="dropdown-item">
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input class="form-check-input" type="checkbox" />
                  </td>

                  <td>Arlan Pond</td>
                  <td class="text-end">
                    <div class="d-flex">
                      <div class="dropdown ms-auto">
                        <a
                          href="#"
                          data-bs-toggle="dropdown"
                          class="btn btn-floating"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i class="bi bi-three-dots"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end">
                          <a href="#" class="dropdown-item">
                            Show
                          </a>
                          <a href="#" class="dropdown-item">
                            Edit
                          </a>
                          <a href="#" class="dropdown-item">
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <nav class="mt-4" aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item active">
                <a class="page-link" href="#">
                  1
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  2
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  3
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

</template>

<script>
import HeaderVue from '../components/Header.vue'
import SidebarVue from '../components/Sidebar.vue'
export default {
    name:"Categories",
    components:{
        HeaderVue,
        SidebarVue
    }
}

</script>