Hi everyone,

Has anyone tried this kata? http://www.codewars.com/kata/52d3b68215be7c2d5300022f

It's called **Simple Events** where you're supposed to create a simple event object that has **subscribe**, **unsubscribe** and **emit** methods
* subscribe stores a function (or handler),
* unsubscribe removes a handler from the object,
* and emit calles all the subscribed handlers with its arguments

I can't for the life of me seem to pass the tests!

This is what I've got so far:

````javascript
function Event() {
	this.stored = {};
}

Event.prototype = {

	subscribe: function(fn) {
		this.stored[fn] = fn;
	},

	unsubscribe: function(fn) {
		if (this.stored.hasOwnProperty(fn)) {
			delete this.stored[fn];
		}
	},

	emit: function() {
		var args = Array.prototype.slice.call(arguments);
		for (var handler in this.stored) {
			if (this.stored.hasOwnProperty(handler)) {
				var fn = this.stored[handler];
				fn.apply(this, args);
			}
		}
	}
}
````

The failed tests look like this:

````an event object should emit values to subscribed handlers:````

`first handler calls - Expected: 1, instead got: undefined`
`first handler arguments - Expected: [1,2,3,"first",null,false], instead got: undefined`

`an event object should not emit values to unsubscribed handlers:`

`previously subscribed handler calls - Expected: 2, instead got: undefined`
`newly subscribed handler calls - Expected: 1, instead got: undefined`


the function that gets passed to the Event object in the tests looks like this:

````javascript
function _stub() {
	_stub.args = Array.prototype.slice.call(arguments);
	_stub.calls = (_stub.calls || 0) + 1;
}
````

If I log `_stub.args` and `_stub.calls` after creating a new event and subscribing `_stub` the arguments and calls seem to come through.

I'm probably doing something really stupid but I've spent so long with the problem I'm a kind of blind to it :(

Would love to know what I'm doing wrong and why it's not working! :)
