<template>
    <a  @click="toggleSidebar" data-toggle="push-menu" class="paper-nav-toggle left ml-2 fixed">
    <i></i>
    </a>
</template>

<script>
export default {
    methods:{
        toggleSidebar(){
        const el = document.body;
    
          if(this.$mq === 'md' || this.$mq === 'sm'){
           this.toggleClass(el, 'sidebar-open');

          }else{
        
           this.toggleClass(el, 'sidebar-collapse');
          }
      },

      toggleClass(el, className){
          if (el.classList.contains(className)) {
                  el.classList.remove(className);
           }else{
               el.classList.add(className);       
           }
      },


      
      // toggleBodyClass(addRemoveClass, className) {
      //   const el = document.body;

      //   if (addRemoveClass === 'addClass') {
      //     el.classList.add(className);
      //   } else {
      //     el.classList.remove(className);
      //   }
      // },
    },

} 
</script>