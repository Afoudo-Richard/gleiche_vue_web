<template>
    <div class="container flex justify-center items-center" data-aos="zoom-in-down">

        <SectionTitleVue title="Who are we"
            subTitle="Gleiche foundation is a non-profit organization aimed at impactiong the community through the needy,
                            disabled and marginalized in the society as well as helping them realize their true potentials."  subTitleClass="text-red-400">

            <LinkButton :to="{ path: '/' }" text="Read More"></LinkButton>

        </SectionTitleVue>
    </div>
</template>

<script setup>

import SectionTitleVue from '../components/SectionTitle.vue';
import LinkButton from '../components/LinkButton.vue';
</script>