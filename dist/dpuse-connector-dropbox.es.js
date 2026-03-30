//#region node_modules/@dpuse/dpuse-shared/dist/dpuse-shared-errors.es.js
function e(e) {
	if (e instanceof Error) return e;
	if (typeof e == "string") return Error(e);
	if (typeof e == "number" || typeof e == "boolean" || typeof e == "bigint") return Error(String(e));
	if (typeof e == "symbol") return Error(e.description ?? "Unknown error");
	if (typeof e == "object") try {
		return Error(JSON.stringify(e));
	} catch {
		return /* @__PURE__ */ Error("Unknown error");
	}
	return /* @__PURE__ */ Error("Unknown error");
}
//#endregion
//#region node_modules/@dpuse/dpuse-shared/dist/dpuse-shared-tools.es.js
async function t(e, t) {
	let n = `dpuse-tool-${t}`, r = e.find((e) => e.id === n);
	if (!r) throw Error(`Connector could not load unknown tool '${t}'.`);
	return new (await (import(`https://engine-eu.dpuse.app/tools/${t}_v${r.version}/${n}.es.js`))).Tool();
}
var n = {
	id: "dpuse-connector-dropbox",
	label: { en: "Dropbox" },
	description: { en: "Dropbox is a cloud-based file storage solution. It provides for the storage and sharing of files, as well as synchronising them across multiple devices." },
	category: null,
	categoryId: "fileStore",
	implementations: { default: {
		authMethodId: "oAuth2",
		maxConnectionCount: -1
	} },
	icon: "<svg fill=\"none\" viewBox=\"0 0 128 128\"><path fill=\"#0061FE\" d=\"M0 0h128v128H0z\"/><path fill=\"#F7F5F2\" d=\"M43.7 32 23.404 44.75 43.701 57.5 64 44.75 84.3 57.5l20.298-12.75L84.299 32 64.002 44.75 43.7 32Zm0 51L23.404 70.25 43.701 57.5 64 70.25 43.702 83Zm20.302-12.75L84.299 57.5l20.298 12.75L84.299 83 64.002 70.25Zm0 29.75L43.7 87.25 64 74.5l20.3 12.75L64.002 100Z\"/></svg>",
	iconDark: "",
	lastUpdatedAt: null,
	operations: [
		"abortOperation",
		"auditObjectContent",
		"findObject",
		"getReadableStream",
		"listNodes",
		"previewObject",
		"retrieveRecords"
	],
	status: null,
	statusId: "beta",
	typeId: "connector",
	usageId: "source",
	vendorAccountURL: null,
	vendorDocumentationURL: null,
	vendorHomeURL: null,
	version: "0.2.479"
}, r = class {
	abortController;
	config;
	engineUtilities;
	toolConfigs;
	constructor(e, t) {
		this.abortController = void 0, this.config = n, this.engineUtilities = e, this.toolConfigs = t;
	}
	abortOperation() {
		this.abortController &&= (this.abortController.abort(), void 0);
	}
	async auditObjectContent(n, r) {
		this.abortController = new AbortController();
		try {
			return await t(this.toolConfigs, "csv-parse"), n.valueDelimiterId, {
				processedRowCount: 0,
				durationMs: 0
			};
		} catch (t) {
			throw e(t);
		} finally {
			this.abortController = void 0;
		}
	}
	findObject(e) {
		return Promise.reject(/* @__PURE__ */ Error("Not found."));
	}
	async getReadableStream(t) {
		let { signal: n } = this.abortController = new AbortController();
		try {
			return await Promise.resolve({});
		} catch (t) {
			throw e(t);
		} finally {
			this.abortController = void 0;
		}
	}
	listNodes(e) {
		return Promise.resolve({});
	}
	async previewObject(n) {
		let { signal: r } = this.abortController = new AbortController();
		try {
			return performance.now(), await t(this.toolConfigs, "file-operators"), await t(this.toolConfigs, "csv-parse"), {};
		} catch (t) {
			throw e(t);
		} finally {
			this.abortController = void 0;
		}
	}
	async retrieveRecords(n, r, i) {
		this.abortController = new AbortController();
		try {
			await t(this.toolConfigs, "csv-parse"), n.valueDelimiterId, i({});
		} catch (t) {
			throw e(t);
		} finally {
			this.abortController = void 0;
		}
	}
};
//#endregion
export { r as Connector };

//# sourceMappingURL=dpuse-connector-dropbox.es.js.map