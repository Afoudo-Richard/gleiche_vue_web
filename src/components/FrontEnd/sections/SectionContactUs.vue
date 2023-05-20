<template>
    <div class="bg-gray-200">
        <div class="container flex flex-col justify-center items-center ">
            <div class="w-full lg:w-3/6 mx-auto py-6 md:py-12 flex flex-col items-center gap-6">
                <div class="flex flex-col items-center gap-3">
                    <span class="font-patrick-hand text-3xl md:text-4xl lg:text-5xl">Contact Us</span>
                    <div class="w-24 h-1 bg-primary rounded-md"></div>
                </div>

            </div>

            <div class="w-full">


                <div class="relative md:w-10/12 lg:w-9/12 mx-auto sm:p-6">
                    <!-- <div class="absolute inset-0 bg-primary/50 w-full h-full z-20 flex flex-col justify-center items-center"
                    :class="{'hidden': isLoading ==false}">
                    <div x-text="formMessage"></div>
                    <span class="text-secondary text-2xl">Sending ...</span>
                </div> -->
                    <form action="{% url 'contact_gleiche' %}" id="contact_form" @submit.prevent="submit" method="POST">

                        <div class="flex flex-col gap-y-3 mb-5">
                            <div class="w-full grid grid-cols-8 gap-4">
                                <div class="col-span-8 md:col-span-4">
                                    <label for="first-name" class="block text-sm font-medium text-gray-700">Full
                                        Name</label>
                                    <input type="text" name="fullname" id="first-name" autocomplete="given-name"
                                        placeholder="Full Name"
                                        class=" input mt-1 focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        v-model="v$.user_full_name.$model">
                                    <p v-for="error of v$.user_full_name.$errors" :key="error.$uid"
                                        class="text-red-500 text-xs italic py-2">
                                        {{ error.$message }}
                                    </p>
                                </div>


                                <div class="col-span-8 md:col-span-4">
                                    <label for="first-name" class="block text-sm font-medium text-gray-700">Email
                                    </label>
                                    <input type="text" id="first-name" name="email" placeholder="E-mail"
                                        class="input mt-1 focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        v-model="v$.user_email.$model">

                                    <p v-for="error of v$.user_email.$errors" :key="error.$uid"
                                        class="text-red-500 text-xs italic py-2">
                                        {{ error.$message }}
                                    </p>
                                </div>
                            </div>

                            <div class="col-span-8">
                                <label for="subject" class="block text-sm font-medium text-gray-700">Subject</label>
                                <input type="text" name="subject" id="subject" autocomplete="family-name"
                                    placeholder="subject"
                                    class="input mt-1 focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    v-model="v$.user_subject.$model">

                                <p v-for="error of v$.user_subject.$errors" :key="error.$uid"
                                    class="text-red-500 text-xs italic py-2">
                                    {{ error.$message }}
                                </p>
                            </div>


                            <div class="col-span-8 ">
                                <label for="about" class="block text-sm font-medium text-gray-700"> Message </label>
                                <div class="mt-1">
                                    <textarea id="about" name="about" rows="3"
                                        class="input shadow-sm focus:border-primary mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                        placeholder="Write your message here" v-model="v$.user_message.$model">


                                    </textarea>
                                </div>
                                <p v-for="error of v$.user_message.$errors" :key="error.$uid"
                                    class="text-red-500 text-xs italic py-2">
                                    {{ error.$message }}
                                </p>
                            </div>
                        </div>



                        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6 flex justify-center">
                            <button type="submit"
                                class="inline-block px-4 py-1.5 bg-primary hover:bg-primary-200 hover:shadow-2xl transition-all rounded-md text-white text-sm">Submit</button>
                        </div>
                        <div :class="{ 'flex': isSuccess, 'hidden': isSuccessResponse === null }"
                            class="px-4 py-3 text-right sm:px-6 justify-center">
                            <div :class="{ 'bg-green-400': isSuccessResponse, 'bg-red-400': isSuccessResponse == false }"
                                class="p-3 rounded-md">
                                <span x-text="formMessage"></span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div class="hidden sm:block" aria-hidden="true">
                <div class="py-5">
                    <div class="border-t border-gray-200"></div>
                </div>
            </div>


        </div>

    </div>
</template>

<script setup>
import Parse from 'parse/dist/parse.min.js';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import { ref, computed, onBeforeUnmount } from 'vue';
import { ElNotification } from 'element-plus'
import { useVuelidate } from '@vuelidate/core'
import { required, email, sameAs } from '@vuelidate/validators'



const is_loading = ref(false)

const user_full_name = ref('')
const user_email = ref('')
const user_subject = ref('')
const user_message = ref('')

let states = {
    user_full_name,
    user_email,
    user_subject,
    user_message,
}


const rules = computed(() => ({
    user_full_name: { required },
    user_email: { required, email },
    user_subject: { required },
    user_message: { required }

}))



const v$ = useVuelidate(rules, states)


const saveTemplate = async () => {
    // onSelectedOption()
    const isFormCorrect = await v$.value.$validate()
    console.log(template_category.value)
    console.log(template_name.value)



    if (!isFormCorrect) {
        ElNotification({
            title: 'Error',
            message: 'Please fill the input',
            type: 'error',
        })
        return
    }

    is_loading.value = true
    const Template = Parse.Object.extend("Template");
    const template = new Template();

    template.set("name", template_name.value)
    template.set("description", template_description.value)
    template.set("demo_link", template_demo_link.value)
    template.set("source_code_link", template_source_code_link.value)
    template.set("price", parseInt(template_price.value))
    template.set("is_free", template_is_free.value)
    template.set("is_disabled", true)
    tempalte.set("category", template_category.value)


    template.save()
        .then((template) => {
            is_loading.value = false
            ElNotification({
                title: 'Success',
                message: 'Template created successfully ' + template.id,
                type: 'success',
            })

        }, (error) => {
            is_loading.value = false


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
                        message: 'Connection failed.Please Check your connection and continue',
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
                        message: error.message + " | code : " + error.code,
                        type: 'error',
                    })
            }
        });
}



onBeforeUnmount(() => {
    v$.$reset
})




</script>