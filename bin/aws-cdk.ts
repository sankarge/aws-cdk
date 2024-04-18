#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { CdkDemo } from "../lib/cdk-demo";
import { DefaultStackSynthesizer } from "aws-cdk-lib";

const app = new cdk.App();
new CdkDemo(app, "cdk-demo-stack", {
  env: { account: "AWS_ACCOUNT_NUMBER", region: "eu-central-1" },
  synthesizer: new DefaultStackSynthesizer({
    qualifier: "awscdkdemo",
    fileAssetsBucketName: `awscdkdemo-assets`,
  }),
});
