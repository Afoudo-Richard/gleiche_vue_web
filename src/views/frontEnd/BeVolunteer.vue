<template>
    <div class="container py-6 md:py-3 flex flex-col gap-4 min-h-screen">
        <SectionTitleVue title="Become a Volunteer"></SectionTitleVue>

        <div class="mb-8">
            <form id="contact_form" @submit.prevent="saveVolunteer">

                <div class="flex flex-col gap-y-6 mb-5">
                    <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="">
                            <label for="first-name" class="input_label">Full
                                Name</label>
                            <input type="text" name="fullname" id="first-name" autocomplete="given-name"
                                placeholder="Full Name" class="input" v-model="v$.user_full_name.$model">
                            <p v-for="error of v$.user_full_name.$errors" :key="error.$uid" class="input_error">
                                {{ error.$message }}
                            </p>
                        </div>


                        <div class="">
                            <label for="first-name" class="input_label">Email
                            </label>
                            <input type="text" id="first-name" name="email" placeholder="E-mail" class="input"
                                v-model="v$.user_email.$model">

                            <p v-for="error of v$.user_email.$errors" :key="error.$uid" class="input_error">
                                {{ error.$message }}
                            </p>
                        </div>
                    </div>


                    <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="">
                            <label for="first-name" class="input_label">
                                Date Of Birth</label>
                            <input type="date" name="fullname" id="first-name" autocomplete="given-name"
                                placeholder="Full Name" class="input" v-model="v$.date_of_birth.$model">
                            <p v-for="error of v$.date_of_birth.$errors" :key="error.$uid" class="input_error">
                                {{ error.$message }}
                            </p>
                        </div>


                        <div class="">
                            <label for="first-name" class="input_label">Gender
                            </label>
                            <div class="flex items-center mt-2 gap-2">
                                <input type="radio" id="male" value="Male" v-model="v$.gender.$model" />
                                <label for="male">Male</label>

                                <input type="radio" id="female" value="Female" v-model="v$.gender.$model" />
                                <label for="female">Female</label>

                                <input type="radio" id="other" value="Other" v-model="v$.gender.$model" />
                                <label for="other">Other</label>
                            </div>

                            <p v-for="error of v$.gender.$errors" :key="error.$uid" class="input_error">
                                {{ error.$message }}
                            </p>
                        </div>
                    </div>

                    <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="">
                            <label for="first-name" class="input_label">
                                Phone</label>
                            <input type="text" name="fullname" id="first-name" autocomplete="phone" placeholder="Phone"
                                class="input" v-model="v$.user_phone.$model">
                            <p v-for="error of v$.user_phone.$errors" :key="error.$uid" class="input_error">
                                {{ error.$message }}
                            </p>
                        </div>

                        <div class="">
                            <label for="first-name" class="input_label">Address
                            </label>
                            <input type="text" id="first-name" name="address" placeholder="Address"
                                class="input mt-1 focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                v-model="v$.user_address.$model">

                            <p v-for="error of v$.user_address.$errors" :key="error.$uid" class="input_error">
                                {{ error.$message }}
                            </p>
                        </div>
                    </div>


                    <div class="col-span-2 ">
                        <label for="about" class="input_label"> How did you know about Gleiche Foundation? </label>
                        <div class="mt-1">
                            <textarea id="about" name="about" rows="3"
                                class="input shadow-sm focus:border-primary mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                placeholder="Write your message here" v-model="v$.how_did_you_know.$model">

            </textarea>
                        </div>
                        <p v-for="error of v$.how_did_you_know.$errors" :key="error.$uid" class="input_error">
                            {{ error.$message }}
                        </p>
                    </div>

                    <div class="col-span-2 ">
                        <label for="about" class="input_label">What interest you about our foundation? </label>
                        <div class="mt-1">
                            <textarea id="about" name="about" rows="3"
                                class="input shadow-sm focus:border-primary mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                placeholder="Write your message here" v-model="v$.what_interest_you.$model">
            </textarea>
                        </div>
                        <p v-for="error of v$.what_interest_you.$errors" :key="error.$uid" class="input_error">
                            {{ error.$message }}
                        </p>
                    </div>

                    <div class="col-span-2 ">
                        <label for="about" class="input_label">How do you think you can help the foundation grow? </label>
                        <div class="mt-1">
                            <textarea id="about" name="about" rows="3"
                                class="input shadow-sm focus:border-primary mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                placeholder="Write your message here" v-model="v$.how_can_you_help.$model">
            </textarea>
                        </div>
                        <p v-for="error of v$.how_can_you_help.$errors" :key="error.$uid" class="input_error">
                            {{ error.$message }}
                        </p>
                    </div>

                    <div class="col-span-2 ">
                        <label for="about" class="input_label">How do you think you can impact the lives of the needy and
                            underprivileged? </label>
                        <div class="mt-1">
                            <textarea id="about" name="about" rows="3"
                                class="input shadow-sm focus:border-primary mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                placeholder="Write your message here" v-model="v$.how_can_you_impact.$model">
            </textarea>
                        </div>
                        <p v-for="error of v$.how_can_you_impact.$errors" :key="error.$uid" class="input_error">
                            {{ error.$message }}
                        </p>
                    </div>

                    <div class="col-span-2 ">
                        <label for="about" class="input_label">Do you have any skills that you think might be particularly
                            useful to the foundation? (if yes state it) </label>
                        <div class="mt-1">
                            <textarea id="about" name="about" rows="3"
                                class="input shadow-sm focus:border-primary mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                placeholder="Write your message here" v-model="v$.any_skills.$model">
            </textarea>
                        </div>
                        <p v-for="error of v$.any_skills.$errors" :key="error.$uid" class="input_error">
                            {{ error.$message }}
                        </p>
                    </div>

                    <div class="col-span-2 ">
                        <label for="about" class="input_label">Anything else we should know about you?</label>
                        <div class="mt-1">
                            <textarea id="about" name="about" rows="3"
                                class="input shadow-sm focus:border-primary mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                placeholder="Write your message here" v-model="v$.anything_else.$model">
            </textarea>
                        </div>
                        <p v-for="error of v$.anything_else.$errors" :key="error.$uid" class="input_error">
                            {{ error.$message }}
                        </p>
                    </div>

                    <div class="col-span-2 ">
                        <label for="about" class="input_label">Give a brief autobiography about yourself</label>
                        <div class="mt-1">
                            <textarea id="about" name="about" rows="3"
                                class="input shadow-sm focus:border-primary mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                placeholder="Write your message here" v-model="v$.brief_autobiography.$model">
            </textarea>
                        </div>
                        <p v-for="error of v$.brief_autobiography.$errors" :key="error.$uid" class="input_error">
                            {{ error.$message }}
                        </p>
                    </div>
                </div>



                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6 flex justify-center">
                    <div v-if="is_loading" class="flex justify-center">
                        <pulse-loader :loading="is_loading" :color="configStore.primaryColor" :size="size"></pulse-loader>
                    </div>
                    <button v-else type="submit" class="button">Submit</button>
                </div>

            </form>
        </div>

    </div>
