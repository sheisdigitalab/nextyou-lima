//#region src/assets/muestra/laia-v3-av.jpg
var laia_v3_av_default = new Proxy({
	"src": "/C:/Program%20Files/Git/nextyou-lima/_astro/laia-v3-av.BBfO8COR.jpg",
	"width": 400,
	"height": 400,
	"format": "jpg"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "D:/Clientes she is/Next you/nextyou-lima/src/assets/muestra/laia-v3-av.jpg";
	if (target[name] !== void 0 && globalThis.astroAsset) {
		globalThis.astroAsset.referencedImages?.add("D:/Clientes she is/Next you/nextyou-lima/src/assets/muestra/laia-v3-av.jpg");
		globalThis.astroAsset.recordReferencedImage?.("D:/Clientes she is/Next you/nextyou-lima/src/assets/muestra/laia-v3-av.jpg");
	}
	return target[name];
} });
//#endregion
export { laia_v3_av_default as t };
