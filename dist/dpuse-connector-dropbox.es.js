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
//#region node_modules/@dpuse/dpuse-shared/dist/dpuse-shared-componentModuleTool.es.js
async function t(e, t) {
	let n = `dpuse-tool-${t}`, r = e.find((e) => e.id === n);
	if (!r) throw Error(`Connector could not load unknown tool '${t}'.`);
	return new (await (import(
		/* @vite-ignore */
		`https://engine-eu.dpuse.app/tools/${t}_v${r.version}/${n}.es.js`
))).Tool();
}
var n = {
	id: "dpuse-connector-dropbox",
	label: { en: "Dropbox" },
	description: { en: ["Provides access to Dropbox account(s) for file upload and download. Dropbox is a cloud-based file storage solution designed to store, share, and synchronise files across multiple devices."] },
	actionNames: [
		"abortOperation",
		"auditObjectContent",
		"findObject",
		"getReadableStream",
		"listNodes",
		"previewObject",
		"retrieveRecords"
	],
	category: null,
	categoryId: "fileStore",
	firstCreatedAt: null,
	implementations: { default: {
		authMethodId: "oAuth2",
		maxConnectionCount: -1
	} },
	icon: "<svg viewBox=\"0 0 43 40\"><path d=\"m12.5 0l-12.5 8.1 8.7 7 12.5-7.8-8.7-7.3zm-12.5 21.9l12.5 8.2 8.7-7.3-12.5-7.7-8.7 6.8zm21.2 0.9l8.8 7.3 12.4-8.1-8.6-6.9-12.6 7.7zm21.2-14.7l-12.4-8.1-8.8 7.3 12.6 7.8 8.6-7zm-21.1 16.3l-8.8 7.3-3.7-2.5v2.8l12.5 7.5 12.5-7.5v-2.8l-3.8 2.5-8.7-7.3z\" fill=\"#007EE5\"/></svg>",
	iconDark: null,
	iconNeutral: "<svg viewBox=\"0 0 43 40\"><path d=\"m12.5 0l-12.5 8.1 8.7 7 12.5-7.8-8.7-7.3zm-12.5 21.9l12.5 8.2 8.7-7.3-12.5-7.7-8.7 6.8zm21.2 0.9l8.8 7.3 12.4-8.1-8.6-6.9-12.6 7.7zm21.2-14.7l-12.4-8.1-8.8 7.3 12.6 7.8 8.6-7zm-21.1 16.3l-8.8 7.3-3.7-2.5v2.8l12.5 7.5 12.5-7.5v-2.8l-3.8 2.5-8.7-7.3z\" fill=\"#007EE5\"/></svg>",
	lastUpdatedAt: null,
	status: null,
	statusId: "beta",
	typeId: "connector",
	vendorAccountURL: "https://www.dropbox.com/login",
	vendorDocumentationURL: "https://help.dropbox.com/",
	vendorHomeURL: "https://www.dropbox.com/",
	version: "0.2.516",
	operations: [
		"abortOperation",
		"auditObjectContent",
		"findObject",
		"getReadableStream",
		"listNodes",
		"previewObject",
		"retrieveRecords"
	],
	usageId: "source"
}, r = class {
	abortController;
	config;
	connectorUtilities;
	toolConfigs;
	constructor(e, t) {
		this.abortController = void 0, this.config = n, this.connectorUtilities = e, this.toolConfigs = t;
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