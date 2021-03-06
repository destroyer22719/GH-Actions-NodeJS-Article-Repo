### Set up a CD workflow for NodeJS to AWS Lambda
This is the original article that I wrote: https://dev.to/destroyer22719/set-up-a-cd-workflow-for-nodejs-to-aws-lambda-4c26

## Code for `deploy.yaml`
```yaml
on:
  push:
    tags:
    - 'v*.*.*'
jobs:
  serverless-deploy-production:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v1
        with: 
          node-version: 12
      - name: Install serverless CLI
        run: npm install -g serverless
      - name: Install npm dependencies
        run: npm install 
      - name: set environment variables
        run: |
          touch .env
          echo "API_KEY=${{secrets.API_KEY}}" >> .env
      - name: deploy
        run: |
          serverless config credentials --provider aws --key ${{secrets.AWS_ACCESS_KEY_ID}} --secret ${{secrets.AWS_SECRET_ACCESS_KEY}}
          serverless deploy --stage production
```
The code in the current repo is for those with an AWS Educate account or an account with a session token. For normal users please use the above code in your GH Actions workflow