export default {
    methods: {
        toggleClass(el, className){
            if (el.classList.contains(className)) {
                    el.classList.remove(className);
             }else{
                 el.classList.add(className);       
             }
        },

        removeClass(el, className){
            if (el.classList.contains(className)) {
                    el.classList.remove(className);
             }
        },
        assetsPath(img){
            return require(`@/assets/${img}`);
        },
         
    }
  }