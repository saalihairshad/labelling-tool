<template>
     <div class="m-md-3">
                        <!--Message Start-->
                        <div class="card b-0 m-2">
                            <div class="card-body">
                                <div data-toggle="collapse" data-target="#message1">
                                    <div class="media">
                                        <div class="d-flex mr-3 height-50">
                                            <i class="icon-twitter s-64"></i>
                                        </div>
                                        <div class="media-body">
                                            <h6 class="mt-0 mb-1 font-weight-normal">{{tweet.user.name}}</h6>
                                            <small>{{tweet.user.name}}</small>
                                            <div class="collapse my-3 show" id="message1">
                                                <div>
                                                   {{tweet.full_text}}
                                                </div>

                                                


                                              
                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                                                                            <el-tabs class="my-3 p-2">
  <el-tab-pane label="Annotations">
       <TweetForm :tweet="tweet" :key="tweet._id" class="p-3" @next="handleNext()"/>
  </el-tab-pane>
  <el-tab-pane label="Replies">Add Replies here</el-tab-pane>
  <el-tab-pane label="Json">
        <div class="light p-3 border-darken-3"> 
            
                <pre>
                    <code>
                        {{tweet}}
                    </code>
                </pre>
        
        </div>
  </el-tab-pane>
</el-tabs>
                
                        </div>

                    
                    </div>
                    
</template>

<script>
import TweetForm from './helo';
export default {
    props: ['tweet'],
    components:{
        TweetForm,
    },
    methods:{
    handleNext(){
        
        this.$emit('next');
    }
    }
}
</script>
<style scoped>
code {
 white-space: pre-wrap;       /* css-3 */
 white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
 white-space: -pre-wrap;      /* Opera 4-6 */
 white-space: -o-pre-wrap;    /* Opera 7 */
 word-wrap: break-word;      
 color: palevioletred;/* Internet Explorer 5.5+ */
}
</style>