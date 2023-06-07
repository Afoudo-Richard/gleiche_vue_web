<template>
    <div>
        <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">

            <SectionTitle :title="title">
                <LinkButton text="Go Back" :to="{ path: '/account/news-blogs' }">
                </LinkButton>
            </SectionTitle>

            <div v-if="is_loading_template" class="flex justify-center">
                <pulse-loader :loading="is_loading_template" :color="configStore.primaryColor" :size="size"></pulse-loader>
            </div>

            <div v-else class="flex justify-center">
                <div class="block p-6 rounded-lg shadow-lg bg-white w-full md:w-7/12 lg:w-5/12">
                    <form @submit.prevent="callSave">
                        <div class="mb-4">
                            <label for="exampleInputEmail2" class="form-label inline-block mb-2 text-gray-700">Name</label>
                            <input type="text" class="input" placeholder="Enter name" v-model="v$.template_name.$model">

                            <div v-for="error of v$.template_name.$errors" :key="error.$uid" class="text-red-400 text-sm">
                                {{ error.$message }}
                            </div>
                        </div>

                        <div>

                        </div>
                        <div class="mb-4">
                            <label for="exampleInputEmail2"
                                class="form-label inline-block mb-2 text-gray-700">Description</label>
                            <Editor api-key="8y2gp81db03id1edlpe82vz90zm9uz63dp1r6p15nucmv06v" :init="{
                                height: 500,
                                menubar: false,
                                plugins: [
                                    'advlist', 'autolink',
                                    'lists', 'link', 'image', 'charmap', 'preview', 'anchor', 'searchreplace', 'visualblocks',
                                    'fullscreen', 'insertdatetime', 'media', 'table', 'help', 'wordcount'
                                ],
                                toolbar:
                                    'undo redo | casechange blocks | bold italic backcolor | \
                                                                                                                                                                                                                                                        alignleft aligncenter alignright alignjustify | \
                                                                                                                                                                                                                                                        bullist numlst checklist outdent indent | removeformat | a11ycheck code table help'
                            }" v-model="v$.template_description.$model" />
                            <!-- <textarea name="" id="" cols="30" rows="10" class="input" placeholder="Description"
                                v-model="v$.template_description.$model"> </textarea> -->

                            <div v-for="error of v$.template_description.$errors" :key="error.$uid"
                                class="text-red-400 text-sm">
                                {{ error.$message }}
                            </div>
                        </div>

                        <div class="mb-4">
                            <label for="exampleInputEmail2" class="form-label inline-block mb-2 text-gray-700">Source Code
                                Link</label>
                            <input type="text" class="input" placeholder="Source Code Link"
                                v-model="v$.template_source_code_link.$model">

                            <div v-for="error of v$.template_source_code_link.$errors" :key="error.$uid"
                                class="text-red-400 text-sm">
                                {{ error.$message }}
                            </div>
                        </div>
                        <div class="mb-4">
                            <label for="exampleInputEmail2" class="form-label inline-block mb-2 text-gray-700">Demo
                                Link</label>
                            <input type="text" class="input" placeholder="Demo Link" v-model="v$.template_demo_link.$model">

                            <div v-for="error of v$.template_demo_link.$errors" :key="error.$uid"
                                class="text-red-400 text-sm">
                                {{ error.$message }}
                            </div>
                        </div>
                        <div class="mb-4">
                            <div class="flex items-center">
                                <label for="exampleInputEmail2" class="form-label inline-block text-gray-700">Is
                                    free</label>
                                <input type="checkbox" class="ml-3" placeholder="Demo Link"
                                    v-model="v$.template_is_free.$model">

                                <span class="text-gray-400 text-sm ml-2">{{ template_is_free }}</span>
                            </div>

                            <div v-for="error of v$.template_is_free.$errors" :key="error.$uid"
                                class="text-red-400 text-sm">
                                {{ error.$message }}
                            </div>
                        </div>

                        <div class="mb-4" v-if="!template_is_free">
                            <label for="exampleInputEmail2" class="form-label inline-block mb-2 text-gray-700">
                                Price</label>
                            <input type="text" class="input" placeholder="Price" v-model="v$.template_price.$model">

                            <div v-for="error of v$.template_price.$errors" :key="error.$uid" class="text-red-400 text-sm">
                                {{ error.$message }}
                            </div>
                        </div>

                        <div class="mb-4">
                            <label for="exampleInputEmail2" class="form-label inline-block mb-2 text-gray-700">Image
                                Thumbnail</label>
                            <div class="mb-4">
                                <input ref="input" type="file" name="image" accept="image/*" @change="setImage" />
                            </div>

                            <div class="hidden" ref="cropperBox">
                                <vue-cropper ref="cropper" :aspect-ratio="16 / 9" preview=".preview" />

                                <div class="mt-4">
                                    <LinkButton ref="cropButton" text="Crop" :is_link="false" @click="cropImage">
                                    </LinkButton>
                                </div>
                            </div>


                        </div>

                        <section v-if="cropImg" class="preview-area mb-4">
                            <p class="mb-2">Image Thumbnail Preview</p>
                            <div class="cropped-image">
                                <img :src="cropImg" alt="Cropped Image" />
                                <div class="crop-placeholder"> </div>
                            </div>
                        </section>

                        <div ref="addBtn">
                            <div v-if="is_loading" class="flex justify-center">
                                <pulse-loader :loading="is_loading" :color="configStore.primaryColor"
                                    :size="size"></pulse-loader>
                            </div>
                            <button v-else class="button w-full">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Parse from 'parse/dist/parse.min.js';
