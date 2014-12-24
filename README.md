nor-async-profile
=================

`Q.fcall()` style interface for async-profile:

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
