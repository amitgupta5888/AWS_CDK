#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { Test1Stack } from '../lib/test1-stack';

const app = new cdk.App();
new Test1Stack(app, 'Test1Stack');
