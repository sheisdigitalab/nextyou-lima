//#region src/assets/muestra/dentro-4.jpg
var dentro_4_default = new Proxy({
	"src": "/C:/Program%20Files/Git/nextyou-lima/_astro/dentro-4.Cjd88v3q.jpg",
	"width": 928,
	"height": 1152,
	"format": "jpg"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "D:/Clientes she is/Next you/nextyou-lima/src/assets/muestra/dentro-4.jpg";
	if (target[name] !== void 0 && globalThis.astroAsset) {
		globalThis.astroAsset.referencedImages?.add("D:/Clientes she is/Next you/nextyou-lima/src/assets/muestra/dentro-4.jpg");
		globalThis.astroAsset.recordReferencedImage?.("D:/Clientes she is/Next you/nextyou-lima/src/assets/muestra/dentro-4.jpg");
	}
	return target[name];
} });
//#endregion
export { dentro_4_default as t };
