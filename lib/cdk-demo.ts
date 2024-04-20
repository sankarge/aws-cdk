import { CloudFrontToS3 } from "@aws-solutions-constructs/aws-cloudfront-s3";
import { CfnOutput, Duration, Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import * as path from "path";
import { PriceClass } from "aws-cdk-lib/aws-cloudfront";
import { BucketDeployment, Source } from "aws-cdk-lib/aws-s3-deployment";

export class CdkDemo extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const construct = new CloudFrontToS3(this, "CloudFrontToS3", {
      logS3AccessLogs: false,
      bucketProps: {
        bucketName: "my-bucket",
        versioned: true,
        lifecycleRules: [
          {
            noncurrentVersionExpiration: Duration.days(1),
            noncurrentVersionsToRetain: 1,
          },
        ],
      },
      cloudFrontDistributionProps: {
        enableLogging: false,
        priceClass: PriceClass.PRICE_CLASS_100,
      },
    });

    new BucketDeployment(this, "DeployWebsite", {
      sources: [Source.asset(path.join(__dirname, "website"))],
      destinationBucket: construct.s3Bucket!,
    });

    new CfnOutput(this, "websiteURL", {
      value: "https://" + construct.cloudFrontWebDistribution.domainName,
    });
  }
}
