<template>
  <div>
    <div 
      class="
        container 
        sm:w-2/4
        w-full
        shadow-xl 
        mx-auto 
        bg-white
        p-5 
        my-12 
        bg-white
        rounded-lg
        "
      >
      <p 
        class="
            mt-2
            text-3xl
            leading-8
            font-extrabold
            tracking-tight
            text-indigo-500
            sm:text-4xl
            text-center
        "
      >Date-Fns with Tezjs</p>
      <div class="md:grid lg:grid-cols-2 p-5">
         <h1 class=" text-3xl text-center my-10 lg:order-last">{{ displayDate }}</h1>
        <div class="mt-10 mx-auto space-y-2 px-10">
            <button  
            class="
              bg-indigo-500 
              text-white 
              rounded-full 
              shadow-lg 
              p-2 
              px-3 
              hover:shaodw-2xl 
              hover:bg-indigo-600
              w-full
              "
              type="button"
              @click="currentTime()">CurrentTime</button> 
              <button  
            class="
              bg-indigo-500 
              text-white 
              rounded-full 
              shadow-lg 
              p-2 
              px-3 
              hover:shaodw-2xl 
              hover:bg-indigo-600
              w-full
              "
              type="button"
              @click="addHours()">NextHours</button>
               
          <button  
            class="
              bg-indigo-500 
              text-white 
              rounded-full 
              shadow-lg 
              p-2 
              hover:shaodw-2xl 
              hover:bg-indigo-600
              w-full
              "
              type="button"
              @click="todayDate()">CurrentDate</button>
          <button  
            class="
              bg-indigo-500 
              text-white 
              rounded-full 
              shadow-lg 
              p-2 
              hover:shaodw-2xl 
              hover:bg-indigo-600
              w-full
              "
              type="button"
              @click="addDays()">NextDay</button>
               <button  
            class="
              bg-indigo-500 
              text-white 
              rounded-full 
              shadow-lg 
              p-2 
              px-3 
              hover:shaodw-2xl 
              hover:bg-indigo-600
              w-full
              "
              type="button"
              @click="subDays()">PreviousDay</button>
            <button  
            class="
              bg-indigo-500 
              text-white 
              rounded-full 
              shadow-lg 
              p-2 
              px-3 
              hover:shaodw-2xl 
              hover:bg-indigo-600
              w-full
              "
              type="button"
              @click="frenchLocale()">FrenchLocale</button>
        </div>       
      </div>     
    </div>  
  </div>
</template>

<script>
export default {
  layoutName:'default',
  head: {
    title: "tezjs: starter vue project",
  },
   data() {
    return {
      currentDate: new Date(),
      displayDate:this.$format(new Date(),'EEEE,dd MMMM yyyy')
    };
  },
  methods: {
    currentTime(){
        if(!this.$isDate(this.currentDate)){
        return this.displayDate = "Invalid Format";
      }
      this.displayDate = this.$format(this.currentDate,"hh:mm:ss");
    },
     addHours(){
      if(!this.$isDate(this.currentDate)){
        return this.displayDate = "Invalid Format";
      }
     this.currentDate = this.$addHours(this.currentDate,1);
     this.displayDate = this.$format(this.currentDate,"hh:mm:ss");

    },
    todayDate(){
      this.currentDate=new Date();
      this.displayDate=this.$format(this.currentDate,'EEEE,dd MMMM yyyy')
    },

    addDays() {
      if(!this.$isDate(this.currentDate)){
        return this.displayDate = "Invalid Format";
      }
      this.currentDate = this.$addDays(this.currentDate, 1);
      this.displayDate = this.$format(this.currentDate,'EEEE,dd MMMM yyyy')
    },

    subDays() {
      if(!this.$isDate(this.currentDate)){
        return this.displayDate = "Invalid Format";
      }
      this.currentDate = this.$subDays(this.currentDate, 1);
      this.displayDate = this.$format(this.currentDate,'EEEE,dd MMMM yyyy')
    },

    frenchLocale(){
      if(!this.$isDate(this.currentDate)){
        return this.displayDate = "Invalid Format";
      }
      this.displayDate = this.$format(this.currentDate,'EEEE,dd MMMM yyyy',{locale:this.$fr});
    },
  }
}
</script>

