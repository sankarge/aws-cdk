# Welcome to your CDK TypeScript project

This is a [CDK TypeScript demo project](https://docs.aws.amazon.com/cdk/v2/guide/work-with-cdk-typescript.html)

## CDK Commands

| Description                                      | Command                                                                                                                                                                           |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Bootstrap (necessary only once at the beginning) | `cdk bootstrap <AWS_ACCOUNT_NUMBER>/eu-central-1 --qualifier "awscdkdemo" --bootstrap-bucket-name "awscdkdemo-assets" --toolkit-stack-name "awscdkdemo-toolkit" --tags Owner=it.zeppelin` |
| Generate synthesized CloudFormation template     | `cdk synth`                                                                                                                                                                       |
| Compare deployed stack with current state        | `cdk diff cdk-demo-stack`                                                                                                                                                         |
| Deploy stack to your default AWS account/region  | `cdk deploy --toolkit-stack-name "awscdkdemo-toolkit" cdk-demo-stack`                                                                                                             |

```

## Other useful commands

- `npm run build` compile typescript to js
- `npm run watch` watch for changes and compile
- `npm run test` perform the jest unit tests
```


## Materials
- [AWS CDK Getting started](https://docs.aws.amazon.com/cdk/v2/guide/home.html)
- [OnePortal infra architecture](https://miro.com/app/board/uXjVNO2nmV4=/)
- [OnePortal infra reference](https://gitlab.build-unite.unite.eu/unite/infra)
- [UPP Infra reference](https://gitlab.build-unite.unite.eu/procurement-portal-redesign/unite-procurement-portal/-/tree/master/infrastructures/target-stages.upp-frontend-infrastructure?ref_type=heads)
