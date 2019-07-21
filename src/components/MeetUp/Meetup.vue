<template>
 <v-container>
     <v-layout row wrap>
         <v-flex x12>
             <v-card>
                 <v-card-title>
                     <h2 class="secondary--text">My Meetup</h2>
                 </v-card-title>
                 <v-card-media
                 src="https://media.timeout.com/images/104687769/750/422/image.jpg"
                 height="400px"
                 >
                 </v-card-media>
                 <v-card-text>
                     <div class="info--text">12th April,2019 - NYC</div>
                     <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis quis laboriosam magnam possimus, architecto beatae natus, temporibus placeat esse quas assumenda earum ipsam sapiente ex culpa optio commodi aut maiores.</div>
                 </v-card-text>
                 <v-card-actions>
                     <v-spacer></v-spacer>
                     <v-btn class="primary">Register</v-btn>
                 </v-card-actions>
             </v-card>

         </v-flex>
     </v-layout>
 </v-container>
</template>

<script>
  

  export default {
    components: {
      
    }
  }
</script>
