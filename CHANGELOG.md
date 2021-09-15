## 14.2.0 (2021-09-15)

* feat: promoting the new guzzle snippet to be the php default ([4aea7c7](https://github.com/readmeio/oas-to-snippet/commit/4aea7c7))



## 14.1.0 (2021-09-14)

* chore(deps-dev): bumping dev deps ([b780ed6](https://github.com/readmeio/oas-to-snippet/commit/b780ed6))
* chore(deps-dev): downgrading oas-extensions to being just a dev dep ([b9aa522](https://github.com/readmeio/oas-to-snippet/commit/b9aa522))
* chore(deps): bumping har-related deps (#20) ([2c3739f](https://github.com/readmeio/oas-to-snippet/commit/2c3739f)), closes [#20](https://github.com/readmeio/oas-to-snippet/issues/20)
* fix: don't treat har overrides as already being encoded ([a00c933](https://github.com/readmeio/oas-to-snippet/commit/a00c933))
* fix: upgrading oas-to-har to resolve issues with style serialization ([e7a3d32](https://github.com/readmeio/oas-to-snippet/commit/e7a3d32))



## 14.0.0 (2021-09-02)

> 🚨 BREAKING CHANGE
>
> This library no longer ships with [@readme/syntax-highlighter](https://npm.im/@readme/syntax-highlighter) and no longer exports a `getLangName` method. If you need that, you can use the `uppercase` export that the syntax highlighter library exports to do the same.

* test: refactoring our test suite to have more real-world use cases ([bafee22](https://github.com/readmeio/oas-to-snippet/commit/bafee22))
* chore(deps): upgrading deps ([ac1135c](https://github.com/readmeio/oas-to-snippet/commit/ac1135c))
* refactor: removing the dependency on @readme/syntax-highlighter (#19) ([72ed0c6](https://github.com/readmeio/oas-to-snippet/commit/72ed0c6)), closes [#19](https://github.com/readmeio/oas-to-snippet/issues/19)



## <small>13.6.2 (2021-09-01)</small>

* chore(deps-dev): bump jest from 27.0.6 to 27.1.0 (#18) ([9c660e7](https://github.com/readmeio/oas-to-snippet/commit/9c660e7)), closes [#18](https://github.com/readmeio/oas-to-snippet/issues/18)
* chore(deps-dev): removing conventional-changelog-cli in favor of npx ([3aa80dc](https://github.com/readmeio/oas-to-snippet/commit/3aa80dc))
* chore(deps): bump @readme/oas-extensions from 13.6.0 to 13.6.1 (#15) ([c126a31](https://github.com/readmeio/oas-to-snippet/commit/c126a31)), closes [#15](https://github.com/readmeio/oas-to-snippet/issues/15)
* chore(deps): bump @readme/oas-to-har from 13.6.0 to 13.6.1 (#16) ([3838d98](https://github.com/readmeio/oas-to-snippet/commit/3838d98)), closes [#16](https://github.com/readmeio/oas-to-snippet/issues/16)
* chore(deps): bump @readme/syntax-highlighter from 10.11.0 to 10.11.1 (#17) ([c8e2967](https://github.com/readmeio/oas-to-snippet/commit/c8e2967)), closes [#17](https://github.com/readmeio/oas-to-snippet/issues/17)
* chore(deps): bump oas from 14.3.1 to 14.4.0 (#14) ([850e6e6](https://github.com/readmeio/oas-to-snippet/commit/850e6e6)), closes [#14](https://github.com/readmeio/oas-to-snippet/issues/14)



## <small>13.6.1 (2021-08-26)</small>

* chore: adding some more exclusions to the npm pkg ([7b8db8d](https://github.com/readmeio/oas-to-snippet/commit/7b8db8d))
* chore: running npm audit ([17f8887](https://github.com/readmeio/oas-to-snippet/commit/17f8887))
* chore(deps-dev): bump datauri from 3.0.0 to 4.1.0 (#13) ([8ed437f](https://github.com/readmeio/oas-to-snippet/commit/8ed437f)), closes [#13](https://github.com/readmeio/oas-to-snippet/issues/13)
* chore(deps-dev): bump husky from 7.0.1 to 7.0.2 (#10) ([9d30a5f](https://github.com/readmeio/oas-to-snippet/commit/9d30a5f)), closes [#10](https://github.com/readmeio/oas-to-snippet/issues/10)
* chore(deps): bump @readme/syntax-highlighter from 10.10.1 to 10.11.0 (#12) ([d952853](https://github.com/readmeio/oas-to-snippet/commit/d952853)), closes [#12](https://github.com/readmeio/oas-to-snippet/issues/12)
* chore(deps): bump actions/setup-node from 2.2.0 to 2.3.0 (#8) ([f545540](https://github.com/readmeio/oas-to-snippet/commit/f545540)), closes [#8](https://github.com/readmeio/oas-to-snippet/issues/8)
* chore(deps): bump actions/setup-node from 2.3.0 to 2.4.0 (#9) ([8ad8593](https://github.com/readmeio/oas-to-snippet/commit/8ad8593)), closes [#9](https://github.com/readmeio/oas-to-snippet/issues/9)
* chore(deps): bump oas from 14.0.0 to 14.3.1 (#11) ([6cb8123](https://github.com/readmeio/oas-to-snippet/commit/6cb8123)), closes [#11](https://github.com/readmeio/oas-to-snippet/issues/11)
* ci: updating the dependabot label ([f5cd96f](https://github.com/readmeio/oas-to-snippet/commit/f5cd96f))



## 13.6.0 (2021-07-31)

* chore: upgrading @readme/syntax-highlighter ([a554830](https://github.com/readmeio/oas-to-snippet/commit/a554830))
* chore(deps-dev): bumping dev deps ([a35e7d4](https://github.com/readmeio/oas-to-snippet/commit/a35e7d4))
* chore(deps): bumping our oas-related deps ([8723073](https://github.com/readmeio/oas-to-snippet/commit/8723073))



## <small>13.5.2 (2021-07-06)</small>

* chore: upgrading oas-to-har and oas-extensions ([1d72d87](https://github.com/readmeio/oas-to-snippet/commit/1d72d87))
* docs: fixing a broken link in the readme ([ed3817b](https://github.com/readmeio/oas-to-snippet/commit/ed3817b))



## <small>13.5.1 (2021-07-06)</small>

* chore: moving husky install into a prepare script ([d867b9b](https://github.com/readmeio/oas-to-snippet/commit/d867b9b))



## 13.5.0 (2021-07-06)

> 📓 This codebase has been migrated over to its own repository from [@readme/api-explorer](https://github.com/readmeio/api-explorer).
