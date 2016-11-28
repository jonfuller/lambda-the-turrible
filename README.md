# Lambda the Turrible

## The purpose

Ever wanted one of those Staples Easy Buttons to say custom stuff? This won't quite get you there, but it'll at least let you push a button and then receive a phone call!

## Setup

    $ npm install -g node-lambda

### Twilio

`dev.config.env` file with the following:

    TWILIO_ACCOUNT_SID=<secret>
    TWILIO_AUTH_TOKEN=<secret>
    TWILIO_FROM=<twilio authorized from #>
    TO_NUMBER=<number to call>

### AWS

`.env` file with the following:

    AWS_ENVIRONMENT=development
    AWS_ACCESS_KEY_ID=<secret>
    AWS_SECRET_ACCESS_KEY=<secret>
    AWS_PROFILE=
    AWS_SESSION_TOKEN=
    AWS_ROLE_ARN=<arn>
    AWS_REGION=us-east-1
    AWS_FUNCTION_NAME=<name>
    AWS_HANDLER=index.handler
    AWS_MEMORY_SIZE=128
    AWS_TIMEOUT=60
    AWS_DESCRIPTION=
    AWS_RUNTIME=nodejs4.3
    AWS_VPC_SUBNETS=
    AWS_VPC_SECURITY_GROUPS=
    EXCLUDE_GLOBS="space separated glob list"
    PACKAGE_DIRECTORY=build

S3 bucket with the contents of `for_s3` (you'll probably need to install the [AWS Command Line Interface](https://aws.amazon.com/cli/))

    aws s3 cp for_s3 s3://<path to an s3 bucket of your choice>/ --recursive

Make sure you then make that bucket/directory public, and then point the URL in the `TwiML` file your newly uploaded sound file.

## Test/Run/Deploy

Run it locally:

    $ node-lambda run --configFile=dev.config.env

Deploy:

    $ node-lambda deploy --configFile=dev.config.env
