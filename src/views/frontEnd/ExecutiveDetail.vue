<template>
    <div v-if="is_loading_single_executive" class="container py-10 mb-20">
        <el-skeleton style="width: 100%" animated>
            <template #template>
                <el-skeleton-item variant="image" style="width: 100%; height: 400px" />
            </template>
        </el-skeleton>
    </div>
    <div v-else>

        <div class="bg-gray-200">
            <div class="container py-6 md:py-12 flex flex-col gap-4 ">

                <div class="py-12">
                    <div class=" bg-white py-24 px-2 md:px-10 lg:px-52 relative">

                        <div class="absolute left-0 z-0">
                            <img src="@/assets/images/home_bg4.png" alt="" class="w-full ">
                        </div>
                        <div class="absolute right-0 top-0">
                            <img src="@/assets/images/payment_img2.png" alt="" class="w-full ">
                        </div>
                        <div class="absolute right-32 top-32">
                            <img src="@/assets/images/payment_img3.png" alt="" class="w-full ">
                        </div>
                        <svg data-v-68276cea="" width="100" height="100" viewBox="0 0 52 52" fill="none"
                            xmlns="http://www.w3.org/2000/svg" class="absolute pointer-events-none top-52 left-10">
                            <path data-v-68276cea=""
                                d="M52.0014 25.9998C52.0014 20.857 50.4764 15.8297 47.6192 11.5537C44.762 7.27767 40.7009 3.94494 35.9496 1.97697C31.1982 0.00900333 25.97 -0.505811 20.9261 0.497636C15.8821 1.50108 11.249 3.97772 7.61268 7.61435C3.97632 11.251 1.50003 15.8843 0.496956 20.9283C-0.506116 25.9723 0.00907868 31.2005 1.9774 35.9517C3.94572 40.7029 7.27876 44.7637 11.555 47.6206C15.8313 50.4775 20.8587 52.0021 26.0014 52.0017C32.8972 52.0012 39.5104 49.2615 44.3863 44.3853C49.2622 39.509 52.0014 32.8956 52.0014 25.9998ZM11.6006 25.9998C11.6006 23.1516 12.4452 20.3673 14.0276 17.9991C15.6099 15.6309 17.859 13.7851 20.4905 12.6951C23.1219 11.6052 26.0174 11.32 28.8109 11.8757C31.6044 12.4313 34.1704 13.8029 36.1844 15.8169C38.1984 17.8309 39.5699 20.3968 40.1256 23.1903C40.6812 25.9838 40.3961 28.8794 39.3061 31.5108C38.2161 34.1422 36.3703 36.3913 34.0021 37.9737C31.6339 39.5561 28.8497 40.4007 26.0014 40.4007C24.1102 40.4009 22.2375 40.0286 20.4902 39.305C18.7429 38.5814 17.1552 37.5206 15.8179 36.1833C14.4806 34.846 13.4199 33.2584 12.6963 31.5111C11.9726 29.7638 11.6003 27.891 11.6006 25.9998Z"
                                fill="#EDEDFD"></path>
                        </svg>

                        <svg data-v-68276cea="" width="82" height="122" viewBox="0 0 41 61" fill="none"
                            xmlns="http://www.w3.org/2000/svg" class="absolute pointer-events-none top-2/4 right-0">
                            <g data-v-68276cea="" clip-path="url(#clip0_8_176)">
                                <path data-v-68276cea="" d="M3.19199 0.00012207H2.20508V0.987033H3.19199V0.00012207Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M3.19199 5.96451H2.20508V6.95142H3.19199V5.96451Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M3.19199 11.9335H2.20508V12.9204H3.19199V11.9335Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M3.19199 17.8981H2.20508V18.885H3.19199V17.8981Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M3.19199 23.8622H2.20508V24.8492H3.19199V23.8622Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M3.19199 29.8269H2.20508V30.8138H3.19199V29.8269Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M3.19199 35.7959H2.20508V36.7828H3.19199V35.7959Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M3.19199 41.7601H2.20508V42.747H3.19199V41.7601Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M3.19199 47.7248H2.20508V48.7117H3.19199V47.7248Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M3.19199 53.6938H2.20508V54.6807H3.19199V53.6938Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M3.19199 59.658H2.20508V60.6449H3.19199V59.658Z" fill="#2449DB">
                                </path>
                                <path data-v-68276cea="" d="M8.59433 0.00012207H7.60742V0.987033H8.59433V0.00012207Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M8.59433 5.96451H7.60742V6.95142H8.59433V5.96451Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M8.59433 11.9335H7.60742V12.9204H8.59433V11.9335Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M8.59433 17.8981H7.60742V18.885H8.59433V17.8981Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M8.59433 23.8622H7.60742V24.8492H8.59433V23.8622Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M8.59433 29.8269H7.60742V30.8138H8.59433V29.8269Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M8.59433 35.7959H7.60742V36.7828H8.59433V35.7959Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M8.59433 41.7601H7.60742V42.747H8.59433V41.7601Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M8.59433 47.7248H7.60742V48.7117H8.59433V47.7248Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M8.59433 53.6938H7.60742V54.6807H8.59433V53.6938Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M8.59433 59.658H7.60742V60.6449H8.59433V59.658Z" fill="#2449DB">
                                </path>
                                <path data-v-68276cea="" d="M13.9957 0.00012207H13.0088V0.987033H13.9957V0.00012207Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M13.9957 5.96451H13.0088V6.95142H13.9957V5.96451Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M13.9957 11.9335H13.0088V12.9204H13.9957V11.9335Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M13.9957 17.8981H13.0088V18.885H13.9957V17.8981Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M13.9957 23.8622H13.0088V24.8492H13.9957V23.8622Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M13.9957 29.8269H13.0088V30.8138H13.9957V29.8269Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M13.9957 35.7959H13.0088V36.7828H13.9957V35.7959Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M13.9957 41.7601H13.0088V42.747H13.9957V41.7601Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M13.9957 47.7248H13.0088V48.7117H13.9957V47.7248Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M13.9957 53.6938H13.0088V54.6807H13.9957V53.6938Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M13.9957 59.658H13.0088V60.6449H13.9957V59.658Z" fill="#2449DB">
                                </path>
                                <path data-v-68276cea="" d="M19.3976 0.00012207H18.4106V0.987033H19.3976V0.00012207Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M19.3976 5.96451H18.4106V6.95142H19.3976V5.96451Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M19.3976 11.9335H18.4106V12.9204H19.3976V11.9335Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M19.3976 17.8981H18.4106V18.885H19.3976V17.8981Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M19.3976 23.8622H18.4106V24.8492H19.3976V23.8622Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M19.3976 29.8269H18.4106V30.8138H19.3976V29.8269Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M19.3976 35.7959H18.4106V36.7828H19.3976V35.7959Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M19.3976 41.7601H18.4106V42.747H19.3976V41.7601Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M19.3976 47.7248H18.4106V48.7117H19.3976V47.7248Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M19.3976 53.6938H18.4106V54.6807H19.3976V53.6938Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M19.3976 59.658H18.4106V60.6449H19.3976V59.658Z" fill="#2449DB">
                                </path>
                                <path data-v-68276cea="" d="M24.7994 0.00012207H23.8125V0.987033H24.7994V0.00012207Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M24.7994 5.96451H23.8125V6.95142H24.7994V5.96451Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M24.7994 11.9335H23.8125V12.9204H24.7994V11.9335Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M24.7994 17.8981H23.8125V18.885H24.7994V17.8981Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M24.7994 23.8622H23.8125V24.8492H24.7994V23.8622Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M24.7994 29.8269H23.8125V30.8138H24.7994V29.8269Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M24.7994 35.7959H23.8125V36.7828H24.7994V35.7959Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M24.7994 41.7601H23.8125V42.747H24.7994V41.7601Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M24.7994 47.7248H23.8125V48.7117H24.7994V47.7248Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M24.7994 53.6938H23.8125V54.6807H24.7994V53.6938Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M24.7994 59.658H23.8125V60.6449H24.7994V59.658Z" fill="#2449DB">
                                </path>
                                <path data-v-68276cea="" d="M30.1964 0.00012207H29.2095V0.987033H30.1964V0.00012207Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M30.1964 5.96451H29.2095V6.95142H30.1964V5.96451Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M30.1964 11.9335H29.2095V12.9204H30.1964V11.9335Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M30.1964 17.8981H29.2095V18.885H30.1964V17.8981Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M30.1964 23.8622H29.2095V24.8492H30.1964V23.8622Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M30.1964 29.8269H29.2095V30.8138H30.1964V29.8269Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M30.1964 35.7959H29.2095V36.7828H30.1964V35.7959Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M30.1964 41.7601H29.2095V42.747H30.1964V41.7601Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M30.1964 47.7248H29.2095V48.7117H30.1964V47.7248Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M30.1964 53.6938H29.2095V54.6807H30.1964V53.6938Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M30.1964 59.658H29.2095V60.6449H30.1964V59.658Z" fill="#2449DB">
                                </path>
                                <path data-v-68276cea="" d="M35.5978 0.00012207H34.6108V0.987033H35.5978V0.00012207Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M35.5978 5.96451H34.6108V6.95142H35.5978V5.96451Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M35.5978 11.9335H34.6108V12.9204H35.5978V11.9335Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M35.5978 17.8981H34.6108V18.885H35.5978V17.8981Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M35.5978 23.8622H34.6108V24.8492H35.5978V23.8622Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M35.5978 29.8269H34.6108V30.8138H35.5978V29.8269Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M35.5978 35.7959H34.6108V36.7828H35.5978V35.7959Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M35.5978 41.7601H34.6108V42.747H35.5978V41.7601Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M35.5978 47.7248H34.6108V48.7117H35.5978V47.7248Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M35.5978 53.6938H34.6108V54.6807H35.5978V53.6938Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M35.5978 59.658H34.6108V60.6449H35.5978V59.658Z" fill="#2449DB">
                                </path>
                                <path data-v-68276cea="" d="M41.0001 0.00012207H40.0132V0.987033H41.0001V0.00012207Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M41.0001 5.96451H40.0132V6.95142H41.0001V5.96451Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M41.0001 11.9335H40.0132V12.9204H41.0001V11.9335Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M41.0001 17.8981H40.0132V18.885H41.0001V17.8981Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M41.0001 23.8622H40.0132V24.8492H41.0001V23.8622Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M41.0001 29.8269H40.0132V30.8138H41.0001V29.8269Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M41.0001 35.7959H40.0132V36.7828H41.0001V35.7959Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M41.0001 41.7601H40.0132V42.747H41.0001V41.7601Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M41.0001 47.7248H40.0132V48.7117H41.0001V47.7248Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M41.0001 53.6938H40.0132V54.6807H41.0001V53.6938Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M41.0001 59.658H40.0132V60.6449H41.0001V59.658Z" fill="#2449DB">
                                </path>
                            </g>
                            <defs data-v-68276cea="">
                                <clipPath data-v-68276cea="" id="clip0_8_176">
                                    <rect data-v-68276cea="" width="55" height="60.6449" fill="white"
                                        transform="translate(-14)"></rect>
                                </clipPath>
                            </defs>
                        </svg>

                        <svg data-v-68276cea="" width="82" height="122" viewBox="0 0 41 61" fill="none"
                            xmlns="http://www.w3.org/2000/svg" class="absolute pointer-events-none bottom-0 -left-4">
                            <g data-v-68276cea="" clip-path="url(#clip0_8_176)">
                                <path data-v-68276cea="" d="M3.19199 0.00012207H2.20508V0.987033H3.19199V0.00012207Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M3.19199 5.96451H2.20508V6.95142H3.19199V5.96451Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M3.19199 11.9335H2.20508V12.9204H3.19199V11.9335Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M3.19199 17.8981H2.20508V18.885H3.19199V17.8981Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M3.19199 23.8622H2.20508V24.8492H3.19199V23.8622Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M3.19199 29.8269H2.20508V30.8138H3.19199V29.8269Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M3.19199 35.7959H2.20508V36.7828H3.19199V35.7959Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M3.19199 41.7601H2.20508V42.747H3.19199V41.7601Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M3.19199 47.7248H2.20508V48.7117H3.19199V47.7248Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M3.19199 53.6938H2.20508V54.6807H3.19199V53.6938Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M3.19199 59.658H2.20508V60.6449H3.19199V59.658Z" fill="#2449DB">
                                </path>
                                <path data-v-68276cea="" d="M8.59433 0.00012207H7.60742V0.987033H8.59433V0.00012207Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M8.59433 5.96451H7.60742V6.95142H8.59433V5.96451Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M8.59433 11.9335H7.60742V12.9204H8.59433V11.9335Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M8.59433 17.8981H7.60742V18.885H8.59433V17.8981Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M8.59433 23.8622H7.60742V24.8492H8.59433V23.8622Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M8.59433 29.8269H7.60742V30.8138H8.59433V29.8269Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M8.59433 35.7959H7.60742V36.7828H8.59433V35.7959Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M8.59433 41.7601H7.60742V42.747H8.59433V41.7601Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M8.59433 47.7248H7.60742V48.7117H8.59433V47.7248Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M8.59433 53.6938H7.60742V54.6807H8.59433V53.6938Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M8.59433 59.658H7.60742V60.6449H8.59433V59.658Z" fill="#2449DB">
                                </path>
                                <path data-v-68276cea="" d="M13.9957 0.00012207H13.0088V0.987033H13.9957V0.00012207Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M13.9957 5.96451H13.0088V6.95142H13.9957V5.96451Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M13.9957 11.9335H13.0088V12.9204H13.9957V11.9335Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M13.9957 17.8981H13.0088V18.885H13.9957V17.8981Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M13.9957 23.8622H13.0088V24.8492H13.9957V23.8622Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M13.9957 29.8269H13.0088V30.8138H13.9957V29.8269Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M13.9957 35.7959H13.0088V36.7828H13.9957V35.7959Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M13.9957 41.7601H13.0088V42.747H13.9957V41.7601Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M13.9957 47.7248H13.0088V48.7117H13.9957V47.7248Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M13.9957 53.6938H13.0088V54.6807H13.9957V53.6938Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M13.9957 59.658H13.0088V60.6449H13.9957V59.658Z" fill="#2449DB">
                                </path>
                                <path data-v-68276cea="" d="M19.3976 0.00012207H18.4106V0.987033H19.3976V0.00012207Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M19.3976 5.96451H18.4106V6.95142H19.3976V5.96451Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M19.3976 11.9335H18.4106V12.9204H19.3976V11.9335Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M19.3976 17.8981H18.4106V18.885H19.3976V17.8981Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M19.3976 23.8622H18.4106V24.8492H19.3976V23.8622Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M19.3976 29.8269H18.4106V30.8138H19.3976V29.8269Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M19.3976 35.7959H18.4106V36.7828H19.3976V35.7959Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M19.3976 41.7601H18.4106V42.747H19.3976V41.7601Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M19.3976 47.7248H18.4106V48.7117H19.3976V47.7248Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M19.3976 53.6938H18.4106V54.6807H19.3976V53.6938Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M19.3976 59.658H18.4106V60.6449H19.3976V59.658Z" fill="#2449DB">
                                </path>
                                <path data-v-68276cea="" d="M24.7994 0.00012207H23.8125V0.987033H24.7994V0.00012207Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M24.7994 5.96451H23.8125V6.95142H24.7994V5.96451Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M24.7994 11.9335H23.8125V12.9204H24.7994V11.9335Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M24.7994 17.8981H23.8125V18.885H24.7994V17.8981Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M24.7994 23.8622H23.8125V24.8492H24.7994V23.8622Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M24.7994 29.8269H23.8125V30.8138H24.7994V29.8269Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M24.7994 35.7959H23.8125V36.7828H24.7994V35.7959Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M24.7994 41.7601H23.8125V42.747H24.7994V41.7601Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M24.7994 47.7248H23.8125V48.7117H24.7994V47.7248Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M24.7994 53.6938H23.8125V54.6807H24.7994V53.6938Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M24.7994 59.658H23.8125V60.6449H24.7994V59.658Z" fill="#2449DB">
                                </path>
                                <path data-v-68276cea="" d="M30.1964 0.00012207H29.2095V0.987033H30.1964V0.00012207Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M30.1964 5.96451H29.2095V6.95142H30.1964V5.96451Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M30.1964 11.9335H29.2095V12.9204H30.1964V11.9335Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M30.1964 17.8981H29.2095V18.885H30.1964V17.8981Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M30.1964 23.8622H29.2095V24.8492H30.1964V23.8622Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M30.1964 29.8269H29.2095V30.8138H30.1964V29.8269Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M30.1964 35.7959H29.2095V36.7828H30.1964V35.7959Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M30.1964 41.7601H29.2095V42.747H30.1964V41.7601Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M30.1964 47.7248H29.2095V48.7117H30.1964V47.7248Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M30.1964 53.6938H29.2095V54.6807H30.1964V53.6938Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M30.1964 59.658H29.2095V60.6449H30.1964V59.658Z" fill="#2449DB">
                                </path>
                                <path data-v-68276cea="" d="M35.5978 0.00012207H34.6108V0.987033H35.5978V0.00012207Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M35.5978 5.96451H34.6108V6.95142H35.5978V5.96451Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M35.5978 11.9335H34.6108V12.9204H35.5978V11.9335Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M35.5978 17.8981H34.6108V18.885H35.5978V17.8981Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M35.5978 23.8622H34.6108V24.8492H35.5978V23.8622Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M35.5978 29.8269H34.6108V30.8138H35.5978V29.8269Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M35.5978 35.7959H34.6108V36.7828H35.5978V35.7959Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M35.5978 41.7601H34.6108V42.747H35.5978V41.7601Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M35.5978 47.7248H34.6108V48.7117H35.5978V47.7248Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M35.5978 53.6938H34.6108V54.6807H35.5978V53.6938Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M35.5978 59.658H34.6108V60.6449H35.5978V59.658Z" fill="#2449DB">
                                </path>
                                <path data-v-68276cea="" d="M41.0001 0.00012207H40.0132V0.987033H41.0001V0.00012207Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M41.0001 5.96451H40.0132V6.95142H41.0001V5.96451Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M41.0001 11.9335H40.0132V12.9204H41.0001V11.9335Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M41.0001 17.8981H40.0132V18.885H41.0001V17.8981Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M41.0001 23.8622H40.0132V24.8492H41.0001V23.8622Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M41.0001 29.8269H40.0132V30.8138H41.0001V29.8269Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M41.0001 35.7959H40.0132V36.7828H41.0001V35.7959Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M41.0001 41.7601H40.0132V42.747H41.0001V41.7601Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M41.0001 47.7248H40.0132V48.7117H41.0001V47.7248Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M41.0001 53.6938H40.0132V54.6807H41.0001V53.6938Z"
                                    fill="#2449DB"></path>
                                <path data-v-68276cea="" d="M41.0001 59.658H40.0132V60.6449H41.0001V59.658Z" fill="#2449DB">
                                </path>
                            </g>
                            <defs data-v-68276cea="">
                                <clipPath data-v-68276cea="" id="clip0_8_176">
                                    <rect data-v-68276cea="" width="55" height="60.6449" fill="white"
                                        transform="translate(-14)"></rect>
                                </clipPath>
                            </defs>
                        </svg>

                        <div class="flex flex-col items-center relative z-20">
                            <img class="mb-3 w-24 h-24 md:w-32 lg:w-40  md:h-32 lg:h-40 rounded-full shadow-lg mx-auto"
                                :src="single_executive.img_thumb" alt="product designer">

                            <h1 class="text-lg text-gray-700"> {{ single_executive.full_name || 'Gleiche Member' }} </h1>
                            <h3 class="text-sm text-gray-400 "> {{ single_executive.position }} </h3>
                            <p class="text-sm md:text-base text-gray-400 mt-4 text-justify"> Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit,
                                sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Corrupti quas laborum et non minima, perspiciatis possimus nulla, velit
                                cupiditate hic fugit dolores voluptates pariatur voluptatem voluptas recusandae asperiores
                                quidem quam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quasi corporis
                                perferendis non sunt sint, a repudiandae fugiat distinctio nisi maiores, doloribus voluptate
                                omnis fugit molestias voluptatem ea earum accusantium nesciunt? Iure qui corrupti
                                consequuntur minus saepe quidem pariatur ipsa vitae, voluptatibus, voluptate distinctio
                                molestiae enim velit voluptatum quaerat at? </p>
                        </div>


                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import PageBanner from '@/components/FrontEnd/components/PageBanner.vue'
import { useRouter, useRoute } from 'vue-router'
import { ref, watch, onMounted, onUnmounted, onBeforeMount } from 'vue'
import { useExecutivesStore } from '@/stores/executives'
import { storeToRefs } from 'pinia'



const route = useRoute()
const executivesStore = useExecutivesStore()
const { single_executive, is_loading_single_executive } = storeToRefs(executivesStore)
const { getSingleExecutive } = executivesStore



onMounted(async () => {
    document.title = `Gleiche foundation | ${route.params.title}`

    await getSingleExecutive(route.params.id)
})



</script>