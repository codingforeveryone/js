// current progress
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


// function that gets subscribed and unsubscribed
function _stub() {
	_stub.args = Array.prototype.slice.call(arguments);
	_stub.calls = (_stub.calls || 0) + 1;
}
