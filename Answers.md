In Jest, what are the differences between describe() and it() globals, and what are good uses for them?

    The difference between describe() and it() is describe() breaks test suites into components, whereas it() performs individual tests. If you need to break down tests further, then use describe().

What is the point of Test Driven Development? What do you think about this approach?

The point of TDD is to check that the code is bug free and helps check changes that have been made to make sure that the tests pass. I find it very useful and a good safety net.

Mention three types of automated tests.

There is unit tests, which is when one segment of code is tested. Then there is integrations tests which tests multiple segments of code. Then there is end-to-end testing (acceptance tests/functional tests) which will test the whole application.