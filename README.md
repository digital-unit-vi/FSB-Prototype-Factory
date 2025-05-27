# VorWerk Prototypes

## Stack

The project leverages the following technologies:

- **TypeScript**: A strongly typed programming language that builds on JavaScript, providing better tooling and reducing runtime errors.
- **React**: A JavaScript library for building user interfaces, focusing on component-based architecture and efficient rendering.
- **Next.js**: A React framework that enables server-side rendering (SSR), static site generation (SSG), and other advanced features like API routes and image optimization.
- **Node.js**: Used as the runtime environment for server-side logic and API routes.
- **Stylelint**: A modern CSS/SCSS linter to enforce consistent styling and avoid errors in stylesheets.
- **ESLint**: A tool for identifying and fixing problems in JavaScript/TypeScript code, ensuring code quality and consistency.
- **Prettier**: An opinionated code formatter to maintain consistent code style across the project.
- **direnv**: A tool for managing environment variables, simplifying the configuration process for local development.
- **Cloudflare**: Used for automated deployments to the test server, providing a seamless CI/CD pipeline.

This stack was chosen to ensure a balance between developer productivity, code quality, and application performance.

## Configuration

To authenticate the private package `@vorwerk/fibre-react`, follow these steps:

1. **Create an Environment File**:
   - Copy the content of `.env.template` to a new file named `.env`.

2. **Generate a Personal Access Token (PAT)**:
   - Go to [Azure DevOps Personal Access Tokens](https://dev.azure.com/Vorwerk-FibreSingleBlend/_usersSettings/tokens).
   - Generate a token with `Packaging` read & write scopes.

3. **Base64 Encode the Token**:
   - Use the following command to encode your token:
     ```bash
     node -e "require('readline') .createInterface({input:process.stdin,output:process.stdout,historySize:0}) .question('PAT> ',p => { b64=Buffer.from(p.trim()).toString('base64');console.log(b64);process.exit(); })"
     ```
   - Paste your Personal Access Token (PAT) when prompted and press Enter.
   - Copy the Base64-encoded value.

4. **Update the `.env` File**:
   - Replace `[BASE64_ENCODED_PERSONAL_ACCESS_TOKEN]` in your `.env` file with the encoded value from Step 3.

5. **Enable Environment Variables in `.npmrc`**:
   - To use variables in the `.npmrc` file, install and configure `direnv` as described below.

### Using `direnv` to Manage Environment Variables

1. **Install `direnv`**:
   - On Linux:
     ```bash
     apt-get install direnv
     ```
   - On macOS:
     ```bash
     brew install direnv
     ```

2. **Hook `direnv` into Your Shell**:
   - For **Bash**:
     Add the following line to the end of your `~/.bashrc` file:
     ```bash
     eval "$(direnv hook bash)"
     ```
   - For **Zsh**:
     Add the following line to the end of your `~/.zshrc` file:
     ```bash
     eval "$(direnv hook zsh)"
     ```

3. **Load Variables Globally**:
   - Run the following command to allow `direnv` to load variables:
     ```bash
     direnv allow
     ```

## Troubleshooting

#### Direnv still doesn't load `.env` variables

If `direnv` is not loading your `.env` variables, follow these steps:

1. **Create a Configuration Directory**:
   ```bash
   mkdir -p ~/.config/direnv
   ```

2. **Create a Configuration File**:
   ```bash
   touch ~/.config/direnv/direnv.toml
   ```

3. **Add Global Settings**:
   Open the configuration file and add the following:
   ```toml
   [global]
   load_dotenv = true
   ```

4. **Reload Your Shell**:
   Save the file and reload your shell:
   ```bash
   exec $SHELL
   ```

5. **Re-run `direnv`**:
   Run the following command to apply the changes:
   ```bash
   direnv allow
   ```

## Running the project locally

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

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

## License
This project is licensed under the terms defined by the organization.
