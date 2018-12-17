<template>
    <section class="home-search">
        <div class="search">
            <div class="searchWrap wrap">
                <i class="material-icons">search</i>
                <input type="text" placeholder="Search for anything..." class="search-input">
            </div>
        </div>
        <search-filters></search-filters>
    </section>
</template>

<script>
import searchFilters from './filters'
export default {
name: 'home-search',
components: {
    searchFilters
}
}
</script>

<style lang="scss" scoped>
.search {
    border-bottom: 1px solid #E3E7E8;
}
    .searchWrap {
        display: flex;
        align-items: center;
        i{
            margin-right: 7px;
            font-size: 42px;
        }
        input {
            border: none;
            height: 80px;
            width: 100%;
            color: #111215;	
            font-size: 22px;	
            font-weight: bold;		
            line-height: 30px;
            padding: 0 7px;
            &::placeholder {
                opacity: 0.15;
                color: #111215;	
                font-size: 22px;	
                font-weight: bold;	
                letter-spacing: -0.2px;	
                line-height: 30px;
            } 
        }
    }
</style>
