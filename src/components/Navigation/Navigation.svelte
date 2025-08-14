<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "flowbite-svelte";
  import { link } from 'svelte-spa-router';
  import { onMount } from 'svelte';
  import { UserCircleHero } from 'svelte-animated-icons';
  // Import the auth store
  import { isAuthorized, authRoute, checkAuth } from '../../stores/authStore.js';
  // importing components: 
  import Darkmode from "../../components/Darkmode/Darkmode.svelte";
  import NavDropdown from "../Dropdown/NavDropdown.svelte";
  import UserDetails from "../popover/UserDetails.svelte";
  // import static content
  import CertGen from "../../assets/icons/certGen3.png";
  let pages = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Register", path: "/register" }
  ];
  // Check auth on component mount
  onMount(async () => {
    await checkAuth();
  });
  // Subscribe to store values (reactive)
  $: currentAuthRoute = $authRoute;
  $: currentIsAuthorized = $isAuthorized;
  console.log('From navigation:\nIs authorized: ',$isAuthorized)
</script>


<Navbar class="bg-white-200 border-green-200 dark:bg-gray-900">
  <NavBrand href="/">
    <img src={CertGen} class="me-3 h-12 sm:h-9" alt="Logo" />
    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Cert Genie</span>
  </NavBrand>
  <NavHamburger />
    <NavUl>
    {#each pages as page}
      <NavLi>
        <a use:link href={page.path} class="block py-2 px-3 text-blue-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">
          {page.name}
        </a>
      </NavLi>
    {/each}
    <NavLi>
        <NavDropdown auth_Route={currentAuthRoute} />
    </NavLi>
    <NavLi class="mx-5">
      <Darkmode />
    </NavLi>
    {#if currentIsAuthorized}
    <NavLi>
      <UserCircleHero
        size={40}
        color="#c9cc2e"
        class="duration-600 hover:scale-120"
        />
        <UserDetails />
    </NavLi>
    {/if}
  </NavUl>
</Navbar>

