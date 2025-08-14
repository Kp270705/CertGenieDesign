<script>
  import { Section, HeroHeader } from "flowbite-svelte-blocks";
  import { Button } from "flowbite-svelte";

  import { SpeedDial, SpeedDialTrigger, SpeedDialButton } from "flowbite-svelte";
  import { XSolid, LinkedinSolid, WhatsappSolid} from "flowbite-svelte-icons";
  import { blur, scale } from "svelte/transition";

  import { ArrowRightOutline, GithubSolid, InstagramSolid, RedditSolid } from "flowbite-svelte-icons";
  import { VideoCameraSolid, AppleFullSolid } from "flowbite-svelte-icons";
  import { link } from 'svelte-spa-router';
  import certImg from "../assets/Images/auth/demoCert2.png";
</script>

<!-- HERO SECTION -->
<Section name="heroDefault" class="min-h-screen flex flex-col justify-center bg-gradient-to-br from-amber-50 to-white dark:from-gray-900 dark:to-gray-800">
  <div class="text-center max-w-3xl mx-auto">
    <HeroHeader h1Class="text-5xl font-extrabold mb-4 dark:text-white" pClass="text-lg text-gray-600 dark:text-gray-300">
      {#snippet h1()}PDF Certificate Generator{/snippet}
      {#snippet paragraph()}Simplify and streamline your certificate creation process with our automated platform. Generate stunning, professional-quality certificates in just a click.{/snippet}
    </HeroHeader>

    <!-- Buttons -->
    <div class="mt-6 flex justify-center gap-4">
      <a use:link href="/login">
        <Button size="lg" color="amber" class="duration-600 hover:scale-110">
          Get Started <ArrowRightOutline size="md" class="-mr-1 ml-2" />
        </Button>
      </a>
      <a use:link href="/about">
        <Button size="lg" color="light" class="duration-600 hover:scale-107">
          <VideoCameraSolid size="xs" class="mr-2 -ml-1" />
          Learn more
        </Button>
      </a>
    </div>

    <!-- Social Icons -->
    <div class="mt-10 flex justify-center gap-8 text-gray-500 dark:text-gray-400">
      <a href="https://github.com/Kp270705" target="_blank"><GithubSolid size="xl" class="text-gray-900 dark:text-gray-900 duration-600 hover:scale-210" /></a>
      <a href="https://www.instagram.com/kunalpathak_847/" target="_blank"><InstagramSolid size="xl" class="text-pink-400 dark:text-pink-400 duration-600 hover:scale-210"/></a>
      <a href="https://www.reddit.com/user/Sudden_Complaint_837/" target="_blank"><RedditSolid size="xl" class="text-orange-400 dark:text-orange-400 duration-600 hover:scale-210" /></a>
    </div>
    <div class="fixed bottom-6 right-2 z-50 speedDial">
      <SpeedDialTrigger class="absolute end-2 bottom-6" />
      <SpeedDial transition={blur} transitionParams={{ duration: 1000 }}>
        <a href="https://x.com/KunalP699">
          <SpeedDialButton name="Connect on X" class="duration-600 hover:scale-110">
            <XSolid color="#000000" class="h-6 w-6" />
          </SpeedDialButton>
        </a>
        <a href="www.linkedin.com/in/kunal-pathak-162929237">
          <SpeedDialButton name="Connect on Linkedin" class="duration-600 hover:scale-110">
            <LinkedinSolid class="h-6 w-6" color="#0a66c2"/>
          </SpeedDialButton>
        </a>
        <a href="https://wa.me/918979963277">
        <SpeedDialButton name="Connect on WhatsApp" class="duration-600 hover:scale-110">
          <WhatsappSolid class="shrink-0 h-6 w-6" color="#008000"/>
        </SpeedDialButton>
        </a>
      </SpeedDial>
    </div>
  </div>

</Section>

<!-- SECOND SECTION -->
<div class="">
<section class="py-20 bg-white dark:bg-gray-900">
  <div class="container mx-auto px-6 lg:flex lg:items-center lg:gap-16">
    <!-- Text -->
    <div class="lg:w-1/2">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Certificate Tool for Institutions & Organizations
      </h2>
      <p class="text-gray-600 dark:text-gray-300 mb-6">
        From creation to secure delivery, our platform lets you send professional certificates worldwide with just one click.
      </p>
      <div class="flex gap-4">
        <a use:link href="/login">
          <Button size="lg" color="amber" class="transition duration-600 hover:scale-110">
            Get Started <ArrowRightOutline size="md" class="-mr-1 ml-2" />
          </Button>
        </a>
        <a use:link href="/about">
          <Button size="lg" color="light" class="transition duration-600 hover:scale-107">
            <VideoCameraSolid size="xs" class="mr-2 -ml-1" />
            Learn more
          </Button>
        </a>
      </div>
    </div>

    <!-- Image -->
    <div class="lg:w-1/2 mt-10 lg:mt-0">
      <img src={certImg} alt="Certificate Example" class="rounded-lg shadow-lg" />
    </div>
  </div>

</section>
</div>