<script>
  import { P, Heading, Hr, Button } from "flowbite-svelte";
  import { Animate } from 'svelte-animate'; 
</script>

<div class="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
  <div class="max-w-6xl mx-auto px-6 py-16">
    
    <!-- Hero Section -->
    <div class="text-center mb-20">
      <!-- <Animate> -->
        <h1 class="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
          About <span class="text-orange-600 dark:text-orange-500">Cert Genie</span>
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Simplify and streamline your certificate creation process with our automated platform. 
          Generate stunning, professional-quality certificates in just a click.
        </p>
      <!-- </Animate> -->
    </div>

    <!-- Introduction & Need Section -->
    <Animate>
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 mb-16 border border-orange-100 dark:border-gray-700">
        <div class="flex items-center mb-8">
          <div class="w-2 h-16 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full mr-6"></div>
          <Heading tag="h2" class="text-3xl font-bold text-gray-900 dark:text-white">
            The Need for Automation
          </Heading>
        </div>
        
        <P size="lg" class="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          In academic institutions and professional events, issuing certificates is often a repetitive and time-consuming process. 
          Manually creating each certificate can lead to errors, inconsistencies, and unnecessary delays.
        </P>
        
        <P size="lg" class="text-gray-700 dark:text-gray-300 leading-relaxed">
          The Certificate Generator App was designed to solve this problem by automating the entire certificate creation process. 
          Whether it's for workshops, seminars, competitions, or training programs, the app ensures that certificates are generated 
          quickly, accurately, and without the hassle of repetitive manual work.
        </P>
      </div>
    </Animate>

    <!-- Key Features Section -->
    <Animate>
      <div class="bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700 rounded-2xl shadow-xl p-8 md:p-12 mb-16 text-white">
        <div class="flex items-center mb-8">
          <div class="w-2 h-16 bg-white/30 rounded-full mr-6"></div>
          <Heading tag="h2" class="text-3xl font-bold text-white">
            Powerful Features
          </Heading>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8">
          <div class="space-y-4">
            <div class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
              <p class="text-white/90 leading-relaxed">Bulk participant data upload with CSV/Excel support</p>
            </div>
            <div class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
              <p class="text-white/90 leading-relaxed">Customizable certificate templates with drag-and-drop design</p>
            </div>
            <div class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
              <p class="text-white/90 leading-relaxed">Automatic name placement and text formatting</p>
            </div>
          </div>
          <div class="space-y-4">
            <div class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
              <p class="text-white/90 leading-relaxed">Logo and signature integration for branding</p>
            </div>
            <div class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
              <p class="text-white/90 leading-relaxed">Multiple export formats (PDF, PNG, JPEG)</p>
            </div>
            <div class="flex items-start space-x-3">
              <div class="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
              <p class="text-white/90 leading-relaxed">Secure user authentication and data protection</p>
            </div>
          </div>
        </div>
      </div>
    </Animate>

    <!-- Efficiency & Reliability Section -->
    <Animate>
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 mb-16 border border-orange-100 dark:border-gray-700">
        <div class="flex items-center mb-8">
          <div class="w-2 h-16 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full mr-6"></div>
          <Heading tag="h2" class="text-3xl font-bold text-gray-900 dark:text-white">
            Built for Performance
          </Heading>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8 mb-8">
          <div class="text-center p-6 bg-orange-50 dark:bg-gray-700 rounded-xl">
            <div class="text-3xl font-bold text-orange-600 dark:text-orange-500 mb-2">10x</div>
            <p class="text-gray-700 dark:text-gray-300 text-sm">Faster than manual creation</p>
          </div>
          <div class="text-center p-6 bg-orange-50 dark:bg-gray-700 rounded-xl">
            <div class="text-3xl font-bold text-orange-600 dark:text-orange-500 mb-2">99.9%</div>
            <p class="text-gray-700 dark:text-gray-300 text-sm">Accuracy rate</p>
          </div>
          <div class="text-center p-6 bg-orange-50 dark:bg-gray-700 rounded-xl">
            <div class="text-3xl font-bold text-orange-600 dark:text-orange-500 mb-2">1000+</div>
            <p class="text-gray-700 dark:text-gray-300 text-sm">Certificates per batch</p>
          </div>
        </div>
        
        <P size="lg" class="text-gray-700 dark:text-gray-300 leading-relaxed">
          By streamlining the certificate creation workflow, the app significantly reduces the time and effort needed to prepare certificates, 
          enabling event organizers to focus on more important tasks. With its optimized backend and lightweight interface, it delivers 
          high performance even when generating large batches of certificates, maintaining consistency and professionalism in every output.
        </P>
      </div>
    </Animate>

    <!-- Use Cases Section -->
    <Animate>
      <div class="bg-gray-50 dark:bg-gray-800/50 rounded-2xl shadow-xl p-8 md:p-12 mb-16 border border-orange-100 dark:border-gray-700">
        <div class="flex items-center mb-8">
          <div class="w-2 h-16 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full mr-6"></div>
          <Heading tag="h2" class="text-3xl font-bold text-gray-900 dark:text-white">
            Perfect For
          </Heading>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-orange-100 dark:border-gray-700 text-center">
            <div class="text-orange-600 dark:text-orange-500 text-2xl mb-3">🎓</div>
            <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Educational Institutions</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">Schools, colleges, and universities</p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-orange-100 dark:border-gray-700 text-center">
            <div class="text-orange-600 dark:text-orange-500 text-2xl mb-3">🏢</div>
            <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Corporate Training</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">Employee development programs</p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-orange-100 dark:border-gray-700 text-center">
            <div class="text-orange-600 dark:text-orange-500 text-2xl mb-3">🏆</div>
            <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Events & Competitions</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">Awards and recognition ceremonies</p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-orange-100 dark:border-gray-700 text-center">
            <div class="text-orange-600 dark:text-orange-500 text-2xl mb-3">📚</div>
            <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Online Courses</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">E-learning platforms and MOOCs</p>
          </div>
        </div>
      </div>
    </Animate>

    <!-- Conclusion Section -->
    <Animate>
      <div class="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl p-8 md:p-12 mb-16 border border-orange-100 dark:border-gray-700">
        <div class="flex items-center mb-8">
          <div class="w-2 h-16 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full mr-6"></div>
          <Heading tag="h2" class="text-3xl font-bold text-white">
            Ready to Transform Your Certificate Process?
          </Heading>
        </div>
        
        <P size="lg" class="text-gray-300 leading-relaxed mb-8">
          The Certificate Generator App bridges the gap between creativity and automation, making the certificate creation process 
          faster, smarter, and more reliable. It is an essential tool for educational institutions, corporate training teams, 
          and event organizers who value both quality and efficiency.
        </P>
        
        <div class="flex flex-col sm:flex-row gap-4">
          <Button 
            size="lg" 
            class="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Get Started
          </Button>
          <Button 
            size="lg" 
            class="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-xl font-semibold transition-all duration-200"
          >
            Learn More
          </Button>
        </div>
      </div>
    </Animate>

    <!-- Decorative separator -->
    <div class="flex justify-center mt-16">
      <div class="w-24 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full"></div>
    </div>

  </div>
</div>