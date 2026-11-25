import "./server_BtBXtWq_.mjs";
import { X as AstroError, y as InvalidComponentArgs } from "./errors-data_CBiI2_R5.mjs";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region ../nextyou-landing/node_modules/astro/dist/runtime/server/astro-component.js
function validateArgs(args) {
	if (args.length !== 3) return false;
	if (!args[0] || typeof args[0] !== "object") return false;
	return true;
}
function baseCreateComponent(cb, moduleId, propagation) {
	const name = moduleId?.split("/").pop()?.replace(".astro", "") ?? "";
	const fn = (...args) => {
		if (!validateArgs(args)) throw new AstroError({
			...InvalidComponentArgs,
			message: InvalidComponentArgs.message(name)
		});
		return cb(...args);
	};
	Object.defineProperty(fn, "name", {
		value: name,
		writable: false
	});
	fn.isAstroComponentFactory = true;
	fn.moduleId = moduleId;
	fn.propagation = propagation;
	return fn;
}
function createComponentWithOptions(opts) {
	return baseCreateComponent(opts.factory, opts.moduleId, opts.propagation);
}
function createComponent(arg1, moduleId, propagation) {
	if (typeof arg1 === "function") return baseCreateComponent(arg1, moduleId, propagation);
	else return createComponentWithOptions(arg1);
}
//#endregion
//#region src/config.ts
var SITIO = {
	nombre: "NextYou",
	url: "https://nextyou.example",
	titulo: "Test gratis: descubre qué estudiar y a qué dedicarte · NextYou",
	descripcion: "¿No sabes qué estudiar? Test gratis de 8 minutos y sin crear cuenta: tres caminos para explorar y vídeos de gente que ya trabaja en ellos."
};
var BASE = (Object.assign({
	"ASSETS_PREFIX": void 0,
	"BASE_URL": "/C:/Program Files/Git/nextyou-lima",
	"DEV": false,
	"MODE": "production",
	"PROD": true,
	"SITE": "https://sheisdigitalab.github.io",
	"SSR": true
}, {
	OS: "Windows_NT",
	_: "C:/Program Files/nodejs/node.exe"
})?.BASE_URL ?? "/").replace(/\/?$/, "/");
var CTA_PRINCIPAL = { href: `${BASE}empezar/` };
var ENLACES = {
	historias: "#",
	profesiones: "#",
	familias: `${BASE}familias/`,
	acompanamiento: `${BASE}acompanamiento/`,
	universidad: "#",
	sara: "#",
	privacidad: `${BASE}legal/#privacidad`,
	avisoLegal: `${BASE}legal/#aviso-legal`,
	cookies: `${BASE}legal/#cookies`,
	menores: `${BASE}legal/#menores`
};
//#endregion
export { createComponent as a, SITIO as i, CTA_PRINCIPAL as n, __exportAll as o, ENLACES as r, BASE as t };
