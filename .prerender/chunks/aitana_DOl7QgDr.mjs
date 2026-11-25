//#region src/assets/muestra/noa.jpg
var noa_default = new Proxy({
	"src": "/C:/Program%20Files/Git/nextyou-lima/_astro/noa.-T33CnGN.jpg",
	"width": 1e3,
	"height": 667,
	"format": "jpg"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "D:/Clientes she is/Next you/nextyou-lima/src/assets/muestra/noa.jpg";
	if (target[name] !== void 0 && globalThis.astroAsset) {
		globalThis.astroAsset.referencedImages?.add("D:/Clientes she is/Next you/nextyou-lima/src/assets/muestra/noa.jpg");
		globalThis.astroAsset.recordReferencedImage?.("D:/Clientes she is/Next you/nextyou-lima/src/assets/muestra/noa.jpg");
	}
	return target[name];
} });
//#endregion
//#region src/assets/muestra/aitana.jpg
var aitana_default = new Proxy({
	"src": "/C:/Program%20Files/Git/nextyou-lima/_astro/aitana.CPKnEtwo.jpg",
	"width": 1e3,
	"height": 667,
	"format": "jpg"
}, { get(target, name, receiver) {
	if (name === "clone") return structuredClone(target);
	if (name === "fsPath") return "D:/Clientes she is/Next you/nextyou-lima/src/assets/muestra/aitana.jpg";
	if (target[name] !== void 0 && globalThis.astroAsset) {
		globalThis.astroAsset.referencedImages?.add("D:/Clientes she is/Next you/nextyou-lima/src/assets/muestra/aitana.jpg");
		globalThis.astroAsset.recordReferencedImage?.("D:/Clientes she is/Next you/nextyou-lima/src/assets/muestra/aitana.jpg");
	}
	return target[name];
} });
//#endregion
export { noa_default as n, aitana_default as t };
