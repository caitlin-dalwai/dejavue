<template lang="">
    <div>
        
    </div>
    <div>
        <h1>
        <!-- looping through data using slots -->
         <slot name="make"></slot>
         <slot name="model"></slot>
         <slot name="year"></slot>
         <slot name="color"></slot>
         <!-- <slot name="price"></slot> -->
         <slot></slot>
         </h1>
    </div>
    <div>
        <h1>
        <!-- looping through data using slots -->
         <slot name="name"></slot>
         <slot name="manufacturer"></slot>
         <slot name="release_year"></slot>
         <slot name="storage"></slot>
         <slot name="price"></slot>
         <slot name="best_selling_game"></slot>
         </h1>
    </div>

</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>