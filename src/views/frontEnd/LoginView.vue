<template>
    <PageBanner title="Login"></PageBanner>
    <div class="container">
        <div class=" min-h-[30rem] flex justify-center items-center">

            <div class="w-full flex flex-col  items-center">
                <h5 class="text-3xl font-bold mb-6 text-center">Login</h5>
                <div class="block p-6 rounded-lg shadow-lg bg-white w-full md:w-7/12 lg:w-5/12">
                    <form @submit.prevent="submitForm">
                        <div class="mb-4">
                            <label for="exampleInputEmail2" class="form-label inline-block mb-2 text-gray-700">Email
                                address</label>
                            <input type="email" class="input" placeholder="Enter email" v-model="v$.user_email.$model">

                            <div v-for="error of v$.user_email.$errors" :key="error.$uid" class="text-red-400 text-sm">
                                {{ error.$message }}
                            </div>
                        </div>
                        <div class="mb-4">
                            <label for="exampleInputPassword2"
                                class="form-label inline-block mb-2 text-gray-700">Password</label>
                            <input type="password" class="input" placeholder="Password" v-model="v$.user_password.$model">
                            <div v-for="error of v$.user_password.$errors" :key="error.$uid" class="text-red-400 text-sm">
                                {{ error.$message }}
                            </div>
                        </div>


                        <div>
                            <div v-if="is_loading" class="flex justify-center">
                                <pulse-loader :loading="is_loading" :color="configStore.primaryColor"
                                    :size="size"></pulse-loader>
                            </div>
                            <button v-else class="button w-full">Login</button>
                        </div>

                    </form>
                </div>
            </div>

        </div>
</div>
</template>

<script setup>
import PageBanner from '@/components/FrontEnd/components/PageBanner.vue'
import { ref, computed, onBeforeUnmount } from 'vue';
import { ElNotification } from 'element-plus'
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import Parse from 'parse/dist/parse.min.js';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import { useRouter } from 'vue-router'
import { useConfigStore } from '@/stores/config'



const router = useRouter()
const configStore = useConfigStore()


const user_email = ref('')
const user_password = ref('')
const is_loading = ref(false)


const rules = computed(() => ({
    user_email: { required, email },
    user_password: { required },
}))

const v$ = useVuelidate(rules, { user_email, user_password })

const submitForm = async () => {
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

    // const user = new Parse.User();

    Parse.User.logIn(user_email.value, user_password.value).then((result) => {
        is_loading.value = false
        ElNotification({
            title: 'Success',
            message: 'Successful login',
            type: 'success',
        })
        userStore.set_is_authenticated()
        router.push('/account')
    }, (error) => {
        is_loading.value = false

        // console.log(error.code)

        switch (error.code) {
            case 202:
                ElNotification({
                    title: 'Error',
                    message: 'Email already taken',
                    type: 'error',
                })
                break;
            case 100:
                ElNotification({
                    title: 'Error',
                    message: 'Connection failed.Please Check your connnection and continue',
                    type: 'error',
                })
                break;
            case 101:
                ElNotification({
                    title: 'Error',
                    message: 'Invalid email or password',
                    type: 'error',
                })
                break;
            default:
                ElNotification({
                    title: 'Error',
                    message: error.message,
                    type: 'error',
                })
        }

    })

    return true
}



onBeforeUnmount(() => {
    v$.$reset
})
</script>