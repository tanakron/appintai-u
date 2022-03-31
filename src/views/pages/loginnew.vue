<template>
  <v-container>
      <v-row   class="justify-center  "  >
          <v-card max-width="344"   class="mx-auto "  dark>
   <v-img src="https://cdn5.vectorstock.com/i/1000x1000/63/79/neon-lamp-frame-on-brick-wall-background-las-vector-30496379.jpg" height="200px"/>
       <v-card-text>
           <v-form>
               <v-text-field 
              name="username"
              label="Username"
              id="usersname" 
               >

               </v-text-field>
                  <v-text-field 
              name="password"
              label="Password"
              id="password" 
               >

               </v-text-field>
               <v-row class="justify-space-between ">
<v-btn  color="primary" dark>text</v-btn>
<v-btn  color="primary" dark>text</v-btn>
               </v-row>
           </v-form>
       </v-card-text>
          </v-card>
      </v-row>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>