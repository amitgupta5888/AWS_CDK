#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { S3CreateStack } from '../lib/s3create-stack';

const app = new cdk.App();
new S3CreateStack(app, 'S3CreateStack');
