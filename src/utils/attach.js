function attachView(view) {
	if (!view.isRendered()) {
		view.render();
	}
	view.triggerMethod('before:attach', view);
	document.body.appendChild(view.el);
	view._isAttached = true;
	view.triggerMethod('attach', view);
}

export {attachView};