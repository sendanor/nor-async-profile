nor-async-profile
=================

This is a simple wrapper which implements `Q.fcall()` style interface to [async-profile](https://github.com/ConradIrwin/async-profile):

```
var async_profile = require('nor-async-profile');

function foo() {
	return async_profiler(function() {
		// ... do something
	});
}

// ...

foo();

```

...etc.

Commercial Support
------------------

You can buy commercial support from [Sendanor](http://sendanor.com/software).
