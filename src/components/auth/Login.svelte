<!-- Login.svelte -->

<script>
  // import authStore functions
  import { login } from "../../stores/authStore.js";
  
  // import sv-ui essentials
  import { Card, Button, Label, Input } from "flowbite-svelte";
  
  // import svelte essentials
	import { push } from 'svelte-spa-router';
	import { link } from 'svelte-spa-router';
  
  // import components:
	import Error from '../Card/authCard.svelte';

	// define state variables for error defining:
	let showError = $state(false);
	let error = $state('');
	let errorDetail = $state('');
	let btnAction = $state('');
	let btnAction2 = $state('');
	let btnRoute = $state('');
	let btnRoute2 = $state(null);
	let iconType = $state();

	// Simple login handler using authStore
	async function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const credentials = Object.fromEntries(formData.entries());

    // Use authStore login function
    const result = await login(credentials);

    if (result.success) {
      // Success - Show success modal
      error = result.message;
      errorDetail = result.description;
      showError = true;
      btnAction = "Go to Dashboard";
      btnRoute = "/home";
      btnAction2 = null;
      btnRoute2 = null;
      iconType = "loginSuccess";

      // Auto-redirect after 2 seconds
      setTimeout(() => {
        push("/home");
      }, 2000);

    } else {
      // Handle different error cases
      if (result.status === 404) {
        btnAction = "Register";
        btnRoute = "/register";
        btnAction2 = "Login";
        btnRoute2 = "/login";
        iconType = "userNotFound";
      } else if (result.status === 401) {
        btnAction = "Try Again";
        btnRoute = "/login";
        btnAction2 = null;
        btnRoute2 = null;
        iconType = "wrongDetails";
      } else {
        btnAction = "Try Again";
        btnRoute = "/login";
        btnAction2 = null;
        btnRoute2 = null;
        iconType = "serverNotAvailable";
      }

      error = result.message;
      errorDetail = result.description;
      showError = true;
    }
  }
</script>

<!-- Centering container -->
<div class="flex items-center justify-center h-full p-4 mt-25">
  <Card class="p-4 sm:p-6 md:p-8 relative w-full max-w-md">
    <div class={`space-y-4 p-6 sm:p-8 md:space-y-6 transition-all duration-300 ${showError ? 'blur-md pointer-events-none' : ''}`}>
      <form class="flex flex-col space-y-6" onsubmit={handleSubmit}>
        <h3 class="text-xl font-medium text-gray-900 dark:text-white">Login in to your account</h3>
        <Label class="space-y-2">
          <span>Email</span>
          <Input type="email" name="email" placeholder="name@company.com" required />
        </Label>
        <Label class="space-y-2">
          <span>Your password</span>
          <Input type="password" name="password" placeholder="•••••" required />
        </Label>
        <Button type="submit" class="w-full">Login to your account</Button>
        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
          Not registered? <a use:link href="/register" class="text-primary-700 dark:text-primary-500 hover:underline">Create account</a>
        </div>
      </form>
    </div>

    {#if showError}
      <div class="fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm">
        <Error 
          {error} 
          {errorDetail} 
          {btnAction} 
          {btnAction2} 
          {btnRoute} 
          {btnRoute2}
          {iconType} 
          close={() => {
            showError = false;
            error = '';
            errorDetail = '';
            btnAction = '';
            btnAction2 = '';
            btnRoute = '';
            btnRoute2 = '';
            iconType = '';
          }
        } />
      </div>
    {/if}
  </Card>
</div>





