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
                      v-model="name"
                      
                    />
                    <button v-if="!isUpdate"
                      class="btn btn-outline-secondary"
                      type="button"
                      id="button-addon2"
                      @click="createCategory"
                    >
                      Add Category
                    </button>
                    <button v-if="isUpdate"
                      class="btn btn-outline-secondary"
                      type="button"
                      id="button-addon2"
                      @click="updateCategory"
                    >
                      Update Category
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
                <tr v-if="categories.length<1">
                  <td>
                  </td>
                  <td>No Categories Created!</td>
                  <td></td>

                </tr>
                
                <tr :key="category.id" v-else v-for="category in categories">
                  <td>
                    <input class="form-check-input" type="checkbox" />
                  </td>

                  <td>{{category.name}}</td>
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
                         
                          <a @click="setCategoryToUpdate(category.name,category._id)" class="dropdown-item">
                            Edit
                          </a>
                          <a @click="deleteCategory(category._id)" class="dropdown-item">
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
        </div>
      </div>

</template>

<script>


import HeaderVue from '../components/Header.vue'
import SidebarVue from '../components/Sidebar.vue'


const API = "http://localhost:5000";
import axios from "axios";

const authConfig={
  headers:{
    "Content-Type":"application/json",
    "x-api-key":localStorage.getItem('token')
  }
}

export default {
    name:"Categories",
    components:{
        HeaderVue,
        SidebarVue
    },
    data(){
      return {
        categories:[],
        id:'',
        isUpdate: false,
        name:''
      }
    },
    methods:{
      async getAllCategories(){
        try {
          const res=await axios.get(API+'/api/admin/all-categories',authConfig)
          this.categories=res.data
          console.log(res.data)
        } catch (error) {
            console.log(error.message)
        }
      },
      async createCategory(){
          try {
          const res=await axios.post(API+'/api/admin/create-category',{name:this.name},authConfig)
            if(res.data.statusCode==200){
              this.getAllCategories();
            }
          } catch (error) {
            console.log(error.message)
        }
      },
      async deleteCategory(id){
          try {
            const res=await axios.delete(API+'/api/admin/delete-category/'+id,authConfig);
            alert(res.data.message)
            this.getAllCategories()
          } catch (error) {
            console.log(error.message)
          }
      },
      setCategoryToUpdate(name,id){
        this.id=id,
        this.name=name
        this.isUpdate=true
      },
      async updateCategory(){
        try {
          const res=await axios.put(API+'/api/admin/update-category/'+this.id,{name:this.name},authConfig);
          alert(res.data.message);
          this.id=''
          this.name=''
          this.isUpdate=false
          this.getAllCategories();
        } catch (error) {
          console.log(error.message)
        }
      }
    },
    created(){
      this.getAllCategories();
    }
}

</script>