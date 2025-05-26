# VorWerk Prototypes

## Stack
- TypeScript
- React
- Next.js

## Configuration

Authenticate private package `@vorwerk/fibre-react` following the instruction: 
- [PROD env](https://dev.azure.com/Vorwerk-FibreSingleBlend/Storybook/_artifacts/feed/Vorwerk-FibreSingleBlend/connect)
- [TEST env](https://dev.azure.com/Vorwerk-FibreSingleBlend/Storybook/_artifacts/feed/Vorwerk-FibreSingleBlend-TESTING/connect). 

Alternatively, you can use the `.npmrc.template` file:
1. Copy the content of `.npmrc.template` to a new file named `.npmrc` locally (~/.npmrc).
2. Provide the missing values in the `.npmrc` file.

**Please do not update .nmprc file in the root project.**

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Project structure

```
root
|-- app
|   |-- [routeName]  # API routes for server-side logic
|   |-- |-- page.tsx     # Main entry point for the application
|   |-- |-- layout.tsx   # The layout of the page
|   |-- page.tsx     # Main entry point for the application
|   |-- layout.tsx   # The layout of the page
|-- components
|   |-- [projectName]
|   |-- |-- [componentName] # Reusable React components
|   |-- shared
|   |-- |-- [componentName] # Reusable React components
|-- const
|   |--[constants.ts]  # Application-wide constants
|-- public
|   |-- [projectName]
|   |-- |-- assets       # Static files such as images, fonts, etc.
|-- utils
|   |-- [utility.ts] # Helper functions and utilities
```

#### Key Folders:

- `app/`: Contains the main application logic, including pages and API routes.
- `components/`: Houses reusable React components to maintain modularity.
- `const/`: Stores application-wide constants for better maintainability.
- `public/`: Contains static assets like images, fonts, and other files served directly by the server.
- `utils/`: Includes utility functions and helper methods to keep the codebase clean and DRY.


## Deployment
To build the project for production, use:

```bash
npm run build
```

After building, you can start the production server with:

```bash
npm start
```

#### Test Server Deployment
The deployment to the test server is handled automatically via Cloudflare. The process is as follows:

1. Create a Pull Request (PR) in the repository.
2. During the PR process:
   - The build is triggered automatically.
   - The code is checked for errors and issues.
3. Once the build is successful, a test URL is generated and provided as part of the PR process.

This allows you to preview and test the changes in a staging environment before merging the PR.

#### Production Deployment
For production deployment, ensure the build is complete and the code is merged into the main branch. The deployment process will follow the organization's defined CI/CD pipeline.

## License
This project is licensed under the terms defined by the organization.

## Workflow

The development and deployment workflow for this project follows these steps:

#### 1. Feature Development
   - Create a new branch from the `main` branch for your feature or bug fix.
     - name convention - feat/VOW-xxxx/[description], fix/VOW-xxxx/[description]
   - Implement the required changes and commit them with clear and descriptive messages.
     - name convention - feat: VOW-xxxx [description], fix: VOW-xxxx [description]
   - At the end of development run `npm run build` to check if the build passes

#### 2. Code Review
   - Push your branch to the remote repository.
   - Create a Pull Request (PR) to merge your branch into the `main` branch.
   - The PR will trigger automated checks, including:
     - Code linting and formatting validation.
     - A build process to verify that the application compiles successfully.

#### 3. Testing in Staging
   - Once the PR passes all checks, a test build is deployed automatically to the staging environment via Cloudflare.
   - A test URL is generated and shared in the PR for preview and testing purposes.
   - Review the test deployment and ensure all changes work as expected.

#### 4. Approval and Merge
   - After testing, the PR is reviewed and approved by the team.
   - Merge the PR into the `main` branch.

#### 5. Production Deployment
   - The CI/CD pipeline automatically deploys the changes from the `main` branch to the production environment.
   - Monitor the production deployment to ensure everything works as expected.

#### 6. Post-Deployment
   - Verify the production environment and resolve any issues if they arise.
   - Close the associated issue or task in the project management tool.

This workflow ensures a smooth and efficient development process while maintaining high code quality and minimizing risks during deployment.


