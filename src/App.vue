<template>
    <div id="app" class="margin">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Dinner Planner</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarColor02">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link to='/' class="nav-link" >Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to='/select' class="nav-link">Edit Menu</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to='/confirmation' class="nav-link">Confirmation</router-link>
                    </li>
                </ul>
            </div>
        </nav>

        <router-view>

        </router-view>

    </div>
</template>

<script>

    export default {
        name: 'app',
        components: {
        },
        data() {
            return {
            }
        }
    }
</script>

<style scoped>
    .row {
        margin: 0px;
    }

    .margin {
        margin: 20px;
    }
</style>