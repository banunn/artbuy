<template>
    <div class="listing-detail form">
        <div class="form-row">
            <div>
                <header class="label">Title</header>
                <input type="text" placeholder="Artwork Title" name="" id="" class="input sm">
            </div>
        </div>
        <div class="form-row">
            <div>
                <header class="label">Category</header>
                <select class="select" name="" id="">
                    <option value="contemporary">comtemporary</option>
                    <option value="modern">modern</option>
                </select>
            </div>
        </div>
        <div class="form-row">
            <div>
                <header class="label">Description</header>
                <textarea name=""  placeholder="Describe this item" class="textarea"></textarea>
            </div>
        </div>
        <div class="form-row">
            <header class="label">Price</header>
            <div class="form-row flex price">
                <div>
                    <div class="icon-left">
                        <input type="text" placeholder="1,200" class="input sm">
                        <span>$</span>
                    </div>
                </div>
                <div>
                <div class="select-style">
                    <select class="select" name="" id="">
                        <option default selected value="USD">USD</option>
                        <option value="TRX">TRX</option>
                    </select>
                </div>
                </div>
            </div>
        </div>
        <div class="form-row">
            <header class="label">
                Dimensions
            </header>
            <div class="form-row flex">
                <div>
                    <div class="desc-right">
                        <input type="number" name="" id="" class="input sm">
                        <span>width</span>
                    </div>
                </div>
                <div>
                    <div class="desc-right">
                        <input type="number" name="" id="" class="input sm">
                        <span>height</span>
                    </div>
                </div>
                <div>
                    <div class="desc-right">
                        <input type="number" name="" id="" class="input sm">
                        <span>depth</span>
                    </div>
                </div>
                <div>
                    <div class="select-style">
                        <select class="select" name="" id="">
                            <option default selected value="Inches">Inches</option>
                            <option value="CM">CM</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div class="form-row">
            <header class="label">Weight</header>
            <div class="form-row flex">
                <div>
                    <div class="desc-right">
                        <input class="input sm" type="text" placeholder="2">        
                        <span>lbs</span>
                    </div>
                </div>
                <div>
                    <div class="desc-right">
                        <input class="input sm" type="text" placeholder="8">        
                        <span>oz</span>
                    </div>
                </div>
                <div>
                    <div class="select-style">
                        <select class="select" name="" id="">
                            <option default selected value="Imperial">Imperial</option>
                            <option value="Metric">Metric</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Listing_Details'
}
</script>

<style lang="scss" scoped>
 .listing-detail {
    background: #fff;
    border-radius: 2px;
    border: 1px solid rgba(17,18,21,0.1);
    padding: 20px 16px;
    margin-bottom: 16px;
 }

 .price {
     > div {
         &:first-child {
             flex:3;
         }
     }
 }

 .desc-right {
     position: relative;
     span {
         position: absolute;
         right:8px;
         opacity: .5;
         top:50%;
         transform: translateY(calc(-50% - 3.5px));
         font-size:9px;
         text-transform: uppercase;
     }
     .input {
         padding-right: 40px;
     }
 }

 .icon-left {
     position: relative;
     span {
         position: absolute;
         left:8px;
         opacity: .5;
         top:50%;
         transform: translateY(calc(-50% - 4px));
         font-size:14px;
         text-transform: uppercase;
     }
     .input {
         padding-left: 18px;
     }
 }
</style>