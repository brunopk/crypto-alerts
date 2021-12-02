# Serverless - AWS Node.js Typescript

This project has been generated using the `aws-nodejs-typescript` template from the [Serverless framework](https://www.serverless.com/).

For detailed instructions, please refer to the [documentation](https://www.serverless.com/framework/docs/providers/aws/).

## Requirements:

- NodeJS `lts/fermium (v.14.15.0)`. If you're using [nvm](https://github.com/nvm-sh/nvm), run `nvm use` to ensure you're using the same Node version in local and in your lambda's runtime.
- Serverless (install it globally with `npm` or `yarn`).

## Locally

### Requirements:

In order to use a local version of the database, install Docker Engine and run the following command:

```
docker-compose up
```

### Steps to run locally:

```
npx sls invoke local -f hello
```

or

```
yarn sls invoke local -f hello
```

Check the [sls invoke local command documentation](https://www.serverless.com/framework/docs/providers/aws/cli-reference/invoke-local/) for more information.

## Deployment

1. Create IAM user `serverless-admin` with programmatic access.
2. Create IAM policy using `policy.json` file and add it to `serverless-admin`.
3. Create an S3 bucket named `crypto-alert-builds` in `us-east-1` region.
4. Set AWS credentials (credentials are obtained in step 1):
   ```
   serverless config credentials --provider aws --key AKIAIOSFODNN7EXAMPLE --secret wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
   ```
   Credentials will be saved in `~/.aws/credentials` file.
5. Install the project dependencies:
    ```
    npm i
    ```
    or
    ```
    yarn
    ```
6. Run serverless deploy:
   ```
   serverless deploy
   ```

> Go to Cloud Formation to see the result of the deployment

### Advanced usage

Any tsconfig.json can be used, but if you do, set the environment variable `TS_NODE_CONFIG` for building the application, eg `TS_NODE_CONFIG=./tsconfig.app.json npx serverless webpack`


crypto.123
