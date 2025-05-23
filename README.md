This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Configuration

The file `.env.template` contains all env variables needed for FibreSingleBlend authentication process and are required to properly run of application on your local machine. This file content must be copied to new file called `.env` in this same directory and missing values must be provided.
To create you personal access token follow step described in: 

for PROD: https://dev.azure.com/Vorwerk-FibreSingleBlend/Storybook/_artifacts/feed/Vorwerk-FibreSingleBlend/connect

for TEST: https://dev.azure.com/Vorwerk-FibreSingleBlend/Storybook/_artifacts/feed/Vorwerk-FibreSingleBlend-TESTING/connect

#### Step 1
Generate a [Personal Access Token](https://dev.azure.com/Vorwerk-FibreSingleBlend/_usersSettings/tokens) with Packaging read & write scopes.

#### Step 2
Base64 encode the personal access token from Step 2.

One safe and secure method of Base64 encoding a string is to:

1. From a command/shell prompt run:
```bash
node -e "require('readline') .createInterface({input:process.stdin,output:process.stdout,historySize:0}) .question('PAT> ',p => { b64=Buffer.from(p.trim()).toString('base64');console.log(b64);process.exit(); })"
```

2. Paste your personal access token value and press Enter/Return
3. Copy the Base64 encoded value

#### Step 3
Set NPM_PASSWORD value in your .env file with your personal access token from Step 2.


## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

