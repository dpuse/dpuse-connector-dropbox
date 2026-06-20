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
	return new (await (import(`https://engine-eu.dpuse.app/tools/${t}_v${r.version}/${n}.es.js`))).Tool();
}
var n = {
	id: "dpuse-connector-dropbox",
	label: { en: "Dropbox" },
	description: { en: "Provides access to a user's Dropbox account(s) for downloading and uploading files. Dropbox is a cloud-based file storage solution that provides for the storage and sharing of files, as well as synchronising them across multiple devices. Requires OAuth 2.0 authentication for each account connected; access is scoped to that account's files and folders only." },
	category: null,
	categoryId: "fileStore",
	firstCreatedAt: null,
	implementations: { default: {
		authMethodId: "oAuth2",
		maxConnectionCount: -1
	} },
	icon: "<svg viewBox=\"0 0 235.45 200\"><path fill=\"#0061ff\" d=\"M58.86 75l58.87-37.5L58.86 0 0 37.5z\" /><path fill=\"#0061ff\" d=\"M176.59 75l58.86-37.5L176.59 0l-58.86 37.5z\" /><path fill=\"#0061ff\" d=\"M117.73 112.5L58.86 75 0 112.5 58.86 150z\" /><path fill=\"#0061ff\" d=\"M176.59 150l58.86-37.5L176.59 75l-58.86 37.5z\" /><path fill=\"#0061ff\" d=\"M176.59 162.5L117.73 125l-58.87 37.5 58.87 37.5z\" /></svg>",
	iconDark: null,
	iconNeutral: "<svg viewBox=\"0 0 235.45 200\"><path fill=\"currentColor\" d=\"M58.86 75l58.87-37.5L58.86 0 0 37.5z\" /><path fill=\"currentColor\" d=\"M176.59 75l58.86-37.5L176.59 0l-58.86 37.5z\" /><path fill=\"currentColor\" d=\"M117.73 112.5L58.86 75 0 112.5 58.86 150z\" /><path fill=\"currentColor\" d=\"M176.59 150l58.86-37.5L176.59 75l-58.86 37.5z\" /><path fill=\"currentColor\" d=\"M176.59 162.5L117.73 125l-58.87 37.5 58.87 37.5z\" /></svg>",
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
	version: "0.2.496"
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