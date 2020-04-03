import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import Test1 = require('../lib/test1-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new Test1.Test1Stack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
