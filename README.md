# mockstorage
A node module (with full Typescript support) to emulate localStorage 
and/or sessionStorage outside the browser.  
(A major use case being unit tests)

[![Build Status](https://travis-ci.org/championswimmer/mockstorage.svg?branch=master)](https://travis-ci.org/championswimmer/mockstorage)
[![codecov](https://codecov.io/gh/championswimmer/mockstorage/branch/master/graph/badge.svg)](https://codecov.io/gh/championswimmer/mockstorage)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/831494601a6747ca85d7ea74514d642c)](https://www.codacy.com/app/championswimmer/mockstorage?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=championswimmer/mockstorage&amp;utm_campaign=Badge_Grade)
[![codebeat badge](https://codebeat.co/badges/1af9063e-301b-47e1-a94a-03d21e73fa83)](https://codebeat.co/projects/github-com-championswimmer-mockstorage-master)
[![Code Climate](https://codeclimate.com/github/championswimmer/mockstorage/badges/gpa.svg)](https://codeclimate.com/github/championswimmer/mockstorage)


## Installation
```bash
npm install mockstorage
```
or
```bash
yarn add mockstorage
```

## Usage
In Javascript
```javascript
var MockStorage = require('mockstorage').MockStorage

var myStore = new MockStorage()
myStore.setItem('myKey', 'some value')
console.log(myStore.getItem('myKey')) // > 'some value' 
```

In Typescript
```typescript
import { MockStorage } from 'mockstorage'

const myStore = new MockStorage()
myStore.setItem('myKey', 'some value')
console.log(myStore.getItem('myKey')) // > 'some value' 


```

## LICENSE
This project is licensed under the MIT license (a copy of which is part of the project)

Copyright (c) 2017, Arnav Gupta