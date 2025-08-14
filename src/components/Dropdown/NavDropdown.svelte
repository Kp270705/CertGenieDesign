<script>
    // import svelte-flowbite essentials
    import { Button, Modal, P, Dropdown, DropdownItem } from "flowbite-svelte";
    import { ChevronDownOutline } from "flowbite-svelte-icons";
    import { Toast } from "flowbite-svelte";
    import { CheckCircleSolid, ExclamationCircleSolid, FireOutline, CloseCircleSolid } from "flowbite-svelte-icons";

    // import svelte essentials
    import { onMount } from 'svelte';
	import { push } from 'svelte-spa-router';

    import { isAuthorized, authRoute, checkAuth } from '../../stores/authStore.js';

    // import static files:
    import routesType from "../../config/backend_routes";

    let toast= $state(false);

    // export let authRoute;
    let {auth_Route} = $props()

     // Check auth on component mount
    onMount(async () => {
        await checkAuth();
        console.log(`Is authorized. ${isAuthorized} `)
    });


    async function signOut(e){
        e.preventDefault();
        try {
        const response = await fetch(`${routesType.current_route}/auth/logout`, {
            credentials: "include",
        });
        if (isAuthorized){
            console.log('200')
            localStorage.removeItem("jwt_token");
            push('/login')
        }
        } catch(err){
            alert(err)
        }
    }

    function handleClick(e) {
        if ($authRoute === "Sign-Out") {
            signOut(e);
            if (! $isAuthorized){
                toast = true
        }
        } else {
            push('/login');
        }
    }


</script>

<div>
    <p class="flex items-center ml-2 mt-2 text-blue-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">Options</p>
    <ChevronDownOutline class="ms-2 h-6 w-6 text-black dark:text-white" />
    <Dropdown simple>
    <DropdownItem>
        <Button onclick={handleClick}>
        {auth_Route}
        </Button>
        {#if toast }
            <Toast color={undefined} class="bg-pink-100 text-pink-500 dark:bg-pink-800 dark:text-pink-200">
            {#snippet icon()}
                <FireOutline class="h-6 w-6" />
            {/snippet}
            Customize your colors.
            </Toast>
        {/if}
            
    </DropdownItem>
    </Dropdown>
</div>