</template>

<script setup>
import SectionTitleVue from '@/components/FrontEnd/components/SectionTitle.vue';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import { ref, computed, onBeforeUnmount } from 'vue';
import { ElNotification } from 'element-plus'
import { useVuelidate } from '@vuelidate/core'
import { required, email, sameAs } from '@vuelidate/validators'
import { useVolunteerStore1 } from '@/stores/volunteers1'
import { useConfigStore } from '@/stores/config'

const configStore = useConfigStore()


const user_full_name = ref('')
const user_email = ref('')
const user_phone = ref('')
const user_address = ref('')
const date_of_birth = ref('')
const gender = ref('')
const how_did_you_know = ref('')
const how_can_you_help = ref('')
const any_skills = ref('')
const what_interest_you = ref('')
const how_can_you_impact = ref('')
const anything_else = ref('')
const brief_autobiography = ref('')

const is_loading = ref(false)
const volunteersStore = useVolunteerStore1()
const { beVolunteer } = volunteersStore


const rules = computed(() => ({
    user_full_name: { required },
    user_email: { required, email },
    user_phone: { required },
    user_address: { required },
    date_of_birth: { required },
    gender: { required },
    how_did_you_know: { required },
    how_can_you_help: { required },
    any_skills: { required },
    what_interest_you: { required },
    how_can_you_impact: { required },
    anything_else: { required },
    brief_autobiography: { required },
}))

let states = {
    user_full_name,
    user_email,
    user_phone,
    user_address,
    date_of_birth,
    gender,
    how_did_you_know,
    how_can_you_help,
    what_interest_you,
    any_skills,
    how_can_you_impact,
    anything_else,
    brief_autobiography,
}

const v$ = useVuelidate(rules, states)

const saveVolunteer = async () => {
    const isFormCorrect = await v$.value.$validate()

    if (!isFormCorrect) {
        ElNotification({
            title: 'Error',
            message: 'Please fill the input',
            type: 'error',
        })
        return
    }

    is_loading.value = true
    const result = await beVolunteer({
        full_name: user_full_name.value,
        email: user_email.value,
        phone: user_phone.value,
        address: user_address.value,
        date_of_birth: new Date(date_of_birth.value) ,
        gender: gender.value,
        how_did_you_know: how_did_you_know.value,
        how_can_you_help: how_can_you_help.value,
        what_interest_you: what_interest_you.value,
        any_skills: any_skills.value,
        how_can_you_impact: how_can_you_impact.value,
        anything_else: anything_else.value,
        brief_autobiography: brief_autobiography.value,
    })
    is_loading.value = false

    console.log("Result is ______----------")
    console.log(result)
    if (result) {
        clearInputs()
        ElNotification({
            title: 'Success',
            message: 'Form submitted successfully.',
            type: 'success',
        })
    }
}

function clearInputs() {
    user_full_name.value = ''
    user_email.value = ''
    user_phone.value = ''
    user_address.value = ''
    date_of_birth.value = ''
    gender.value = ''
    how_did_you_know.value = ''
    how_can_you_help.value = ''
    what_interest_you.value = ''
    any_skills.value = ''
    how_can_you_impact.value = ''
    anything_else.value = ''
    brief_autobiography.value = ''

    v$.value.$reset()
}

onBeforeUnmount(() => {
    v$.value.$reset()
})

</script>