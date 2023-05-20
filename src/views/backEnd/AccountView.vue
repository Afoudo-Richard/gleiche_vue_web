<template><!-- This is an example component -->
    <div>
        <AccountNavBar></AccountNavBar>

        <div class="flex overflow-hidden bg-white pt-16">
        <AccountSideNav></AccountSideNav>

            <div id="main-content" class="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
                <main class="min-h-[45rem]">
                    <div class="pt-6 px-4">
                        <RouterView></RouterView>
                    </div>
                    
                </main>
                <AccountFooter></AccountFooter>
            </div>
        </div>
        <!-- <script async defer src="https://buttons.github.io/buttons.js"></script>
        <script src="https://demo.themesberg.com/windster/app.bundle.js"></script> -->
</div>
</template>

<script setup>
import AccountNavBar from '../../components/BackEnd/Section/AccountNavBar.vue';
import AccountSideNav from '../../components/BackEnd/Section/AccountSideNav.vue';
import AccountFooter from '../../components/BackEnd/Section/AccountFooter.vue';




</script>