import SectionTitle from '@/components/backEnd/components/SectionTitle.vue';
import LinkButton from '@/components/frontEnd/components/LinkButton.vue';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import { ref, computed, onBeforeUnmount, onMounted } from 'vue';
import { ElNotification } from 'element-plus'
import { useVuelidate } from '@vuelidate/core'
import { required, email, sameAs } from '@vuelidate/validators'
import { useConfigStore } from '@/stores/config'
import { useRouter, useRoute } from 'vue-router'
import { useAppStore } from '@/stores/app'
import Editor from '@tinymce/tinymce-vue'

// cropper js

import VueCropper from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css';

const appStore = useAppStore()
const configStore = useConfigStore()
const router = useRouter()
const route = useRoute()

const is_loading = ref(false)
const template_name = ref('')
const template_description = ref('')
const template_demo_link = ref('')
const template_price = ref(0)
const template_is_free = ref(false)
const template_source_code_link = ref('')
const template_category = ref({})
const title = ref('Add Template')
const is_loading_template = ref(false)
const drop_down_placeholder = ref('Select Category')
const is_update = ref(false)
const template_as_object = ref(null)

const input = ref(null)
const cropper = ref(null)
const cropperBox = ref(null)
const cropButton = ref(null)
const addBtn = ref(null)
const cropImg = ref('')

const isParseFileSaved = ref(false)


let states = {
    template_name,
    template_description,
    template_demo_link,
    template_price,
    template_is_free,
    template_source_code_link,
    template_category
}


const rules = computed(() => ({
    template_name: { required },
    template_description: { required },
    template_demo_link: { required },
    template_price: { required },
    template_is_free: { required },
    template_source_code_link: { required },
    template_category: { required }

}))



const v$ = useVuelidate(rules, states)

function callSave(){
    is_update.value ? updateTemplate() : saveTemplate()
}

function setImage(e) {
    const file = e.target.files[0];
    if (file.type.indexOf('image/') === -1) {
        alert('Please select an image file');
        return;
    }
    cropperBox.value.classList.toggle('hidden')
    if (typeof FileReader === 'function') {
        const reader = new FileReader();
        reader.onload = (event) => {
            // this.imgSrc = event.target.result;
            // rebuild cropperjs with the updated source
            cropper.value.replace(event.target.result);
        };
        reader.readAsDataURL(file);
    } else {
        alert('Sorry, FileReader API not supported');
    }
}

function cropImage() {
    // get image data for post processing, e.g. upload or setting image src
    cropImg.value = cropper.value.getCroppedCanvas().toDataURL();


    cropper.value.getCroppedCanvas().toBlob((blob) => {

        // Gets the original image data
        // let fileInputElement = document.getElementById('id_image'); 
        // Make a new cropped image file using that blob object, image_data.name will make the new file name same as original image
        let file = new File([blob], input.value.files[0].name, { type: "image/*", lastModified: new Date().getTime() });
        // Create a new container
        let container = new DataTransfer();
        // Add the cropped image file to the container
        container.items.add(file);
        // Replace the original image file with the new cropped image file
        input.value.files = container.files;
        // Hide the cropper box
        cropperBox.value.classList.toggle('hidden')
        // Display the Post button
        addBtn.value.classList.remove('hidden')

    });
}

function onSelectedOption(selectedObject) {
    const categoryObject = appStore.categories.filter(
        (i) => i.id === selectedObject.id
    )
    template_category.value = categoryObject[0]

}

