//#region src/assets/muestra/laia.jpg
var laia_default = new Proxy({
	"src": "/C:/Program%20Files/Git/nextyou-lima/_astro/laia.DihfX7J-.jpg",
	"width": 1280,
	"height": 853,
	"format": "jpg"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "D:/Clientes she is/Next you/nextyou-lima/src/assets/muestra/laia.jpg";
	if (target[name] !== void 0 && globalThis.astroAsset) {
		globalThis.astroAsset.referencedImages?.add("D:/Clientes she is/Next you/nextyou-lima/src/assets/muestra/laia.jpg");
		globalThis.astroAsset.recordReferencedImage?.("D:/Clientes she is/Next you/nextyou-lima/src/assets/muestra/laia.jpg");
	}
	return target[name];
} });
//#endregion
export { laia_default as t };
