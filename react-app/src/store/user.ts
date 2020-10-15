import { observable, action, computed } from "mobx";
import getSingletonStore from "./getSingletonStore";


export class BodyFixedStore {
	@observable private top: number = 0;
	@observable private isFixed: boolean = false;

	constructor() {
		window.addEventListener("popstate", () => {
			document.body.removeAttribute("class");
			document.body.style.top = "0";
			this.top = 0;
			this.isFixed = false;
		});
	}

	@computed
	get scrollTop() {
		return this.top;
	}

	@action.bound
	stopScroll = (fixed = true) => {
		if (this.isFixed) {
			return;
		}
		this.isFixed = true;
		this.top = window.scrollY;
		if (fixed) {
			document.body.style.top = `-${this.top}px`;
			document.body.setAttribute("class", "overflowHide");
		}
	};

	@action.bound
	revertScroll = () => {
		document.body.removeAttribute("class");
		document.body.style.top = "0";
		window.scrollTo(0, this.top);
		this.top = 0;
		this.isFixed = false;
	};
}

export const getStore = getSingletonStore(BodyFixedStore);
