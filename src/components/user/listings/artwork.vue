<template>
    <div class="artwork">
        <header class="label">Artwork</header>
        <div class="upload">
            <vue-transmit drag-class="dragging" class="transmit">
                 <div class="content">
                     <i class="material-icons">insert_photo</i>
                     <button class="btn upload-btn">Add Image</button>
                     <span>or drop file to upload</span>
                 </div>
            </vue-transmit>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Artwork_Uploader'
}
</script>

<style lang="scss" scoped>
    .artwork {
            background: #fff;
    border-radius: 2px;
    border: 1px solid rgba(17,18,21,0.1);
    padding: 20px 16px;
    margin-bottom: 16px;
    }
    .label {
        margin-bottom: 12px;
    }
    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        i {
            font-size: 82px;
            color: #dedede;
            margin-bottom: 18px;
        }

        button {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 32px;	
            width: 126px;	
            border: 1px solid rgba(17,18,21,0.2);	
            border-radius: 2px;	
            background-color: rgba(255,255,255,0.5);
                font-size: 12px;	
                font-weight: 600;	
                letter-spacing: 0.5px;	
                line-height: 16px;
        }
        span {
            opacity: 0.6;
            font-size: 14px;	
            font-weight: 500;	
            letter-spacing: 0.1px;	
            line-height: 20px;
            margin-top: 8px;
        }
    }

    .transmit {
        padding: 48px;
        border: 1.5px dashed rgba(17,18,21,0.2);
        border-radius: 2px;
        background-color: #F5F7F7;
    }


</style>
