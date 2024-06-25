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
         <slot name="price"></slot>
         <slot></slot>
         </h1>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>