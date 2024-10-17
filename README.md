## Features

- [x] Filter Page: Allows selecting a vehicle brand and model year.
- [x] Results Page: Displays a list of filtered vehicle models based on the selections made on the filter page.
- [x] Dynamic Routing with Next.js: Utilizes dynamic routes to display results.
- [x] Environment Setup: Supports environment variables through a `.env.local` file.

exemple .env.local:

API_URL="https://vpic.nhtsa.dot.gov"

## Setup Instructions

1. Clone o repositório:

git clone https://github.com/Victtor-777/test-car

2. Install the dependencies:

npm install
Environment Variable Setup: Create a .env.local file in the root directory to store environment variables if needed.

3. Run the project in development mode:

npm run dev

4. Build the project for production:

npm run build

5. Start the project in production mode:

npm start

## Technical Choices Explained

### Why I Used Fetch API Instead of Axios or React Query ?

I chose not to use Axios because it utilizes "XMLRequest" under the hood, and for Next.js cache to work effectively, the "Fetch API" is required. Additionally, I didn't see the need for TanStack Query in this project since it’s relatively simple.

So, I opted for the Fetch API due to the simplicity of the project and the need for only a few API calls that could be easily managed with this native API. The Fetch API allowed me to keep the code lightweight and avoid additional dependencies.

### Suspense and Incremental Static Regeneration (ISR)

Suspense was used to improve the user experience by displaying a loading indicator while data is being fetched. ISR was configured so that some pages are pre-rendered during the build (for popular brands and years), while less frequently accessed pages are dynamically loaded and cached.

### Static Page Generation with generateStaticParams

To improve performance and SEO, pages for the most popular brand and year combinations are pre-rendered. I used a few sample brands, such as "BMW, Toyota, Ford, Mercedes, Tesla," and fetched data for the last five years. This resulted in a total of 30 static pages, which will provide instant access to information for users.

I didn’t generate static pages for all possible combinations, as it would have led to an overly large build with longer build times. Instead, I focused on the most frequently accessed car models.

Other combinations are dynamically generated as needed.

### Images in the Project

I included placeholder images in the project to allow for future use, in case the API eventually returns an image for each car. This setup will enable each image to be displayed on the car information card.

### Styling and Responsiveness

For the design, I referenced a few open Figma projects related to car rentals.

I used Tailwind CSS and Shadcn UI to ensure consistent and efficient design, as I had around 7 hours to develop this project.

I focused on implementing the core features first and left styling until the end, so the "Home" page may lack some responsive design elements and styles I wanted to implement. However, I believe the project looks good!

Design references:

https://www.figma.com/design/mBehYqXoeXrGzZex8nA7z8/Car-Rent-Website-Design---Pickolab-Studio-(Community)

https://www.figma.com/design/xvjjcIcBcNXhojew1RKtTC/(Preview-Only)---Rental-Car-Landing-Page-(Community)

https://www.figma.com/design/Xlvza5mSrWLbXSgip7nkri/Doe-Car-Rental-Landing-Page-(Community)

# Final Remarks

I enjoyed working on this project and implemented everything within the given timeframe and following best practices.

Thank you for the opportunity, and I would like to kindly ask for the chance to continue in the selection process. I am very dedicated and determined. I study consistently every day, with a strong sense of discipline, and I firmly believe in my potential because I know what I am capable of.

My English is intermediate, and I understand almost everything spoken; however, I need more practice with my speaking skills to become fluent. I am particularly interested in speaking clubs to improve my fluency.

Thank you again, and I look forward to the possibility of working together.

Thank you,
Victtor
