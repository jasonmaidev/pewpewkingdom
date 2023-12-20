/**
 * Uses media query to determine if device has fine pointer capabilities
 * e.g. mouse.
 */
export function hasFinePointer() {
	return window.matchMedia('(pointer: fine)').matches;
}

export default {
	hasFinePointer
};