const saveTemplate = async () => {
    // onSelectedOption()
    isParseFileSaved.value = false
    const isFormCorrect = await v$.value.$validate()


    console.log(cropImg.value === '')
    if (!isFormCorrect && cropImg.value === '') {
        ElNotification({
            title: 'Error',
            message: 'Please fill the input',
            type: 'error',
        })
        return
    }

    if (cropImg.value === '') {
        ElNotification({
            title: 'Error',
            message: 'Please add image thumbnail',
            type: 'error',
        })
        return
    }

    is_loading.value = true
    const Template = Parse.Object.extend("Template");
    const template = new Template();
    const parseFile = new Parse.File(input.value.files[0].name, input.value.files[0])
    parseFile.save().then((result) => {
        console.log(result)

        template.set("name", template_name.value)
        template.set("description", template_description.value)
        template.set("demo_link", template_demo_link.value)
        template.set("source_code_link", template_source_code_link.value)
        template.set("price", parseInt(template_price.value))
        template.set("is_free", template_is_free.value)
        template.set("is_disabled", true)
        template.set("category", template_category.value)
        template.set('img_thumb', parseFile)


        template.save()
            .then((template) => {
                is_loading.value = false
                ElNotification({
                    title: 'Success',
                    message: 'Template created successfully ' + template.id,
                    type: 'success',
                })
                router.push('/account/templates')

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

    }, (error) => {
        is_loading.value = false

        ElNotification({
            title: 'Error',
            message: error.code + " - " + error.message + 'Something went wrong while trying to upload image',
            type: 'error',
        })
    });


}

const updateTemplate = async () => {
    const isFormCorrect = await v$.value.$validate()

    if (!isFormCorrect) {
        ElNotification({
            title: 'Error',
            message: 'Please fill the input',
            type: 'error',
        })
        return
    }

    if (cropImg.value === '') {
        ElNotification({
            title: 'Error',
            message: 'Please fill the an image',
            type: 'error',
        })
        return
    }

    is_loading.value = true
    if (input.value.files.length > 0) {

        console.log(input.value.files.length)
        const parseFile = new Parse.File(input.value.files[0].name, input.value.files[0])

        parseFile.save().then((result) => {
            console.log(result)

            updateTemplateObject(parseFile)

        }, (error) => {
            is_loading.value = false

            ElNotification({
                title: 'Error',
                message: error.code + " - " + error.message + 'Something went wrong while trying to upload image',
                type: 'error',
            })
        });
    }else{
        updateTemplateObject(false)
    }




}

function updateTemplateObject(parseFile) {
    console.log(template_as_object.value)
    template_as_object.value.set("name", template_name.value)
    template_as_object.value.set("description", template_description.value)
    template_as_object.value.set("demo_link", template_demo_link.value)
    template_as_object.value.set("source_code_link", template_source_code_link.value)
    template_as_object.value.set("price", parseInt(template_price.value))
    template_as_object.value.set("is_free", template_is_free.value)
    template_as_object.value.set("is_disabled", true)
    template_as_object.value.set("category", template_category.value)
    if(parseFile){
        template_as_object.value.set('img_thumb', parseFile)
    }
    


    template_as_object.value.save()
        .then((template) => {
            is_loading.value = false
            ElNotification({
                title: 'Success',
                message: 'Template updated successfully ' + template.id,
                type: 'success',
            })
            router.push('/account/templates')
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

function getTemplate() {
    const id = route.params.id
    is_loading_template.value = true
    let technologies = []

    const Template = Parse.Object.extend("Template");
    const query = new Parse.Query(Template);
    query.include("category");
    query.get(id)
        .then((object) => {
            // object.relation('technologies').query().each(function (relatedObject) {
            //     console.log('inside here')
            //     console.log(relatedObject);

            //     technologies.push({
            //         name: relatedObject.get('name')
            //     })

            // })
            console.log(object.get('category'))
            template_as_object.value = object
            template_name.value = object.get('name')
            template_description.value = object.get('description')
            drop_down_placeholder.value = object.get('category').get('name')
            template_category.value = object.get('category')
            template_demo_link.value = object.get('demo_link')
            template_price.value = object.get('price')
            template_is_free.value = object.get('is_free')
            template_source_code_link.value = object.get('source_code_link')
            cropImg.value = object.get('img_thumb').url()

            v$.value.template_category.$model = object.get('category')

            // onSelectedOption({id: object.id})
            // v$.value.template_category.$invalid = false
            // console.log(v$.value.template_category.required)

            is_loading_template.value = false
            return true

        }, (error) => {
            ElNotification({
                title: 'Error',
                message: error.code + " - " + error.message,
                type: 'error',
            })
        });

}


onMounted(async () => {
    await router.isReady()
    document.title = "Account | Edit Template"
    title.value = "Edit Template"
    const id = route.params.id
    if (id) {
        is_update.value = true
        getTemplate()
    }
})


onBeforeUnmount(() => {
    v$.$reset
})




</script>

<style>
.dropdown-toggle {
    width: 100%;

}

.dropdown-toggle input {
    display: block;
    width: 100%;
    background-color: white !important;
    border: 1px solid rgb(209 213 219) !important;
}
</style>
