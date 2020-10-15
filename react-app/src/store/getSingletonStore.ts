export default <T>(Store: { new (...args: any[]): T }): (() => T) => {
	let store: T = null;
	return function() {
		if (store === null) {
			store = new Store();
		}
		return store;
	};
};