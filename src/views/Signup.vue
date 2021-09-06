<template>
  <body className="auth">
    <div class="form-wrapper">
      <div class="container">
        <div class="card">
          <div class="row g-0">
            <div class="col">
              <div class="row">
                <div class="col-md-10 offset-md-1">
                  <div
                    class="ltf-block-logo d-block d-lg-none text-center text-lg-start"
                  >
                    <img
                      width="120"
                      src="https://vetra.laborasyon.com/assets/images/logo.svg"
                      alt="logo"
                    />
                  </div>
                  <div class="my-5 text-center text-lg-start">
                    <h1 class="display-8">Create Account</h1>
                    <p class="text-muted">
                      You can create a free account now
                    </p>
                  </div>
                    <div class="mb-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter fullname"
                        autofocus
                        required
                        v-model="name"
                      />
                    </div>
                    <div class="mb-3">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Enter email"
                        required
                        v-model="email"
                      />
                    </div>
                    <div class="mb-3">
                      <input
                        type="password"
                        class="form-control"
                        placeholder="Enter password"
                        required
                        v-model="password"
                      />
                    </div>
               
                    <div class="text-center text-lg-start">
                      <button @click="registerUser" class="btn btn-primary">Sign Up</button>
                    </div>
                  <div class="social-links justify-content-center">
                    <a href="#">
                      <i class="ti-google bg-google"></i> Sign in with Google
                    </a>
                    <a href="#">
                      <i class="ti-facebook bg-facebook"></i> Sign in with
                      Facebook
                    </a>
                  </div>
                  <p class="text-center d-block d-lg-none mt-5 mt-lg-0">
                    Don't have an account? <a href="/">Sign In</a>.
                  </p>
                </div>
              </div>
            </div>
            <div
              class="col d-none d-lg-flex border-start align-items-center justify-content-between flex-column text-center"
            >
              <div class="logo">
                <img
                  width="120"
                  src="https://vetra.laborasyon.com/assets/images/logo.svg"
                  alt="logo"
                />
              </div>
              <div>
                <h3 class="fw-bold">Welcome to Vetra!</h3>
                <p class="lead my-5">Do you already have an account?</p>
                <a href="/" class="btn btn-primary">
                  Sign In
                </a>
              </div>
              <ul class="list-inline">
                <li class="list-inline-item">
                  <a href="#">Privacy Policy</a>
                </li>
                <li class="list-inline-item">
                  <a href="#">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>

const API = "http://localhost:5000";
import axios from "axios";

const config={
  headers:{
    "Content-Type":"application/json"
  }
}

export default {
  name: "Register",
  data(){
    return {
      name:'',
      email:'',
      password:''
    }
  },
  methods:{
    async registerUser(){
        try {
          const res=await axios.post(API+'/api/admin/register',{name:this.name,email:this.email,password:this.password},config)
          if(res.data.token){
            window.location.href="/"
            alert('Account Created!')
          }
        } catch (error) {
          console.log(error.message)
        }
      }
  },
  beforeCreate(){
      if(localStorage.getItem('token')){
        window.location.href="/Home"
      }
    }
};
</script>
