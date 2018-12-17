<template>
    <aside class="search-filters">
        <header class="wrap">
            <div class="meta">
                <button v-for="(f, index) in facets" :key="index" class="filter-ctrl"><span>{{f.name}}</span><i class="material-icons">{{f.open ? 'arrow_drop_up' : 'arrow_drop_down'}}</i></button>
            </div>
            <div class="ctrl">
                <button title="view results in gallery" class="icon-btn"><i class="material-icons">dashboard</i></button>
                <button title="view results in list" class="icon-btn"><i class="material-icons">view_list</i></button>
            </div>
        </header>
    </aside>
</template>

<script>
export default {
    name: 'home-search-filters',
    data() {
        return {
            facets: [
                {
                    name: 'style',
                    open: false,
                    params: []
                },
                                {
                    name: 'medium',
                    open: false,
                    params: []
                },
                                {
                    name: 'palette',
                    open: false,
                    params: []
                },
                                {
                    name: 'location',
                    open: false,
                    params: []
                },
                                {
                    name: 'advanced',
                    open: false,
                    params: []
                },

            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .filter-ctrl {
        text-transform: uppercase;
        color: #111215;	
        font-size: 12px;	
        font-weight: bold;	
        letter-spacing: 2px;	
        line-height: 16px;
        margin-right: 56px;
        i {
            opacity: .4;
        }
        &:last-child {
            margin-right:0;
        }
    }
    .search-filters {
        box-shadow: inset 0 -1px 0 0 #E3E7E8, 0 2px 4px 0 rgba(17,18,21,0.2);
        header.wrap {
            display: flex;
            justify-content: space-between;
            height: 64px;
            align-items: center;
            button {
                -webkit-appearance: none;
                background: none;
                border: none;
                display: inline-flex;
                align-items: center;
            }
        }
    }

    .ctrl {
        button {
            margin-left: 16px;
            opacity: .4;
            &.active {
                opacity: 1;
            }
        }
    }
</style>
