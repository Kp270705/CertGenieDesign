<!-- Protected.svelte:  -->

<script>

  import { push } from 'svelte-spa-router';
  import { onMount } from 'svelte';
  import Home from './Home.svelte';
  import { CardPlaceholder, ImagePlaceholder, ListPlaceholder, Skeleton, TestimonialPlaceholder, TextPlaceholder, VideoPlaceholder, WidgetPlaceholder } from "flowbite-svelte";
  import { Toast } from "flowbite-svelte";
  import { CheckCircleSolid, ExclamationCircleSolid, FireOutline, CloseCircleSolid } from "flowbite-svelte-icons";
  import { P, Heading, Hr } from "flowbite-svelte";
  

  import accessDenied from "../assets/icons/accessDenied1.png";
  import routesType from '../config/backend_routes.js';
  import { isAuthorized, authRoute, checkAuth, showLoginToast } from "../stores/authStore.js";
  import AuthCard from '../components/Card/authCard.svelte';

  let error = '';
  let errorDetail = '';
  let iconType = '';
  let btnAction = '';
  let btnRoute = '';
  let btnAction2 = '';
  let btnRoute2 = '';
  let successToast = false; // whether toast is visible
  let toastShown = false;   // prevent showing twice in same session

  $: currentIsAuthorized = $isAuthorized;
  // Check if we should show toast
  if (sessionStorage.getItem('showLoginToast') === 'true') {
    toastShown = true;
    sessionStorage.removeItem('showLoginToast'); // remove so it won't show again
  }


  const AuthErrors = {
    TOKEN_EXPIRED: 401,
    MISSING_TOKEN:401,
    INVALID_TOKEN: 422,
  };
    onMount(async () => {
    const token = localStorage.getItem("jwt_token")
    await checkAuth()
    });

</script>


{#if !currentIsAuthorized}
   <Heading  tag="h6" class="mt-0 mb-10 text-blue-400 dark:text-yellow-300 uppercase italic underline text-center font-semibold bg-gray-50 dark:bg-gray-700 p-4" >
    Please login first ...
  </Heading>
  <Skeleton size="xl" class="mt-5 mb-2" />
  <br> <br>
  <ImagePlaceholder size="lg" class="ml-4" />
  <br> <br>
    <Skeleton size="2xl" class="mt-5 mb-2" />
{:else}
  <div class={!currentIsAuthorized ? "blur-sm pointer-events-none select-none transition-all duration-300" : ""}>
    {#if isAuthorized}
      {#if successToast}
      <div class="fixed top-4 left-1/2 transform -translate-x-1/2  z-50">
        <Toast color="green">
          {#snippet icon()}
            <CheckCircleSolid class="h-15 w-15" />
            <span class="sr-only">Check icon</span>
          {/snippet}
          Logged-in successfully.
        </Toast>
      </div>
    {/if}
      <Home />
    {/if}
  </div>


{/if}