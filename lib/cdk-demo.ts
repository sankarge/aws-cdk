import { CloudFrontToS3 } from "@aws-solutions-constructs/aws-cloudfront-s3";
import * as cdk from "aws-cdk-lib";
import { CfnOutput } from "aws-cdk-lib";
import { Construct } from "constructs";
import * as path from "path";
import * as s3deploy from "aws-cdk-lib/aws-s3-deployment";
import { PriceClass } from "aws-cdk-lib/aws-cloudfront";

export class CdkDemo extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const construct = new CloudFrontToS3(this, "CloudFrontToS3", {
      logS3AccessLogs: false,
      bucketProps: {
        versioned: true,
      },
      cloudFrontDistributionProps: {
        enableLogging: false,
        priceClass: PriceClass.PRICE_CLASS_100,
      },
    });

    new s3deploy.BucketDeployment(this, "DeployWebsite", {
      sources: [s3deploy.Source.asset(path.join(__dirname, "website"))],
      destinationBucket: construct.s3Bucket!,
    });

    new CfnOutput(this, "websiteURL", {
      value: "https://" + construct.cloudFrontWebDistribution.domainName,
    });
  }
}
