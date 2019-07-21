<template>
<v-container>
 <v-layout row wrap v-for="meetup in meetups" :key="meetup.id" class="mb-2">
   <v-flex xs12 sm10 md8 ofset-sm1 offset-md2> 
     <v-card class="secondary" >
       <v-container fluid>
         <v-layout row>
           <v-flex xs5 sm4 md3>
            <v-card-media
            :src="meetup.imageUrl"
            height="130px"
            >
            </v-card-media>
           </v-flex>
           <v-flex xs7 sm8 md9>
           <v-card-tilte primary-title>
            <div>
            <h3 class="white--text mb-0 ml-1" >{{ meetup.title}}</h3>
            <div class="ml-1">{{meetup.date | date}}</div> 
            </div>
            </v-card-tilte> 
            <v-card-actions>
              <v-btn flat :to="'/meetups/' + meetup.id">
                <v-icon left light>arrow_forward</v-icon>
                View Meetup
              </v-btn>
            </v-card-actions>
           </v-flex>
         </v-layout>
       </v-container>
     </v-card>
   </v-flex>
   </v-layout> 
</v-container>
</template>

<script>
  

  export default {
    computed: {
      meetups () {
        return this.$store.getters.loadedMeetups
      }
      
    }
  }
</script>
